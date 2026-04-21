# Feature: HTTP Layer

## Location
- `src/http`

## Purpose
Central transport abstraction for backend communication with typed error handling and authentication header integration.

## Main Responsibilities
- Construct requests with consistent headers.
- Attach auth tokens when required.
- Parse successful and error responses.
- Expose cancellable fetch semantics where needed.

## Key Modules
- `ApiClient.ts`
- `ApiError.ts`
- `CancellableFetch.ts` and response utility helpers.

## Tests
- API and security-focused tests validate auth and error behavior.

## Risks
- Any break here impacts all repositories and feature data loading.

## Invariants

- Domain models should be transformed in domain/application layers, not ad-hoc in view rendering.
- API calls should remain encapsulated in service/repository boundaries.
- Feature tests must cover both happy-path and degraded/error-path rendering.

## Edge Cases

- Empty result sets for search/list pages should render explicit no-result states.
- Optional/null backend fields must not break layout or action controls.
- URL parameter mismatches should resolve to not-found or fallback behavior.

## Failure Modes and Recovery

- HTTP failures: show feature-level error alerts and preserve navigability.
- Auth/scopes failures: block protected actions and keep read-only paths available where possible.
- Parsing/transform failures: route through boundary handling rather than crashing page shell.

## Traceability

- Full file map: [docs/reference/file-maps/http.md](docs/reference/file-maps/http.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/http/ApiClient.edge-cases.test.ts](src/http/ApiClient.edge-cases.test.ts)
- [src/http/ApiClient.test.ts](src/http/ApiClient.test.ts)
- [src/http/ApiClient.ts](src/http/ApiClient.ts)
- [src/http/ApiError.test.ts](src/http/ApiError.test.ts)
- [src/http/cancellableFetch.test.ts](src/http/cancellableFetch.test.ts)
- [src/http/cancellableFetch.ts](src/http/cancellableFetch.ts)
- [src/http/withData.test.tsx](src/http/withData.test.tsx)
- [src/http/withData.tsx](src/http/withData.tsx)

### Key Tests

- [src/http/ApiClient.edge-cases.test.ts](src/http/ApiClient.edge-cases.test.ts)
- [src/http/ApiClient.test.ts](src/http/ApiClient.test.ts)
- [src/http/ApiError.test.ts](src/http/ApiError.test.ts)
- [src/http/cancellableFetch.test.ts](src/http/cancellableFetch.test.ts)
- [src/http/withData.test.tsx](src/http/withData.test.tsx)
