# Contributing

## Purpose

Local setup, code style, test discipline, PR expectations, and
doc-update obligations for `ebl-frontend`. The authoritative upstream
README is at
[ElectronicBabylonianLiterature/ebl-frontend](https://github.com/ElectronicBabylonianLiterature/ebl-frontend).

## Development Environment

Two supported setups:

### Codespaces / Dev Container (Recommended)

The repository ships a `.devcontainer/` configuration with Node 20,
Yarn, Chrome, and `ggshield` pre-installed.

1. On GitHub, open the repository and use the **Code** → **Codespaces**
   tab to create a new codespace.
2. **Open the codespace in VS Code Desktop** when prompted (the dev
   container needs the desktop app to function correctly).
3. Dependencies are installed automatically by the `postCreateCommand`;
   `yarn install` can be re-run manually if needed.
4. Authenticate `ggshield` once per codespace: `ggshield auth login`.
5. Configure required env in `.env.local` (see [Build and
   Operations](./04-build-and-operations.md)).

### Local Installation

1. Install Node 20, Yarn, Git LFS, and `ggshield`. Set
   `GITGUARDIAN_API_KEY` in your shell.
2. Install Chrome (Lighthouse requirement).
3. Clone:

   ```sh
   git clone https://github.com/ElectronicBabylonianLiterature/ebl-frontend.git
   cd ebl-frontend
   ```

4. `yarn install` — runs the patch script for `history` (an indirect
   dependency of `react-router` v5).
5. Configure `.env.local` (see [Build and
   Operations](./04-build-and-operations.md)).
6. `yarn start`.

## Required Services

To exercise the full app you need:

- An [eBL API](https://github.com/ElectronicBabylonianLiterature/ebl-api)
  instance reachable at `REACT_APP_DICTIONARY_API_URL`.
- An [Auth0](https://auth0.com/) SPA configured with this app's root
  URL in Callback URLs, Logout URLs, and Web Origins.
- A [Sentry](https://sentry.io/) project (optional for local; required
  for production-similar testing).

## Quality Gates

Run before requesting review:

| Command | What it does |
|---|---|
| `yarn lint` | ESLint + Stylelint. |
| `yarn tsc` | TypeScript type check (no emit). |
| `yarn test` | Jest + RTL. |
| `yarn test --coverage --watchAll` | Coverage run (no hard threshold; coverage should improve over time). |
| `yarn build` | Verifies the production bundle compiles. |
| `yarn lighthouse <url>` | Performance audit (run for performance-impacting changes). |

CI runs the same lint/type/test/build set on every PR; treat green CI
as a release gate.

## Code Style

- **Always TypeScript** (`.ts`, `.tsx`).
- **Prettier** for formatting; do not hand-format.
- **ESLint** + **Stylelint** for static analysis.
- **Domain modeling**: implement proper domain types instead of
  passing dictionaries.
- **Immutability**: prefer immutable value objects; use
  [Immer](https://immerjs.github.io/immer/) to update them.
- **Promises**: use [Bluebird](http://bluebirdjs.com/) when a
  cancellable promise is needed (component data loading); native
  Promises otherwise. See [Architecture](./01-architecture.md).
- Stick to the
  ["good parts"](https://smile.amazon.de/JavaScript-Parts-Working-Shallow-Grain/dp/0596517742)
  of JavaScript.
- Avoid the
  [common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library).

### HTML / CSS

- Use semantic HTML.
- Use [BEM](http://getbem.com/) naming for CSS classes.
- Use lowercase class names.

### Filenames

- TypeScript files with a default export keep the same name as the
  default export, e.g. `MyComponent.tsx`, `myFunction.tsx`.
- A component's CSS / SCSS file matches the component file name, e.g.
  `MyComponent.css` next to `MyComponent.tsx`.
- All other files and folders use kebab-case, e.g. `test-helpers.ts`.

### Git Blame and Line Endings

- The repository keeps blame-ignore revisions in
  `.git-blame-ignore-revs`. Enable locally:

  ```sh
  git config blame.ignoreRevsFile .git-blame-ignore-revs
  ```

- LF line endings are enforced via `.gitattributes` and
  `.editorconfig`.

## Testing

- Stack: Jest + React Testing Library; fixtures, fakes, and drivers
  in `src/test-support/` (notably `FakeApi`).
- Test levels:

  | Level | Scope | Goal |
  |---|---|---|
  | Domain | Pure functions and domain rules | Correct transformations and invariants. |
  | Repository | DTO ↔ domain mapping and `ApiError` handling | Contract alignment, safe failure modes. |
  | UI | Components and route behavior | User-visible correctness and resilience. |
  | Cross-feature regression | `src/__tests__/` and feature suites | Prevent recurrence of known defects. |

- High-risk scenarios that must always be covered:

  - Auth/session-dependent actions and gated flows.
  - API failures and fallback rendering.
  - Fragmentarium and corpus data transformations.
  - Transliteration and markup parsing.
  - Route-based rendering and deep-link states.

- Flaky tests: investigate the root cause; do not increase retries.
  Stabilize async tests by waiting on user-observable state. Persistent
  flakes are release blockers for the affected domain.

- TDD is recommended but not mandatory. There is no hard coverage
  threshold; coverage should improve over time.

## Branch and PR Workflow

- Use [GitHub Flow](https://guides.github.com/introduction/flow/): feature
  branches off `master`, PRs reviewed and merged into `master`.
- PR description should include:

  - Concise summary, scope, and risk level.
  - Explicit callouts for route or endpoint changes.
  - Rollback expectations for non-trivial behavior changes.
  - Validation notes (which gates were run).

- Resolve all review findings before requesting final approval.
- Husky pre-commit runs lint and `ggshield`; do not bypass with
  `--no-verify`.

## Doc-Update Obligations

When a PR changes the listed area, update the listed doc in the same
PR.

| Change type | Doc to update |
|---|---|
| Routes, deep links, navigation | [Routes and Features](./03-routes-and-features.md) |
| Repository / endpoint usage / mapping | [Data and API](./02-data-and-api.md) |
| Layering, cross-cutting wiring, error / Sentry handling | [Architecture](./01-architecture.md) |
| Build, env, CI, deployment, sitemap, secret-scanning, CSP | [Build and Operations](./04-build-and-operations.md) |
| New onboarding step, script, or PR rule | This doc |
| Backend contract drift the SPA must adapt to | Cross-link to [backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md) |

When release notes are needed, capture them per the upstream README's
release-notes practice and reference relevant doc updates.

## Lighthouse and Performance

For changes that may affect bundle size, runtime cost, or the home /
search / detail routes, run `yarn lighthouse <url>` and include the
delta in the PR description.

## Acknowledgements

The upstream `README.md` documents font and component acknowledgements
(Junicode; Assurbanipal/Esagil/Santakku/UllikummiA cuneifont webfonts;
the patched `Annotation.js` from `react-image-annotation`). Preserve
those notices when modifying related areas.

## Related

- [Overview](./00-overview.md)
- [Architecture](./01-architecture.md)
- [Data and API](./02-data-and-api.md)
- [Routes and Features](./03-routes-and-features.md)
- [Build and Operations](./04-build-and-operations.md)
- [backend-docs/06-contributing.md](../backend-docs/06-contributing.md)

## Last Reviewed

2026-05-06
