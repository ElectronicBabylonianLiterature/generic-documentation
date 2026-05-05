# Feature Domains Overview

## Purpose

This document captures the frontend at product-domain level. It is the authoritative feature map for ownership, integrations, and change impact assessment.

## Domain Ownership Model

- Each domain owns its business rules, repository mappings, and UI behavior.
- Shared platform modules provide reusable primitives but should not absorb domain-specific logic.
- Cross-domain behavior should be orchestrated in application services, not by direct feature-to-feature imports where avoidable.

## Core Scholarly Domains

| Domain | Primary Responsibility | Core Source Areas | Integrations |
| --- | --- | --- | --- |
| Fragmentarium | Fragment discovery, detail, annotation, references, and record workflows | `src/fragmentarium` | `src/corpus`, `src/signs`, `src/afo-register`, `src/auth` |
| Corpus | Text and chapter navigation, alignment, and staged corpus rendering | `src/corpus` | `src/transliteration`, `src/markup`, `src/query` |
| Dictionary | Lexical lookup, lemma search, and lexical entry maintenance | `src/dictionary` | `src/query`, `src/auth` |
| Signs | Sign search, sign details, sign images, and transliteration lookups | `src/signs` | `src/transliteration`, `src/query` |
| Bibliography | Reference search, create/edit flows, and bibliography record retrieval | `src/bibliography` | `src/afo-register`, `src/auth` |

## Research and Editorial Domains

| Domain | Primary Responsibility | Core Source Areas |
| --- | --- | --- |
| Dossiers | Dossier retrieval, filtering, and suggestion workflows | `src/dossiers` |
| Research Projects | Project metadata views and research context | `src/research-projects` |
| AFO Register | Register lookup and suggestion support | `src/afo-register` |
| Akkadian | Linguistic helpers and domain transformations | `src/akkadian` |
| Transliteration | Transliteration parsing and related transformations | `src/transliteration` |
| Markup | Markup parsing and markup-driven rendering support | `src/markup` |
| Editor | Shared editing and annotation-facing UI utilities | `src/editor` |
| Chronology | Chronology and date-oriented domain behavior | `src/chronology` |
| About | Informational pages and project context | `src/about` |

## Platform and Shared Domains

| Domain | Primary Responsibility | Core Source Areas |
| --- | --- | --- |
| Auth | Authentication, token/session handling, and scope controls | `src/auth` |
| Router | Application routing and path composition | `src/router` |
| HTTP | API transport contract and API error semantics | `src/http` |
| Common | Shared UI, hooks, utilities, and boundary components | `src/common` |
| Query | Shared query model and query helper utilities | `src/query` |
| Footer | Footer routes and legal page composition | `src/footer` |
| Test Support | Fixtures, fakes, drivers, and test utilities | `src/test-support` |

## Cross-Domain Integration Matrix

| Domain | Primary Upstream Dependencies | Typical Downstream Impact |
| --- | --- | --- |
| Fragmentarium | Corpus, Signs, AFO Register, Auth | Search flows, annotations, references, record pages |
| Corpus | Transliteration, Markup, Query | Chapter rendering, text alignment, stage navigation |
| Dictionary | Query, Auth | Lexical search and entry update behavior |
| Signs | Transliteration, Query | Sign lookup and sign media rendering |
| Bibliography | AFO Register, Auth | Reference creation, lookup, and edit workflows |

## Change Impact Heuristics

- If a change modifies a domain model used by multiple domains, treat it as cross-domain risk and update tests in every impacted consumer.
- If a change modifies query parameter behavior, validate dictionary, signs, and any query-driven route flows.
- If a change modifies auth assumptions, validate all mutation and protected navigation paths.

## Domain Invariants

- Repository and API boundary logic should remain in infrastructure or transport layers.
- Domain transformations should remain explicit and typed.
- Shared concerns must be centralized in platform modules, not duplicated per feature.
- Feature UI should handle absent or partial backend data without crashing.

## High-Risk Cross-Domain Changes

- Changes to transliteration and corpus model contracts.
- Fragmentarium route or payload changes.
- Authentication assumptions around mutation flows.
- Query model changes that affect dictionary/sign search behavior.

## Domain Review Checklist

1. Does the change stay inside the owning domain boundary?
2. Are repository mappings and domain types updated together?
3. Are route and contract docs updated when behavior changed?
4. Are cross-domain regressions explicitly validated?

## Expected Updates When Features Change

- Update [../reference/api-and-data-contracts.md](../reference/api-and-data-contracts.md) when endpoint behavior changes.
- Update [../reference/route-catalog.md](../reference/route-catalog.md) when path structure changes.
- Update [../guides/testing-strategy.md](../guides/testing-strategy.md) when validation requirements change.

## Definition of Done for Domain Changes

- Behavior implemented in the correct layer.
- Integration points validated for affected domains.
- Contract/route docs updated if applicable.
- Release note impact captured in change-log template.
