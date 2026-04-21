# Package Reference: ebl/dictionary

- Files: 14
- Total lines: 961

## File-Level API Summary

### `ebl/dictionary/__init__.py`

- Lines: 0

### `ebl/dictionary/application/__init__.py`

- Lines: 0

### `ebl/dictionary/application/dictionary_service.py`

- Lines: 105
- Imports: ebl.changelog.Changelog, ebl.common.query.query_collation.make_query_params, ebl.dictionary.application.word_repository.WordRepository, ebl.dictionary.domain.word.WordId, ebl.users.domain.user.User, typing.Any, typing.Sequence, urllib.parse.parse_qsl
- Constants: COLLECTION
- Classes: Dictionary
- Methods in Dictionary: __init__, create, create_proper_noun, find, find_many, search, search_lemma, list_all_words, update
- Functions: _parse_vowel_class_value, _parse_origin_value, _collect_parsed_params, _build_search_result, get_search_params

### `ebl/dictionary/application/word_repository.py`

- Lines: 38
- Imports: abc.ABC, abc.abstractmethod, ebl.common.query.query_collation.CollatedFieldQuery, ebl.dictionary.domain.word.WordId, typing.Optional, typing.Sequence
- Classes: WordRepository
- Methods in WordRepository: create, create_proper_noun, query_by_id, query_by_ids, query_by_lemma_meaning_root_vowels, query_by_lemma_prefix, list_all_words, update

### `ebl/dictionary/application/word_schema.py`

- Lines: 132
- Imports: ebl.dictionary.domain.word.WordOrigin, ebl.schemas.ValueEnumField, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, marshmallow.pre_dump, marshmallow.validate.Length
- Classes: VowelSchema, FormSchema, LogogramSchema, DerivedSchema, DerivedFromSchema, EntrySchema, AmplifiedMeaningSchema, OraccWordSchema, AkkadischeGlossareUndIndicesSchema, WordSchema, ProperNounCreationRequestSchema
- Methods in WordSchema: _coerce_origin_for_dump, _normalize_origin_after_load
- Functions: lemma, attested, homonym, meaning, notes

### `ebl/dictionary/domain/__init__.py`

- Lines: 0

### `ebl/dictionary/domain/word.py`

- Lines: 15
- Imports: enum.Enum, typing.NewType
- Classes: WordOrigin

### `ebl/dictionary/infrastructure/__init__.py`

- Lines: 0

### `ebl/dictionary/infrastructure/akkadian_sort.py`

- Lines: 229
- Imports: roman, typing.Any, typing.Dict, typing.List, typing.Tuple
- Constants: AKKADIAN_ACCENT_MAP, AKKADIAN_BASE_MAP, AKKADIAN_BASE_ORDER, AKKADIAN_SORT_DEFAULT, ROMAN_NUMERALS, ROMAN_PATTERN
- Functions: _build_base_map, _build_accent_map, _split_prefix_and_roman, akkadian_sort_key, _make_character_switch, _map_weight_expr, _make_roman_numeral_switch, _map_roman_characters, _apply_roman_rules, _roman_value_expr, _is_roman_check, _extract_prefix, _pad_and_concat_weights, create_mongo_sort_key

### `ebl/dictionary/infrastructure/word_repository.py`

- Lines: 229
- Imports: ebl.changelog.Changelog, ebl.common.query.query_collation.CollatedFieldQuery, ebl.dictionary.application.word_repository.WordRepository, ebl.dictionary.domain.word.WordId, ebl.dictionary.infrastructure.akkadian_sort.create_mongo_sort_key, ebl.mongo_collection.MongoCollection, typing.Optional, typing.Sequence
- Constants: COLLECTION, LEMMA_SEARCH_LIMIT
- Classes: MongoWordRepository
- Methods in MongoWordRepository: __init__, create, create_proper_noun, query_by_id, query_by_ids, query_by_lemma_meaning_root_vowels, query_by_lemma_prefix, list_all_words, update
- Functions: _create_substring_expression, _create_lemma_search_pipeline, _create_query_by_lemma, _create_query_by_meaning, _create_query_by_root, _create_query_by_vowel_class, _create_query_by_origin

### `ebl/dictionary/web/__init__.py`

- Lines: 0

### `ebl/dictionary/web/bootstrap.py`

- Lines: 22
- Imports: ebl.context.Context, ebl.dictionary.application.dictionary_service.Dictionary, ebl.dictionary.web.word_search.WordSearch, ebl.dictionary.web.words.ProperNounCreationResource, ebl.dictionary.web.words.WordsListResource, ebl.dictionary.web.words.WordsResource, falcon
- Functions: create_dictionary_routes

### `ebl/dictionary/web/word_search.py`

- Lines: 119
- Imports: ebl.dictionary.application.dictionary_service.Dictionary, ebl.dispatcher.create_dispatcher, typing.Union, urllib.parse.parse_qsl, urllib.parse.urlencode
- Classes: WordSearch
- Methods in WordSearch: __init__, _build_query_string, _parse_nested_query_string, _normalize_origin_values, _extract_search_params, _sanitize, _merge_query_and_origin, _normalize_query, on_get

### `ebl/dictionary/web/words.py`

- Lines: 72
- Imports: ebl.dictionary.application.word_schema.ProperNounCreationRequestSchema, ebl.dictionary.application.word_schema.WordSchema, ebl.marshmallowschema.validate, ebl.users.web.require_scope.require_scope, falcon
- Classes: WordsResource, WordsListResource, ProperNounCreationResource
- Methods in WordsResource: __init__, on_get, on_post
- Methods in WordsListResource: __init__, on_get
- Methods in ProperNounCreationResource: __init__, _is_valid_created_word_payload, on_post

