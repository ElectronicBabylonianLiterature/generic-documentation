# Documentation Status

This status page summarizes documentation maturity after the standards uplift.

## Completed Artifacts

- Route catalog: `docs/standards/api-endpoint-catalog.md`
- Authorization matrix: `docs/standards/authorization-matrix.md`
- Error/status matrix: `docs/standards/error-status-matrix.md`
- Domain guides: `docs/guides/`
- Security model: `docs/security/security-model.md`
- Runbooks: `docs/runbooks/`
- ADRs: `docs/adr/`
- API lifecycle policy: `docs/policies/api-versioning-and-deprecation.md`
- Developer contribution guide: `docs/developer/contribution-and-review.md`
- Troubleshooting matrix: `docs/developer/troubleshooting-matrix.md`
- SLO/SLI baseline: `docs/operations/slo-sli-and-alerting.md`
- Data classification/retention: `docs/security/data-classification-and-retention.md`
- Docs drift governance: `docs/standards/docs-drift-governance.md`

## Remaining Improvements for Full Enterprise Maturity

- Endpoint-level example payload sets for every route.
- Automated docs drift checks in CI.
- Data model diagrams linked to domain docs.

## Suggested Maintenance Cadence

- On each route/auth/error change: update standards matrices in same PR.
- On each architectural change: add/update ADR.
- Monthly: review runbooks and security model for operational drift.
