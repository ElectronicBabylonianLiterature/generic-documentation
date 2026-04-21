# Testing Strategy

## Frameworks
- Jest
- React Testing Library
- Feature fixtures and test drivers in `src/test-support`

## Test Organization
- Domain tests adjacent to domain files.
- UI behavior tests adjacent to components.
- Security-focused tests in `src/__tests__`.
- Regression-specific tests included for previously fixed defects.

## Coverage Philosophy
- Tests emphasize both behavior and transformation logic.
- DTO conversion, repository delegation, and rendering edge cases are heavily exercised.
- Fixture builders are used to avoid brittle literal-heavy tests.

## Common Test Utilities
- `FakeApi` for controlled API behavior.
- Driver abstractions for app and feature rendering.
- Shared fixtures for fragments, texts, words, and sign data.

## Risk Areas To Validate In Changes
- Auth/session-dependent UI states.
- API error handling and fallback alerts.
- Transliteration parsing and lemmatization flows.
- Alignment and chapter rendering in corpus features.

## Recommended Validation Command Set
- `yarn test`
- `yarn lint`
- `yarn build`
