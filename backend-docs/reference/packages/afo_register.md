# Package Reference: ebl/afo_register

- Files: 5
- Total lines: 244

## File-Level API Summary

### `ebl/afo_register/application/afo_register_repository.py`

- Lines: 31
- Imports: abc.ABC, abc.abstractmethod, ebl.afo_register.domain.afo_register_record.AfoRegisterRecord, ebl.afo_register.domain.afo_register_record.AfoRegisterRecordSuggestion, typing.Any, typing.Sequence
- Classes: AfoRegisterRepository
- Methods in AfoRegisterRepository: create, search, search_by_texts_and_numbers, search_suggestions

### `ebl/afo_register/domain/afo_register_record.py`

- Lines: 19
- Imports: attr, typing.Sequence
- Classes: AfoRegisterRecord, AfoRegisterRecordSuggestion

### `ebl/afo_register/infrastructure/mongo_afo_register_repository.py`

- Lines: 124
- Imports: ebl.afo_register.application.afo_register_repository.AfoRegisterRepository, ebl.afo_register.domain.afo_register_record.AfoRegisterRecord, ebl.afo_register.domain.afo_register_record.AfoRegisterRecordSuggestion, ebl.common.query.query_collation.make_query_params, ebl.mongo_collection.MongoCollection, marshmallow.EXCLUDE, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, natsort.natsorted, pymongo.database.Database, typing.Sequence, typing.cast
- Constants: COLLECTION
- Classes: AfoRegisterRecordSchema, AfoRegisterRecordSuggestionSchema, MongoAfoRegisterRepository
- Methods in AfoRegisterRecordSchema: make_record
- Methods in AfoRegisterRecordSuggestionSchema: make_suggestion
- Methods in MongoAfoRegisterRepository: __init__, create, search, search_by_texts_and_numbers, search_suggestions
- Functions: create_search_query, cast_with_sorting

### `ebl/afo_register/web/afo_register_records.py`

- Lines: 49
- Imports: ebl.afo_register.application.afo_register_repository.AfoRegisterRepository, ebl.afo_register.infrastructure.mongo_afo_register_repository.AfoRegisterRecordSchema, ebl.afo_register.infrastructure.mongo_afo_register_repository.AfoRegisterRecordSuggestionSchema, ebl.errors.NotFoundError, falcon.Request, falcon.Response
- Classes: AfoRegisterResource, AfoRegisterTextsAndNumbersResource, AfoRegisterSuggestionsResource
- Methods in AfoRegisterResource: __init__, on_get
- Methods in AfoRegisterTextsAndNumbersResource: __init__, on_post
- Methods in AfoRegisterSuggestionsResource: __init__, on_get

### `ebl/afo_register/web/bootstrap.py`

- Lines: 21
- Imports: ebl.afo_register.web.afo_register_records.AfoRegisterResource, ebl.afo_register.web.afo_register_records.AfoRegisterSuggestionsResource, ebl.afo_register.web.afo_register_records.AfoRegisterTextsAndNumbersResource, ebl.context.Context, falcon
- Functions: create_afo_register_routes

