# Reference: Route Catalog

Last updated: May 2026

## Purpose

Current route families and path patterns used by the application router.

## Route Families

| Area | Path Patterns |
| --- | --- |
| Root and Static | `/`, `/sitemap`, `/sitemap/sitemap.xml` |
| About | `/about/*` |
| Fragmentarium | `/library`, `/library/search`, `/library/:id`, `/library/:id/match`, `/library/:id/annotate`, `/library/:id/record`, `/library/:id/html`, `/library/*` |
| Corpus | `/corpus`, `/corpus/:genre`, `/corpus/:genre/:category/:index`, `/corpus/:genre/:category/:index/:stage/:chapter`, `/corpus/:genre/:category/:index/:stage/:chapter/edit`, `/corpus/*` |
| Dictionary | `/dictionary`, `/dictionary/:id`, `/dictionary/:id/edit`, `/dictionary/*` |
| Bibliography | `/bibliography/references/new-reference`, `/bibliography/references`, `/bibliography/references/:id`, `/bibliography/references/:id/edit`, `/bibliography/afo-register`, `/bibliography/*` |
| Signs | `/signs`, `/signs/:id`, `/signs/*` |
| Tools | `/tools/*` |
| Legal/Footer | `/impressum`, `/datenschutz` |

## Route Behavior Classes

- Static informational routes: mostly content-driven, low contract risk.
- Search/list routes: query-driven routes with pagination/filter coupling.
- Detail routes: identifier-based routes with strict data-loading expectations.
- Edit/mutation routes: auth-sensitive flows with higher regression risk.
- Utility routes: sitemap and other operational/static endpoints.

## Ownership by Router Modules

- `src/router/fragmentariumRoutes.tsx`
- `src/router/corpusRoutes.tsx`
- `src/router/dictionaryRoutes.tsx`
- `src/router/bibliographyRoutes.tsx`
- `src/router/signRoutes.tsx`
- `src/router/aboutRoutes.tsx`
- `src/router/toolsRoutes.tsx`
- `src/router/footerRoutes.tsx`
- `src/router/FullPageRoutes.tsx`
- `src/router/router.tsx`

## Route Change Guidance

- Preserve deep-link compatibility unless migration is explicitly planned.
- Update this catalog and release notes when adding or changing path structure.
- Validate route-level data loading and error handling for changed paths.

## Route Change Process

1. Declare route addition/change and expected compatibility.
2. Update route definitions and related navigation links.
3. Validate direct deep-link entry and back/forward browser behavior.
4. Validate route-level fallback behavior for missing/invalid identifiers.
5. Update release notes with migration guidance when path contracts change.

## High-Risk Route Changes

- Renaming existing path segments used in external bookmarks.
- Changing dynamic parameter semantics without compatibility handling.
- Changing route guards for auth-sensitive pages.
