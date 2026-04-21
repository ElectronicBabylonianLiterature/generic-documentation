# Feature: AFO Register

## Location
- `src/afo-register`

## Purpose
Provides AFO register search and suggestion workflows for specialized records and related fragment lookups.

## Main Responsibilities
- Query records by search criteria.
- Provide auto-suggestion data for user input workflows.
- Bridge register records to fragment-related navigation.

## Layering
- `application/`: service orchestration.
- `domain/`: record and suggestion models.
- `infrastructure/`: API repository implementation.
- `ui/`: search forms and result displays.

## Tests
- Repository/service interaction tests and UI behavior tests where present.

## Risks
- Suggestion and full-search consistency may diverge if backend contracts change.

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

- Full file map: [docs/reference/file-maps/afo-register.md](docs/reference/file-maps/afo-register.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/afo-register/application/AfoRegisterService.test.ts](src/afo-register/application/AfoRegisterService.test.ts)
- [src/afo-register/application/AfoRegisterService.ts](src/afo-register/application/AfoRegisterService.ts)
- [src/afo-register/domain/Record.test.ts](src/afo-register/domain/Record.test.ts)
- [src/afo-register/domain/Record.ts](src/afo-register/domain/Record.ts)
- [src/afo-register/infrastructure/AfoRegisterRepository.test.ts](src/afo-register/infrastructure/AfoRegisterRepository.test.ts)
- [src/afo-register/infrastructure/AfoRegisterRepository.ts](src/afo-register/infrastructure/AfoRegisterRepository.ts)
- [src/afo-register/ui/AfoRegisterDisplay.test.tsx](src/afo-register/ui/AfoRegisterDisplay.test.tsx)
- [src/afo-register/ui/AfoRegisterDisplay.tsx](src/afo-register/ui/AfoRegisterDisplay.tsx)
- [src/afo-register/ui/AfoRegisterFragmentRecords.test.tsx](src/afo-register/ui/AfoRegisterFragmentRecords.test.tsx)
- [src/afo-register/ui/AfoRegisterFragmentRecords.tsx](src/afo-register/ui/AfoRegisterFragmentRecords.tsx)
- [src/afo-register/ui/AfoRegisterSearchForm.test.tsx](src/afo-register/ui/AfoRegisterSearchForm.test.tsx)
- [src/afo-register/ui/AfoRegisterSearchForm.tsx](src/afo-register/ui/AfoRegisterSearchForm.tsx)
- [src/afo-register/ui/AfoRegisterSearchPage.tsx](src/afo-register/ui/AfoRegisterSearchPage.tsx)
- [src/afo-register/ui/AfoRegisterSearch.test.tsx](src/afo-register/ui/AfoRegisterSearch.test.tsx)
- [src/afo-register/ui/AfoRegisterSearch.tsx](src/afo-register/ui/AfoRegisterSearch.tsx)

### Key Tests

- [src/afo-register/application/AfoRegisterService.test.ts](src/afo-register/application/AfoRegisterService.test.ts)
- [src/afo-register/domain/Record.test.ts](src/afo-register/domain/Record.test.ts)
- [src/afo-register/infrastructure/AfoRegisterRepository.test.ts](src/afo-register/infrastructure/AfoRegisterRepository.test.ts)
- [src/afo-register/ui/AfoRegisterDisplay.test.tsx](src/afo-register/ui/AfoRegisterDisplay.test.tsx)
- [src/afo-register/ui/AfoRegisterFragmentRecords.test.tsx](src/afo-register/ui/AfoRegisterFragmentRecords.test.tsx)
- [src/afo-register/ui/AfoRegisterSearchForm.test.tsx](src/afo-register/ui/AfoRegisterSearchForm.test.tsx)
- [src/afo-register/ui/AfoRegisterSearch.test.tsx](src/afo-register/ui/AfoRegisterSearch.test.tsx)
- [src/afo-register/ui/AfoRegisterTextSelect.test.tsx](src/afo-register/ui/AfoRegisterTextSelect.test.tsx)
