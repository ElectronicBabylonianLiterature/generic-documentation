# Architecture

## Purpose

Describe how `ebl-frontend` is composed, the layering each domain
follows, the cross-cutting modules, and the runtime flow of a typical
request.

## Entry Points

| File | Role |
|---|---|
| `src/index.tsx` | App bootstrap — Sentry init, root provider composition, mounts the router. |
| `src/App.tsx` | Top-level shell — error boundary, layout, session/auth provider wiring. |
| `src/router/router.tsx` | Route graph composition; combines per-domain router modules. |
| `craco.config.js` | CRA overrides (Webpack, Babel, environment); read on every `yarn start`/`yarn build`. |

## Layered Model (per domain)

Every `src/<domain>/` folder follows the same layered split:

| Layer | Responsibility | Typical Locations |
|---|---|---|
| UI | Render pages, collect user input, present success/error state | `src/<domain>/ui`, `src/<domain>/*.tsx` |
| Application | Use-case orchestration, workflow logic | `src/<domain>/application` |
| Domain | Entities, value objects, transformation rules | `src/<domain>/domain` |
| Infrastructure | Repository adapters, DTO ↔ domain mapping, endpoint composition | `src/<domain>/infrastructure` |
| Transport / Auth | HTTP transport, token retrieval, API error normalization | `src/http`, `src/auth` |

### Canonical Dependency Direction

`UI → Application → Infrastructure → Transport/Auth → Backend`

Rules:

- UI components do not call transport directly; they go through
  application services.
- Repositories own endpoint path composition and payload mapping; UI
  must not see DTO shapes directly.
- Domain logic must remain decoupled from rendering.
- Shared primitives belong in `src/common`, `src/http`, or `src/auth` —
  never duplicated inside feature folders.

### Anti-Patterns to Avoid

- Service logic embedded directly in presentational components.
- DTO shapes leaked to UI without domain mapping.
- Endpoint-specific path strings constructed in multiple layers.
- Route logic mixed into unrelated feature modules.

## Cross-Cutting Modules

| Module | Role |
|---|---|
| `src/auth` | Auth0 SPA SDK wiring, `SessionContext`, scope-aware `isAllowedTo*` helpers. See [Data and API](./02-data-and-api.md). |
| `src/http` | `ApiClient` (`fetchJson`, `postJson`, `putJson`, `fetchBlob`), `ApiError` normalization. |
| `src/router` | Route graph and per-domain route modules (see [Routes and Features](./03-routes-and-features.md)). |
| `src/common` | Shared components, hooks, error boundaries, guards. |
| `src/query` | Shared query model and helpers used by Dictionary, Signs, AfO Register, and Fragmentarium search. |
| `src/test-support` | `FakeApi`, drivers, fixtures used by tests in every domain. |

## Async and Cancellation Model

- Repository methods are the primary async seam. They return
  cancellable Bluebird promises so that components unmounting (or routes
  switching) can cancel pending requests safely. This avoids the
  ["isMounted is an antipattern"](https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html)
  problem.
- Bluebird is interoperable with native Promises. Use a Bluebird promise
  whenever `Promise.cancel()` is needed, otherwise native Promises are
  fine.
- Component-level state is updated with [Immer](https://immerjs.github.io/immer/)
  to keep updates explicit and immutable.

## Authentication and Authorization

- The Auth0 SPA SDK (`@auth0/auth0-spa-js`) acquires tokens; the token
  retrieval failure surfaces through the same path as any other API
  failure.
- `SessionContext` exposes the current session and capability checks
  (`isAllowedToReadFragments`, `isAllowedToReadTexts`, etc.) that the UI
  uses to gate routes, components, and mutation buttons.
- A single Auth0 SPA must be configured with the frontend's root URL in
  Callback URLs, Logout URLs, and Web Origins. Production additionally
  requires the Auth0 domain in CSP `frame-src`. See [Build and
  Operations](./04-build-and-operations.md).
- Backend scope semantics (which scope guards which route family) are
  documented in
  [backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md#authorization-coverage)
  and are not duplicated here.

## Error and Recovery Model

1. `ApiClient` normalizes non-OK HTTP responses into `ApiError`.
2. Repositories may translate `ApiError` into domain-specific errors at
   their boundary; mapping errors fail fast.
3. Application services / UI choose between recoverable inline state
   (alert) and unrecoverable boundary fallback.
4. The top-level error boundary in `src/common` prevents route-level
   crashes from cascading.
5. Sentry captures the unhandled cases for production triage.

## Request Lifecycle Example

Loading a fragment record (`/library/:id`):

1. The route is matched in `src/router/fragmentariumRoutes.tsx`.
2. The page component reads `:id` and calls a fragment service in
   `src/fragmentarium/application/`.
3. The service delegates to the fragment repository under
   `src/fragmentarium/infrastructure/`, which composes the path
   `/fragments/{number}` and calls `ApiClient.fetchJson(...)`.
4. `ApiClient` retrieves the Auth0 token (when `authenticate=true`),
   issues the request, and normalizes any non-OK response into
   `ApiError`.
5. The repository maps the DTO into the domain `Fragment` model and
   returns it.
6. The page renders, gated by `SessionContext.isAllowedToReadFragments`.
   On failure, the error boundary or an inline alert handles recovery.

## State Boundaries

- **UI state** — local component state, route-derived state.
- **Workflow state** — application services coordinating repository
  calls; tested via fakes from `src/test-support`.
- **Async boundary** — repository / transport methods.
- **Cancellation boundary** — Bluebird-cancellable promises at the
  repository level; rapid route transitions must not produce stale
  updates.

### Data Fetching with `withData`

The higher-order component at `src/http/withData.tsx` is the standard
seam between a presentational component and the async data it needs.
Wrapping a component in `withData` lets the wrapper manage the promise
lifecycle (spinner → fetch → unwrap → render) so the inner component
only deals with resolved data.

```ts
export default withData<
  { text: string },                  // A: shared props
  { markupService: MarkupService },  // B: getter-only props
  readonly MarkupPart[]              // C: data type
>(
  ({ data }): JSX.Element => MarkupText(data),                  // D: display
  ({ markupService, text }) => markupService.fromString(text),  // E: getter
);

// call site
<Markup
  markupService={markupService}                  // matches B
  text="Refer to @bib{foobar2024} (@i{sic!})."  // matches A
/>
```

- **A** — props passed to both the display component (D) and the getter
  (E). Every prop in A must be supplied at the call site.
- **B** — extra props for the getter only. Also required at the call
  site; not visible to D.
- **C** — the data type passed to D. The getter must return a promise
  resolving to this type (in the example, the call signatures of
  `MarkupText(parts: readonly MarkupPart[])` and
  `markupService.fromString(text: string): Bluebird<readonly MarkupPart[]>`
  match).
- **D** — receives `data` plus the props from A. Props from B are not
  visible here.
- **E** — issues the request, typically as a method on a service or
  repository.

Optional behavior knobs (watching prop changes to trigger a reload,
default values, error handling) are passed through `withData`’s
additional options — see the implementation at
`src/http/withData.tsx` for the full signature.

## Risk Hotspots

- Model drift across `src/transliteration`, `src/corpus`, and
  `src/fragmentarium` — shared types must change together.
- Auth/session assumptions for protected mutations.
- Route path changes that break deep links or bookmarks.
- Backend contract changes not reflected in the matching repository
  mapper. Cross-check
  [backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md).

## Change-Safety Checklist

- Verify dependency direction is intact.
- Update [Routes and Features](./03-routes-and-features.md) for any
  route change.
- Update [Data and API](./02-data-and-api.md) for any contract change.
- Add or update tests at the seam where behavior changed.
- Validate fallback behavior for partial or invalid payloads.
- Avoid new cross-domain imports without explicit architectural
  rationale.

## Related

- [Overview](./00-overview.md)
- [Data and API](./02-data-and-api.md)
- [Routes and Features](./03-routes-and-features.md)
- [Contributing](./05-contributing.md)
- [backend-docs/01-architecture.md](../backend-docs/01-architecture.md)

## Last Reviewed

2026-05-06
