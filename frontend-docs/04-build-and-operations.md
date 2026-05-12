# Build and Operations

Created: 2026-05-06

## Purpose

Document the artifacts, scripts, environment, CI workflows, and
deployment posture of `ebl-frontend`.

## Runtime and Tooling

- Node 20 (`.nvmrc`).
- Yarn (Berry / Classic — see `.yarnrc.yml`, `.yarnrc`).
- Chrome (required for Lighthouse).
- Git LFS — required by Git hooks for files tracked under LFS.
- `ggshield` — required for the secret-scanning pre-commit hook;
  provisioned automatically in the dev container.

## Build Artifacts

| File | Purpose |
|---|---|
| `package.json` | Scripts, dependencies, version pins. |
| `yarn.lock` | Resolved dependency tree. |
| `tsconfig.json` | TypeScript compilation settings. |
| `craco.config.js` | CRA Webpack/Babel/env overrides — read by every dev/build invocation. |
| `eslint.config.js`, `.eslintrc.json` | Lint rules (flat + legacy configs coexist). |
| `.stylelintrc.json` | Stylelint rules for SCSS/CSS. |
| `Dockerfile` | Production image used by the Swarmpit deployment. |
| `.dockerignore` | Image build context. |
| `patches/` | Patched indirect dependencies (notably `history` v4 for `react-router` v5). |
| `public/` | Static assets, including `public/sitemap/`. |
| `scripts/` | Helper scripts including `scripts/updateSitemaps.js`. |

### Production Build Note

In production environments,
[`INLINE_RUNTIME_CHUNK`](https://create-react-app.dev/docs/advanced-configuration)
must be set to `false`. Inlined runtime chunks violate the production
Content Security Policy.

## Environment Configuration

The application reads its configuration from these environment
variables (typically defined in `.env.local` for local development):

```env
REACT_APP_AUTH0_DOMAIN=<Auth0 domain>
REACT_APP_AUTH0_CLIENT_ID=<Auth0 client ID>
REACT_APP_AUTH0_AUDIENCE=<Auth0 audience>
REACT_APP_DICTIONARY_API_URL=<eBL API URL>
REACT_APP_SENTRY_DSN=<Sentry DSN>
REACT_APP_CORRECTIONS_EMAIL=<Email for submitting corrections>
REACT_APP_INFO_EMAIL=<Email for general questions and contact>
REACT_APP_GA_TRACKING_ID=<Google Analytics 4 measurement ID>
```

Additional variables used by tooling:

- `GITGUARDIAN_API_KEY` — required for the local secret-scanning hook
  and for CI; also used by the dev container.

The repository ships `.env` (legacy default, intentionally checked in
since 6+ years ago) and `.env.test` (test defaults, secret-scan-safe).
**Never** commit a real `.env.local`.

## Scripts

The canonical scripts (from `package.json`) used during development and
release:

| Command | Purpose |
|---|---|
| `yarn install` | Install dependencies; runs the `history` patch via `patches/`. |
| `yarn start` | Development server; reads `.env.local`. |
| `yarn build` | Production bundle (CRA + CRACO). |
| `yarn lint` | ESLint + Stylelint. |
| `yarn tsc` | Type-check without emitting. |
| `yarn test` | Jest + RTL. |
| `yarn test --coverage --watchAll` | Coverage run. |
| `yarn test:secrets` | Synthetic secret-scanning regression checks. |
| `yarn lighthouse <url>` | Lighthouse audit (requires Chrome). |

## Continuous Integration

CI workflows live under `.github/workflows/`. The active set:

| Workflow | Role |
|---|---|
| `main.yml` | Lint, type-check, tests, build on every PR and push to `master`. |
| `codeql.yml` | GitHub CodeQL security analysis. |
| `secret-scan.yml` | GitGuardian `ggshield` scan. |
| `update-sitemaps.yml` | Weekly automated sitemap regeneration + auto-merging PR. |

Treat green CI as a release gate; no known-failing checks should be
shipped.

## Secret Scanning

- Pre-commit: Husky-driven `ggshield secret scan pre-commit`. The
  Codespaces / dev container image installs `ggshield` automatically.
- Authenticate locally with `ggshield auth login` (in the dev container)
  before running scans.
- Manual commands:

```sh
ggshield secret scan pre-commit
ggshield secret scan path --recursive --use-gitignore .
```

- A regression suite is available via `yarn test:secrets`.
- Provisioning a `GITGUARDIAN_API_KEY`:

  1. Create a token at <https://dashboard.gitguardian.com> with at
     least the `scan` scope.
  2. Add it to `.env.local` for local use.
  3. Add it to repository secrets for CI.

- On a positive finding: investigate the alert in GitGuardian, replace
  any real secret immediately (do not commit it), and prefer
  dynamically-generated values for any test-payload fixtures.

## Performance: Lighthouse

Lighthouse is shipped as a development dependency. Run audits with:

```sh
yarn lighthouse <url>
```

Chrome is required.

## Security Headers and CSP

Production deployments must include the following in CSP:

| Directive | Origin to allow | Reason |
|---|---|---|
| `frame-src` | Auth0 domain | Auth0 universal login frame. |
| `frame-src` | Sentry domain | Sentry replay / error reporting frame. |
| `img-src` | `ebl-api` origin | `fetchBlob` image endpoints (photos, folios, thumbnails). |

Set `INLINE_RUNTIME_CHUNK=false` for production builds (see above).

The Mozilla HTTP Observatory grade is maintained at
<https://observatory.mozilla.org/analyze/www.ebl.lmu.de>.

## Sitemap Operations

Sitemap artifacts live under `public/sitemap/` and are served from
`/sitemap` and `/sitemap/sitemap.xml`.

### Automated Update (Recommended)

The `Update Sitemap` GitHub Actions workflow runs weekly and supports
manual triggering:

1. Go to the repository's **Actions** tab.
2. Select the workflow named **Update Sitemap**.
3. Click **Run workflow** and confirm.

The workflow regenerates the sitemap files, opens a PR with the changes,
and auto-merges once required checks pass. A redeploy through Swarmpit
is still required for the live site to pick up the refreshed sitemap.

### `SITEMAP_AUTOUPDATE` Token (Yearly Maintenance)

The workflow uses a fine-grained PAT stored as repository secret
`SITEMAP_AUTOUPDATE`. PATs expire — refresh approximately yearly:

1. Generate a fine-grained token at
   <https://github.com/settings/personal-access-tokens>.
2. Restrict it to the `ebl-frontend` repository.
3. Minimal scopes: `Contents: Read and write`, `Pull requests: Read
   and write`.
4. Set an expiration up to 12 months.
5. Update the `SITEMAP_AUTOUPDATE` repository secret with the new
   token.
6. If the PAT user changes, update `git config user.name` and
   `user.email` in `.github/workflows/update-sitemaps.yml`.

### Manual Update (Legacy Fallback)

1. Visit <https://www.ebl.lmu.de/sitemap>.
2. Wait until all `sitemap*.xml.gz` files are downloaded.
3. Replace the contents of `public/sitemap/` with the downloaded files.
4. Commit the changes to `master`.

## Deployment

Production deploys run on the LMU cluster via Swarmpit
(<https://www.ebl.lmu.de/cluster/swarmpit/#/stacks/ebl>). The Docker
image is built from `Dockerfile`. Sitemap refreshes require a redeploy
to take effect.

## Monitoring

- Sentry receives unhandled errors from the SPA (configured via
  `REACT_APP_SENTRY_DSN`). The Sentry project must list the production
  domain in **Allowed Domains**.
- Google Analytics 4 is wired through `REACT_APP_GA_TRACKING_ID` for
  usage-level telemetry.

## Required Services

| Service | Purpose |
|---|---|
| [eBL API](https://github.com/ElectronicBabylonianLiterature/ebl-api) | Backend; production domain must be allowed in CSP `img-src`. |
| [Auth0](https://auth0.com/) | Authentication; production domain must be allowed in CSP `frame-src`. |
| [Sentry](https://sentry.io/) | Error reporting; production domain must be in **Allowed Domains**. |

## Related

- [Architecture](./01-architecture.md)
- [Data and API](./02-data-and-api.md)
- [Routes and Features](./03-routes-and-features.md)
- [Contributing](./05-contributing.md)
- [backend-docs/05-operations.md](../backend-docs/05-operations.md)

## Last Reviewed

2026-05-06
