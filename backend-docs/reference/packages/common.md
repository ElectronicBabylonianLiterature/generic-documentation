# Package Reference: ebl/common

- Files: 16
- Total lines: 933

## File-Level API Summary

### `ebl/common/__init__.py`

- Lines: 0

### `ebl/common/application/schemas.py`

- Lines: 16
- Imports: ebl.common.domain.accession.Accession, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, marshmallow.validate
- Classes: AbstractMuseumNumberSchema, AccessionSchema
- Methods in AccessionSchema: create_accession

### `ebl/common/domain/__init__.py`

- Lines: 0

### `ebl/common/domain/accession.py`

- Lines: 15
- Imports: attr, ebl.transliteration.domain.museum_number.MuseumNumber, functools, re
- Classes: Accession
- Methods in Accession: of

### `ebl/common/domain/manuscript_type.py`

- Lines: 12
- Imports: ebl.common.domain.named_enum.NamedEnum
- Classes: ManuscriptType

### `ebl/common/domain/named_enum.py`

- Lines: 29
- Imports: enum.Enum
- Classes: NamedEnum, NamedEnumWithParent
- Methods in NamedEnum: __init__, from_abbreviation, from_name
- Methods in NamedEnumWithParent: __init__
- Functions: get_by_attribute_value

### `ebl/common/domain/period.py`

- Lines: 39
- Imports: ebl.common.domain.named_enum.NamedEnumWithParent, enum.Enum
- Classes: Period, PeriodModifier

### `ebl/common/domain/project.py`

- Lines: 8
- Imports: ebl.common.domain.named_enum.NamedEnumWithParent
- Classes: ResearchProject

### `ebl/common/domain/provenance.py`

- Lines: 155
- Imports: ebl.common.domain.named_enum.NamedEnum
- Classes: ProvenanceEnum, Provenance
- Methods in ProvenanceEnum: __init__

### `ebl/common/domain/scopes.py`

- Lines: 88
- Imports: enum.Enum, re
- Constants: OPEN, RESTRICTED
- Classes: ScopeItem, Scope
- Methods in ScopeItem: __init__, from_string, _parse_scope_string, is_restricted, __str__

### `ebl/common/domain/stage.py`

- Lines: 31
- Imports: ebl.common.domain.named_enum.NamedEnum
- Classes: Stage

### `ebl/common/query/parameter_parser.py`

- Lines: 101
- Imports: ebl.common.query.query_result.LemmaQueryType, ebl.errors.DataError, ebl.transliteration.application.transliteration_query_factory.TransliterationQueryFactory, typing.Callable, typing.Dict, typing.Sequence
- Functions: parse_integer_field, parse_lines, parse_transliteration, parse_lemmas, parse_pages, parse_genre

### `ebl/common/query/query_collation.py`

- Lines: 193
- Imports: attr, enum.Enum, re, typing.Dict, typing.Iterable, typing.Literal, typing.Sequence, urllib.parse.parse_qsl
- Classes: Fields, CollatedFieldQuery
- Methods in Fields: findByDataType, use_collations, use_wildcards, use_markdown_escape
- Methods in CollatedFieldQuery: __attrs_post_init__, value, all_wildcards, _make_regexp, _segmentize, _is_regex, _wildcards_to_regexp, _process_expression, _escape_segment, _markdown_aware_regex
- Functions: make_query_params_from_string, make_query_params

### `ebl/common/query/query_result.py`

- Lines: 65
- Imports: attr, ebl.common.domain.stage.Stage, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text_id.TextId, enum.Enum, typing.Sequence
- Classes: LemmaQueryType, QueryItem, QueryResult, CorpusQueryItem, AfORegisterToFragmentQueryItem, CorpusQueryResult, AfORegisterToFragmentQueryResult
- Methods in QueryResult: create_empty
- Methods in CorpusQueryResult: create_empty
- Methods in AfORegisterToFragmentQueryResult: create_empty

### `ebl/common/query/query_schemas.py`

- Lines: 84
- Imports: ebl.common.query.query_result.AfORegisterToFragmentQueryItem, ebl.common.query.query_result.AfORegisterToFragmentQueryResult, ebl.common.query.query_result.CorpusQueryItem, ebl.common.query.query_result.CorpusQueryResult, ebl.common.query.query_result.QueryItem, ebl.common.query.query_result.QueryResult, ebl.corpus.application.id_schemas.TextIdSchema, ebl.schemas.StageField, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, marshmallow.validate
- Classes: QueryItemSchema, CorpusQueryItemSchema, AfORegisterToFragmentQueryItemSchema, QueryResultSchema, CorpusQueryResultSchema, AfORegisterToFragmentQueryResultSchema
- Methods in QueryItemSchema: make_query_item
- Methods in CorpusQueryItemSchema: make_query_item
- Methods in AfORegisterToFragmentQueryItemSchema: make_query_item
- Methods in QueryResultSchema: make_query_result
- Methods in CorpusQueryResultSchema: make_query_result
- Methods in AfORegisterToFragmentQueryResultSchema: make_query_result

### `ebl/common/query/util.py`

- Lines: 97
- Imports: ebl.transliteration.domain.museum_number.DEFAULT_PREFIX_ORDER, ebl.transliteration.domain.museum_number.NUMBER_PREFIX_ORDER, ebl.transliteration.domain.museum_number.PREFIX_ORDER, typing.Dict, typing.List, typing.Optional, typing.Union
- Functions: flatten_field, drop_duplicates, ngrams, filter_array, convert_to_int, sort_by_museum_number

