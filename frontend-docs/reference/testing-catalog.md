# Reference: Testing Catalog

## Purpose
Provides a map of testing strategy and where tests live by domain.

## Major Test Locations
- Root tests: `src/*.test.ts*`
- Shared/security tests: `src/__tests__/*`
- Feature-adjacent tests in each domain folder (`src/<feature>/**/*.test.ts*`)
- Fixture and utility support: `src/test-support/*`

## Coverage Themes
- Domain model correctness and transformations.
- Repository/service delegation behavior.
- UI rendering and interaction flows.
- Security-sensitive auth and API behaviors.
- Regression tests for previously identified defects.

## Operational Guidance
- Keep fixtures close to domain expectations.
- Update tests alongside behavior changes.
- Validate both happy-path and error-path behavior in high-risk modules.
