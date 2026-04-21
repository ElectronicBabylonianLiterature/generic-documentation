# Feature: Signs

## Location
- `src/signs`

## Purpose
Supports cuneiform sign lookup, metadata presentation, and sign/image associations.

## Main Responsibilities
- Search and retrieve sign records.
- Render sign detail and related variants/readings.
- Associate sign metadata with tokens/annotations.

## Layering
- `application/SignService.ts`
- `domain/Sign.ts` and related sign types
- `infrastructure/SignRepository.ts`
- `ui/*` for search, list, and detail pages

## Tests
- Sign model/search and mapping tests.

## Risks
- Sign normalization and search matching can regress with backend schema updates.

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

- Full file map: [docs/reference/file-maps/signs.md](docs/reference/file-maps/signs.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/signs/application/SignService.test.ts](src/signs/application/SignService.test.ts)
- [src/signs/application/SignService.ts](src/signs/application/SignService.ts)
- [src/signs/domain/CroppedAnnotation.ts](src/signs/domain/CroppedAnnotation.ts)
- [src/signs/domain/Sign.test.ts](src/signs/domain/Sign.test.ts)
- [src/signs/domain/Sign.ts](src/signs/domain/Sign.ts)
- [src/signs/infrastructure/SignRepository.test.ts](src/signs/infrastructure/SignRepository.test.ts)
- [src/signs/infrastructure/SignRepository.ts](src/signs/infrastructure/SignRepository.ts)
- [src/signs/ui/CuneiformConverter/CuneiformConverterForm.sass](src/signs/ui/CuneiformConverter/CuneiformConverterForm.sass)
- [src/signs/ui/CuneiformConverter/CuneiformConverterForm.test.tsx](src/signs/ui/CuneiformConverter/CuneiformConverterForm.test.tsx)
- [src/signs/ui/CuneiformConverter/CuneiformConverterForm.tsx](src/signs/ui/CuneiformConverter/CuneiformConverterForm.tsx)
- [src/signs/ui/display/CompositeSigns.test.tsx](src/signs/ui/display/CompositeSigns.test.tsx)
- [src/signs/ui/display/CompositeSigns.tsx](src/signs/ui/display/CompositeSigns.tsx)
- [src/signs/ui/display/SignDisplay.test.tsx](src/signs/ui/display/SignDisplay.test.tsx)
- [src/signs/ui/display/SignDisplay.tsx](src/signs/ui/display/SignDisplay.tsx)
- [src/signs/ui/display/SignFossey.tsx](src/signs/ui/display/SignFossey.tsx)

### Key Tests

- [src/signs/application/SignService.test.ts](src/signs/application/SignService.test.ts)
- [src/signs/domain/Sign.test.ts](src/signs/domain/Sign.test.ts)
- [src/signs/infrastructure/SignRepository.test.ts](src/signs/infrastructure/SignRepository.test.ts)
- [src/signs/ui/CuneiformConverter/CuneiformConverterForm.test.tsx](src/signs/ui/CuneiformConverter/CuneiformConverterForm.test.tsx)
- [src/signs/ui/CuneiformConverter/__snapshots__/CuneiformConverterForm.test.tsx.snap](src/signs/ui/CuneiformConverter/__snapshots__/CuneiformConverterForm.test.tsx.snap)
- [src/signs/ui/display/CompositeSigns.test.tsx](src/signs/ui/display/CompositeSigns.test.tsx)
- [src/signs/ui/display/SignDisplay.test.tsx](src/signs/ui/display/SignDisplay.test.tsx)
- [src/signs/ui/display/SignImages.test.tsx](src/signs/ui/display/SignImages.test.tsx)
- [src/signs/ui/display/SignInformation.test.tsx](src/signs/ui/display/SignInformation.test.tsx)
- [src/signs/ui/search/MesZL.test.tsx](src/signs/ui/search/MesZL.test.tsx)
- [src/signs/ui/search/SignSearch.test.tsx](src/signs/ui/search/SignSearch.test.tsx)
- [src/signs/ui/search/SignsSearchForm.test.tsx](src/signs/ui/search/SignsSearchForm.test.tsx)
- [src/signs/ui/search/Signs.test.tsx](src/signs/ui/search/Signs.test.tsx)
- [src/signs/ui/search/__snapshots__/MesZL.test.tsx.snap](src/signs/ui/search/__snapshots__/MesZL.test.tsx.snap)
