# File Reference: ebl/afo_register/infrastructure/mongo_afo_register_repository.py

- Lines: 124
- Characters: 4602

## Top-Level Symbols

- Classes: AfoRegisterRecordSchema, AfoRegisterRecordSuggestionSchema, MongoAfoRegisterRepository
- Functions: create_search_query, cast_with_sorting
- Constants: COLLECTION

## Methods by Class

- AfoRegisterRecordSchema: make_record
- AfoRegisterRecordSuggestionSchema: make_suggestion
- MongoAfoRegisterRepository: __init__, create, search, search_by_texts_and_numbers, search_suggestions

## Imports

- ebl.afo_register.application.afo_register_repository.AfoRegisterRepository
- ebl.afo_register.domain.afo_register_record.AfoRegisterRecord
- ebl.afo_register.domain.afo_register_record.AfoRegisterRecordSuggestion
- ebl.common.query.query_collation.make_query_params
- ebl.mongo_collection.MongoCollection
- marshmallow.EXCLUDE
- marshmallow.Schema
- marshmallow.fields
- marshmallow.post_load
- natsort.natsorted
- pymongo.database.Database
- typing.Sequence
- typing.cast

