# Feature: Transliteration

## Location
- `src/transliteration`

## Purpose
Implements transliteration domain models and transformations for text/token processing used across corpus and fragment workflows.

## Main Responsibilities
- Represent transliterated text structures.
- Parse and transform token/lemma-related data.
- Support line-level rendering and editing workflows.

## Key Areas
- Domain token/text/lemma structures.
- Application-level adapters and reference integration helpers.

## Integrations
- Strongly coupled to corpus, fragmentarium, dictionary, and markup paths.

## Tests
- Broad domain transformation tests and regression guards.

## Risks
- Parsing and transformation logic is sensitive to edge-case notation.

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

- Full file map: [docs/reference/file-maps/transliteration.md](docs/reference/file-maps/transliteration.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/transliteration/application/dtos.ts](src/transliteration/application/dtos.ts)
- [src/transliteration/application/GlossaryFactory.test.ts](src/transliteration/application/GlossaryFactory.test.ts)
- [src/transliteration/application/GlossaryFactory.ts](src/transliteration/application/GlossaryFactory.ts)
- [src/transliteration/application/ReferenceInjector.test.ts](src/transliteration/application/ReferenceInjector.test.ts)
- [src/transliteration/application/ReferenceInjector.ts](src/transliteration/application/ReferenceInjector.ts)
- [src/transliteration/application/SubIndex.ts](src/transliteration/application/SubIndex.ts)
- [src/transliteration/domain/abstract-line.ts](src/transliteration/domain/abstract-line.ts)
- [src/transliteration/domain/accents.test.ts](src/transliteration/domain/accents.test.ts)
- [src/transliteration/domain/accents.ts](src/transliteration/domain/accents.ts)
- [src/transliteration/domain/at-lines.ts](src/transliteration/domain/at-lines.ts)
- [src/transliteration/domain/chapter-id.ts](src/transliteration/domain/chapter-id.ts)
- [src/transliteration/domain/columns.test.ts](src/transliteration/domain/columns.test.ts)
- [src/transliteration/domain/columns.ts](src/transliteration/domain/columns.ts)
- [src/transliteration/domain/dollar-lines.ts](src/transliteration/domain/dollar-lines.ts)
- [src/transliteration/domain/glossary.tsx](src/transliteration/domain/glossary.tsx)

### Key Tests

- [src/transliteration/application/GlossaryFactory.test.ts](src/transliteration/application/GlossaryFactory.test.ts)
- [src/transliteration/application/ReferenceInjector.test.ts](src/transliteration/application/ReferenceInjector.test.ts)
- [src/transliteration/domain/accents.test.ts](src/transliteration/domain/accents.test.ts)
- [src/transliteration/domain/columns.test.ts](src/transliteration/domain/columns.test.ts)
- [src/transliteration/domain/labels.test.ts](src/transliteration/domain/labels.test.ts)
- [src/transliteration/domain/Lemma.test.ts](src/transliteration/domain/Lemma.test.ts)
- [src/transliteration/domain/Lemmatization.test.ts](src/transliteration/domain/Lemmatization.test.ts)
- [src/transliteration/domain/line-numbers.test.ts](src/transliteration/domain/line-numbers.test.ts)
- [src/transliteration/domain/lineNumberToString.test.ts](src/transliteration/domain/lineNumberToString.test.ts)
- [src/transliteration/domain/parallel-line.test.ts](src/transliteration/domain/parallel-line.test.ts)
- [src/transliteration/domain/text-id.test.ts](src/transliteration/domain/text-id.test.ts)
- [src/transliteration/domain/TextLine.test.ts](src/transliteration/domain/TextLine.test.ts)
- [src/transliteration/domain/Text.test.ts](src/transliteration/domain/Text.test.ts)
- [src/transliteration/ui/AkkadianWordAnalysis.test.tsx](src/transliteration/ui/AkkadianWordAnalysis.test.tsx)
- [src/transliteration/ui/Glossary.test.tsx](src/transliteration/ui/Glossary.test.tsx)
