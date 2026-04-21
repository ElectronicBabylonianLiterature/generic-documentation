# Feature: Authentication

## Location
- `src/auth`

## Purpose
Implements Auth0-based authentication, session representation, and auth-aware application behavior.

## Main Responsibilities
- Initialize and maintain auth provider state.
- Expose user/session context to UI and services.
- Supply access tokens for authenticated API calls.

## Key Modules
- `Auth.ts`: auth abstractions.
- `react-auth0-spa.tsx`: Auth0 SPA integration.
- `Session.ts` and `SessionContext.ts`: session model and React context.
- `createAuth0Config.ts`: environment-based auth configuration.
- `applicationScopes.json`: scope metadata.

## Tests
- Auth service and session model tests, including auth provider behaviors.

## Risks
- Scope mismatch between backend requirements and frontend assumptions.
- Redirect/callback state regressions during auth library upgrades.

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

- Full file map: [docs/reference/file-maps/auth.md](docs/reference/file-maps/auth.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/auth/Auth0AuthenticationService.test.tsx](src/auth/Auth0AuthenticationService.test.tsx)
- [src/auth/Auth0AuthenticationService.tsx](src/auth/Auth0AuthenticationService.tsx)
- [src/auth/Auth.ts](src/auth/Auth.ts)
- [src/auth/createAuth0Config.ts](src/auth/createAuth0Config.ts)
- [src/auth/react-auth0-spa.test.tsx](src/auth/react-auth0-spa.test.tsx)
- [src/auth/react-auth0-spa.tsx](src/auth/react-auth0-spa.tsx)
- [src/auth/SessionContext.ts](src/auth/SessionContext.ts)
- [src/auth/Session.test.ts](src/auth/Session.test.ts)
- [src/auth/Session.ts](src/auth/Session.ts)
- [src/auth/User.test.tsx](src/auth/User.test.tsx)
- [src/auth/User.tsx](src/auth/User.tsx)

### Key Tests

- [src/auth/Auth0AuthenticationService.test.tsx](src/auth/Auth0AuthenticationService.test.tsx)
- [src/auth/react-auth0-spa.test.tsx](src/auth/react-auth0-spa.test.tsx)
- [src/auth/Session.test.ts](src/auth/Session.test.ts)
- [src/auth/User.test.tsx](src/auth/User.test.tsx)
