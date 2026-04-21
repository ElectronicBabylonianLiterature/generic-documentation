# Package Reference: ebl/signs

- Files: 10
- Total lines: 661

## File-Level API Summary

### `ebl/signs/__init__.py`

- Lines: 0

### `ebl/signs/infrastructure/__init__.py`

- Lines: 0

### `ebl/signs/infrastructure/memoizing_sign_repository.py`

- Lines: 58
- Imports: ebl.transliteration.application.sign_repository.SignRepository, ebl.transliteration.domain.sign.Sign, ebl.transliteration.domain.sign.SignName, pydash, typing.Optional, typing.Sequence
- Classes: MemoizingSignRepository
- Methods in MemoizingSignRepository: __init__, create, find, find_many, search_by_lists_name, search_by_lemma, search_include_homophones, search_composite_signs, search_by_id, search_all, search, list_all_signs

### `ebl/signs/infrastructure/mongo_sign_repository.py`

- Lines: 403
- Imports: ebl.errors.NotFoundError, ebl.mongo_collection.MongoCollection, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.application.sign_repository.SignRepository, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.sign.Fossey, ebl.transliteration.domain.sign.Logogram, ebl.transliteration.domain.sign.Sign, ebl.transliteration.domain.sign.SignListRecord, ebl.transliteration.domain.sign.SignName, ebl.transliteration.domain.sign.SortKeys, ebl.transliteration.domain.sign.Value, marshmallow.EXCLUDE, marshmallow.Schema, marshmallow.fields, marshmallow.post_dump, marshmallow.post_load, pymongo.database.Database, re
- Constants: COLLECTION
- Classes: SignListRecordSchema, ValueSchema, OrderedSignSchema, LogogramSchema, FosseySchema, SortKeysSchema, SignSchema, SignDtoSchema, MongoSignRepository
- Methods in SignListRecordSchema: make_sign_list_record
- Methods in ValueSchema: make_value, filter_none
- Methods in LogogramSchema: make_logogram
- Methods in FosseySchema: make_fossey
- Methods in SortKeysSchema: make_sort_keys
- Methods in SignSchema: make_sign, filter_none
- Methods in SignDtoSchema: make_sign_dto
- Methods in MongoSignRepository: __init__, create, find_many, find, find_signs_by_order, search, search_by_id, search_all, search_by_lists_name, search_include_homophones, search_composite_signs, search_by_lemma, list_all_signs, _extract_word_subIndex, _extract_words_subIndexes, _find_unicode, get_unicode_from_atf

### `ebl/signs/web/__init__.py`

- Lines: 0

### `ebl/signs/web/bootstrap.py`

- Lines: 35
- Imports: ebl.context.Context, ebl.fragmentarium.application.cropped_annotations_service.CroppedAnnotationService, ebl.signs.web.cropped_annotations.CroppedAnnotationsResource, ebl.signs.web.sign_search.SignsSearch, ebl.signs.web.signs.SignsListResource, ebl.signs.web.signs.SignsOrderResource, ebl.signs.web.signs.SignsResource, ebl.signs.web.signs.TransliterationResource, falcon
- Functions: create_signs_routes

### `ebl/signs/web/cropped_annotations.py`

- Lines: 14
- Imports: ebl.fragmentarium.application.cropped_annotations_service.CroppedAnnotationService
- Classes: CroppedAnnotationsResource
- Methods in CroppedAnnotationsResource: __init__, on_get

### `ebl/signs/web/logograms_injector.py`

- Lines: 45
- Imports: attr, ebl.transliteration.application.sign_repository.SignRepository, ebl.transliteration.application.signs_visitor.SignsVisitor, ebl.transliteration.domain.atf_parsers.lark_parser.parse_text_line, ebl.transliteration.domain.sign.Sign, re, typing.Sequence
- Functions: inject_logograms_unicode, get_logogram_unicode, preprocess_logogram_atf

### `ebl/signs/web/sign_search.py`

- Lines: 53
- Imports: ebl.dispatcher.create_dispatcher, ebl.errors.DataError, ebl.signs.infrastructure.mongo_sign_repository.SignDtoSchema, ebl.signs.web.logograms_injector.inject_logograms_unicode, ebl.transliteration.application.sign_repository.SignRepository, typing.Dict
- Classes: SignsSearch
- Methods in SignsSearch: __init__, _parse_sub_index, on_get

### `ebl/signs/web/signs.py`

- Lines: 53
- Imports: attr, base64, cairosvg.svg2png, ebl.signs.infrastructure.mongo_sign_repository.SignDtoSchema, ebl.transliteration.application.sign_repository.SignRepository
- Classes: SignsResource, SignsListResource, SignsOrderResource, TransliterationResource
- Methods in SignsResource: __init__, on_get
- Methods in SignsListResource: __init__, on_get
- Methods in SignsOrderResource: __init__, on_get
- Methods in TransliterationResource: __init__, on_get

