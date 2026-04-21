# File Reference: ebl/fragmentarium/infrastructure/mongo_annotations_repository.py

- Lines: 80
- Characters: 2969

## Top-Level Symbols

- Classes: MongoAnnotationsRepository
- Functions: None
- Constants: COLLECTION

## Methods by Class

- MongoAnnotationsRepository: __init__, create_or_update, query_by_museum_number, retrieve_all_non_empty, find_by_sign

## Imports

- ebl.errors.NotFoundError
- ebl.fragmentarium.application.annotations_repository.AnnotationsRepository
- ebl.fragmentarium.application.annotations_schema.AnnotationsSchema
- ebl.fragmentarium.application.annotations_schema.AnnotationsWithScriptSchema
- ebl.fragmentarium.domain.annotation.Annotations
- ebl.mongo_collection.MongoCollection
- ebl.transliteration.domain.museum_number.MuseumNumber
- marshmallow.EXCLUDE
- pymongo.database.Database
- re
- typing.List
- typing.Sequence

