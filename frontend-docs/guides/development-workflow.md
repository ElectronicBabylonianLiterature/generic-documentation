# Development Workflow

## Prerequisites
- Node.js 20+
- Yarn (project expects Yarn workflows)
- Access to backend and Auth0 configuration for full integration testing

## Local Development
- Install dependencies: `yarn install`
- Start dev server: `yarn start`
- Fast mode (reduced checks): `yarn start:fast`

## Key Build/Config Files
- `package.json`: scripts, dependencies, test settings
- `tsconfig.json`: compiler strictness and module options
- `craco.config.js`: CRA overrides and optimization toggles
- `eslint.config.js`: linting rules and plugin configuration
- `.stylelintrc.json`: style linting

## Coding Pattern Expectations
- Keep feature logic in feature directories under `src/`.
- Place shared utilities/components in `src/common` only when reused.
- Keep domain models and DTO mapping explicit in domain/infrastructure layers.
- Prefer typed APIs and avoid untyped boundaries where possible.

## Static Assets and Public Files
- Public assets and manifest/sitemap files live in `public/`.
- Generated or distributed artifacts in `build/` are output artifacts, not source-of-truth.

## CI Hooks
- Husky hooks enforce pre-commit and pre-push checks.
- Linting, tests, and pipeline checks are defined in GitHub workflows.
