# Feature: Query

## Location
- `src/query`

## Purpose
Hosts query model and utilities shared by search-oriented domains.

## Main Responsibilities
- Define query object structures.
- Normalize search parameter handling across feature repositories/services.

## Integrations
- Used by fragment, corpus, dictionary, dossiers, and other search interfaces.

## Tests
- Query behavior tests where implemented.

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

- Full file map: [docs/reference/file-maps/query.md](docs/reference/file-maps/query.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/query/CorpusQuery.ts](src/query/CorpusQuery.ts)
- [src/query/FragmentQuery.ts](src/query/FragmentQuery.ts)
- [src/query/QueryResult.ts](src/query/QueryResult.ts)

### Key Tests

