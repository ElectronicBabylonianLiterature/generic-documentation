# Routes and Features

Created: 2026-05-06

## Purpose

Map every top-level route to its owning domain, the router module that
declares it, and the headline endpoints it consumes. Use this doc when
adding a route, changing a path, or assessing deep-link risk.

## Router Composition

The route graph is composed in `src/router/router.tsx` from per-domain
router modules:

- `src/router/fragmentariumRoutes.tsx`
- `src/router/corpusRoutes.tsx`
- `src/router/dictionaryRoutes.tsx`
- `src/router/bibliographyRoutes.tsx`
- `src/router/signRoutes.tsx`
- `src/router/aboutRoutes.tsx`
- `src/router/toolsRoutes.tsx`
- `src/router/footerRoutes.tsx`
- `src/router/FullPageRoutes.tsx`

The app uses `react-router` v5; `history` is patched in `patches/` (see
upstream README).

## Route Families

| Area | Path patterns | Owning module / source |
|---|---|---|
| Root and Static | `/`, `/sitemap`, `/sitemap/sitemap.xml` | `src/router/router.tsx`, `public/sitemap/` |
| About | `/about/*` | `src/router/aboutRoutes.tsx`, `src/about` |
| Fragmentarium | `/library`, `/library/search`, `/library/:id`, `/library/:id/match`, `/library/:id/annotate`, `/library/:id/record`, `/library/:id/html`, `/library/*` | `src/router/fragmentariumRoutes.tsx`, `src/fragmentarium` |
| Corpus | `/corpus`, `/corpus/:genre`, `/corpus/:genre/:category/:index`, `/corpus/:genre/:category/:index/:stage/:chapter`, `/corpus/:genre/:category/:index/:stage/:chapter/edit`, `/corpus/*` | `src/router/corpusRoutes.tsx`, `src/corpus` |
| Dictionary | `/dictionary`, `/dictionary/:id`, `/dictionary/:id/edit`, `/dictionary/*` | `src/router/dictionaryRoutes.tsx`, `src/dictionary` |
| Bibliography | `/bibliography/references/new-reference`, `/bibliography/references`, `/bibliography/references/:id`, `/bibliography/references/:id/edit`, `/bibliography/afo-register`, `/bibliography/*` | `src/router/bibliographyRoutes.tsx`, `src/bibliography`, `src/afo-register` |
| Signs | `/signs`, `/signs/:id`, `/signs/*` | `src/router/signRoutes.tsx`, `src/signs` |
| Tools | `/tools/*` | `src/router/toolsRoutes.tsx` |
| Legal / Footer | `/impressum`, `/datenschutz` | `src/router/footerRoutes.tsx`, `src/footer` |

## Route Behavior Classes

| Class | Examples | Risk profile |
|---|---|---|
| Static / informational | `/about/*`, `/impressum`, `/datenschutz` | Low contract risk; content-driven. |
| Search / list | `/library/search`, `/dictionary`, `/signs`, `/bibliography/references` | Pagination + query coupling; tied to `src/query`. |
| Detail | `/library/:id`, `/dictionary/:id`, `/signs/:id`, `/corpus/:genre/.../:chapter` | Strict data-loading expectations; deep-link sensitive. |
| Edit / mutation | `/library/:id/annotate`, `/library/:id/record`, `/dictionary/:id/edit`, `/bibliography/references/:id/edit`, `/corpus/.../edit` | Auth-sensitive; relies on `SessionContext.isAllowedTo*`. |
| Utility / static asset | `/sitemap`, `/sitemap/sitemap.xml` | Operational; see [Build and Operations](./04-build-and-operations.md). |

## Notable Features

### Annotation Tool

- Path: `/library/:id/annotate`.
- Implementation: `src/fragmentarium/...` plus the
  `react-image-annotation` library, which is patched in
  `patches/`. Updating `react-image-annotation` may break
  `Annotation.js` in this tool — treat it as a high-risk dependency
  bump.
- Backend image endpoints: `GET (blob) /fragments/{number}/photo`,
  `GET (blob) /fragments/{number}/thumbnail/{size}` (see [Data and
  API](./02-data-and-api.md)).

### Sitemap

- Path: `/sitemap` (HTML) and `/sitemap/sitemap.xml` (artifact).
- Artifacts: `public/sitemap/sitemap.xml.gz`,
  `public/sitemap1.xml.gz`, etc.
- Update flow: automated weekly via `Update Sitemap` GitHub Actions
  workflow; manual fallback documented in [Build and
  Operations](./04-build-and-operations.md).

### TEI Export

Every fragment page exposes a **TEI Export** action that downloads a
[TEI XML P5](https://tei-c.org/guidelines/p5/)–compatible `.xml` file
for the current fragment. The output is intended to be ingestible by
third-party TEI tooling without further transformation.

The document always contains a `<teiHeader>` and a `<text>` element
with a `<body>`:

- `<teiHeader>` — fragment metadata: `<title>` (text number),
  `<publicationStmt>` (location/collection where the text is
  published), and `<sourceDesc>` (description of the original source
  the digital file is derived from).
- `<body>` — transliteration content as line groups (`<lg>`). Each
  line group contains one or more `<line>` elements, each of which is
  built from `<w>` word elements.
  - Line groups segment the text by structural notes — paratextual
    [`@`-lines](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#-lines)
    are rendered as `<note>` at the start of the line group they
    define.
  - State notes —
    [`$`-lines](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#-lines-1)
    — render as `<note>` inside the relevant line group.
  - A general note about the fragment, if present, renders as a
    trailing `<note>` after the last line group.
- `<line>` carries an `n` attribute combining the text number and the
  line number (`<text>.<line>`).
- `<w>` carries a `lemma` attribute with the word’s lemma or lemmata
  where available.

## Route Change Process

1. Declare the route addition / change and the expected backward
   compatibility posture.
2. Update the appropriate `src/router/<area>Routes.tsx` file and the
   corresponding navigation entries.
3. Validate direct deep-link entry and back/forward browser behavior.
4. Validate route-level fallback for missing / invalid identifiers
   (`:id` not found, etc.).
5. Update this catalog and release notes when path contracts change.
6. If the change touches a mutation route, re-check the auth gate
   against
   [backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md#authorization-coverage).

## High-Risk Route Changes

- Renaming an existing path segment used in external bookmarks or
  citations (especially `/library/:id` and `/corpus/...` deep links).
- Changing dynamic parameter semantics without compatibility handling.
- Changing route guards on auth-sensitive pages
  (`/library/:id/annotate`, `/library/:id/record`, edit routes).

## Related

- [Architecture](./01-architecture.md)
- [Data and API](./02-data-and-api.md)
- [Build and Operations](./04-build-and-operations.md)
- [Contributing](./05-contributing.md)

## Last Reviewed

2026-05-06
