# Troubleshooting Matrix

This matrix maps common failure signatures to likely causes and first-response actions.

| Symptom | Likely Cause | First Checks | Remediation |
|---|---|---|---|
| 401/403 unexpectedly high | Auth0 config mismatch or missing scopes | Verify AUTH0_AUDIENCE, AUTH0_ISSUER, token claims | Correct environment config, verify required scopes |
| 5xx spikes on read endpoints | Mongo latency/index regression | Check DB connectivity and query paths | Roll back recent query/index changes, add/fix indexes |
| 422 spikes after deployment | Schema validation regression | Inspect endpoint schema changes and payload examples | Patch schema compatibility or update clients with migration guidance |
| Fragment/folio access denied for valid users | Dynamic read scopes mismatch | Check fragment/folio scope resolution and user scopes | Fix scope mapping rules or data-level scope assignments |
| Slow `/fragments` or `/corpus/query` | Heavy aggregation pipeline load | Check query filters, index coverage, DB resources | Optimize pipeline, add index, reduce query breadth |
| Missing media responses | GridFS bucket mismatch or missing files | Verify bucket names and repository wiring | Restore missing bucket data, fix repository config |
| Local startup fails | Incomplete env configuration | Validate .env values and required variables | Add missing values and restart service |

## Fast Verification Commands

- `task test`
- `task lint`
- `task type`
- `task start`

## Related Docs

- backend-docs/runbooks/incident-response.md
- backend-docs/security/security-model.md
- backend-docs/operations/slo-sli-and-alerting.md
