# Architecture

Created: 2026-05-06

## Purpose

Describe the components of `ebl-api`, how they are wired together at startup,
and how a request travels through the system. Pointers are to concrete
modules in the
[ebl-api repository](https://github.com/ElectronicBabylonianLiterature/ebl-api/).

## Components

- **Falcon application** — the HTTP entrypoint, built in `ebl/app.py`.
- **Composition root** — `ebl/context.py` assembles the `Context` object that
  holds every service and repository the resources need.
- **Domain modules** — `ebl/<domain>/{web,application,domain,infrastructure}`.
  Each domain owns its routes, services, entities, and persistence adapters.
- **Auth backend** — `ebl/users/infrastructure/auth0.py` (`Auth0Backend`),
  merged with `NoneAuthBackend(Guest)` for unauthenticated access.
- **Error handler** — `ebl/error_handler.py` registers Falcon error handlers
  that map domain exceptions to HTTP status codes.
- **Cache layer** — `ebl/cache/` provides shared HTTP-cache support and
  domain-targeted helpers (for example chapter-level cache invalidation).
- **Changelog** — `ebl/changelog.py` records mutating operations on domain
  entities.
- **External integrations** — Auth0 (token verification + `userinfo`
  enrichment), Sentry (error reporting), the EBL AI service (annotation
  workflows), MongoDB + GridFS (persistence and media).

## Layering

Inside each domain, code is organized in four layers:

1. **Web** (`ebl/<domain>/web/`) — Falcon resource classes (`on_get`,
   `on_post`, ...) plus route registration in `bootstrap.py`. Parses route
   params, query strings, and bodies; enforces scope guards.
2. **Application** (`ebl/<domain>/application/`) — services that orchestrate
   use cases, plus Marshmallow schemas that load/dump domain objects across
   the API boundary.
3. **Domain** (`ebl/<domain>/domain/`) — entities, value objects, and
   invariants. No transport or persistence concerns.
4. **Infrastructure** (`ebl/<domain>/infrastructure/`) — MongoDB and GridFS
   adapters; query/aggregation pipelines; index management.

## Composition Root

`ebl/app.py` is the startup composition root. The sequence is:

1. Read environment variables.
2. Construct infrastructure clients (MongoDB connections, GridFS buckets,
   Auth0 backend, AI client, cache repository, ...).
3. Build the `Context` (`ebl/context.py`) holding all services and
   repositories.
4. Create the Falcon `App` and attach middleware:
   - Authentication middleware (Auth0 + guest fallback).
   - Cache middleware.
5. Register routes per domain by calling each domain's `create_*_routes`
   bootstrap.

## Route Bootstrap Map

Each domain registers its own routes:

| Domain | Bootstrap module |
|---|---|
| Signs | `ebl/signs/web/bootstrap.py` |
| Bibliography | `ebl/bibliography/web/bootstrap.py` |
| Corpus | `ebl/corpus/web/bootstrap.py` |
| Dictionary | `ebl/dictionary/web/bootstrap.py` |
| Files | `ebl/files/web/bootstrap.py` |
| Fragmentarium (Library) | `ebl/fragmentarium/web/bootstrap.py` |
| Lemmatization | `ebl/lemmatization/web/bootstrap.py` |
| Markup | `ebl/markup/web/bootstrap.py` |
| AfO Register | `ebl/afo_register/web/bootstrap.py` |
| Dossiers | `ebl/dossiers/web/bootstrap.py` |
| Provenance | `ebl/provenance/web/bootstrap.py` |

## Persistence

- Domain data lives in MongoDB collections owned by the matching domain's
  infrastructure module (for example
  `ebl/corpus/infrastructure/mongo_text_repository.py`,
  `ebl/fragmentarium/infrastructure/mongo_fragment_repository.py`).
- Binary media (photos, folios, public files) is stored in GridFS buckets,
  served through `ebl/files/web/files.py` and the fragment photo/folio
  resources.
- The `changelog` collection records mutations and is intentionally excluded
  from local DB-pull tooling (see `pull-db.sh`).

## Authentication and Authorization

- Tokens are RS256 JWTs verified by `Auth0Backend`. Required claims include
  `openid`; signature, expiration, and issued-at are checked.
- After verification, `Auth0User.get_scopes` merges scopes from both the
  `scope` claim (space-delimited string) and the `permissions` claim (array).
- Resource handlers enforce authorization via Falcon `before` hooks:
  - `require_scope(..., "<scope>")` for fixed scopes
    (for example `write:texts`, `write:bibliography`, `transliterate:fragments`,
    `lemmatize:fragments`, `annotate:fragments`, `create:proper_nouns`,
    `write:words`).
  - `require_fragment_read_scope` for dynamic per-fragment access.
  - `require_folio_scope` for `read:<folio>-folios` style permissions.
- Guest access uses `NoneAuthBackend(Guest)`.

The complete scope-to-route mapping is in
[API Contract](./03-api-contract.md#authorization-coverage).

## Request Lifecycle

A typical `POST /texts/{genre}/{category}/{index}/chapters/{stage}/{name}/lines`
request flows as follows:

1. Falcon routes the request to `LinesResource` (registered in
   `ebl/corpus/web/bootstrap.py`, defined in `ebl/corpus/web/lines.py`).
2. Auth middleware verifies the JWT and resolves user scopes.
3. The resource's `on_post` runs `require_scope(..., "write:texts")`.
4. The body is loaded by a Marshmallow schema in
   `ebl/corpus/web/chapter_schemas.py`/`ebl/corpus/application/schemas.py`.
5. The chapter ID is constructed from route parameters
   (`create_chapter_id`).
6. The `Corpus` service (`ebl/corpus/application/corpus.py`) runs the use
   case, invalidates the relevant `ChapterCache` entries, calls
   `MongoTextRepository`, and writes a `changelog` entry.
7. The result is dumped back to JSON via the API schema.
8. Any raised domain exception is caught by `ebl/error_handler.py` and
   mapped to its HTTP status (see
   [API Contract](./03-api-contract.md#error-mapping)).

## Read vs. Write Patterns

- **Write paths** typically: scope check → schema load → changelog entry
  → cache invalidation → repository update.
- **Read paths** typically: optional cache lookup → repository query (often
  via aggregation pipelines) → optional enrichment (dictionary, bibliography,
  media) → schema dump.

## Cross-Cutting Modules

- `ebl/common/query/` — shared query parsing
  (`parameter_parser.py`, `query_schemas.py`, `query_result.py`).
- `ebl/transliteration/` — line/token/text schemas and a
  `TransliterationQueryFactory` used by both Corpus and Fragmentarium for
  sign-based search.
- `ebl/alignment/`, `ebl/chronology/`, `ebl/io/` — supporting helpers for
  alignment logic, chronology, and import/integration flows.

## Related

- [Overview](./00-overview.md)
- [Data Model](./02-data-model.md)
- [API Contract](./03-api-contract.md)
- [Operations](./05-operations.md)
- [Contributing](./06-contributing.md)

## Last Reviewed

2026-05-06
