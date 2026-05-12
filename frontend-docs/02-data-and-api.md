# Data and API

Created: 2026-05-06

## Purpose

Describe how `ebl-frontend` talks to `ebl-api`: the transport primitives,
the repository pattern, scope-gated UI, error semantics, and the
endpoint families consumed per domain. Backend contract details
(authoritative scopes, error mapping) live in
[backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md);
this doc focuses on the frontend's view.

## Contract Principles

- The backend schema is the source of truth for field names and payload
  shape. Frontend repositories adapt DTOs to domain types; the backend
  is never adapted to the frontend.
- Repositories own endpoint path composition and DTO ↔ domain mapping.
- Application services orchestrate use-cases and never touch transport
  directly.
- Optional and nullable fields are first-class contract behavior — the
  UI must render correctly when they are absent.

## Ownership Boundaries

- `src/http` — transport, normalized API errors.
- `src/<domain>/infrastructure` — endpoint paths, DTO ↔ domain mapping.
- `src/<domain>/domain` — domain types and invariants.
- `src/<domain>/application` — use-case orchestration across
  repositories.

## Transport Contract

Source: `src/http/ApiClient.ts`.

| Operation | Method | Typical use |
|---|---|---|
| GET JSON | `fetchJson<T>(path, authenticate)` | Standard read endpoints |
| GET Blob | `fetchBlob(path, authenticate)` | Images and binary assets |
| POST JSON | `postJson<T>(path, body, authenticate = true)` | Creates / updates with JSON payloads |
| PUT JSON | `putJson<T>(path, body)` | Idempotent updates |

### Authentication Modes

- `public-or-no-auth` — endpoint is callable without a token; used for
  public reads.
- `default` — requires the standard Auth0 flow; a token is acquired via
  `@auth0/auth0-spa-js` before the request is issued.

Token retrieval failure surfaces through the same path as any other API
failure (no special-case handling at the call site).

## Scope-Gated UI

UI gating is handled through `SessionContext`:

```tsx
// Access via Context.Consumer
<SessionContext.Consumer>
  {(session: Session): JSX.Element => (
    <span>{session.isAllowedToReadFragments() ? 'access' : 'no access'}</span>
  )}
</SessionContext.Consumer>

// Access via hook
const session = useContext(SessionContext)
const hasAccess = session.isAllowedToReadTexts()
```

The set of `isAllowedTo*` helpers mirrors the backend scope guards. The
authoritative list of scopes per route family lives in
[backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md#authorization-coverage).

## Error Model

`ApiClient` normalizes non-OK HTTP responses into `ApiError`. Domain
repositories may wrap `ApiError` into domain-specific errors at their
boundary.

| Error type | Origin | Expected handling |
|---|---|---|
| Transport error | Network / non-OK HTTP | Normalize to `ApiError`, expose recoverable UI state |
| Auth error | Token / session acquisition | Trigger auth-aware failure path and user messaging |
| Mapping error | DTO ↔ domain translation | Fail fast at the repository boundary; capture regression test |
| Business validation error | Backend domain constraints | Surface clear UI feedback; preserve user context |

The backend's exception → HTTP status mapping is documented in
[backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md#error-mapping).

## Endpoint Catalog by Domain

The catalog below lists the endpoints the SPA actually consumes, grouped
by domain. The exhaustive contract (path, payload, scope) is in the
backend doc set.

### Dictionary (`src/dictionary`)

- `GET /words/{id}`
- `GET /words?lemmas={comma-separated}`
- `GET /words?query={text}`
- `GET /words?lemma={lemma}`
- `GET /words/all`
- `POST /words/{id}`
- `POST /words/create-proper-noun`

### Bibliography (`src/bibliography`)

- `GET /bibliography/{id}`
- `GET /bibliography/list?ids={comma-separated}`
- `GET /bibliography?query={text}`
- `GET /bibliography/all`
- `POST /bibliography/{id}`
- `POST /bibliography`

### Fragmentarium (`src/fragmentarium`)

- `GET /statistics`
- `GET /fragments/{number}`
- `GET /fragments?{params}`
- `POST /fragments/{number}/edition`
- `POST /fragments/{number}/lemmatization`
- `POST /fragments/{number}/references`
- `GET /fragments/{number}/annotations?generateAnnotations={bool}`
- `POST /fragments/{number}/annotations`
- `GET /fragments/{number}/named-entities`
- `POST /fragments/{number}/named-entities`
- `GET /fragments/all`

### Corpus (`src/corpus`)

- `GET /corpus/texts/all`
- `GET /corpus/chapters/all`
- Additional dynamic text/chapter/query endpoints driven by route and
  query state.

### Signs (`src/signs`)

- `GET /signs/{name}`
- `GET /signs/{name}/images`
- `GET /signs?query={text}`
- `GET /signs/{name}/{sortEra}`
- `GET /signs/transliteration/{text}`
- `GET /signs/all`

### Dossiers (`src/dossiers`)

- `GET /dossiers`
- `GET /dossiers?ids[]={id}`
- `GET /dossiers/suggestions?q={query}`
- `GET /dossiers/filter?{filters}`

### AfO Register (`src/afo-register`)

- `GET /afo-register?{query}`
- `POST /afo-register/texts-numbers`
- `GET /afo-register/suggestions?text_query={query}`

### Image and Binary Assets

Served via `fetchBlob`; rendered through `<img>` tags and the
annotation tool.

- `GET (blob) /images/{fileName}`
- `GET (blob) /folios/{name}/{number}`
- `GET (blob) /fragments/{number}/photo`
- `GET (blob) /fragments/{number}/thumbnail/{size}`

The backend's GridFS buckets behind these endpoints are documented in
[backend-docs/02-data-model.md](../backend-docs/02-data-model.md#gridfs-buckets).
The production CSP must list the API origin in `img-src` (see [Build and
Operations](./04-build-and-operations.md)).

## Query and Pagination Conventions

- The shared query model lives in `src/query/`. Dictionary, Signs,
  AfO Register, and Fragmentarium search build their query parameters
  from it.
- Repositories own query string composition. UI components pass typed
  inputs to application services and never hand-build URLs.
- Pagination conventions match the backend's
  `ebl/common/query/` envelope; see
  [backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md).

## Contract Change Policy

1. Confirm the backend schema change and its compatibility posture in
   [backend-docs/04-lifecycle-and-compatibility.md](../backend-docs/04-lifecycle-and-compatibility.md).
2. Update repository mappings and domain types together.
3. Update this doc and [Routes and Features](./03-routes-and-features.md)
   if endpoint usage depends on path state.
4. Add or update repository-level tests for mapping and error behavior.
5. Document release and rollback implications in the PR.

## Validation Checklist

- Request/response field names match the backend schema.
- Mapping handles missing / null fields without crashing the UI.
- Auth-gated mutations are covered by `SessionContext` checks.
- Repository tests cover both happy path and `ApiError` translation.
- All quality gates green (see [Contributing](./05-contributing.md)).

## Related

- [Architecture](./01-architecture.md)
- [Routes and Features](./03-routes-and-features.md)
- [Build and Operations](./04-build-and-operations.md)
- [Contributing](./05-contributing.md)
- [backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md)
- [backend-docs/02-data-model.md](../backend-docs/02-data-model.md)

## Last Reviewed

2026-05-06
