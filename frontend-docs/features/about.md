# Feature: About

## Location
- `src/about`

## Purpose
Hosts informational and editorial content for the project, including news, feature overviews, and explanatory pages.

## Main Responsibilities
- Render about sections and navigation tabs.
- Present newsletter/news content.
- Provide static and semi-static project documentation inside the app.

## Key Areas
- `ui/about.tsx`: entry page and section composition.
- `ui/news.tsx` + `ui/newsletter/*.md.ts`: news and newsletter publication pipeline.
- page-level files for corpus, dictionary, bibliography, and fragmentarium introductions.

## Data/Dependency Notes
- Primarily local content rendering.
- Reuses common layout and markdown rendering utilities.

## Tests
- UI tests for main about/news rendering behavior.

## Risks
- Content drift if markdown-derived TypeScript files are not updated consistently.

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

- Full file map: [docs/reference/file-maps/about.md](docs/reference/file-maps/about.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/about/ui/about.sass](src/about/ui/about.sass)
- [src/about/ui/about.test.tsx](src/about/ui/about.test.tsx)
- [src/about/ui/about.tsx](src/about/ui/about.tsx)
- [src/about/ui/bibliography.tsx](src/about/ui/bibliography.tsx)
- [src/about/ui/corpus.tsx](src/about/ui/corpus.tsx)
- [src/about/ui/dictionary.tsx](src/about/ui/dictionary.tsx)
- [src/about/ui/folios.tsx](src/about/ui/folios.tsx)
- [src/about/ui/fragmentarium.tsx](src/about/ui/fragmentarium.tsx)
- [src/about/ui/newsletter/001.md.ts](src/about/ui/newsletter/001.md.ts)
- [src/about/ui/newsletter/002.md.ts](src/about/ui/newsletter/002.md.ts)
- [src/about/ui/newsletter/003.md.ts](src/about/ui/newsletter/003.md.ts)
- [src/about/ui/newsletter/004.md.ts](src/about/ui/newsletter/004.md.ts)
- [src/about/ui/newsletter/005.md.ts](src/about/ui/newsletter/005.md.ts)
- [src/about/ui/newsletter/006.md.ts](src/about/ui/newsletter/006.md.ts)
- [src/about/ui/newsletter/007.md.ts](src/about/ui/newsletter/007.md.ts)

### Key Tests

- [src/about/ui/about.test.tsx](src/about/ui/about.test.tsx)
- [src/about/ui/news.test.tsx](src/about/ui/news.test.tsx)
