# Documentation Drift Governance

This policy minimizes divergence between code and documentation.

## Required Update Triggers

1. Route/resource changes

- Update endpoint catalog and endpoint contract register.

1. Auth scope guard changes

- Update authorization matrix and security model.

1. Error mapping changes

- Update error/status matrix.

1. Architecture or dependency-flow changes

- Update guides and create/update ADR entries.

## Pull Request Requirements

Each PR that changes behavior must include:

- updated docs links in PR description,
- evidence of matrix updates where applicable,
- migration notes for any contract changes.

## Review Gate

Reviewers should block merge when code-behavior changes are missing required docs updates.

## Recommended Automation

- Add CI check that fails when changed route/bootstrap files do not accompany standards doc updates.
- Add CI check for broken markdown links.

## Related Docs

- standards/README.md
- ../developer/contribution-and-review.md
