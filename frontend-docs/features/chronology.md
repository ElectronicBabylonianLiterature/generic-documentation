# Feature: Chronology

## Location
- `src/chronology`

## Purpose
Provides chronology tools and date representations for Mesopotamian temporal contexts.

## Main Responsibilities
- Define chronology domain objects.
- Render conversion and chronology helper tools in the UI.

## Key Areas
- `domain/Date.ts` and related domain types.
- `ui/DateConverterForm.tsx`, king list and chronology pages.

## Integrations
- Used in fragment/corpus contexts where dating metadata is displayed.

## Tests
- Date and chronology behavior tests.

## Risks
- Calendar conversion correctness depends on domain transformation precision.

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

- Full file map: [docs/reference/file-maps/chronology.md](docs/reference/file-maps/chronology.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/chronology/application/DateConverterFormChange.test.ts](src/chronology/application/DateConverterFormChange.test.ts)
- [src/chronology/application/DateConverterFormChange.ts](src/chronology/application/DateConverterFormChange.ts)
- [src/chronology/application/DateConverterFormFieldData.ts](src/chronology/application/DateConverterFormFieldData.ts)
- [src/chronology/application/DateSelectionInputConfig.ts](src/chronology/application/DateSelectionInputConfig.ts)
- [src/chronology/application/DateSelectionMethods.ts](src/chronology/application/DateSelectionMethods.ts)
- [src/chronology/application/DateSelectionState.ts](src/chronology/application/DateSelectionState.ts)
- [src/chronology/application/DateSelection.tsx](src/chronology/application/DateSelection.tsx)
- [src/chronology/domain/DateBase.ts](src/chronology/domain/DateBase.ts)
- [src/chronology/domain/DateConverterBase.ts](src/chronology/domain/DateConverterBase.ts)
- [src/chronology/domain/DateConverterChecks.ts](src/chronology/domain/DateConverterChecks.ts)
- [src/chronology/domain/DateConverterCompute.ts](src/chronology/domain/DateConverterCompute.ts)
- [src/chronology/domain/DateConverter.test.ts](src/chronology/domain/DateConverter.test.ts)
- [src/chronology/domain/DateConverter.ts](src/chronology/domain/DateConverter.ts)
- [src/chronology/domain/DateParameters.ts](src/chronology/domain/DateParameters.ts)
- [src/chronology/domain/DateRange.ts](src/chronology/domain/DateRange.ts)

### Key Tests

- [src/chronology/application/DateConverterFormChange.test.ts](src/chronology/application/DateConverterFormChange.test.ts)
- [src/chronology/domain/DateConverter.test.ts](src/chronology/domain/DateConverter.test.ts)
- [src/chronology/domain/Date.test.ts](src/chronology/domain/Date.test.ts)
- [src/chronology/ui/DateConverter/DateConverterForm.test.tsx](src/chronology/ui/DateConverter/DateConverterForm.test.tsx)
- [src/chronology/ui/DateEditor/DateSelectionInput.test.tsx](src/chronology/ui/DateEditor/DateSelectionInput.test.tsx)
- [src/chronology/ui/DateEditor/DateSelection.test.tsx](src/chronology/ui/DateEditor/DateSelection.test.tsx)
- [src/chronology/ui/DateEditor/DatesInTextSelection.test.tsx](src/chronology/ui/DateEditor/DatesInTextSelection.test.tsx)
- [src/chronology/ui/Kings/BrinkmanKingsTable.test.tsx](src/chronology/ui/Kings/BrinkmanKingsTable.test.tsx)
- [src/chronology/ui/Kings/Kings.test.tsx](src/chronology/ui/Kings/Kings.test.tsx)
