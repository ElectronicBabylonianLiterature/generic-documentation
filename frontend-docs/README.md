# eBL Frontend Documentation

This documentation set is architecture-first and domain-first. It explains how the system works and how to change it safely without maintaining one document per source file.

## Goals
- Provide practical onboarding and implementation guidance.
- Document product domains, routes, and backend-facing contracts.
- Preserve operational and testing standards required for safe releases.

## Scope
- Includes repository code and configuration except environment files (`.env*`).
- Uses backend schema as the source of truth for request and response names.

## Intended Audience
- New engineers onboarding to the eBL frontend.
- Feature engineers implementing or refactoring behavior.
- Reviewers validating architecture, routing, and contract changes.
- Release owners preparing safe production rollouts.

## Documentation Map
1. [architecture/overview.md](architecture/overview.md)
	- System architecture, runtime flow, and dependency boundaries.
2. [features/overview.md](features/overview.md)
	- Product domains, ownership boundaries, integrations, and risks.
3. [reference/repository-map.md](reference/repository-map.md)
	- High-level map from source directories to responsibilities.
4. [reference/api-and-data-contracts.md](reference/api-and-data-contracts.md)
	- API transport contract, endpoint groups, auth and error semantics.
5. [reference/route-catalog.md](reference/route-catalog.md)
	- Supported route families and path patterns.
6. [guides/engineering-playbook.md](guides/engineering-playbook.md)
	- Local development workflow, operations, runbook, and release checks.
7. [guides/testing-strategy.md](guides/testing-strategy.md)
	- Testing architecture, validation focus, and quality gates.
8. [reference/change-log-template.md](reference/change-log-template.md)
	- Standard release note template for behavior and contract changes.

## Recommended Reading Order
1. [architecture/overview.md](architecture/overview.md)
2. [features/overview.md](features/overview.md)
3. [reference/repository-map.md](reference/repository-map.md)
4. [reference/api-and-data-contracts.md](reference/api-and-data-contracts.md)
5. [reference/route-catalog.md](reference/route-catalog.md)
6. [guides/engineering-playbook.md](guides/engineering-playbook.md)
7. [guides/testing-strategy.md](guides/testing-strategy.md)

## Task-Oriented Paths

| If You Need To | Read |
| --- | --- |
| Understand system boundaries and flows | `architecture/overview.md` |
| Identify which feature/domain owns behavior | `features/overview.md`, `reference/repository-map.md` |
| Add or change backend integration | `reference/api-and-data-contracts.md`, `guides/testing-strategy.md` |
| Add or change routes/deep links | `reference/route-catalog.md`, `guides/engineering-playbook.md` |
| Prepare release notes | `reference/change-log-template.md`, `guides/engineering-playbook.md` |

## Maintenance Rules
- Keep docs at architecture and domain level, not file-by-file.
- Update contracts and routes docs whenever backend-facing behavior changes.
- Update runbook/testing docs when release gates or quality expectations change.

## Documentation Quality Bar
- Every behavior change should be traceable through domain, route, and contract docs.
- Documentation should explain decision boundaries, not restate implementation details.
- New docs should merge into existing pages unless a distinct architectural concern requires a new file.
