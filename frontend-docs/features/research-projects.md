# Feature: Research Projects

## Location
- `src/research-projects`

## Purpose
Represents and displays research project metadata and project-centric navigation.

## Main Responsibilities
- Define project model(s).
- Render project lists and detail sections.
- Link project context into related features.

## Tests
- Data model and rendering tests for project content where available.

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

- Full file map: [docs/reference/file-maps/research-projects.md](docs/reference/file-maps/research-projects.md)
- Symbol catalog: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- API contracts: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

### Key Implementation Files

- [src/research-projects/ResearchProjectsOverview.tsx](src/research-projects/ResearchProjectsOverview.tsx)
- [src/research-projects/ResearchProjects.sass](src/research-projects/ResearchProjects.sass)
- [src/research-projects/researchProject.test.ts](src/research-projects/researchProject.test.ts)
- [src/research-projects/researchProject.ts](src/research-projects/researchProject.ts)
- [src/research-projects/subpages/aluGeneva/Home.tsx](src/research-projects/subpages/aluGeneva/Home.tsx)
- [src/research-projects/subpages/amps/Home.tsx](src/research-projects/subpages/amps/Home.tsx)
- [src/research-projects/subpages/caic/Home.tsx](src/research-projects/subpages/caic/Home.tsx)
- [src/research-projects/subpages/Home.tsx](src/research-projects/subpages/Home.tsx)
- [src/research-projects/subpages/PageContent.tsx](src/research-projects/subpages/PageContent.tsx)
- [src/research-projects/subpages/recc/Home.tsx](src/research-projects/subpages/recc/Home.tsx)
- [src/research-projects/subpages/ResearchProjectSearch.tsx](src/research-projects/subpages/ResearchProjectSearch.tsx)
- [src/research-projects/subpages/subpages.test.tsx](src/research-projects/subpages/subpages.test.tsx)
- [src/research-projects/subpages/TocLink.tsx](src/research-projects/subpages/TocLink.tsx)

### Key Tests

- [src/research-projects/researchProject.test.ts](src/research-projects/researchProject.test.ts)
- [src/research-projects/subpages/subpages.test.tsx](src/research-projects/subpages/subpages.test.tsx)
