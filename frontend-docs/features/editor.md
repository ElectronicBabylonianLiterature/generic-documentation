# Feature: Editor

## Location
- `src/editor`

## Purpose
Provides editor-related components/utilities used by editable feature pages.

## Main Responsibilities
- Shared editing widgets and controls.
- Validation and helper interactions for structured inputs.

## Integrations
- Used by edit-capable feature UIs (fragment and related content editors).

## Tests
- Component tests for editor controls and interactions where available.

## Risks
- Input handling regressions can affect multiple editable screens.

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

- Full file map: [docs/reference/file-maps/editor.md](docs/reference/file-maps/editor.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/editor/AtfMode.ts](src/editor/AtfMode.ts)
- [src/editor/Editor.test.tsx](src/editor/Editor.test.tsx)
- [src/editor/Editor.tsx](src/editor/Editor.tsx)
- [src/editor/SpecialCharactersHelp.tsx](src/editor/SpecialCharactersHelp.tsx)

### Key Tests

- [src/editor/Editor.test.tsx](src/editor/Editor.test.tsx)
