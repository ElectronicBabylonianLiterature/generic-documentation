# Feature: Markup

## Location
- `src/markup`

## Purpose
Transforms markup content and injects enriched references for display in scholarly UI components.

## Main Responsibilities
- Parse/render markup units into structured parts.
- Support caching paths where available.
- Integrate bibliography/reference enrichment.

## Key Modules
- `application/MarkupService.ts`
- `application/CachedMarkupService.ts`

## Tests
- Transformation and integration tests tied to common display utilities.

## Risks
- Reference injection correctness and performance under repeated rendering.

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

- Full file map: [docs/reference/file-maps/markup.md](docs/reference/file-maps/markup.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/markup/application/MarkupService.test.ts](src/markup/application/MarkupService.test.ts)
- [src/markup/application/MarkupService.ts](src/markup/application/MarkupService.ts)
- [src/markup/ui/markup.tsx](src/markup/ui/markup.tsx)

### Key Tests

- [src/markup/application/MarkupService.test.ts](src/markup/application/MarkupService.test.ts)
