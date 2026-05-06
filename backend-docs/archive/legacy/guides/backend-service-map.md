# Backend Service Map

Last updated: May 2026

This guide maps backend capabilities to owning domains and route entry points.

## Composition Root

Application startup occurs in `ebl/app.py`:

1. Build infrastructure dependencies and repositories.
2. Build `Context` with service dependencies.
3. Create Falcon app and attach middleware.
4. Register route sets per domain via `create_*_routes` bootstraps.

## Route Registration Ownership

| Domain Area | Route Bootstrap |
|---|---|
| Signs | `ebl/signs/web/bootstrap.py` |
| Bibliography | `ebl/bibliography/web/bootstrap.py` |
| Corpus | `ebl/corpus/web/bootstrap.py` |
| Dictionary | `ebl/dictionary/web/bootstrap.py` |
| Files | `ebl/files/web/bootstrap.py` |
| Fragmentarium (Library) | `ebl/fragmentarium/web/bootstrap.py` |
| Lemmatization | `ebl/lemmatization/web/bootstrap.py` |
| Markup | `ebl/markup/web/bootstrap.py` |
| AfO Register | `ebl/afo_register/web/bootstrap.py` |
| Dossiers | `ebl/dossiers/web/bootstrap.py` |
| Provenance | `ebl/provenance/web/bootstrap.py` |

## Capability Map

| Capability Group | Primary Responsibilities | Main Integration Dependencies |
|---|---|---|
| Corpus | Text/chapter retrieval, search, chapter updates | Transliteration query factory, bibliography, changelog, cache |
| Fragmentarium (Library) | Fragment retrieval/query, metadata updates, annotations, media | Dictionary, bibliography, photo/folio storage, AI client, cache |
| Lexical Services | Word/sign search, transliteration helpers, lemma suggestions | Sign repository, annotation/media services, lemma repository |
| Reference Services | Bibliography, AfO register, dossiers, provenance lookups | Domain-specific repositories, shared query parsing |
| Support Services | Auth, error mapping, file delivery, cache, changelog | Auth0, Falcon middleware, MongoDB/GridFS |

## Cross-Cutting Flows

- Authentication and scopes: enforced by middleware plus route-level guards.
- Contract validation: schema classes in web/application layers.
- Persistence: repository adapters in infrastructure modules.
- Observability and reliability: Sentry integration, runbooks, SLO/SLI baselines.

## Related Guides

- [Domain: Corpus](domain-corpus.md)
- [Domain: Fragmentarium](domain-fragmentarium.md)
- [Domain: Lexical Services](domain-lexical-services.md)
- [Domain: Reference Services](domain-reference-services.md)
- [Domain: Support Services](domain-support-services.md)
- [Request and Response Contracts](request-response-contracts.md)
- [Dependency and Data Flow](dependency-and-data-flow.md)
