# Backend Service Map

This guide is a narrative map of the backend modules, how they are wired into the Falcon application, and where to find implementation and generated reference pages.

## Application Composition

The app assembly starts in `ebl/app.py` and uses `Context` from `ebl/context.py` to construct infrastructure dependencies, service objects, and route registration.

Initialization phases:
1. Build cross-cutting infrastructure:
- MongoDB client and database handles
- Auth backends (Auth0 + guest fallback)
- Caching layers
- Repository implementations
2. Create Falcon app:
- CORS enabled
- Auth middleware attached
- Error handling registered
3. Register domain route modules:
- signs
- bibliography
- corpus
- dictionary
- files
- fragmentarium
- lemmatization
- markup
- afo_register
- dossiers

## Domain Modules and Primary Responsibilities

### Core runtime and composition
- `ebl/app.py`: environment boot, context creation, route composition.
- `ebl/context.py`: dependency container and factory methods for derived services.
- `ebl/error_handler.py`: API error mapping strategy.
- `ebl/changelog.py`: change tracking hooks.

### Corpus and text domain
- `ebl/corpus`: text/chapter retrieval, line editing/import, query surfaces.
- Route wiring: `ebl/corpus/web/bootstrap.py`.
- Service root: `ebl/corpus/application/corpus.py`.

### Fragmentarium domain
- `ebl/fragmentarium`: fragment retrieval, query/filter surfaces, metadata updates, annotation and media-driven operations.
- Route wiring: `ebl/fragmentarium/web/bootstrap.py`.
- Service roots: `ebl/fragmentarium/application/fragmentarium.py`, `ebl/fragmentarium/application/fragment_finder.py`, `ebl/fragmentarium/application/fragment_updater.py`.

### Lexical and transliteration-related domains
- `ebl/dictionary`: dictionary word search and updates.
- `ebl/signs`: sign repository/search and transliteration parse helper endpoints.
- `ebl/lemmatization`: lemma suggestion search endpoint.
- `ebl/transliteration`: transliteration parsing, query building, line/token schemas, and parallel-line services used by corpus and fragmentarium.

### Reference/catalog domains
- `ebl/bibliography`: bibliography lookup and listing.
- `ebl/afo_register`: AfO register search/suggestions/text-number joins.
- `ebl/dossiers`: dossier search/filter/suggestions.

### Utility/support domains
- `ebl/files`: image/file serving from GridFS-backed repository.
- `ebl/cache`: cache primitives and repository adapter.
- `ebl/common`: common schemas, enums, query abstractions.
- `ebl/users`: auth integration and user model/scopes.
- `ebl/io`: import/export and data ingestion helpers.
- `ebl/alignment`: alignment algorithms and update support.
- `ebl/chronology`: chronology static data and chronology-specific logic.
- `ebl/markup`: text markup conversion endpoints.

## Where To Continue Reading

Narrative domain guides:
- `docs/guides/domain-corpus.md`
- `docs/guides/domain-fragmentarium.md`
- `docs/guides/domain-lexical-services.md`
- `docs/guides/domain-reference-services.md`
- `docs/guides/domain-support-services.md`
- `docs/guides/request-response-contracts.md`
- `docs/guides/dependency-and-data-flow.md`

Auto-generated references:
- Package references: `docs/reference/packages/`
- File references: `docs/reference/files/`
