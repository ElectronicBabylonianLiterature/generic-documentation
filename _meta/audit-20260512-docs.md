# Documentation Audit — 2026-05-12

Created: 2026-05-12

Scope: every tracked document in this repo **except** `backend-docs/` and
`frontend-docs/` (those were restructured under
[plan-20260506-01-docs-update.md](plan-20260506-01-docs-update.md) and
[plan-20260506-02-frontend-docs-update.md](plan-20260506-02-frontend-docs-update.md)
and are now treated as authoritative).

Goals:

1. List invalid / missing cross-references.
2. Flag stale information.
3. Flag sensitive data leaks (with `trello-doc-cards-sensitive.md` excluded
   from scope).
4. Map content out of [trello-doc-cards.md](trello-doc-cards.md) into a
   permanent home and delete the file.
5. Propose a smaller, unified repo structure.

---

## 1. Findings

### 1.1 Invalid or wrong cross-references

| # | Where | Issue | Suggested fix |
|---|---|---|---|
| 1 | [README.md](README.md#L25) | `[Archaeology and Findspot Properties](guides/archaeology.md)` — lowercase path, but the file is [guides/Archaeology.md](guides/Archaeology.md). 404 on case-sensitive hosts (GitHub Pages, any Linux build). The smell is already encoded in `.markdownlint-cli2.jsonc` (the file is excluded from lint, not fixed). | Rename `guides/Archaeology.md` → `guides/archaeology.md` (or fix the link). Drop the lint ignore. |
| 2 | [README.md](README.md#L13-L14) | Bare bullets "Contribution guidelines" and "How to run migrations" have no link target — orphan placeholders. | Remove them, or point at [backend-docs/06-contributing.md](backend-docs/06-contributing.md) and a new "Operational Snippets" section in [backend-docs/05-operations.md](backend-docs/05-operations.md). |
| 3 | [guides/addingFoliosAndPhotos.md](guides/addingFoliosAndPhotos.md#L31) | Links a private Trello card `https://trello.com/c/Qaw9YsG5` as the only "instructions on uploading". Trello is being phased out; the card is not public. | Remove the Trello link. The whole file is already self-described as "of limited use" — see §1.2. |
| 4 | [guides/editorialConventionsLibrary.md](guides/editorialConventionsLibrary.md#L50) | Links private Trello card `https://trello.com/c/fmxeDDGE` ("epigraphic features tracking list"). | Remove the bullet, or replace with whatever in-repo replacement workflow exists. |
| 5 | [guides/editorialConventionsCorpus.md](guides/editorialConventionsCorpus.md#L5) and [guides/editorialConventionsLibrary.md](guides/editorialConventionsLibrary.md) | Both link `…/generic-documentation/wiki/eBL-ATF-and-other-ATF-flavors`. The GitHub wiki on this repo is **not the canonical source**; the canonical files are [guides/atfFlavors.md](guides/atfFlavors.md) (in-repo) and the formal definition at `ebl-api/docs/ebl-atf.md`. | Point both at [guides/atfFlavors.md](guides/atfFlavors.md). |
| 6 | [README.md](README.md#L60) and [README.md](README.md#L72) | Two `![…]` images served from `github.com/Melanee-Melanee/eBL-generic-documentation/assets/…` — a personal **fork** of this repo. Those assets can disappear or be edited without notice. | Re-host the two images under `guides/images/` (or remove the marketing block; see §1.2). |
| 7 | [plan-20260506-01-docs-update.md](plan-20260506-01-docs-update.md) and [log-20260506-01-docs-update.md](log-20260506-01-docs-update.md) | Many references to `backend-docs/archive/legacy/`, which the same plan tracked as deleted in T21. Links are now dangling. | Treat these tracking files as completed work and archive/delete (see §3.2). |

### 1.2 Stale information

| # | Where | Issue |
|---|---|---|
| 1 | [README.md](README.md#L43-L73) ("General Introduction" + "Primary data" + "Process" + "To-Do Tasks Involving AI") | Marketing-style copy mostly sourced from older media; the "45% OCR accuracy" / Amazon Polly / espeak-phonemizer prose belongs on the project landing page or a separate roadmap doc, not the repo entrypoint. Most contributors land here looking for navigation, not background. |
| 2 | [guides/addingFoliosAndPhotos.md](guides/addingFoliosAndPhotos.md#L3) | File opens with "the present guide is therefore of limited use" because uploads are done with `upload-photos-with-thumbnails.py` in `ebl-api-data-preparation`. Keeping it as a top-level guide is misleading. |
| 3 | [guides/atfFlavors.md](guides/atfFlavors.md#L24) | Empty `## C-ATF` heading with no content. |
| 4 | [guides/editorialConventionsLibrary.md](guides/editorialConventionsLibrary.md) | Numbered bullet list keeps restarting at `1.` (a markdown quirk that happens to render correctly but is unreadable in raw form). Half the bullets carry `[Addition, mm.yyyy]` tags going back to 2020 — content has effectively become a changelog. Worth a re-edit. |
| 5 | [trello-doc-cards.md](trello-doc-cards.md) | Self-described as "a fallback for legacy snippets that have not yet been folded in". Most of its content is now duplicated in [backend-docs/02-data-model.md](backend-docs/02-data-model.md) and [backend-docs/05-operations.md](backend-docs/05-operations.md). Two sources of truth = drift. See §2 for the redistribution plan. |
| 6 | [plan-20260506-01-docs-update.md](plan-20260506-01-docs-update.md) / [log-20260506-01-docs-update.md](log-20260506-01-docs-update.md) | All tasks checked (Phase 1–3 complete). Same for the matching frontend pair: Phase 1 of [plan-20260506-02-frontend-docs-update.md](plan-20260506-02-frontend-docs-update.md) is `[x]`. These are completed work artifacts. |
| 7 | [README.md](README.md#L13-L14) | "Contribution guidelines" / "How to run migrations" have been bare items for at least the duration of this branch and never got fleshed out. |
| 8 | [cuneiform-tablet-stitch-tools/](cuneiform-tablet-stitch-tools/) | No `README`, no licence note. Mix of `.jsx` Photoshop scripts, an `.atn` action set, a 50MB+ HTML tutorial, raw `.xmp` files for two tablet folders, plus Windows `desktop.ini` files (these last shouldn't be tracked). The folder is effectively unmanaged binary content sitting in a docs repo. |

### 1.3 Sensitive / access-coupled data

In-scope files (everything except `trello-doc-cards-sensitive.md`) were
scanned for the usual leak patterns (credentials, internal URIs, internal
hostnames). Findings:

- **No secrets** are committed in scope. The split with
  [trello-doc-cards-sensitive.md](trello-doc-cards-sensitive.md) is
  working as intended (that file legitimately holds Auth0 console URLs,
  LRZ Swarm hostnames, the admin Mongo URI template, the user-creation
  email template). It should stay org-internal.
- [trello-doc-cards.md](trello-doc-cards.md) §"Managing Scopes" mentions
  Auth0 and the in-repo locations of the `ScopeItem` enum and `Folio.ts`,
  but contains no creds. Safe to keep public; move to backend-docs (§2).
- One naming nit: the file is `trello-doc-cards-sensitive.md` (a content
  category) but is referred to from `trello-doc-cards.md` as the home
  for "operational secrets and access details". Renaming to
  `operations-sensitive.md` (or similar) would make the boundary clearer
  once the public Trello dump is dissolved.

---

## 2. Where the content of `trello-doc-cards.md` belongs

The file has **15** sections. None of them need to remain under this name.

| Section in `trello-doc-cards.md` | Action |
|---|---|
| Coding Standards (link only) | **Drop** — duplicates [README.md](README.md) and [guides/codingStandards.md](guides/codingStandards.md). |
| Source Code (org URL) | **Drop** — duplicates the README. |
| Infrastructure (CI, Docker Swarm one-liner) | **Drop** — already covered in [backend-docs/05-operations.md](backend-docs/05-operations.md#deployment) and [frontend-docs/04-build-and-operations.md](frontend-docs/04-build-and-operations.md#deployment). Sensitive details remain in `trello-doc-cards-sensitive.md`. |
| External references (Git, TS cheatsheets, RTL) | **Move** into a new short subsection of [guides/codingStandards.md](guides/codingStandards.md) titled "Further reading". |
| Helpful tools → Web tools / Software / MongoDB clients / IDEs / Git clients / Lighthouse CI | **Consolidate** into one new small file `guides/devTools.md` (or absorb into `guides/codingStandards.md` — see §3.1 below). |
| Resources → NLP / Matching / Full-text search / Machine learning / Other | **Move** to a single new section "Research references" in [README.md](README.md), replacing the current "To-Do Tasks Involving AI" block, or extract into `guides/researchReferences.md`. |
| Blocked / Expedite (Trello stickers) | **Drop** — Trello workflow is being retired. |
| Remove duplicate folios (JS snippet) | **Move** to a new "Operational Snippets" appendix in [backend-docs/05-operations.md](backend-docs/05-operations.md) or [backend-docs/02-data-model.md](backend-docs/02-data-model.md). |
| Empty fragment JSON (+ reference / length schema) | **Move** to [backend-docs/02-data-model.md](backend-docs/02-data-model.md) as the canonical "Fragment document shape" reference. Document the `NumberInt` / `NumberLong` BSON note there. |
| Database structure diagram (`db_design.gv` / `db_design.pdf`) | **Move** the source files under `backend-docs/` and reference them from [backend-docs/02-data-model.md](backend-docs/02-data-model.md). |
| Managing Scopes (backend enum / `Folio.ts` / Auth0) | **Move** to [backend-docs/03-api-contract.md](backend-docs/03-api-contract.md) (Authorization Coverage section) **and** add a one-line cross-link from `frontend-docs/02-data-and-api.md` (scope-gated UI). This is a cross-stack workflow — both sides need the pointer. |
| Importing fragments into the db (`importer.py`, task targets) | **Expand** the existing "Data Ingestion" stub in [backend-docs/02-data-model.md](backend-docs/02-data-model.md) with the full task commands and the `-db ebl` production note. |
| Check Discrete Properties (Marshmallow `FindspotSchema().validate(...)`) | **Move** to [backend-docs/02-data-model.md](backend-docs/02-data-model.md) under "Validating documents". |
| Find fragments in collection without photos (JS snippet) | **Move** to the Operational Snippets appendix above (or drop if rarely used). |
| How to backup a MongoDB collection (Studio 3T + `$out` snippet) | **Fold** the snippet into [backend-docs/05-operations.md](backend-docs/05-operations.md#backup-and-restore) (which currently describes strategy but no actual commands). |
| Updating db field structure best practice (8-step procedure) | **Expand** the existing "Change Rules" section of [backend-docs/02-data-model.md](backend-docs/02-data-model.md) with this procedure. |

**End state**: `trello-doc-cards.md` is deleted; nothing is lost; every
operational fact lives next to the code it concerns.

---

## 2A. Additional guides that can fold into `backend-docs/` or `frontend-docs/`

A second pass over `guides/` against the two doc sets identifies four more
files whose content is codebase-facing rather than editor-facing, and which
belong in the structured doc sets rather than under `guides/`. Three guides
stay where they are because they document **how to use the live website**
(editorial workflow), not the codebase.

| Guide | Verdict | Target |
|---|---|---|
| [guides/Archaeology.md](guides/Archaeology.md) | **Move** field shapes to backend-docs. Currently the only place documenting the `archaeology` property and the `findspots` document shape; [backend-docs/02-data-model.md](backend-docs/02-data-model.md) lists the collection but not its fields. Fold the two field tables and the JSON examples into a new "Domain document shapes" subsection of [backend-docs/02-data-model.md](backend-docs/02-data-model.md). Keep the Eraser link as a pointer. | [backend-docs/02-data-model.md](backend-docs/02-data-model.md) |
| [guides/dossiers.md](guides/dossiers.md) | **Split**. The "Other Fields" block (`provenance`, `yearRangeFrom`/`yearRangeTo`, `script.period`/`periodModifier`, `references`) is a data-model spec for the `dossiers` collection — move it to the same "Domain document shapes" subsection in [backend-docs/02-data-model.md](backend-docs/02-data-model.md). The "Dossier Description" prose (what an editor writes in the free-text field, max 150 words, example) is editorial — keep it under `guides/`. | [backend-docs/02-data-model.md](backend-docs/02-data-model.md) + `guides/dossiers.md` (trimmed) |
| [guides/withData.md](guides/withData.md) | **Move** wholesale (≈50 lines) as a code-pattern note inside [frontend-docs/01-architecture.md](frontend-docs/01-architecture.md). It documents the `withData` HOC at `src/http/withData.tsx`, which is exactly the kind of cross-cutting wiring already covered there. Delete the guide. | [frontend-docs/01-architecture.md](frontend-docs/01-architecture.md) |
| [guides/teiExport.md](guides/teiExport.md) | **Move** wholesale (≈20 lines) as a feature note inside [frontend-docs/03-routes-and-features.md](frontend-docs/03-routes-and-features.md). It describes the output XML structure produced by the per-fragment "TEI Export" button — a frontend feature. Delete the guide. | [frontend-docs/03-routes-and-features.md](frontend-docs/03-routes-and-features.md) |

For [guides/codingStandards.md](guides/codingStandards.md): the general
rules (clean code, deterministic package manager, domain modeling,
immutability, tests, single-branch flow) overlap with both
[backend-docs/06-contributing.md](backend-docs/06-contributing.md) and
[frontend-docs/05-contributing.md](frontend-docs/05-contributing.md), which
already document the **stack-specific** parts (Black/Poetry/Task vs.
Prettier/ESLint/Yarn). Two reasonable options:

1. Keep `guides/codingStandards.md` as the cross-stack "house style"
   doc; have both contributing docs link to it in a one-liner. This is
   the path of least churn and matches the current README's framing.
2. Inline the general rules into both contributing docs (a few bullets
   each) and delete `guides/codingStandards.md`. Cleaner end state, but
   minor duplication between the two contribute files.

The audit recommends **option 1** (keep + link), absorbing the
"External references" and "Helpful tools" content out of
`trello-doc-cards.md` per §2.

**Stays in `guides/` (editor workflow on the live website, not codebase):**
[guides/addingReferences.md](guides/addingReferences.md),
[guides/properNames.md](guides/properNames.md),
[guides/editorialConventionsCorpus.md](guides/editorialConventionsCorpus.md),
[guides/editorialConventionsLibrary.md](guides/editorialConventionsLibrary.md),
[guides/mappingCuneiformTablets.md](guides/mappingCuneiformTablets.md),
[guides/photoMontagesJoins.md](guides/photoMontagesJoins.md),
[guides/atfFlavors.md](guides/atfFlavors.md) (with the empty `## C-ATF`
heading removed), and the trimmed `guides/dossiers.md`. The eBL-ATF
canonical spec stays at `ebl-api/docs/ebl-atf.md` (already linked from
[backend-docs/03-api-contract.md](backend-docs/03-api-contract.md) /
[02-data-model.md](backend-docs/02-data-model.md)).

---

## 3. Proposed repo structure

### 3.1 Target tree (top level)

```text
README.md                    # navigation + 2-paragraph intro; no marketing prose, no AI roadmap
backend-docs/                # 7 files; absorbs archaeology + dossiers data shapes
frontend-docs/               # 6 files; absorbs withData + teiExport
guides/
  # editorial conventions (data-entry-facing, website workflow)
  editorialConventionsCorpus.md
  editorialConventionsLibrary.md
  properNames.md
  atfFlavors.md              # empty `## C-ATF` heading removed
  addingReferences.md
  dossiers.md                # trimmed: only the description-writing guidance stays
  # operational / domain (website workflow)
  mappingCuneiformTablets.md
  photoMontagesJoins.md
  # contributor-facing (cross-stack house style)
  codingStandards.md         # absorbs trello "External references" + "Helpful tools"
  images/
tools/                       # NEW parent dir; existing tool dirs keep their names
  README.md                  # NEW: one-pager naming each subdir and what it does
  atf-importer-runner/       # moved verbatim (its own README stays in place)
  cuneiform-tablet-stitch-tools/  # moved verbatim
operations-sensitive.md      # renamed from trello-doc-cards-sensitive.md
_meta/                       # NEW (or just delete): completed plan/log files
  plan-20260506-01-docs-update.md
  log-20260506-01-docs-update.md
  plan-20260506-02-frontend-docs-update.md
  log-20260506-02-frontend-docs-update.md
```

Directory naming rule used above: **no tool directory is renamed**.
`atf-importer-runner/` and `cuneiform-tablet-stitch-tools/` keep their
existing names so existing links, search hits, and operator muscle
memory keep working. They only move under a new top-level `tools/`
parent that exists solely to group them.

Removed from top level:

- `trello-doc-cards.md` (content redistributed per §2)
- `guides/addingFoliosAndPhotos.md` (superseded; the one remaining useful
  fact — "filename convention `<name>_<number>.jpg` for folios,
  `<fragment number>.jpg` for photos" — folds into the "GridFS Buckets"
  table of [backend-docs/02-data-model.md](backend-docs/02-data-model.md))
- `guides/Archaeology.md` (field shapes folded into [backend-docs/02-data-model.md](backend-docs/02-data-model.md) per §2A)
- `guides/withData.md` (folded into [frontend-docs/01-architecture.md](frontend-docs/01-architecture.md) per §2A)
- `guides/teiExport.md` (folded into [frontend-docs/03-routes-and-features.md](frontend-docs/03-routes-and-features.md) per §2A)
- `db_design.gv` / `db_design.pdf` (moved under `backend-docs/`)
- `atf-importer-runner/` (moved under `tools/`, name unchanged)
- `cuneiform-tablet-stitch-tools/` (moved under `tools/`, name unchanged)

Net change at the top level: **−1 top-level markdown file**
(`trello-doc-cards.md`), **−4 guides** (`addingFoliosAndPhotos`,
`Archaeology`, `withData`, `teiExport`), **−2 top-level tool dirs**
(now under `tools/`), **+1 new dir** (`tools/`) with a small
`tools/README.md`. No information is lost; every fact moves to the
doc set that owns the matching code or workflow.

### 3.2 What to do with the plan/log files

- `plan-20260506-01-docs-update.md` and `log-20260506-01-docs-update.md`
  are entirely complete (all tasks `[x]`). They reference the deleted
  `backend-docs/archive/legacy/` directory. **Move** under `_meta/`
  (or delete; git history preserves them).
- `plan-20260506-02-frontend-docs-update.md` and
  `log-20260506-02-frontend-docs-update.md` — same treatment once that
  workstream is also complete (Phase 1 is already `[x]`; verify
  Phase 2 status before archiving).

### 3.3 Lint hygiene

After the rename `Archaeology.md` → `archaeology.md`, drop the
`"ignores": ["guides/Archaeology.md"]` entry in
[.markdownlint-cli2.jsonc](.markdownlint-cli2.jsonc). The file should
pass lint, not be excluded from it.

### 3.4 README.md slimming

Replace the current README with three sections only:

1. One paragraph: what this repo is (technical + editorial docs for
   eBL) and what it is **not** (project marketing — link to
   `https://www.ebl.lmu.de/` for that).
2. Navigation table: backend-docs, frontend-docs, guides (grouped:
   editorial / operational / contributor), atf-importer-runner, tools.
3. Optional "Research references" subsection — the relocated content
   from `trello-doc-cards.md` §Resources, if it is worth keeping at all.

Drop the "Primary data", "Process", and "To-Do Tasks Involving AI"
blocks. If the project wants a public roadmap, that belongs on the
project website or in a dedicated `roadmap.md`, not in the README of
the technical docs repo.

---

## 4. Recommended execution order

1. Fix invalid cross-references (§1.1 items 1–6). Mechanical, low-risk.
   Drop the `guides/Archaeology.md` lint ignore once item 1 is
   resolved (whether by rename or by deletion — see step 3).
2. Move `trello-doc-cards.md` content per §2 (one PR per backend-docs
   target file to keep diffs reviewable).
3. Apply the guides → backend/frontend integrations from §2A:
   - fold `guides/Archaeology.md` field shapes and
     `guides/dossiers.md` field tables into
     [backend-docs/02-data-model.md](backend-docs/02-data-model.md);
     trim `guides/dossiers.md` to the description-writing prose;
     delete `guides/Archaeology.md`;
   - fold `guides/withData.md` into
     [frontend-docs/01-architecture.md](frontend-docs/01-architecture.md)
     and delete the guide;
   - fold `guides/teiExport.md` into
     [frontend-docs/03-routes-and-features.md](frontend-docs/03-routes-and-features.md)
     and delete the guide.
4. Delete `trello-doc-cards.md` and `guides/addingFoliosAndPhotos.md`.
5. Move `db_design.{gv,pdf}` under `backend-docs/`.
6. Create the `tools/` parent and `git mv atf-importer-runner tools/`
   and `git mv cuneiform-tablet-stitch-tools tools/` (names unchanged).
   Add `tools/README.md` as a small index of the two subdirs.
7. Trim `README.md` per §3.4. Update its links to the new
   `tools/atf-importer-runner/` path and to any moved guides.
8. Archive completed plan/log files under `_meta/` (or delete).
9. Inside `tools/cuneiform-tablet-stitch-tools/`: drop tracked
   `desktop.ini` files (Windows artefacts), and consider Git LFS for the
   50MB+ `tutorial/photoshop_tutorial_danes.html`.

No code or data changes are implied by this audit — only documentation.
