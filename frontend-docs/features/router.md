# Feature: Router

## Location
- `src/router`

## Purpose
Defines route topology, page composition, and navigation contracts across all feature modules.

## Main Responsibilities
- Configure app routes and tool routes.
- Connect route paths to feature entry components.
- Handle fallback/not-found route behavior.

## Key Modules
- `router.tsx`
- `toolsRoutes.tsx`
- sitemap and route utility files

## Integrations
- Every feature's top-level UI entry point is mounted through this layer.

## Tests
- Route rendering and navigation tests where present.

## Risks
- Route changes can silently break deep links and tests if not validated end-to-end.

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

- Full file map: [docs/reference/file-maps/router.md](docs/reference/file-maps/router.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)
- Route catalog: [docs/reference/route-catalog.md](docs/reference/route-catalog.md)

### Key Implementation Files

- [src/router/aboutRoutes.tsx](src/router/aboutRoutes.tsx)
- [src/router/bibliographyRoutes.tsx](src/router/bibliographyRoutes.tsx)
- [src/router/compat.tsx](src/router/compat.tsx)
- [src/router/corpusRoutes.tsx](src/router/corpusRoutes.tsx)
- [src/router/dictionaryRoutes.tsx](src/router/dictionaryRoutes.tsx)
- [src/router/footerRoutes.tsx](src/router/footerRoutes.tsx)
- [src/router/fragmentariumRoutes.tsx](src/router/fragmentariumRoutes.tsx)
- [src/router/FullPageRoutes.tsx](src/router/FullPageRoutes.tsx)
- [src/router/head.test.tsx](src/router/head.test.tsx)
- [src/router/head.tsx](src/router/head.tsx)
- [src/router/notFoundRoutes.test.tsx](src/router/notFoundRoutes.test.tsx)
- [src/router/researchProjectRoutes.tsx](src/router/researchProjectRoutes.tsx)
- [src/router/router.sass](src/router/router.sass)
- [src/router/router.tsx](src/router/router.tsx)
- [src/router/Services.ts](src/router/Services.ts)

### Key Tests

- [src/router/head.test.tsx](src/router/head.test.tsx)
- [src/router/notFoundRoutes.test.tsx](src/router/notFoundRoutes.test.tsx)
- [src/router/sitemap.test.tsx](src/router/sitemap.test.tsx)
