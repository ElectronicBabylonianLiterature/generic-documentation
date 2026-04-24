# Testing Strategy

## Purpose
Define how the frontend validates domain behavior, UI behavior, and contract correctness with a predictable release gate.

## Testing Stack
- Jest
- React Testing Library
- Feature fixtures, fakes, and drivers from `src/test-support`

## Test Levels and Focus

| Level | Scope | Primary Goal |
| --- | --- | --- |
| Domain | Pure functions and domain rules | Correct transformations and invariants |
| Repository | DTO mapping and API error handling | Contract alignment and safe failure modes |
| UI | Component and route behavior | User-visible correctness and resilience |
| Security/Regression | Cross-feature scenarios | Prevent recurrence of known defects |

## Test Design Model
- Domain tests validate pure transformations and invariants.
- Repository tests validate API mapping and error semantics.
- UI tests validate rendering, state transitions, and user interactions.
- Security and cross-feature regression tests live under `src/__tests__` and feature test suites.

## Coverage Expectations
- Cover both behavior and data-shape transformations.
- Add regression coverage for every production defect fix.
- Focus on seams where mapping or auth behavior can fail.
- Prefer stable, intent-focused assertions over implementation-detail assertions.

## High-Risk Scenarios (Always Validate)
- Auth/session-dependent actions and guarded flows.
- API failures and fallback rendering behavior.
- Fragmentarium and corpus data transformations.
- Transliteration and markup parsing behavior.
- Route-based rendering and deep-link states.

## Common Utilities
- `FakeApi` for deterministic API behavior.
- Driver abstractions for UI interaction and assertions.
- Shared fixtures for fragments, corpus text, words, and signs.

## Contract Testing Guidance
- Validate mapping from backend payload shape to domain model for each changed endpoint.
- Test non-OK responses and partial payload behavior.
- Assert fallback rendering behavior for recoverable error states.

## Required Validation Commands
- `yarn test`
- `yarn lint`
- `yarn tsc`
- `yarn build`

## Flaky Test Policy
- Investigate root cause instead of increasing retries by default.
- Stabilize async tests with explicit waiting on user-observable state.
- Treat persistent flakes as release blockers for affected domains.

## Documentation Expectations
- If test strategy changes, update this file in the same change.
- If a feature adds new contract risk, update [../reference/api-and-data-contracts.md](../reference/api-and-data-contracts.md).
- If route behavior changes materially, update [../reference/route-catalog.md](../reference/route-catalog.md).
