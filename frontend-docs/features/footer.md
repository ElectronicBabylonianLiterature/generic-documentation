# Feature: Footer

## Location
- `src/footer`

## Purpose
Contains footer-specific layout and content used across pages.

## Main Responsibilities
- Render global footer links and contextual content.
- Integrate with overall app layout and branding.

## Tests
- Snapshot or render tests where defined.

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

- Full file map: [docs/reference/file-maps/footer.md](docs/reference/file-maps/footer.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/footer/ui/Datenschutz.tsx](src/footer/ui/Datenschutz.tsx)
- [src/footer/ui/Impressum.tsx](src/footer/ui/Impressum.tsx)

### Key Tests

