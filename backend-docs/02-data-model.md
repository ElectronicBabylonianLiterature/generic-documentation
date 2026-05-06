# Data Model

## Purpose

Describe how the eBL API stores its data: which MongoDB collections each
domain owns, which GridFS buckets back binary media, where indexes live,
how cross-domain references work, and how the `changelog` collection
captures mutations. The authoritative source is the infrastructure code in
[ebl-api](https://github.com/ElectronicBabylonianLiterature/ebl-api/) under
`ebl/<domain>/infrastructure/`.

## Storage Topology

- **MongoDB** holds every domain document.
- **GridFS** buckets, hosted on the same MongoDB deployment, hold binary
  media (photos, folios, public files).
- Each domain owns its repository module under
  `ebl/<domain>/infrastructure/`. Indexes are created by the repository at
  startup; any new query dimension should add a matching index there.
- The `changelog` collection is global and cross-cutting (see below).

## Collections by Domain

The table maps domains to their primary persistence module(s). Field-level
shape is defined by the matching schemas in `ebl/<domain>/application/` and
encoded in the repository helpers.

| Domain | Collection(s) | Repository module |
|---|---|---|
| Corpus | `texts`, `chapters` | `ebl/corpus/infrastructure/mongo_text_repository.py` |
| Fragmentarium | `fragments` | `ebl/fragmentarium/infrastructure/mongo_fragment_repository.py` |
| Fragmentarium — annotations | `annotations` | `ebl/fragmentarium/infrastructure/` (annotations repository) |
| Fragmentarium — findspots | `findspots` | `ebl/fragmentarium/infrastructure/` (findspots repository) |
| Fragmentarium — sign images | cropped sign image collection(s) | `ebl/fragmentarium/infrastructure/` (cropped sign images repository) |
| Dictionary | `words` | `ebl/dictionary/infrastructure/` |
| Signs | `signs` | `ebl/signs/infrastructure/` |
| Lemmatization | shared with dictionary / lemma data | `ebl/lemmatization/infrastructure/` |
| Bibliography | `bibliography` | `ebl/bibliography/infrastructure/` |
| AfO Register | `afo_register` | `ebl/afo_register/infrastructure/` |
| Dossiers | `dossiers` | `ebl/dossiers/infrastructure/` |
| Provenance | `provenances` | `ebl/provenance/infrastructure/` |
| Cache | cache documents | `ebl/cache/infrastructure/mongo_cache_repository.py` |
| Users / scopes | (Auth0-derived; not persisted as a primary store) | `ebl/users/infrastructure/auth0.py` |
| Cross-cutting | `changelog` | `ebl/changelog.py` |

Collection names are owned by the corresponding repository module; treat
that module as the single source of truth if a name needs verification.

## GridFS Buckets

Binary data is stored in named GridFS buckets on the same MongoDB instance:

| Bucket | Contents | Served by |
|---|---|---|
| `photos` | Tablet photographs and thumbnails | `ebl/fragmentarium/web/photo.py` |
| `folios` | Folio scans (per scholar) | `ebl/fragmentarium/web/folios.py`, `ebl/fragmentarium/web/folio_pager.py` |
| public files | Generic image/file delivery | `ebl/files/web/files.py` |

Bucket access is repository-mediated. Endpoints touching media are
`/fragments/{number}/photo`, `/fragments/{number}/thumbnail/{resolution}`,
`/folios/{name}/{number}`, and `/images/{file_name}`.

## Indexing

Each repository creates the indexes it needs on startup. The general rules:

- High-cardinality query dimensions (transliteration n-grams, lemma codes,
  sign codes, museum/provenance, periods, genres, accession identifiers) are
  indexed inside the owning repository.
- Listing endpoints with sort orders (for example `/fragments/latest`)
  rely on indexes defined in `ebl/fragmentarium/infrastructure/...`.
- When adding a new query dimension to `/fragments/query`, `/corpus/query`,
  or any search resource, add the matching index in the repository in the
  same change. Ship the index migration considerations alongside the code.

## Cross-Domain Relationships

References between domains are by identifier, not by foreign-key
enforcement. The most common links:

- **Fragment → Bibliography** — fragment references list bibliography
  entry IDs (see `/fragments/{number}/references`).
- **Fragment → Dictionary** — lemma annotations on transliteration tokens
  reference dictionary word IDs.
- **Fragment → AfO Register** — fragments link to traditional reference
  numbers (`/fragments/query-by-traditional-references`).
- **Chapter / Manuscript → Fragment** — manuscripts in a chapter cite
  fragment numbers; `/fragments/{number}/corpus` exposes the reverse link
  (`ChaptersByFragmentResource`).
- **Chapter → Bibliography** — chapter records cite bibliography entries.
- **Provenance** is a tree (`/provenances/{id_}/children`) used by
  fragments and manuscripts as a controlled vocabulary.

Read endpoints that compose data across domains do so explicitly via
`ParallelLineInjector`, dictionary/bibliography enrichers, and
domain-specific finders rather than via Mongo joins.

## Query and Aggregation Layer

Cross-cutting query helpers live in `ebl/common/query/`:

- `parameter_parser.py` — parses query parameters from HTTP into typed
  filters.
- `query_schemas.py` — Marshmallow schemas for query inputs/outputs.
- `query_result.py` — common result envelope used by listing endpoints.

Sign-based search builds on `ebl/transliteration/`:

- `transliteration_query_factory.py` produces aggregation stages reused by
  Corpus and Fragmentarium.
- `transliteration_query.py` defines the AST-like query model.

## Changelog (Mutation Audit)

`ebl/changelog.py` writes an entry to the `changelog` collection on every
mutating domain operation. The entry includes the user identity (from the
verified Auth0 token), the affected entity, and a diff of the change.

Operational implications:

- The `changelog` collection grows linearly with write traffic. Operational
  backups must include it.
- The local DB-pull helper `pull-db.sh` intentionally **excludes**
  `changelog` (to keep local dumps small and to avoid leaking edit history
  to development machines). See [Operations](./05-operations.md#backup-and-restore).
- Restoring `changelog` to staging or local environments is a deliberate
  decision and should follow the same review path as a production restore.

## Caching

Read paths that are expensive enough to cache use `ebl/cache/`:

- `cache.py` — cache facade.
- `custom_cache.py` — TTL/keying helpers for domain-specific caches.
- `mongo_cache_repository.py` — Mongo-backed cache store.

The cache is invalidated by write paths before persistence. The most
notable example is the chapter-level cache invalidated by Corpus mutations.

## Data Ingestion

Two primary ingestion paths exist outside the request/response flow:

1. **ATF importer** — converts ATF (transliteration source) files into
   Corpus and Fragmentarium content. Code lives under `ebl/io/` and the
   tests under `ebl/tests/atf_importer/`. A dedicated runner is shipped in
   the sibling workspace folder `atf-importer-runner/`.
2. **Database update workflows** — bulk maintenance and migration scripts.
   The `docker-compose-updater.yml` target packages the updater workload
   for scheduled or operator-driven runs.

Both paths interact with the same repositories used by the API and
therefore share its scope/changelog/cache invariants.

## Data Classes and Retention

Operational handling of these stores by sensitivity:

| Data class | Examples | Retention |
|---|---|---|
| Public reference | Signs, public bibliography, public lexical metadata | Long-term while academically relevant |
| Restricted scholarly | Fragment-group-scoped content, folio-scoped content | Long-term, gated by scope policy |
| Operational metadata | `changelog`, audit-like update records | ≥ 12 months; extend for audit needs |
| Cache | `ebl/cache/` documents | Short-lived (TTL-driven) |
| Auth metadata | Auth0 token claims, profile fields | Avoid persistent storage; least-retention |

Access to restricted data is enforced by the scope guards documented in
[API Contract — Authorization Coverage](./03-api-contract.md#authorization-coverage).

## Change Rules

When persistence shape changes:

- Update the matching repository module (`ebl/<domain>/infrastructure/`)
  and its tests in the same PR.
- Update or add the necessary index.
- If field names visible at the API change (or schema field-mapping is
  altered), update the API surface per
  [API Contract](./03-api-contract.md) and the lifecycle policy in
  [Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md).
- If new collections or buckets are introduced, document them here and
  ensure they are covered by the backup scope in
  [Operations](./05-operations.md#backup-and-restore).

## Related

- [Architecture](./01-architecture.md)
- [API Contract](./03-api-contract.md)
- [Operations](./05-operations.md)
- [Contributing](./06-contributing.md)

## Last Reviewed

2026-05-06
