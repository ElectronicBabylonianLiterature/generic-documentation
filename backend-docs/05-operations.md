# Operations

## Purpose

Operational reference for running, deploying, monitoring, and recovering
`ebl-api`. All paths are relative to the
[ebl-api repository](https://github.com/ElectronicBabylonianLiterature/ebl-api/).

## Build and Runtime Artifacts

| Artifact | Purpose |
|---|---|
| `Dockerfile` | Production image build for the API service. |
| `docker-compose.yml` | Full local stack (API + MongoDB + supporting services). |
| `docker-compose-api-only.yml` | API-only compose target for lightweight runs. |
| `docker-compose-updater.yml` | Compose target for the data updater workload. |
| `Taskfile.dist.yml` | Canonical command surface (`task ...`) for build, lint, type-check, test, run. |
| `pyproject.toml` | Poetry project definition and dependency pins. |
| `poetry.toml` | Poetry environment configuration. |
| `pull-db.sh` | Local database pull helper; intentionally excludes the `changelog` collection. |

## Environments and Configuration

The service is configured by environment variables read at startup in
`ebl/app.py`. The categories that matter operationally:

- **Auth0** — issuer, audience, client credentials. Misconfiguration shows
  up as 401/403 spikes.
- **MongoDB** — connection string and credentials. Drives nearly every
  request.
- **Sentry** — DSN for error reporting.
- **EBL AI service** — endpoint and credentials for annotation workflows.
- **Cache** — backend configuration for `ebl/cache/`.

Validate `.env` (or the equivalent secret store entries) before any
deployment; missing values are the most common cause of local startup
failures.

## CI

GitHub Actions workflows live under `.github/workflows/`:

- `main.yml` — primary build/test pipeline run on pushes and pull requests.
- `codeql.yml` — security analysis.

PRs are expected to be green on both before merge.

## Deployment

- Images are built from the repository `Dockerfile`.
- Deployments are versioned via the standard release flow for the
  ElectronicBabylonianLiterature org. Roll-forward and roll-back are at the
  container/image level.
- A deployment is considered healthy when the standard read paths
  (`/statistics`, `/fragments`, `/texts`, `/words`, `/signs`) return 2xx
  with baseline latency.

## Reliability Baseline (SLO / SLI)

Initial targets to refine with production telemetry:

### Service Level Indicators

- **Availability** — successful requests / total requests for public API
  endpoints.
- **Latency** — p95 duration per endpoint family (read vs. write).
- **Error rate** — 5xx responses / total requests.

### Service Level Objectives

| SLO | Target |
|---|---|
| Monthly availability | ≥ 99.9% successful request ratio |
| Read latency (p95) | < 500 ms on `/fragments`, `/texts`, `/words`, `/signs` |
| Write latency (p95) | < 1200 ms on guarded write paths |
| Error budget | 5xx ratio < 0.1% monthly |

### Alert Thresholds

| Signal | Warning | Critical |
|---|---|---|
| Availability | < 99.8% over rolling 30 min | < 99.5% over rolling 15 min |
| Read p95 latency | > 700 ms for 30 min | > 1000 ms for 15 min |
| 5xx error ratio | > 0.5% for 20 min | > 1% for 10 min |

The service owner reviews SLOs monthly and after major architecture, index,
or query changes; post-incident findings should feed back into these
thresholds.

## Incident Response

### Severity

- **SEV-1** — full outage, auth broken for all users, or data-corruption
  risk.
- **SEV-2** — critical feature unavailable or severe latency/error spike.
- **SEV-3** — partial degradation with workaround.

### Detection signals

- Elevated 5xx rate.
- Spikes in 422/409 (client-impacting workflow regressions).
- Spikes in 401/403 (auth misconfiguration).
- MongoDB connectivity or timeout errors.

### Response

1. **Confirm scope** — reproduce against a known endpoint
   (`/statistics`, `/fragments`, `/texts`); review recent deploys and
   config changes.
2. **Stabilize** — roll back the latest deployment if a regression is
   confirmed; selectively disable non-critical write paths while keeping
   read access alive if needed.
3. **Triage** — verify Auth0, MongoDB, Sentry, and EBL AI environment
   variables; check token verification path; inspect recent changes in the
   relevant `bootstrap.py` and schema modules; review Sentry events.
4. **Validate recovery** — targeted health checks on top endpoints, run a
   relevant test subset, confirm 5xx rate has returned to baseline.
5. **Post-incident** — publish an incident report with timeline, root cause,
   and preventive actions; add regression tests for the failed path; update
   this doc and runbooks if process changes are required.

## Backup and Restore

Scope:

- Domain collections used by corpus, fragmentarium, dictionary, bibliography,
  dossiers, and adjacent modules.
- GridFS buckets where applicable (`photos`, `folios`, public files).
- The `changelog` collection is intentionally excluded from local migration
  tooling (see `pull-db.sh`); operational backups should still cover it.

Strategy:

1. Logical backups via authenticated `mongodump` covering required
   collections and GridFS buckets.
2. Production: daily full backup plus a snapshot before every major
   migration. Staging: at least weekly, and before schema/index migrations.
3. Restore to an isolated environment first; validate document counts on key
   collections, index presence on hot collections, and run smoke checks
   against `/fragments`, `/texts`, `/signs`, `/bibliography` before any
   production cutover.
4. Cutovers happen in a maintenance window with read/write impact
   communicated up front.

Integrity checks after restore:

- Verify reference linking (fragment references, chapter text links).
- Validate media retrieval if GridFS data is included.
- Verify scope-gated endpoints with representative users.

## Troubleshooting

| Symptom | Likely cause | First checks | Remediation |
|---|---|---|---|
| 401/403 spikes | Auth0 misconfiguration or missing scopes | `AUTH0_AUDIENCE`, `AUTH0_ISSUER`, token claims | Correct env config; verify required scopes |
| 5xx on read endpoints | MongoDB latency or index regression | DB connectivity, query paths | Roll back recent query/index change; add/fix indexes |
| 422 spikes after deploy | Schema validation regression | Endpoint schema diff, payload examples | Patch schema compatibility or publish client migration guidance |
| Fragment/folio access denied for valid users | Dynamic scope mismatch | Fragment/folio scope resolution; user scopes | Fix scope mapping or data-level scope assignments |
| Slow `/fragments` or `/corpus/query` | Heavy aggregation pipeline | Query filters, index coverage, DB resources | Optimize pipeline, add index, narrow query |
| Missing media | GridFS bucket mismatch or missing files | Bucket names, repository wiring | Restore bucket data; fix repository config |
| Local startup fails | Incomplete env configuration | `.env` values | Set missing values and restart |

Fast verification commands during an incident:

- `task test`
- `task lint`
- `task type`
- `task start`

## Related

- [Architecture](./01-architecture.md)
- [Data Model](./02-data-model.md)
- [API Contract](./03-api-contract.md)
- [Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md)
- [Contributing](./06-contributing.md)

## Last Reviewed

2026-05-06
