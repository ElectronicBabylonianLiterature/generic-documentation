# Domain Guide: Lexical and Transliteration Services

This guide covers dictionary, signs, lemmatization, and transliteration modules, which together provide lexical search, sign operations, lemma suggestions, and transliteration parsing/query support.

## Dictionary

Route registration: `ebl/dictionary/web/bootstrap.py`

Endpoints:
- `/words`
- `/words/{object_id}`
- `/words/all`
- `/words/create-proper-noun`

Core service:
- `Dictionary` (`ebl/dictionary/application/dictionary_service.py`)

Contracts:
- `ebl/dictionary/application/word_schema.py`

## Signs

Route registration: `ebl/signs/web/bootstrap.py`

Endpoints:
- `/signs`
- `/signs/{sign_name}`
- `/signs/{sign_name}/images`
- `/signs/{sign_name}/images/cluster/{cluster_id}`
- `/signs/all`
- `/signs/{sign_name}/{sort_era}`
- `/signs/transliteration/{line}`

Core dependencies:
- Sign repository infrastructure
- Cropped annotation service for sign image lookups

## Lemmatization

Route registration: `ebl/lemmatization/web/bootstrap.py`

Endpoint:
- `/lemmas`

Core service path:
- `SuggestionFinder` backed by dictionary + lemma repository.

## Transliteration (shared internal domain)

Transliteration modules do not expose a dedicated bootstrap file; they provide shared parsing/query/serialization primitives used by corpus, fragmentarium, and signs endpoints.

Primary concerns:
- query parsing and AST-like query structures
- line/token schema validation
- text model serialization and normalization
- sign repository-backed query generation

Key modules:
- `ebl/transliteration/domain/transliteration_query.py`
- `ebl/transliteration/application/transliteration_query_factory.py`
- `ebl/transliteration/application/*_schemas.py`
- `ebl/common/query/parameter_parser.py`

## Dependency Relationships

- Corpus query endpoints use transliteration query factories for chapter/text search.
- Fragmentarium query endpoints use transliteration query parsing for sign-based filtering.
- Signs transliteration endpoint exposes transliteration utility behavior directly for clients.

## Suggested Deep Links

- `backend-docs/guides/backend-service-map.md`
- `backend-docs/guides/request-response-contracts.md`
- `backend-docs/standards/api-endpoint-catalog.md`
- `backend-docs/standards/authorization-matrix.md`
