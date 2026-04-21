# Feature: Dossiers

## Location
- `src/dossiers`

## Purpose
Supports dossier discovery and record browsing for grouped scholarly entities.

## Main Responsibilities
- Query and present dossier records.
- Provide search suggestions and filter-driven listing.
- Coordinate dossier view models and navigation.

## Layering
- `application/`: dossier service entrypoints.
- `domain/`: dossier record and suggestion models.
- `infrastructure/`: repository calls and DTO mapping.
- `ui/`: list/detail/result components.

## Tests
- Repository and service tests plus UI behavior tests where implemented.

## Risks
- Filter semantics and suggestion behavior can diverge across backend versions.

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

- Full file map: [docs/reference/file-maps/dossiers.md](docs/reference/file-maps/dossiers.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/dossiers/application/DossiersService.test.ts](src/dossiers/application/DossiersService.test.ts)
- [src/dossiers/application/DossiersService.ts](src/dossiers/application/DossiersService.ts)
- [src/dossiers/domain/DossierRecord.test.ts](src/dossiers/domain/DossierRecord.test.ts)
- [src/dossiers/domain/DossierRecord.ts](src/dossiers/domain/DossierRecord.ts)
- [src/dossiers/domain/DossierReference.test.ts](src/dossiers/domain/DossierReference.test.ts)
- [src/dossiers/domain/DossierReference.ts](src/dossiers/domain/DossierReference.ts)
- [src/dossiers/infrastructure/DossiersRepository.test.ts](src/dossiers/infrastructure/DossiersRepository.test.ts)
- [src/dossiers/infrastructure/DossiersRepository.ts](src/dossiers/infrastructure/DossiersRepository.ts)
- [src/dossiers/ui/DossiersDisplay.sass](src/dossiers/ui/DossiersDisplay.sass)
- [src/dossiers/ui/DossiersDisplay.test.tsx](src/dossiers/ui/DossiersDisplay.test.tsx)
- [src/dossiers/ui/DossiersDisplay.tsx](src/dossiers/ui/DossiersDisplay.tsx)
- [src/dossiers/ui/DossiersGroupedDisplay.test.tsx](src/dossiers/ui/DossiersGroupedDisplay.test.tsx)
- [src/dossiers/ui/DossiersGroupedDisplay.tsx](src/dossiers/ui/DossiersGroupedDisplay.tsx)

### Key Tests

- [src/dossiers/application/DossiersService.test.ts](src/dossiers/application/DossiersService.test.ts)
- [src/dossiers/domain/DossierRecord.test.ts](src/dossiers/domain/DossierRecord.test.ts)
- [src/dossiers/domain/DossierReference.test.ts](src/dossiers/domain/DossierReference.test.ts)
- [src/dossiers/infrastructure/DossiersRepository.test.ts](src/dossiers/infrastructure/DossiersRepository.test.ts)
- [src/dossiers/ui/DossiersDisplay.test.tsx](src/dossiers/ui/DossiersDisplay.test.tsx)
- [src/dossiers/ui/DossiersGroupedDisplay.test.tsx](src/dossiers/ui/DossiersGroupedDisplay.test.tsx)
