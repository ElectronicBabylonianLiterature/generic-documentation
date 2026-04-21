# Feature: Test Support

## Location
- `src/test-support`

## Purpose
Provides shared fixtures, builders, fake APIs, and drivers used throughout the test suite.

## Main Responsibilities
- Supply stable fixtures for major domains.
- Provide test drivers for rendering and interaction.
- Reduce test duplication with reusable builders/utilities.

## Key Artifacts
- Domain fixtures (`fragment`, `word`, `chapter`, `sign`, etc.)
- app test harnesses and helper assertions

## Risks
- Fixture drift can produce false confidence if not aligned with current domain contracts.

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

- Full file map: [docs/reference/file-maps/test-support.md](docs/reference/file-maps/test-support.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/test-support/afo-register-fixtures.ts](src/test-support/afo-register-fixtures.ts)
- [src/test-support/AppDriver.tsx](src/test-support/AppDriver.tsx)
- [src/test-support/bibliography-fixtures.ts](src/test-support/bibliography-fixtures.ts)
- [src/test-support/chapter-fixtures.ts](src/test-support/chapter-fixtures.ts)
- [src/test-support/colophon-fixtures.ts](src/test-support/colophon-fixtures.ts)
- [src/test-support/complexTestText.ts](src/test-support/complexTestText.ts)
- [src/test-support/createAuthorRexExp.ts](src/test-support/createAuthorRexExp.ts)
- [src/test-support/date-fixtures.ts](src/test-support/date-fixtures.ts)
- [src/test-support/dictionary-line-fixtures.ts](src/test-support/dictionary-line-fixtures.ts)
- [src/test-support/FakeApi.ts](src/test-support/FakeApi.ts)
- [src/test-support/fragment-data-fixtures.tsx](src/test-support/fragment-data-fixtures.tsx)
- [src/test-support/fragment-fixtures.ts](src/test-support/fragment-fixtures.ts)
- [src/test-support/glossary.ts](src/test-support/glossary.ts)
- [src/test-support/join-fixtures.ts](src/test-support/join-fixtures.ts)
- [src/test-support/lemmatization.ts](src/test-support/lemmatization.ts)

### Key Tests

