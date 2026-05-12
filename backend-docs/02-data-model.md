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

A reference diagram of the live collections is checked in alongside this
doc: the Graphviz source at [db_design.gv](./db_design.gv) and the
rendered version at [db_design.pdf](./db_design.pdf). The entity
relationships around archaeology / findspots are tracked in
[Eraser](https://app.eraser.io/workspace/4xF5j4k6DI6Iwp1QR32g?elements=IIIlNtmdwav4FFHyH61N2A).

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

| Bucket | Contents | Filename convention | Served by |
|---|---|---|---|
| `photos` | Tablet photographs and thumbnails | `<fragment number>.jpg` | `ebl/fragmentarium/web/photo.py` |
| `folios` | Folio scans (per scholar) | `<name>_<number>.jpg` | `ebl/fragmentarium/web/folios.py`, `ebl/fragmentarium/web/folio_pager.py` |
| public files | Generic image/file delivery | (free-form) | `ebl/files/web/files.py` |

Bucket access is repository-mediated. Endpoints touching media are
`/fragments/{number}/photo`, `/fragments/{number}/thumbnail/{resolution}`,
`/folios/{name}/{number}`, and `/images/{file_name}`.

The canonical ingestion path for photos is the
`upload-photos-with-thumbnails.py` script in
[ebl-api-data-preparation](https://github.com/ElectronicBabylonianLiterature/ebl-api-data-preparation/blob/main/scripts/upload-photos-with-thumbnails.py),
which compresses images, uploads them to the `photos` bucket, and
generates thumbnails. Manual uploads via `mongofiles` or a GridFS GUI
remain possible but bypass the thumbnail step.

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

## Domain Document Shapes

The schemas in `ebl/<domain>/application/` are the authoritative
definition of every persisted shape. The shapes below are reference
snapshots for the domains most often touched from outside the API
(ingestion scripts, data-prep notebooks, ad-hoc Mongo shell sessions).
Field names follow the API contract; the persisted documents use
`NumberInt(...)` for integer fields (`sortKey`, `numberOfLines`) and
`NumberLong(...)` for `_sortKey` — the JSON below uses plain numbers
for portability.

### Fragment

```json
{
  "_id": "",
  "publication": "",
  "description": "",
  "length": {},
  "width": {},
  "thickness": {},
  "collection": "",
  "script": {
    "period": "None",
    "periodModifier": "None",
    "uncertain": false,
    "sortKey": 0
  },
  "folios": [],
  "record": [],
  "museum": "",
  "signs": "",
  "text": {
    "lines": [],
    "numberOfLines": 0
  },
  "references": [],
  "museumNumber": {
    "prefix": "",
    "number": "",
    "suffix": ""
  },
  "accession": "",
  "legacyJoins": [],
  "editedInOraccProject": "",
  "legacyScript": "",
  "externalNumbers": {
    "cdliNumber": "",
    "bmIdNumber": "",
    "archibabNumber": "",
    "bdtnsNumber": "",
    "urOnlineNumber": ""
  },
  "_sortKey": 1,
  "dateLegacy": ""
}
```

`references[]` entries:

```json
{
  "id": "BorgerKat",
  "type": "DISCUSSION",
  "pages": "",
  "notes": "ABL 815:",
  "linesCited": []
}
```

`length`, `width`, `thickness` entries:

```json
{ "value": 7.3, "note": "" }
```

### Archaeology (on a fragment)

Archaeological information lives on the `archaeology` property of a
fragment. `findspotId` references the `_id` of a document in the
`findspots` collection. The full entity-relationship diagram is
maintained on Eraser —
[View on Eraser](https://app.eraser.io/workspace/4xF5j4k6DI6Iwp1QR32g?elements=IIIlNtmdwav4FFHyH61N2A).

- `excavationNumber` (object)
  - `prefix` (string) — site/campaign abbreviation, e.g. `W` for
    Warka, `3N` for the third Nippur campaign
  - `number` (string) — artifact number
  - `suffix` (string) — additional identifier suffix
- `site` (string) — archaeological site name from the canonical list
  in
  [`ebl/common/domain/provenance.py`](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/ebl/common/domain/provenance.py).
  Long names (`Aššur`, `Ḫuzirina`) follow the
  [Cuneiform Inscriptions Geographical Site Index (CIGS)](https://zenodo.org/records/14568765)
  where available.
- `isRegularExcavation` (boolean | null) — `true` for legal
  archaeological projects (location known from documentation); `false`
  for uncontrolled diggings (location reconstructed from text content
  or dealer information).
- `date` (object)
  - `start` (object) — find date if known, otherwise start of the
    excavation campaign. `year` (number), `month` (number, optional),
    `day` (number, optional)
  - `end` (object, optional) — end of the excavation campaign
  - `notes` (string) — typically the campaign number
- `findspotId` (number) — FK into `findspots`

Example:

```json
{
  "archaeology": {
    "excavationNumber": { "prefix": "SU-1951", "number": "1", "suffix": "" },
    "site": "Ḫuzirina",
    "isRegularExcavation": true,
    "date": {
      "start": { "year": 1951, "month": 5, "day": 15 },
      "end":   { "year": 1951, "month": 6, "day": 15 }
    },
    "findspotId": 43
  }
}
```

### Findspot

- `_id` (number) — arbitrary unique identifier
- `sector` (string) — broad archaeological sector defined by site
  topography
- `area` (string) — specific area designation established by the
  excavators
- `building` (string) — building name as given by the excavator or
  authoritative publication
- `buildingType` (string | null) — one of:
  - `RESIDENTIAL` — usually relatively small buildings with domestic
    installations and inventory, clearly demarcated from neighbouring
    houses; they form quarters together with similar buildings.
  - `TEMPLE` — a building with typical signs of sacred use (thick
    buttressed walls, a cella). Decisive criterion is use, not size.
  - `PALACE` — residential architecture with rooms for royal
    representation; exceeds the size of other contemporary architecture
    at the site.
  - `OTHER_MONUMENTAL` — a building (or part of a building) that
    exceeds the usual dimensions at the site/period but whose purpose
    cannot be determined; lacks domestic inventory, representation
    rooms, or cultic features.
  - `UNKNOWN` — associated architecture was recorded but is too
    poorly preserved or documented to characterise further.
  - `NOT_IN_BUILDING` — no associated architecture recorded.
- `context` (string) — smallest archaeologically definable unit
  (single stratigraphic event)
- `date` (object) — earliest and latest dated artifacts in the same
  level; `start` / `end` use the same year/month/day shape as the
  fragment’s `archaeology.date`; optional `notes`
- `levelLayerPhase` (string) — stratigraphic layer denomination
- `room` (string) — room or locus identifier as given by the excavator
- `primaryContext` (boolean | null) — whether tablets were found in
  their original location
- `site` (string) — same vocabulary as `archaeology.site` above

Example:

```json
{
  "_id": 2947,
  "sector": "Scribal Quarter (Tablet Hill)",
  "area": "TA",
  "building": "",
  "buildingType": null,
  "context": "",
  "date": {
    "start": { "year": -1792 },
    "end":   { "year": -1722 },
    "notes": "According to the list of dated tablets in OIP 78, 74–76"
  },
  "levelLayerPhase": "X/1",
  "room": "Locus 179",
  "primaryContext": null,
  "site": "Nippur"
}
```

### Dossier

A dossier (`dossiers` collection) describes a group of tablets sharing
findspot, date range, and protagonists. Editorial guidance on
writing the free-text description (max 150 words) lives in
[guides/dossiers.md](../guides/dossiers.md). Persisted fields:

- `provenance` (string) — ancient site name (e.g. `Ur`, `Aššur`,
  `Babylon`); use the ancient name, not the modern one.
- `yearRangeFrom` / `yearRangeTo` (number | null) — chronological span
  in BCE expressed as negative integers; both fields should be filled
  where possible. Leave both `null` if no dating is possible.
- `isApproximateDate` (boolean) — `true` when the dating is
  approximate; `false` when secured by explicit year formulas or
  eponyms attested in the texts.
- `script.period` / `script.periodModifier` (string) — primary script
  classification using standard eBL period labels (`Ur III`,
  `Old Babylonian`, `Middle Assyrian`, `Neo-Assyrian`,
  `Neo-Babylonian`, `Persian`, `Hellenistic`); `periodModifier` may
  refine with `Early`, `Late`, or `None`. When texts span two
  periods, use the period of the majority and note the exception in
  the description.
- `references` (array) — each entry: `id` (eBL bibliography
  identifier), `type` (typically `DISCUSSION`; other values for
  editions or catalogues), `pages` (range relevant to the dossier;
  empty if the reference covers the dossier as a whole).

## Validating Documents

Marshmallow schemas under `ebl/<domain>/application/` can be used
outside the request flow to validate ad-hoc data. Example:

```python
from ebl.fragmentarium.application.archaeology_schemas import FindspotSchema
import json

with open("my_findspots.json") as jf:
    new_data = json.load(jf)

FindspotSchema().validate(new_data)              # single entry
FindspotSchema().validate(new_data, many=True)   # list
```

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

Three primary ingestion paths exist outside the request/response flow:

1. **ATF importer** — converts ATF (transliteration source) files into
   Corpus and Fragmentarium content. Code lives under `ebl/io/` and the
   tests under `ebl/tests/atf_importer/`. A dedicated runner is shipped in
   the sibling workspace folder `tools/atf-importer-runner/`.
2. **Fragment importer** —
   [`ebl/io/fragments/importer.py`](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/ebl/io/fragments/importer.py)
   validates and imports fragments, computes sort keys, and updates the
   sort index. Validation and reindexing can be invoked separately.
3. **Database update workflows** — bulk maintenance and migration
   scripts. The `docker-compose-updater.yml` target packages the
   updater workload for scheduled or operator-driven runs.

All three paths interact with the same repositories used by the API and
therefore share its scope/changelog/cache invariants.

### Fragment importer

Input formats: one or more `*.json` files where each file contains a
single dictionary `{...}`, **or** one file containing an array of
dictionaries. The script auto-detects single-fragment vs.
collection-of-fragments when given a single file. Multiple collections
cannot be passed in one invocation.

The script targets the development database by default. Set `-db ebl`
to target production; the script then prompts for confirmation. Only
valid files are imported and a summary of invalid and successfully
imported documents is generated.

Before importing into production, **always back up** the `fragments`
collection — see
[Operations — Backup and Restore](./05-operations.md#backup-and-restore).

```bash
# import one file
task import-fragments -- my_fragment.json

# import multiple files
task import-fragments -- my_fragment1.json my_fragment2.json

# import every file in a folder
task import-fragments -- path/to/my_fragments/*

# import a collection (array of fragments)
task import-fragments -- my_fragment_collection.json

# import into the production db
task import-fragments -- -db ebl my_fragment_collection.json

# fail fast on the first invalid document
task import-fragments -- --strict -db ebl my_fragment_collection.json
```

Validate without importing:

```bash
task validate-fragments -- my_fragment.json
task validate-fragments -- -db ebl my_fragment_collection.json   # validate IDs against prod
task validate-fragments -- --strict my_fragment_collection.json
```

Validation checks for duplicate IDs against the development DB by
default; use `-db ebl` to check against production.

Reindex only (useful after importing fragments without the script):

```bash
task reindex-fragments
task reindex-fragments -- -db ebl
```

The script can also run standalone (without `task`) if `MONGODB_URI` is
set and the API dependencies are installed locally:
`poetry run python -m ebl.io.fragments.importer --help`.

For merging incoming fragments with already-existing entries (the
`upsert` path) consider whether `accession`, `publication`,
`description`, and `museum` should be overwritten:

```js
var jsonData = [
  // <new entries here>
];

jsonData.forEach(function (document) {
  db.fragments.updateOne(
    { _id: document._id },
    {
      $set: {
        accession: document.accession,
        fincke: document.fincke,
        publication: document.publication,
        subcollection: document.subcollection,
        description: document.description,
        length: document.length,
        width: document.width,
        thickness: document.thickness,
        collection: document.collection,
        script: document.script,
        record: document.record,
        text: document.text,
        genreLegacy: document.genreLegacy,
        legacyJoins: document.legacyJoins,
        editedInOraccProject: document.editedInOraccProject,
        legacyScript: document.legacyScript,
        externalNumbers: document.externalNumbers,
        museum: document.museum,
        museumNumber: document.museumNumber,
        genres: document.genres,
        date: document.date,
        archaeology: document.archaeology,
      },
      $addToSet: { folios: { $each: document.folios } },
      $addToSet: { references: { $each: document.references } },
    },
    { upsert: true },
  );
});
```

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

### Reshaping a Field on a Live Collection

When the **shape** of an existing field changes — for example, when
`accession` was converted from a string to a `MuseumNumber`-shaped
object — the migration must keep the API serving traffic and must be
reversible. The general procedure:

1. Implement the new shape in API schemas, frontend interfaces, and
   tests on parallel branches in the two repositories.
2. Manually update a test document (e.g. `Test.Fragment`) with the new
   field shape in the development DB and exercise the affected code
   paths locally.
3. Migrate the new shape **into a temporary field** (a Python script or
   a MongoDB aggregation), not over the live field. This keeps downtime
   negligible even if the migration takes a long time — the accession
   reshape ran for roughly an hour with a Python script.
4. Copy the original field contents into a `*Legacy` field for
   rollback.
5. Take a backup of the target collection per
   [Operations — Backup and Restore](./05-operations.md#backup-and-restore).
6. Merge the API and frontend branches.
7. Redeploy the eBL stack.
8. Rename the temporary field to the production name.

## Related

- [Architecture](./01-architecture.md)
- [API Contract](./03-api-contract.md)
- [Operations](./05-operations.md)
- [Contributing](./06-contributing.md)

## Last Reviewed

2026-05-06
