# Build and Operations

## Build Modes
- Development build via CRA+craco.
- Production build via `yarn build`.

## craco Customization
`craco.config.js` customizes webpack behavior and supports fast local mode by conditionally disabling slower checks.

## Docker
`Dockerfile` builds and serves production artifacts in containerized environments. It includes system dependencies needed by image/canvas-related packages.

## CI/CD
GitHub workflows under `.github/workflows/` cover:
- Main CI pipeline (lint/test/build and associated checks)
- CodeQL analysis
- Sitemap update automation

## Sitemap and Search Engine Artifacts
- Source files in `public/sitemap/`
- Maintenance scripts in `scripts/updateSitemaps.js`

## Monitoring and Observability
- Error reporting through Sentry.
- Frontend analytics instrumentation.

## Operational Checks
- Verify build reproducibility in CI and Docker.
- Confirm sitemap generation for release updates.
- Check static file serving behavior (`public/serve.json` / generated equivalents).
