# Reference: API and Data Contracts

## Purpose
Authoritative frontend view of backend integration contracts: transport behavior, endpoint families, authentication modes, and error semantics.

## Contract Principles
- Backend schema is the source of truth for field names and payload shape.
- Repositories own endpoint path composition and DTO-to-domain mapping.
- Application services orchestrate use-cases and avoid transport-level details.

## Contract Ownership Boundaries
- `src/http` owns transport-level concerns and normalized API errors.
- `src/*/infrastructure` owns endpoint path composition and response translation.
- `src/*/domain` owns domain-level type semantics and invariants.
- `src/*/application` owns use-case orchestration across repositories.

## Transport Contract
Source: `src/http/ApiClient.ts`

| Operation | Method Signature | Typical Use |
| --- | --- | --- |
| GET JSON | `fetchJson<T>(path, authenticate)` | Standard read endpoints |
| GET BLOB | `fetchBlob(path, authenticate)` | Images and binary assets |
| POST JSON | `postJson<T>(path, body, authenticate = true)` | Creates and updates with JSON payloads |
| PUT JSON | `putJson<T>(path, body)` | Idempotent updates |

## Authentication Modes
- `public-or-no-auth`: endpoint can be called without token.
- `default`: endpoint requires normal authenticated flow.

## Path and Payload Conventions
- Use backend-native field names in request and response handling.
- Keep query parameter construction in repositories.
- Prefer explicit DTO-to-domain mapping rather than implicit casting.
- Treat nullable and optional fields as first-class contract behavior.

## Endpoint Catalog by Domain

### Dictionary
- `GET /words/{id}`
- `GET /words?lemmas={comma-separated}`
- `GET /words?query={text}`
- `GET /words?lemma={lemma}`
- `GET /words/all`
- `POST /words/{id}`
- `POST /words/create-proper-noun`

### Bibliography
- `GET /bibliography/{id}`
- `GET /bibliography/list?ids={comma-separated}`
- `GET /bibliography?query={text}`
- `GET /bibliography/all`
- `POST /bibliography/{id}`
- `POST /bibliography`

### Fragmentarium
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

### Corpus
- `GET /corpus/texts/all`
- `GET /corpus/chapters/all`
- Additional dynamic text/chapter/query endpoints driven by corpus route/query state

### Signs
- `GET /signs/{name}`
- `GET /signs/{name}/images`
- `GET /signs?query={text}`
- `GET /signs/{name}/{sortEra}`
- `GET /signs/transliteration/{text}`
- `GET /signs/all`

### Dossiers
- `GET /dossiers`
- `GET /dossiers?ids[]={id}`
- `GET /dossiers/suggestions?q={query}`
- `GET /dossiers/filter?{filters}`

### AFO Register
- `GET /afo-register?{query}`
- `POST /afo-register/texts-numbers`
- `GET /afo-register/suggestions?text_query={query}`

### Image and Binary Assets
- `GET(BLOB) /images/{fileName}`
- `GET(BLOB) /folios/{name}/{number}`
- `GET(BLOB) /fragments/{number}/photo`
- `GET(BLOB) /fragments/{number}/thumbnail/{size}`

## Error Taxonomy

| Error Type | Origin | Expected Handling |
| --- | --- | --- |
| Transport error | Network/HTTP layer | Normalize to `ApiError`, expose recoverable UI state |
| Auth error | Token/session acquisition | Trigger auth-aware failure path and user messaging |
| Mapping error | DTO/domain translation | Fail fast at repository boundary and capture regression test |
| Business validation error | Backend domain constraints | Surface clear UI feedback and preserve user context |

## Data Contract Expectations
- DTO mapping must stay explicit and typed.
- Optional and partial backend fields must not crash UI rendering.
- Domain model changes should include mapper and fixture updates.

## Contract Change Policy
1. Confirm backend schema change and expected compatibility.
2. Update repository mappings and domain types together.
3. Update this document and affected feature docs.
4. Add or update contract-focused tests.
5. Document release and rollback implications.

## Error Semantics
- Non-OK HTTP responses are normalized into `ApiError` objects.
- Token retrieval failures surface through normal API failure flow.
- Feature UI is responsible for recoverable alerts; unrecoverable cases use boundary fallback.

## Validation Checklist for Contract Changes
1. Verify request/response names match backend schema.
2. Update route expectations when endpoint usage depends on path state.
3. Add or update unit tests for repository mapping and error behavior.
4. Re-run quality gates before release.

## Release Notes Expectations for Contract Work
- Identify changed endpoint paths and impacted domains.
- State whether change is backward compatible.
- Include required migration or rollback notes.
