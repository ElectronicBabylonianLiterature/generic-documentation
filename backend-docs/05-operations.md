# Operations

Created: 2026-05-06
Last Reviewed: 2026-11-26

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
`ebl/app.py`. Required values (see
[`ebl-api/README.md`](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/README.md#environment-variables)
for the authoritative list):

```dotenv
AUTH0_AUDIENCE=<Identifier from Auth0 API Settings>
AUTH0_ISSUER=<Domain from Auth0 Application Settings, or custom domain>
AUTH0_PEM=<Signing Certificate (PEM) from Auth0 Application Advanced Settings, base64-encoded>
MONGODB_URI=<MongoDB connection URI, may include database>
MONGODB_DB=<MongoDB database name; optional, defaults to the auth DB>
EBL_AI_API=<AI API URL; use a safe dummy value if not needed>
SENTRY_DSN=<Sentry DSN>
SENTRY_ENVIRONMENT=<development|production>
CACHE_CONFIG=<Falcon-Caching configuration JSON; optional, Null backend by default>
```

Operational categories that matter most:

- **Auth0** — issuer, audience, base64-encoded signing certificate.
  Misconfiguration shows up as 401/403 spikes. The backend reads scopes
  from both the `scope` claim and the `permissions` claim and merges
  them; a legacy Auth0 Rule used to copy permissions into `scope` and is
  no longer required, but the upstream README keeps the example for
  reference. Auth0 user metadata supplies the `eblName` field via a Rule
  / Action.
- **MongoDB** — connection string and credentials. Drives nearly every
  request.
- **Sentry** — DSN for error reporting.
- **EBL AI service** — endpoint and credentials for annotation workflows.
- **Cache** — `CACHE_CONFIG` JSON (for example
  `{"CACHE_TYPE": "simple"}`) selects the
  [Falcon-Caching](https://falcon-caching.readthedocs.io/) backend.

Poetry does not read `.env` files. Export variables in the shell, run via
`task` (which loads them), or use a helper such as
[`direnv`](https://direnv.net/) or
[`Set-PsEnv`](https://github.com/rajivharris/Set-PsEnv).

Validate `.env` (or the equivalent secret store entries) before any
deployment; missing values are the most common cause of local startup
failures.

### Caching Usage in Code

Falcon-Caching is wired into resources via two patterns documented in the
upstream README:

```python
@cache.cached(timeout=DEFAULT_TIMEOUT)
def on_get(self, req, resp):
    resp.text = ...  # `text`, not `media`: v1.0.1 does not cache `media`
```

```python
@cache_control(["public", "max-age=600"])
def on_get(self, req, resp):
    ...
```

A predicate may be passed to `cache_control` to control conditional
headers (for example, only add the header for unauthenticated requests).

### Docker Compose: MongoDB User Bootstrap

When bringing up the full stack via `docker-compose up`, create
`./docker-entrypoint-initdb.d/create-users.js` **before** the database is
started for the first time:

```javascript
db.createUser({
  user: "ebl-api",
  pwd: "<password>",
  roles: [{ role: "readWrite", db: "ebl" }],
});
```

In addition to the variables above, compose-based runs need:

```dotenv
MONGODB_URI=mongodb://ebl-api:<password>@mongo:27017/ebl
MONGO_INITDB_ROOT_USERNAME=<Mongo root user>
MONGO_INITDB_ROOT_PASSWORD=<Mongo root user password>
MONGOEXPRESS_LOGIN=<Mongo Express login username>
MONGOEXPRESS_PASSWORD=<Mongo Express login password>
```

## CI

GitHub Actions workflows live under `.github/workflows/`:

- `main.yml` — primary build/test pipeline run on pushes and pull requests.
- `codeql.yml` — security analysis.
- `secret-scan.yml` — GitGuardian secret scanning.

Required build, test, quality, and security checks must pass before merge.
CI uses a local single-node MongoDB replica set. Media integration tests cover
transactions, source collisions, atomic swaps, failed batches, concurrent
promotions, typed identities, stale deletion completion, protected legacy
bytes, forged handles, interrupted writes, and binary validation. Locally,
media tests reuse a replica-set test client or start a temporary instance with
`pymongo-inmemory`; unique test databases are removed after use and production
connection settings are unnecessary.

## Deployment

- Images are built from the repository `Dockerfile`.
- Deployments are versioned via the standard release flow for the
  ElectronicBabylonianLiterature org. Roll-forward and roll-back are at the
  container/image level.
- A deployment is considered healthy when the standard read paths
  (`/statistics`, `/fragments`, `/texts`, `/words`, `/signs`) return 2xx
  with baseline latency.

## Chapter Display Cache Deployment and Recovery

Before activation, API maintainers and the database operator must confirm the
production read preference, inventory all API replicas and batch workers, and
approve a deployment window that permits the quiescent procedure below.
Chapter caching requires primary reads; other read preferences bypass caching
and emit a warning when the cache-state repository is initialized.

The [cache protocol](./02-data-model.md#caching) describes lease expiry and
revision fencing during normal operation.

Old workers do not participate in this protocol. Mixed old/new workers are
unsafe during deployment or rollback; this is separate from normal operation,
where expired writer leases recover automatically. Before first activation,
after rollback, or after any overlap with old writers:

1. Stop **all** old and new chapter readers, writers, and batch jobs, and wait
   for every in-flight request and job to finish.
2. With workers still stopped, run the cleanup against an explicitly selected
   endpoint and database:

   ```sh
   poetry run python -m ebl.cache.clear_versioned_chapter_cache \
     --uri-env CACHE_RECOVERY_URI --database DATABASE --confirm-quiescent
   ```

3. Start only workers implementing the shared cache protocol.

The command deletes only private `chapter-display-v2:` payloads and normally
preserves chapter revision/pending metadata. Add `--repair-pending` only while
quiescent to clear abandoned counters, including pre-lease legacy state. Repair
rotates the epoch and increments the revision. Never run recovery while any
reader or writer remains active; a request could otherwise repopulate a cache
after cleanup. The command is not part of ordinary request handling.

Source: [`clear_versioned_chapter_cache.py`](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/ebl/cache/clear_versioned_chapter_cache.py).

## Media Index Preparation and Rollout

Media writes require the transactional topology documented in
[Data Model](./02-data-model.md#transaction-and-read-requirements).
Index preparation is explicit: application imports, runtime construction,
and media reads do not initialize indexes or trigger a backfill.

Before the first media write, initialize the metadata and storage indexes in
an authorized maintenance process configured for the intended database:

```python
from ebl.media.infrastructure.grid_fs_media_representation_store import (
    GridFsMediaRepresentationStore,
)
from ebl.media.infrastructure.mongo_media_repository import MongoMediaRepository

repository = MongoMediaRepository(database)
store = GridFsMediaRepresentationStore(database)
repository.assert_writable_topology()
repository.create_indexes()
store.create_indexes()
```

Preparation validates existing media/source-reservation consistency first.
It derives each canonical source key from the stored import source, rejects
missing or mismatched keys, and verifies every reservation owner. It refuses
inconsistent preexisting records rather than silently repairing them.
Preparation does not import originals or create gallery records. See the
[shared collection/index definitions](./02-data-model.md#media-collections-and-indexes).

The [`ebl.io.media.backfill`](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/ebl/io/media/backfill.py) command
provides `dry-run`, `prepare-indexes`, and `apply` phases. Use its help and
explicitly selected environment/database configuration for the approved
maintenance operation. A dry run must not prepare indexes or apply writes.
Write phases require a matching `--confirm-database`; `apply` also requires
`--confirm-source-writes-paused`. Retain the staging journal for recovery.
Use bounded migration batches and measured throughput rather than many
competing metadata writers, which acquire the same transaction lock.

Deploy the compatible backend, run and verify the separately scheduled
migration, then enable the frontend gallery. Set `MEDIA_API_ENABLED=true` and
restart the backend to register the media routes; the default is `false`.
Disabling the flag restores the existing route/response shape and leaves
legacy photo and thumbnail routes available. Read behavior is defined by the
[media API contract](./03-api-contract.md#media-reads).

Keep legacy originals protected and available while unresolved sources are
reviewed. A partial import, missing optional previews, or an empty media
collection must preserve existing photo access. Generate owned migration
previews rather than adopting thumbnails that a legacy generator may clear.
Preserve adopted original file IDs; direct maintenance/database operations
remain capable of deleting legacy bytes despite adapter-level protection.

### Media Failure Recovery and Deletion

A failed or interrupted owned upload has a registry entry with `ready=false`.
It is never readable. An exception during writing deletes only that upload's
owned file and marks its registry entry deleted. A process crash can leave
pending entries for a later explicit recovery command to inspect.

Retain an adopted registration when metadata creation fails, so retrying the
same audited source reuses the protected handle. Do not apply generic binary
cleanup to borrowed handles on a failed import. Generated previews may be
cleaned up by their exact owned handles.

Replacement returns superseded handles without deleting their bytes. Physical
cleanup must wait until readers holding those handles have finished; the store
does not coordinate active streams. The read-only media HTTP API
exposes no replacement or deletion routes, and the migration preserves existing
records.

Metadata deletion first hides the media and reserves its import source.
The returned `StoredMedia.deletion_token` identifies that exact deletion
generation. Pass the returned object unchanged to `finish_delete` after binary
cleanup. An old completion cannot remove a later identical deletion generation.

## Findspot Filter Index

The database operator must prebuild the `fragments` index
`{archaeology.findspotId: 1}` before deploying, or approve a startup build window.
Otherwise, application startup builds the index and waits for it to finish.
The declaration lives in
[`MongoFragmentRepository`](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/ebl/fragmentarium/infrastructure/mongo_fragment_repository.py).
Coordinate the build against the intended database and collection before
restarting serving replicas. Complete the
[all-replicas compatibility rollout](./04-lifecycle-and-compatibility.md#findspot-filter-rollout)
before enabling filter-dependent clients.

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

### Per-Collection Snapshot Before a Migration

For targeted work (notably reshaping a field on `fragments`) it is
sufficient — and faster than a full backup — to duplicate the affected
collection in place. The naming convention is
`<source-collection-name>_backup_<yyyy-mm-dd>`. Two equivalent options:

1. In Studio 3T (or any equivalent GUI), right-click the collection and
   choose **Duplicate Collection**, then set the name as above.
2. From `mongosh` or VS Code's Mongo extension:

   ```js
   use("ebldev");

   const today = new Date().toISOString().slice(0, 10);
   db.getCollection("fragments").aggregate([
     { $out: `fragments_backup_${today}` },
   ]);
   ```

Use production credentials and the production DB name when the target is
production. Keep the backup until the migration has been validated end
to end.

Integrity checks after restore:

- Verify reference linking (fragment references, chapter text links).
- Validate media retrieval if GridFS data is included.
- Verify scope-gated endpoints with representative users.

## Data Update Scripts

Schema and parser changes can leave existing documents stale. The
upstream codebase ships maintenance entry points for the affected
domains. Each can be run locally (`poetry run python -m <module>`),
in a standalone container, or via the dedicated compose target.

| Module | Purpose | Side effects |
|---|---|---|
| `ebl.fragmentarium.update_fragments` | Re-derive transliteration + signs for all fragments. | Writes `invalid_fragments.tsv`. |
| `ebl.corpus.update_texts` | Resave Corpus texts under the latest schema. | Writes `invalid_texts.tsv`. Does **not** reparse transliterations. |
| `ebl.alignment.align_fragmentarium` | Align all Fragmentarium fragments against the Corpus. | Writes results to the path passed via `-o`. |
| `ebl.fragmentarium.migrate_cropped_images` | Clean up and regenerate cropped sign images from annotations (resolves orphaned image duplicates). | Rewrites the cropped image bucket. |

`align_fragmentarium` accepts:

```text
-h, --help                     show this help message and exit
-s SKIP, --skip SKIP           Number of fragments to skip.
-l LIMIT, --limit LIMIT        Number of fragments to align.
--minScore MIN_SCORE           Minimum score to show in the results.
--maxLines MAX_LINES           Maximum size of fragment to align.
-o OUTPUT, --output OUTPUT     Filename for saving the results.
-w WORKERS, --workers WORKERS  Number of parallel workers.
-t, --threads                  Use threads instead of processes for workers.
```

### Production Database Update Procedure

Follow these steps in order; do **not** start the migration before the
new deployment is confirmed live.

1. Implement the new functionality.
2. Implement fallback logic to handle old data if the new model is
   incompatible.
3. Verify on the development database that fragments update correctly.
4. Deploy to production.
5. Run the migration script.
6. Fix invalid fragments listed in the `*.tsv` output.
7. Remove the fallback logic.
8. Deploy to production.

### `pull-db.sh`

The helper script uses `mongodump` / `mongorestore` to copy data from a
source MongoDB instance. It excludes the `changelog` collection and the
`photos` / `folios` GridFS buckets. Defaults can be set via:

```dotenv
PULL_DB_DEFAULT_SOURCE_HOST=<source MongoDB host>
PULL_DB_DEFAULT_SOURCE_USER=<source MongoDB user>
PULL_DB_DEFAULT_SOURCE_PASSWORD=<source MongoDB password>
```

### ATF Importer

The ATF importer converts external `.atf` files (Oracc, c-ATF) to the
eBL-ATF flavor. Command-line surface and troubleshooting steps are
documented in
[`tools/atf-importer-runner/README.md`](../tools/atf-importer-runner/README.md)
and in the upstream
[`ebl-api/README.md`](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/README.md#importing-atf-files).
The eBL-ATF grammar itself lives at
[`ebl-api/docs/ebl-atf.md`](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md).

## Operational Snippets

Short scripts kept on hand for one-off maintenance. Run them against a
recent backup first; both touch the `fragments` collection directly.

### Remove duplicate folios

Deduplicates folios within each fragment by `(number, name)`.

```js
db.getCollection("fragments")
  .find({ "folios.0": { $exists: true } })
  .forEach(({ _id, folios }) => {
    const newFolios = folios.filter(
      (folio, index, self) =>
        self.findIndex(
          (folio2) =>
            folio2.number === folio.number && folio2.name === folio.name,
        ) === index,
    );
    db.getCollection("fragments").update(
      { _id },
      { $set: { folios: newFolios } },
    );
  });
```

### Find fragments in a collection without photos

Returns the IDs of fragments in the given collection that have neither a
photo in the `photos` GridFS bucket nor a join under the `joins`
collection.

```js
var fragments = db.fragments
  .find({ collection: "Kuyunjik" }, { museumNumber: 1 })
  .toArray();

var idsWithoutImageMatch = [];

fragments.forEach(function (fragment) {
  var joinedFragments = db.joins
    .find({ "fragments.museumNumber": fragment.museumNumber })
    .toArray();

  if (joinedFragments.length === 0) {
    var imageExists =
      db.photos.files.countDocuments({ filename: fragment._id + ".jpg" }) > 0;
    if (!imageExists) {
      idsWithoutImageMatch.push(fragment._id);
    }
  }
});

idsWithoutImageMatch;
```

### Attach folios to fragments in bulk

Given a list of `(name, number, _id/accession)` tuples, attach each
folio entry to its fragment and return the list of fragments that
could not be found. Adapt `name` and the list as needed.

```js
function attachFolios() {
  const folios = [
    { number: "001", accession: "", _id: "BM.45657" },
    { number: "002", accession: "", _id: "BM.45727" },
    // ...
  ];
  const missing = [];
  folios.forEach(({ number, _id, accession }) => {
    const query = accession !== "" ? { accession } : { _id };
    if (db.getCollection("fragments").findOne(query)) {
      db.getCollection("fragments").updateOne(query, {
        $addToSet: { folios: { name: "WMR", number } },
      });
    } else {
      missing.push({ number, accession, _id });
    }
  });
  return missing;
}
attachFolios();
```

After a bulk folio import, prepend a record entry describing the
provenance of the change so it shows up in the fragment’s history:

```js
db.getCollection("fragments").updateMany(
  { "folios.name": "WMR" },
  {
    $push: {
      record: {
        $each: [
          {
            user: "Mayer",
            type: "HistoricalTransliteration",
            date: "1970-01-01/2018-12-31",
          },
        ],
        $position: 0,
      },
    },
  },
);
```

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

2026-11-26
