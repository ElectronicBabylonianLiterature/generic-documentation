---
applyTo: '**'
---

# Copilot Instructions — eBL Generic Documentation

Provide project context and authoring guidelines that AI assistants must follow
when generating, editing, or reviewing content in this repository.

## Scope and Project Context

- This repository is **documentation only**. It contains primary documentation
  sets, editorial guides, operational notes, and small companion tools. There is
  no application code to compile or ship.
- The two code repositories this documentation describes are:
  - `https://github.com/ElectronicBabylonianLiterature/ebl-frontend` (TypeScript + React).
  - `https://github.com/ElectronicBabylonianLiterature/ebl-api` (Python + Falcon).
- Do not make any changes to files unless explicitly requested.
- Do not commit changes unless the user explicitly asks to commit.

## Repository Layout

- `README.md` — entry point; links to each documentation set.
- `backend-docs/` — primary documentation for `ebl-api` (numbered `00`–`06` plus
  `README.md` and `db_design.{gv,pdf}`).
- `frontend-docs/` — primary documentation for `ebl-frontend` (numbered `00`–`05`
  plus `README.md`).
- `guides/` — editorial and curatorial guides (ATF, references, Archaeology,
  joins, proper names, TEI export, etc.).
- `tools/` — companion tools with their own READMEs:
  - `tools/atf-importer-runner/`
  - `tools/cuneiform-tablet-stitch-tools/`
- `_meta/` — plans, logs, audits. Internal workflow records only; **never** link
  to `_meta/` from primary docs or `README.md`.
- `operations-sensitive.md` — sensitive operational notes; never reference from
  public-facing docs.

## Source-of-Truth Alignment

- The **code is the source of truth**. When documentation disagrees with the
  code in `ebl-api` or `ebl-frontend`, fix the documentation.
- When a concept is defined in code (enums, scopes, schemas), link to the source
  file in the appropriate repo rather than duplicating the definition. Mirror
  values only when the doc would otherwise be unreadable, and call out the
  source path inline.
- Do not introduce field names, scopes, or enums that do not exist in the
  upstream code.
- Cross-stack concepts (e.g. `ScopeItem`, folio types, Auth0 scopes) live in
  multiple places upstream. Reference each location; do not redefine.

## Markdown Style

- Use ATX headings (`#`, `##`, …) with a single top-level `#` per file.
- One sentence per concept; keep paragraphs short. Prefer lists over prose for
  enumerable content.
- Fenced code blocks must declare a language (` ```ts `, ` ```python `,
  ` ```bash `, ` ```text `, …).
- Use relative links between docs in this repo (`../guides/atfFlavors.md`).
- Use absolute `https://github.com/ElectronicBabylonianLiterature/...` links
  when pointing into `ebl-api` or `ebl-frontend`.
- Do not hotlink images from external sites. Place images under
  `guides/images/` and reference them with relative paths.
- Do not include Trello links, private URLs, credentials, secrets, hostnames of
  production systems, or personal data anywhere outside
  `operations-sensitive.md`.

## Metadata Convention

- Every Markdown file under `backend-docs/`, `frontend-docs/`, `guides/`,
  `tools/`, `_meta/`, and the root `README.md` carries a metadata block placed
  immediately after the top `#` title:

  ```md
  # Title

  Created: YYYY-MM-DD
  Last Reviewed: YYYY-MM-DD
  ```

- `Created` is **immutable** once set. Do not change it on edits.
- `Last Reviewed` MUST be updated to the current date on every substantive edit
  to that file. Typo fixes or pure formatting changes do not require an update.
- New files MUST include both fields on creation; set both to the current date.

## Editing Rules

- Edit the smallest unit that solves the request. Do not refactor surrounding
  prose, rename sections, or re-order content unless asked.
- Prefer folding duplicated content into a single canonical location and
  linking to it. Do not duplicate definitions across primary doc sets.
- Preserve existing anchors and section IDs that other docs link to. If a
  heading must change, update all inbound links in the same change.
- Keep the names of `tools/atf-importer-runner/` and
  `tools/cuneiform-tablet-stitch-tools/` verbatim — they are referenced
  externally.
- When restoring a file to a previous state, restore it from the `master`
  branch reference and verify with `git diff` against `master`.

## Workflow (`_meta/`)

- Non-trivial changes follow a plan → execute → log pattern recorded under
  `_meta/`:
  - `plan-YYYYMMDD-NN-<slug>.md` — proposed change.
  - `log-YYYYMMDD-NN-<slug>.md` — what was actually done.
  - `audit-YYYYMMDD-<slug>.md` — findings from a structured review.
- These files carry the same `Created` / `Last Reviewed` metadata block.
- `_meta/` is never linked from primary docs; it is an internal record.

## Tooling

- The repo uses `markdownlint-cli2` (configured via `.markdownlint-cli2.jsonc`).
- After any change to Markdown files, run:

  ```bash
  npx markdownlint-cli2 "**/*.md"
  ```

- Treat lint as a **hard gate**: do not stop after changes until
  `markdownlint-cli2` reports no errors on every modified file.
- Do not add files to the `ignores` list to silence lint findings. Fix the
  Markdown instead.
- Do not introduce new tooling (formatters, link checkers, generators) without
  an explicit request.

## File Restore Rules

- When asked to restore a file to its previous state, restore it from the
  `master` branch reference and verify it exactly matches `master` via
  `git diff` before reporting completion.

## Review Guidelines

- Keep review comments short, specific, and actionable.
- Prioritize: factual accuracy against upstream code, broken cross-references,
  missing metadata updates, leaked sensitive content, and lint failures.
- Every broken link, stale code reference, or missing `Last Reviewed` update is
  a finding and must be resolved before approval.
- Verify any code snippets in docs against the current upstream source before
  approving.

## Hard Gates

These rules are non-negotiable. Do not finalize work, request review, or report
completion while any of them is violated.

1. **No unsolicited commits.** Never run `git commit` (or `git push`, tag,
   force-push, branch-delete, history-rewrite) unless the user has explicitly
   asked for that action in the current turn.
2. **Lint clean.** `npx markdownlint-cli2 "**/*.md"` MUST report zero errors
   over every file touched, with no additions to `ignores`.
3. **Metadata integrity.** Every edited file MUST update `Last Reviewed` to the
   current date. `Created` MUST NOT be changed. Every new file MUST include
   both fields.
4. **Single source of truth.** Documentation MUST NOT contradict `ebl-api` or
   `ebl-frontend`. When in conflict, fix the docs; do not invent upstream
   behavior.
5. **No broken cross-references.** Every internal link, anchor, and image
   reference MUST resolve. Heading renames MUST update all inbound links in the
   same change.
6. **Sensitive content isolation.** Credentials, internal URLs, personal data,
   Trello links, and operational secrets MUST NOT appear outside
   `operations-sensitive.md`.
7. **Preserve structure.** The names of `backend-docs/`, `frontend-docs/`,
   `guides/`, `tools/atf-importer-runner/`, and
   `tools/cuneiform-tablet-stitch-tools/` MUST NOT be renamed or relocated.
8. **No duplication across primary sets.** A concept defined in `backend-docs/`
   MUST NOT be redefined in `frontend-docs/` or `guides/`; link to the
   canonical location instead.
9. **`_meta/` stays internal.** Primary docs and `README.md` MUST NOT link into
   `_meta/`.
10. **Scope discipline.** Make only the changes the user requested. Do not
    refactor, reformat, or re-title untouched files as a side effect.
