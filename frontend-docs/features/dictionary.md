# Feature: Dictionary

## Location
- `src/dictionary`

## Purpose
Provides lexical lookup, search, and word detail presentation for Akkadian entries.

## Main Responsibilities
- Query and display dictionary entries.
- Support lexical search across multiple criteria.
- Expose lexeme metadata to related transliteration/corpus workflows.

## Layering
- `application/WordService.ts`
- `domain/Word.ts` and comparison helpers
- `infrastructure/WordRepository.ts`
- `ui/*` for search forms and result pages

## Tests
- Word model and comparison strategy tests.
- Repository/service behavioral tests.

## Risks
- Search comparison rules and transliteration nuances require stable normalization.

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

- Full file map: [docs/reference/file-maps/dictionary.md](docs/reference/file-maps/dictionary.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/dictionary/application/WordService.test.ts](src/dictionary/application/WordService.test.ts)
- [src/dictionary/application/WordService.ts](src/dictionary/application/WordService.ts)
- [src/dictionary/domain/compareAkkadianStrings.test.ts](src/dictionary/domain/compareAkkadianStrings.test.ts)
- [src/dictionary/domain/compareAkkadianStrings.ts](src/dictionary/domain/compareAkkadianStrings.ts)
- [src/dictionary/domain/compareWordAGI.test.ts](src/dictionary/domain/compareWordAGI.test.ts)
- [src/dictionary/domain/compareWordAGI.ts](src/dictionary/domain/compareWordAGI.ts)
- [src/dictionary/domain/compareWord.test.ts](src/dictionary/domain/compareWord.test.ts)
- [src/dictionary/domain/compareWord.ts](src/dictionary/domain/compareWord.ts)
- [src/dictionary/domain/Word.ts](src/dictionary/domain/Word.ts)
- [src/dictionary/infrastructure/WordRepository.test.ts](src/dictionary/infrastructure/WordRepository.test.ts)
- [src/dictionary/infrastructure/WordRepository.ts](src/dictionary/infrastructure/WordRepository.ts)
- [src/dictionary/ui/dictionary-context.ts](src/dictionary/ui/dictionary-context.ts)
- [src/dictionary/ui/display/EmptySection.test.tsx](src/dictionary/ui/display/EmptySection.test.tsx)
- [src/dictionary/ui/display/EmptySection.tsx](src/dictionary/ui/display/EmptySection.tsx)
- [src/dictionary/ui/display/LemmaQueryLink.tsx](src/dictionary/ui/display/LemmaQueryLink.tsx)

### Key Tests

- [src/dictionary/application/WordService.test.ts](src/dictionary/application/WordService.test.ts)
- [src/dictionary/domain/compareAkkadianStrings.test.ts](src/dictionary/domain/compareAkkadianStrings.test.ts)
- [src/dictionary/domain/compareWordAGI.test.ts](src/dictionary/domain/compareWordAGI.test.ts)
- [src/dictionary/domain/compareWord.test.ts](src/dictionary/domain/compareWord.test.ts)
- [src/dictionary/infrastructure/WordRepository.test.ts](src/dictionary/infrastructure/WordRepository.test.ts)
- [src/dictionary/ui/display/EmptySection.test.tsx](src/dictionary/ui/display/EmptySection.test.tsx)
- [src/dictionary/ui/display/__snapshots__/wordDisplayLogograms.test.tsx.snap](src/dictionary/ui/display/__snapshots__/wordDisplayLogograms.test.tsx.snap)
- [src/dictionary/ui/display/wordDisplayLogograms.test.tsx](src/dictionary/ui/display/wordDisplayLogograms.test.tsx)
- [src/dictionary/ui/display/WordDisplay.test.tsx](src/dictionary/ui/display/WordDisplay.test.tsx)
- [src/dictionary/ui/editor/AmplifiedMeaningInput.test.tsx](src/dictionary/ui/editor/AmplifiedMeaningInput.test.tsx)
- [src/dictionary/ui/editor/AmplifiedMeaningList.test.tsx](src/dictionary/ui/editor/AmplifiedMeaningList.test.tsx)
- [src/dictionary/ui/editor/ArrayWithNotesList.test.tsx](src/dictionary/ui/editor/ArrayWithNotesList.test.tsx)
- [src/dictionary/ui/editor/ArrayWithNotes.test.tsx](src/dictionary/ui/editor/ArrayWithNotes.test.tsx)
- [src/dictionary/ui/editor/DerivedFromInput.test.tsx](src/dictionary/ui/editor/DerivedFromInput.test.tsx)
- [src/dictionary/ui/editor/DerivedList.test.tsx](src/dictionary/ui/editor/DerivedList.test.tsx)
