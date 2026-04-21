# Feature: Corpus

## Location
- `src/corpus`

## Purpose
Implements corpus text browsing, chapter/line presentation, manuscript alignment, and lemmatization-driven workflows.

## Main Responsibilities
- Load texts/chapters and render scholarly text structures.
- Manage alignment representations across manuscripts.
- Handle chapter and line-level lemmatization interactions.

## Layering
- `application/`: service and alignment/lemmatization orchestration.
- `domain/`: text/chapter/line entities and transforms.
- `infrastructure/`: repository API adapters.
- `ui/`: corpus views, chapter pages, line and alignment displays.

## Cross-Feature Integrations
- Transliteration domain types.
- Dictionary references for lemma interactions.
- Bibliography reference injection paths.

## Tests
- Extensive domain transformation tests and chapter rendering/interaction tests.

## Risks
- Complex transformation paths (alignment and variants) can regress subtly.

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

- Full file map: [docs/reference/file-maps/corpus.md](docs/reference/file-maps/corpus.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/corpus/application/dtos.ts](src/corpus/application/dtos.ts)
- [src/corpus/application/line-factory.test.ts](src/corpus/application/line-factory.test.ts)
- [src/corpus/application/line-factory.ts](src/corpus/application/line-factory.ts)
- [src/corpus/application/populateIds.ts](src/corpus/application/populateIds.ts)
- [src/corpus/application/TextService.test.ts](src/corpus/application/TextService.test.ts)
- [src/corpus/application/TextService.ts](src/corpus/application/TextService.ts)
- [src/corpus/domain/alignment.ts](src/corpus/domain/alignment.ts)
- [src/corpus/domain/ChapterDisplay.test.ts](src/corpus/domain/ChapterDisplay.test.ts)
- [src/corpus/domain/ChapterInfosPagination.ts](src/corpus/domain/ChapterInfosPagination.ts)
- [src/corpus/domain/ChapterInfo.ts](src/corpus/domain/ChapterInfo.ts)
- [src/corpus/domain/chapter.ts](src/corpus/domain/chapter.ts)
- [src/corpus/domain/extant-lines.test.ts](src/corpus/domain/extant-lines.test.ts)
- [src/corpus/domain/extant-lines.ts](src/corpus/domain/extant-lines.ts)
- [src/corpus/domain/lemmatization.ts](src/corpus/domain/lemmatization.ts)
- [src/corpus/domain/LineDetails.test.ts](src/corpus/domain/LineDetails.test.ts)

### Key Tests

- [src/corpus/application/line-factory.test.ts](src/corpus/application/line-factory.test.ts)
- [src/corpus/application/TextService.test.ts](src/corpus/application/TextService.test.ts)
- [src/corpus/domain/ChapterDisplay.test.ts](src/corpus/domain/ChapterDisplay.test.ts)
- [src/corpus/domain/extant-lines.test.ts](src/corpus/domain/extant-lines.test.ts)
- [src/corpus/domain/LineDetails.test.ts](src/corpus/domain/LineDetails.test.ts)
- [src/corpus/domain/LineVariant.test.ts](src/corpus/domain/LineVariant.test.ts)
- [src/corpus/domain/ManuscriptLineDisplay.test.ts](src/corpus/domain/ManuscriptLineDisplay.test.ts)
- [src/corpus/domain/ManuscriptLine.test.ts](src/corpus/domain/ManuscriptLine.test.ts)
- [src/corpus/domain/manuscript.test.ts](src/corpus/domain/manuscript.test.ts)
- [src/corpus/domain/provenance.test.ts](src/corpus/domain/provenance.test.ts)
- [src/corpus/domain/text.test.ts](src/corpus/domain/text.test.ts)
- [src/corpus/ui/alignment/ChapterAligner.test.tsx](src/corpus/ui/alignment/ChapterAligner.test.tsx)
- [src/corpus/ui/ChapterCrumb.test.tsx](src/corpus/ui/ChapterCrumb.test.tsx)
- [src/corpus/ui/ChapterEditView.integration.test.ts](src/corpus/ui/ChapterEditView.integration.test.ts)
- [src/corpus/ui/chapter-title.test.tsx](src/corpus/ui/chapter-title.test.tsx)
