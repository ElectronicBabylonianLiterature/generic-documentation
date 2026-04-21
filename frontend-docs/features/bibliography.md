# Feature: Bibliography

## Location
- `src/bibliography`

## Purpose
Manages bibliographic records and references used across fragments, corpus views, and markup rendering.

## Main Responsibilities
- Search and retrieve bibliography entries.
- Persist bibliography updates where editing is enabled.
- Provide reference objects for integration in other domains.

## Layering
- `application/`: bibliography service orchestration.
- `domain/`: references, entries, citation helpers.
- `infrastructure/`: repository and DTO conversion.
- `ui/`: search and detail screens.

## Cross-Feature Integrations
- Referenced by fragmentarium, corpus, and markup/reference injection workflows.

## Tests
- Domain tests and repository/service contract tests.

## Risks
- Citation formatting differences if source data is inconsistent.

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

- Full file map: [docs/reference/file-maps/bibliography.md](docs/reference/file-maps/bibliography.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/bibliography/application/BibliographyService.test.ts](src/bibliography/application/BibliographyService.test.ts)
- [src/bibliography/application/BibliographyService.ts](src/bibliography/application/BibliographyService.ts)
- [src/bibliography/application/createReference.test.ts](src/bibliography/application/createReference.test.ts)
- [src/bibliography/application/createReference.ts](src/bibliography/application/createReference.ts)
- [src/bibliography/application/serializeReference.test.ts](src/bibliography/application/serializeReference.test.ts)
- [src/bibliography/application/serializeReference.ts](src/bibliography/application/serializeReference.ts)
- [src/bibliography/domain/BibliographyEntry.test.ts](src/bibliography/domain/BibliographyEntry.test.ts)
- [src/bibliography/domain/BibliographyEntry.ts](src/bibliography/domain/BibliographyEntry.ts)
- [src/bibliography/domain/Citation.test.ts](src/bibliography/domain/Citation.test.ts)
- [src/bibliography/domain/Citation.ts](src/bibliography/domain/Citation.ts)
- [src/bibliography/domain/GenerateIds.test.ts](src/bibliography/domain/GenerateIds.test.ts)
- [src/bibliography/domain/GenerateIds.ts](src/bibliography/domain/GenerateIds.ts)
- [src/bibliography/domain/referenceDto.ts](src/bibliography/domain/referenceDto.ts)
- [src/bibliography/domain/Reference.test.ts](src/bibliography/domain/Reference.test.ts)
- [src/bibliography/domain/Reference.ts](src/bibliography/domain/Reference.ts)

### Key Tests

- [src/bibliography/application/BibliographyService.test.ts](src/bibliography/application/BibliographyService.test.ts)
- [src/bibliography/application/createReference.test.ts](src/bibliography/application/createReference.test.ts)
- [src/bibliography/application/serializeReference.test.ts](src/bibliography/application/serializeReference.test.ts)
- [src/bibliography/domain/BibliographyEntry.test.ts](src/bibliography/domain/BibliographyEntry.test.ts)
- [src/bibliography/domain/Citation.test.ts](src/bibliography/domain/Citation.test.ts)
- [src/bibliography/domain/GenerateIds.test.ts](src/bibliography/domain/GenerateIds.test.ts)
- [src/bibliography/domain/Reference.test.ts](src/bibliography/domain/Reference.test.ts)
- [src/bibliography/infrastructure/BibliographyRepository.test.ts](src/bibliography/infrastructure/BibliographyRepository.test.ts)
- [src/bibliography/ui/BibliographyDownloadButton.test.tsx](src/bibliography/ui/BibliographyDownloadButton.test.tsx)
- [src/bibliography/ui/BibliographyEditor.test.tsx](src/bibliography/ui/BibliographyEditor.test.tsx)
- [src/bibliography/ui/BibliographyEntryForm.test.tsx](src/bibliography/ui/BibliographyEntryForm.test.tsx)
- [src/bibliography/ui/BibliographySearch.test.tsx](src/bibliography/ui/BibliographySearch.test.tsx)
- [src/bibliography/ui/BibliographySelect.test.tsx](src/bibliography/ui/BibliographySelect.test.tsx)
- [src/bibliography/ui/Bibliography.test.tsx](src/bibliography/ui/Bibliography.test.tsx)
- [src/bibliography/ui/BibliographyViewer.test.tsx](src/bibliography/ui/BibliographyViewer.test.tsx)
