# API Contract

Created: 2026-05-06

## Purpose

Describe the public contract of the eBL API: how routes are organized, how
clients authenticate and authorize, what the error envelope looks like, and
which conventions apply to pagination, filtering, and request/response shapes.
The authoritative source for every fact below is the code in
[ebl-api](https://github.com/ElectronicBabylonianLiterature/ebl-api/); when
they disagree the code wins.

## Versioning Posture

The API is currently served as a single active surface, **without a URI
version prefix** (no `/v1/...`). Any future breaking change requires explicit
versioning per
[Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md).

## Route Organization

Routes are registered per domain via `create_*_routes` functions in each
`ebl/<domain>/web/bootstrap.py`. Endpoint families and their owning modules:

| Endpoint family | Owning modules |
|---|---|
| `/texts*`, `/textsearch`, `/corpus/*`, `/lemmasearch` | `ebl/corpus/web`, `ebl/corpus/application` |
| `/fragments*`, `/folios*`, `/genres`, `/periods`, `/statistics`, `/findspots` | `ebl/fragmentarium/web`, `ebl/fragmentarium/application` |
| `/words*`, `/signs*`, `/lemmas` | `ebl/dictionary/web`, `ebl/signs/web`, `ebl/lemmatization/web` |
| `/bibliography*`, `/afo-register*`, `/dossiers*`, `/provenances*` | `ebl/bibliography/web`, `ebl/afo_register/web`, `ebl/dossiers/web`, `ebl/provenance/web` |
| `/images*`, `/markup`, `/cached-markup` | `ebl/files/web`, `ebl/markup/web` |

The full machine-derived inventory (URI, resource class, methods, scope
guards) lives next to the code; treat the bootstrap modules and resource
classes as the authoritative route catalog.

## Authentication

- Tokens: RS256 JWTs verified by `Auth0Backend`
  (`ebl/users/infrastructure/auth0.py`).
- Required claims include `openid`; signature, `exp`, and `iat` are checked.
- After verification the user profile is enriched from Auth0's `userinfo`
  endpoint.
- A `NoneAuthBackend(Guest)` fallback supports anonymous access to public
  routes.
- Granted scopes are merged from the token's `scope` claim (space-delimited
  string) and `permissions` claim (string array) in
  `Auth0User.get_scopes`.

## Authorization Model

Three guard styles are used at the resource level:

1. **Fixed scope guard** — `require_scope(..., "<scope>")`. The scope name
   follows a `<verb>:<object>` convention. Examples:
   - `write:texts`, `write:bibliography`, `write:words`
   - `transliterate:fragments`, `lemmatize:fragments`, `annotate:fragments`
   - `create:proper_nouns`
2. **Dynamic fragment-read guard** — `require_fragment_read_scope`.
   Evaluates per-fragment access from repository metadata (scope name pattern
   `read:<fragment-group>-fragments`).
3. **Dynamic folio guard** — `require_folio_scope`. Evaluates
   `read:<folio>-folios` permissions.

### Authorization Coverage

| Scope or guard | Routes |
|---|---|
| `annotate:fragments` | `POST /fragments/{number}/annotations` |
| `create:proper_nouns` | `POST /words/create-proper-noun` |
| `lemmatize:fragments` | `/fragments/{number}/collect-lemmas`, `/fragments/{number}/lemma-annotation`, `/fragments/{number}/lemmatization`, `/texts/{...}/chapters/{...}/lemmatization` |
| `read:<folio>-folios` (dynamic) | `/folios/{name}/{number}`, `/fragments/{number}/pager/{folio_name}/{folio_number}` |
| `read:<fragment-group>-fragments` (dynamic) | `/fragments/{number}`, `/fragments/{number}/photo`, `/fragments/{number}/scopes`, `/fragments/{number}/thumbnail/{resolution}` |
| `transliterate:fragments` | `/fragments/{number}/{archaeology,colophon,date,dates-in-text,edition,genres,match,named-entities,references,script}` |
| `write:bibliography` | `/bibliography`, `/bibliography/{id_}` |
| `write:texts` | `/texts/{...}/chapters/{...}/{alignment,import,lines,manuscripts}` |
| `write:words` | `/words/{object_id}` |

All other documented routes are unscoped (publicly readable).

### Configuring Scopes

A scope is defined in three places that must stay in sync:

1. The `ScopeItem` enum in
   [`ebl/common/domain/scopes.py`](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/ebl/common/domain/scopes.py)
   \u2014 the backend source of truth.
2. The `Folio` class in
   [`src/fragmentarium/domain/Folio.ts`](https://github.com/ElectronicBabylonianLiterature/ebl-frontend/blob/master/src/fragmentarium/domain/Folio.ts)
   \u2014 used by `SessionContext.isAllowedTo*` to gate the UI. See
   [frontend-docs/02-data-and-api.md \u2014 Scope-Gated UI](../frontend-docs/02-data-and-api.md#scope-gated-ui).
3. The Auth0 tenant \u2014 each scope must be defined on the API
   (`Applications > APIs > Dictionary > Permissions`) and granted to the
   relevant role (`User Management > Roles`).

Scopes whose name matches `OPEN` / `isOpen` are public; restricted
scopes use `RESTRICTED` / `isOpen = false` in the source code and the
actual gate is enforced by Auth0 role membership.

## Error Mapping

Global error handlers are registered in `ebl/error_handler.py`. Mapping:

| Exception | Handler | HTTP status |
|---|---|---|
| `Exception` | `unexpected_error` | 500 Internal Server Error |
| `AlignmentError` | `unprocessable_entity` | 422 Unprocessable Entity |
| `DispatchError` | `unprocessable_entity` | 422 Unprocessable Entity |
| `LemmatizationError` | `unprocessable_entity` | 422 Unprocessable Entity |
| `DataError` | `unprocessable_entity` | 422 Unprocessable Entity |
| `NotFoundError` | `not_found_error` | 404 Not Found |
| `DuplicateError` | `duplicate_error` | 409 Conflict |
| `falcon.HTTPError` | `http_error` | passthrough |
| `falcon.HTTPStatus` | `http_error` | passthrough |

Authentication and authorization failures are surfaced by Falcon's auth
middleware as the standard 401/403 responses.

Domain error messages are intended to be stable and user-oriented; do not
embed sensitive internals (stack traces, secrets, internal IDs not part of
the contract) in raised exception messages.

## Request and Response Shape

Contracts are layered:

1. **Resource layer** (`ebl/<domain>/web/*.py`) parses route/query/body
   inputs and triggers schema validation.
2. **Schema layer** — Marshmallow schemas under
   `ebl/<domain>/application/*schema*.py` (and selected web-specific
   schemas) load JSON to domain objects and dump domain objects back to
   JSON. The dump shape is the public response contract.
3. **Domain layer** enforces invariants on the loaded objects.
4. **Infrastructure layer** maps to/from MongoDB documents; persisted field
   names may differ from API field names where schemas use data-key mapping.

Schema hotspots used by clients:

- Corpus: `ebl/corpus/application/schemas.py`,
  `ebl/corpus/web/chapter_schemas.py`, `ebl/corpus/web/text_schema.py`.
- Fragmentarium: `ebl/fragmentarium/application/fragment_schema.py`,
  `ebl/fragmentarium/web/dtos.py`, plus feature-specific files in
  `ebl/fragmentarium/application/`.
- Transliteration: token/line/text schemas under
  `ebl/transliteration/application/`.
- Common query layer: `ebl/common/query/query_schemas.py`,
  `ebl/common/query/query_result.py`.

To trace one endpoint end to end:

1. Find its registration in the domain's `bootstrap.py`.
2. Open the resource class and locate the matching `on_<method>` handler.
3. Follow `schema.load(...)` / `schema.dump(...)` calls.
4. Follow the service call into the application layer.
5. Read the repository call in the infrastructure layer.

## Pagination, Filtering, and Sorting

Query/listing endpoints in this codebase use the helpers in
`ebl/common/query/`:

- Query parameters are parsed via
  `ebl/common/query/parameter_parser.py`.
- Result envelopes are defined by
  `ebl/common/query/query_result.py` (and the related schemas).
- Filter dimensions are domain-specific (for example transliteration
  patterns, lemma filters, museum/provenance, periods, genres, dates).

There is no global page-size or cursor convention enforced across all
endpoints; each query resource declares the parameters it accepts. New
listing endpoints should follow the patterns established in
`ebl/fragmentarium/web/fragments.py` (`/fragments/query`) and
`ebl/corpus/web/chapters.py` (`/corpus/query`).

## Caching

Some read endpoints route through cache helpers in `ebl/cache/`. Mutating
operations on cached entities (notably chapter-level updates) explicitly
invalidate the relevant cache entries before persisting changes.

## Contract Change Rules

When adding, removing, or modifying an endpoint:

1. Update the affected resource and bootstrap together.
2. Update or add tests under `ebl/tests/<domain>/`.
3. Update [Authorization Coverage](#authorization-coverage) here when scopes
   change, and [Error Mapping](#error-mapping) when new exception types are
   introduced.
4. Follow [Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md)
   for any breaking change.

## Related

- [Overview](./00-overview.md)
- [Architecture](./01-architecture.md)
- [Data Model](./02-data-model.md)
- [Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md)
- [Contributing](./06-contributing.md)

## Last Reviewed

2026-05-06
