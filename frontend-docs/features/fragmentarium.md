# Feature: Fragmentarium

## Location
- `src/fragmentarium`

## Purpose
Core domain for fragment discovery, detail display, metadata editing, annotation handling, and associated scholarly workflows.

## Main Responsibilities
- Search and list fragment records.
- Render rich fragment detail pages.
- Support editing flows for transliteration, references, archaeology, and metadata.
- Handle image and annotation retrieval and display.

## Layering
- `application/`: fragment/search/findspot services.
- `domain/`: fragment entities, numbers, measures, provenance, joins, genre, etc.
- `infrastructure/`: repositories and DTO mappers.
- `ui/`: list pages, details, editors, annotation and front-page views.

## Cross-Feature Integrations
- Bibliography references.
- Chronology/date metadata.
- Transliteration and lemmatization displays.
- Signs/annotation linkages.
- Research projects and dossier references.

## Tests
- Extensive domain and UI tests, including editing and detail rendering paths.

## Risks
- High complexity and breadth make this feature sensitive to regression.

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

- Full file map: [docs/reference/file-maps/fragmentarium.md](docs/reference/file-maps/fragmentarium.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/fragmentarium/application/FindspotService.test.ts](src/fragmentarium/application/FindspotService.test.ts)
- [src/fragmentarium/application/FindspotService.ts](src/fragmentarium/application/FindspotService.ts)
- [src/fragmentarium/application/FragmentSearchService.test.ts](src/fragmentarium/application/FragmentSearchService.test.ts)
- [src/fragmentarium/application/FragmentSearchService.ts](src/fragmentarium/application/FragmentSearchService.ts)
- [src/fragmentarium/application/FragmentService.test.ts](src/fragmentarium/application/FragmentService.test.ts)
- [src/fragmentarium/application/FragmentService.ts](src/fragmentarium/application/FragmentService.ts)
- [src/fragmentarium/application/LemmatizationFactory.test.ts](src/fragmentarium/application/LemmatizationFactory.test.ts)
- [src/fragmentarium/application/LemmatizationFactory.ts](src/fragmentarium/application/LemmatizationFactory.ts)
- [src/fragmentarium/domain/Acquisition.test.ts](src/fragmentarium/domain/Acquisition.test.ts)
- [src/fragmentarium/domain/Acquisition.ts](src/fragmentarium/domain/Acquisition.ts)
- [src/fragmentarium/domain/annotation-token.ts](src/fragmentarium/domain/annotation-token.ts)
- [src/fragmentarium/domain/annotation.ts](src/fragmentarium/domain/annotation.ts)
- [src/fragmentarium/domain/archaeologyDtos.ts](src/fragmentarium/domain/archaeologyDtos.ts)
- [src/fragmentarium/domain/archaeology.test.ts](src/fragmentarium/domain/archaeology.test.ts)
- [src/fragmentarium/domain/archaeology.ts](src/fragmentarium/domain/archaeology.ts)

### Key Tests

- [src/fragmentarium/application/FindspotService.test.ts](src/fragmentarium/application/FindspotService.test.ts)
- [src/fragmentarium/application/FragmentSearchService.test.ts](src/fragmentarium/application/FragmentSearchService.test.ts)
- [src/fragmentarium/application/FragmentService.test.ts](src/fragmentarium/application/FragmentService.test.ts)
- [src/fragmentarium/application/LemmatizationFactory.test.ts](src/fragmentarium/application/LemmatizationFactory.test.ts)
- [src/fragmentarium/domain/Acquisition.test.ts](src/fragmentarium/domain/Acquisition.test.ts)
- [src/fragmentarium/domain/archaeology.test.ts](src/fragmentarium/domain/archaeology.test.ts)
- [src/fragmentarium/domain/Colophon.test.ts](src/fragmentarium/domain/Colophon.test.ts)
- [src/fragmentarium/domain/Folio.test.ts](src/fragmentarium/domain/Folio.test.ts)
- [src/fragmentarium/domain/Fragment.test.ts](src/fragmentarium/domain/Fragment.test.ts)
- [src/fragmentarium/domain/Genres.test.ts](src/fragmentarium/domain/Genres.test.ts)
- [src/fragmentarium/domain/MuseumNumber.test.ts](src/fragmentarium/domain/MuseumNumber.test.ts)
- [src/fragmentarium/domain/museum.test.ts](src/fragmentarium/domain/museum.test.ts)
- [src/fragmentarium/domain/normalizeAccents.test.ts](src/fragmentarium/domain/normalizeAccents.test.ts)
- [src/fragmentarium/domain/normalizeNumbers.test.ts](src/fragmentarium/domain/normalizeNumbers.test.ts)
- [src/fragmentarium/domain/replaceSpecialCharacters.test.ts](src/fragmentarium/domain/replaceSpecialCharacters.test.ts)
