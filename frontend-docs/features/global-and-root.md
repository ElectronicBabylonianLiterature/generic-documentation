# Root and Global Modules

## Location
- `src/` root files

## Purpose
Defines app-level shell components, global styles/assets, and application bootstrap artifacts.

## Key Files
- `App.tsx`, `App.test.ts`
- `index.tsx`, `index.test.tsx`
- `Header.tsx`, `Footer.tsx`, `Introduction.tsx`, `NotFoundPage.tsx`
- global style files (`index.sass`, `_fonts.sass`)
- service worker and global declarations

## Responsibilities
- App shell composition and shared page chrome.
- Entry-level route mounting and top-level rendering.
- Global style and typography setup.

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

- Full file map: see [docs/reference/repository-map.md](docs/reference/repository-map.md).
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/App.test.ts](src/App.test.ts)
- [src/App.tsx](src/App.tsx)
- [src/declarations.d.ts](src/declarations.d.ts)
- [src/ErrorReporterContext.ts](src/ErrorReporterContext.ts)
- [src/_fonts.sass](src/_fonts.sass)
- [src/Footer.sass](src/Footer.sass)
- [src/Footer.tsx](src/Footer.tsx)
- [src/global.d.ts](src/global.d.ts)
- [src/Header.sass](src/Header.sass)
- [src/Header.test.tsx](src/Header.test.tsx)
- [src/Header.tsx](src/Header.tsx)
- [src/index.sass](src/index.sass)
- [src/index.test.tsx](src/index.test.tsx)
- [src/index.tsx](src/index.tsx)
- [src/Introduction.sass](src/Introduction.sass)

### Key Tests

- [src/App.test.ts](src/App.test.ts)
- [src/Header.test.tsx](src/Header.test.tsx)
- [src/index.test.tsx](src/index.test.tsx)
- [src/useObjectUrl.regression.test.tsx](src/useObjectUrl.regression.test.tsx)
- [src/useObjectUrl.test.tsx](src/useObjectUrl.test.tsx)
