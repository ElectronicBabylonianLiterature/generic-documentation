# Feature: Akkadian

## Location
- `src/akkadian`

## Purpose
Contains language-centric utilities and domain abstractions used in Akkadian transcription/transliteration handling.

## Main Responsibilities
- Encapsulate Akkadian-specific textual rules and structures.
- Support upstream features that need script/linguistic transformations.

## Key Areas
- `domain/transcription/*`: transcription model logic and supporting types.
- UI adapters where applicable.

## Tests
- Domain utility tests for parsing/transformation behavior.

## Risks
- Linguistic edge cases can be subtle and require precise fixtures.

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

- Full file map: [docs/reference/file-maps/akkadian.md](docs/reference/file-maps/akkadian.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/akkadian/application/lexics/formOverrides.test.ts](src/akkadian/application/lexics/formOverrides.test.ts)
- [src/akkadian/application/lexics/formOverrides.ts](src/akkadian/application/lexics/formOverrides.ts)
- [src/akkadian/application/phonetics/ipa.test.ts](src/akkadian/application/phonetics/ipa.test.ts)
- [src/akkadian/application/phonetics/ipa.ts](src/akkadian/application/phonetics/ipa.ts)
- [src/akkadian/application/phonetics/meter.test.ts](src/akkadian/application/phonetics/meter.test.ts)
- [src/akkadian/application/phonetics/meter.ts](src/akkadian/application/phonetics/meter.ts)
- [src/akkadian/application/phonetics/segments.test.ts](src/akkadian/application/phonetics/segments.test.ts)
- [src/akkadian/application/phonetics/segments.ts](src/akkadian/application/phonetics/segments.ts)
- [src/akkadian/application/phonetics/syllables.test.ts](src/akkadian/application/phonetics/syllables.test.ts)
- [src/akkadian/application/phonetics/syllables.ts](src/akkadian/application/phonetics/syllables.ts)
- [src/akkadian/application/phonetics/transformations.test.ts](src/akkadian/application/phonetics/transformations.test.ts)
- [src/akkadian/application/phonetics/transformations.ts](src/akkadian/application/phonetics/transformations.ts)
- [src/akkadian/domain/transcription/transcription.ts](src/akkadian/domain/transcription/transcription.ts)
- [src/akkadian/ui/akkadianWordAnalysis.tsx](src/akkadian/ui/akkadianWordAnalysis.tsx)
- [src/akkadian/ui/akkadianWord.tsx](src/akkadian/ui/akkadianWord.tsx)

### Key Tests

- [src/akkadian/application/lexics/formOverrides.test.ts](src/akkadian/application/lexics/formOverrides.test.ts)
- [src/akkadian/application/phonetics/ipa.test.ts](src/akkadian/application/phonetics/ipa.test.ts)
- [src/akkadian/application/phonetics/meter.test.ts](src/akkadian/application/phonetics/meter.test.ts)
- [src/akkadian/application/phonetics/segments.test.ts](src/akkadian/application/phonetics/segments.test.ts)
- [src/akkadian/application/phonetics/syllables.test.ts](src/akkadian/application/phonetics/syllables.test.ts)
- [src/akkadian/application/phonetics/transformations.test.ts](src/akkadian/application/phonetics/transformations.test.ts)
