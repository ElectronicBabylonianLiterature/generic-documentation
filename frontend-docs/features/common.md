# Feature: Common

## Location
- `src/common`

## Purpose
Shared UI components, hooks, utility functions, and cross-feature primitives.

## Main Responsibilities
- Provide reusable display components (alerts, breadcrumbs, markdown, images).
- Centralize error boundaries and fallback behavior.
- Offer reusable hooks (`usePromiseEffect`, object URL lifecycle helpers).

## Notable Modules
- `ErrorBoundary.tsx`
- `ErrorAlert.tsx`
- image components (`ApiImage`, `BlobImage`, linked image helpers)
- parsing/markup helpers

## Tests
- Broad test coverage across component behavior and utility hooks.

## Risks
- Changes here can cause broad regressions because many features depend on it.

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

- Full file map: [docs/reference/file-maps/common.md](docs/reference/file-maps/common.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/common/ApiImage.test.tsx](src/common/ApiImage.test.tsx)
- [src/common/ApiImage.tsx](src/common/ApiImage.tsx)
- [src/common/AppContent.sass](src/common/AppContent.sass)
- [src/common/AppContent.test.tsx](src/common/AppContent.test.tsx)
- [src/common/AppContent.tsx](src/common/AppContent.tsx)
- [src/common/ArrayInput.test.tsx](src/common/ArrayInput.test.tsx)
- [src/common/ArrayInput.tsx](src/common/ArrayInput.tsx)
- [src/common/BlobImage.test.tsx](src/common/BlobImage.test.tsx)
- [src/common/BlobImage.tsx](src/common/BlobImage.tsx)
- [src/common/Breadcrumbs.test.tsx](src/common/Breadcrumbs.test.tsx)
- [src/common/Breadcrumbs.tsx](src/common/Breadcrumbs.tsx)
- [src/common/BrokenAndUncertain.tsx](src/common/BrokenAndUncertain.tsx)
- [src/common/CollabsibleCard.tsx](src/common/CollabsibleCard.tsx)
- [src/common/Download.tsx](src/common/Download.tsx)
- [src/common/ErrorAlert.test.tsx](src/common/ErrorAlert.test.tsx)

### Key Tests

- [src/common/ApiImage.test.tsx](src/common/ApiImage.test.tsx)
- [src/common/AppContent.test.tsx](src/common/AppContent.test.tsx)
- [src/common/ArrayInput.test.tsx](src/common/ArrayInput.test.tsx)
- [src/common/BlobImage.test.tsx](src/common/BlobImage.test.tsx)
- [src/common/Breadcrumbs.test.tsx](src/common/Breadcrumbs.test.tsx)
- [src/common/ErrorAlert.test.tsx](src/common/ErrorAlert.test.tsx)
- [src/common/ErrorBoundary.comprehensive.test.tsx](src/common/ErrorBoundary.comprehensive.test.tsx)
- [src/common/ErrorBoundary.test.tsx](src/common/ErrorBoundary.test.tsx)
- [src/common/ExternalLink.test.tsx](src/common/ExternalLink.test.tsx)
- [src/common/InlineMarkdown.test.tsx](src/common/InlineMarkdown.test.tsx)
- [src/common/LinkedImage.test.tsx](src/common/LinkedImage.test.tsx)
- [src/common/List.test.tsx](src/common/List.test.tsx)
- [src/common/ModalButton.test.tsx](src/common/ModalButton.test.tsx)
- [src/common/period.test.ts](src/common/period.test.ts)
- [src/common/ResultPageButtons.edge-cases.test.tsx](src/common/ResultPageButtons.edge-cases.test.tsx)
