# Architecture Overview

## System Context

The frontend is a React + TypeScript single-page application for eBL scholarly workflows. It supports fragment research, corpus navigation, lexical lookup, sign analysis, bibliography management, and related editorial tools.

## System Boundaries

- In scope: UI composition, workflow orchestration, domain mapping, transport/auth integration, and release-time static assets.
- Out of scope: backend schema ownership, search indexing internals, and persistence-layer concerns outside HTTP contracts.

## Primary Entry Points

- `src/index.tsx`: app bootstrap and root provider composition.
- `src/App.tsx`: top-level shell wiring.
- `src/router/router.tsx`: route graph composition.

## Operational Backbone

- Auth and token access: `src/auth`
- HTTP transport and errors: `src/http`
- Shared boundaries and reusable primitives: `src/common`
- Route ownership and deep links: `src/router`

## Layered Model

| Layer | Responsibility | Typical Locations |
| --- | --- | --- |
| UI | Render pages, collect user actions, show success/error state | `src/*/ui`, `src/*/*.tsx` |
| Application | Use-case orchestration and workflow logic | `src/*/application` |
| Domain | Domain entities, value objects, transformation rules | `src/*/domain` |
| Infrastructure | Repository adapters, DTO conversion, backend integration boundaries | `src/*/infrastructure` |
| Transport/Auth | HTTP transport, token handling, API error normalization | `src/http`, `src/auth` |

## Canonical Dependency Direction

`UI -> Application -> Infrastructure -> Transport/Auth -> Backend`

### Rules

- UI components do not call transport directly.
- Repositories own endpoint path composition and payload mapping.
- Domain logic should remain decoupled from rendering concerns.
- Shared primitives live in `src/common`, `src/http`, or `src/auth` rather than being duplicated in feature folders.

### Architectural Anti-Patterns to Avoid

- Service logic embedded directly in presentational components.
- DTO shapes leaked directly to UI components without domain mapping.
- Endpoint-specific string/path construction repeated across multiple layers.
- Route logic mixed into unrelated feature modules.

## Runtime and Data Flow

1. Browser loads bundle and initializes providers in `src/index.tsx`.
2. Router mounts and resolves route branch in `src/router/router.tsx`.
3. UI triggers application service use-cases.
4. Services delegate to repositories for backend access.
5. Repositories call `ApiClient` methods (`fetchJson`, `postJson`, `putJson`, `fetchBlob`).
6. Response payloads are mapped to domain models and returned to UI.
7. Errors are normalized and surfaced through inline alerts or boundary fallbacks.

## State and Async Model

- UI state: local component state and route-derived state.
- Feature workflow state: application services coordinating repository calls.
- Async boundaries: repository methods and transport methods are the main async seam.
- Cancellation and race risk: request cancellation and rapid route transitions should be handled at service/repository boundaries.

## Error and Recovery Model

- Transport and non-OK HTTP responses are normalized by `ApiClient`.
- Feature-level handlers decide between recoverable UI state and hard-fail fallback.
- Error boundaries in `src/common` prevent route-level crashes from cascading.

## Cross-Cutting Concerns

- Authentication and scopes: `src/auth`
- Routing and deep links: `src/router`
- Shared components and guards: `src/common`
- Test fixtures and drivers: `src/test-support`

## Change Lifecycle for Architectural Safety

1. Identify impacted domain and layer boundary.
2. Confirm contract and route impact before coding.
3. Implement at the lowest responsible layer.
4. Add or update tests near changed seam.
5. Validate fallbacks and deep-link behavior.
6. Update docs and release notes.

## Risk Hotspots

- Model drift across transliteration, corpus, and fragmentarium mappings.
- Auth/session assumptions for protected mutations.
- Route path changes that break deep links or bookmarks.
- Backend contract changes not reflected in repository mappers.

## Change-Safety Checklist

- Verify dependency direction remains intact.
- Update API contracts and route catalog for behavior changes.
- Add or update tests at the seam where behavior changed.
- Validate fallback behavior for partial or invalid payloads.
- Ensure no new cross-domain coupling is introduced without explicit architectural rationale.
