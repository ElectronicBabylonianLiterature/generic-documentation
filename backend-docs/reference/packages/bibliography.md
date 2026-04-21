# Package Reference: ebl/bibliography

- Files: 14
- Total lines: 656

## File-Level API Summary

### `ebl/bibliography/__init__.py`

- Lines: 0

### `ebl/bibliography/application/__init__.py`

- Lines: 0

### `ebl/bibliography/application/bibliography.py`

- Lines: 137
- Imports: ebl.bibliography.application.bibliography_repository.BibliographyRepository, ebl.bibliography.application.serialization.create_mongo_entry, ebl.bibliography.domain.reference.Reference, ebl.changelog.Changelog, ebl.errors.DataError, ebl.errors.NotFoundError, ebl.users.domain.user.User, pydash.uniq_with, re, typing.Optional, typing.Sequence
- Constants: COLLECTION
- Classes: Bibliography
- Methods in Bibliography: __init__, create, find, find_many, update, search, list_all_bibliography, _parse_author_year_and_title, _parse_container_title_short_and_collection_number, _parse_title_short_and_volume, search_author_year_and_title, search_container_title_and_collection_number, search_title_short_and_volume, validate_references

### `ebl/bibliography/application/bibliography_repository.py`

- Lines: 42
- Imports: abc.ABC, abc.abstractmethod, typing.Any, typing.Optional, typing.Sequence
- Classes: BibliographyRepository
- Methods in BibliographyRepository: create, query_by_id, query_by_ids, update, query_by_author_year_and_title, query_by_container_title_and_collection_number, query_by_title_short_and_volume, list_all_bibliography

### `ebl/bibliography/application/reference_schema.py`

- Lines: 25
- Imports: ebl.bibliography.application.serialization.create_object_entry, ebl.bibliography.domain.reference.BibliographyId, ebl.bibliography.domain.reference.Reference, ebl.bibliography.domain.reference.ReferenceType, ebl.schemas.NameEnumField, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: ReferenceSchema, ApiReferenceSchema
- Methods in ReferenceSchema: make_reference

### `ebl/bibliography/application/serialization.py`

- Lines: 6
- Functions: create_mongo_entry, create_object_entry

### `ebl/bibliography/domain/__init__.py`

- Lines: 0

### `ebl/bibliography/domain/bibliography_entry.py`

- Lines: 162
- Constants: CSL_JSON_SCHEMA, DATE_SCHEMA, NAME_SCHEMA

### `ebl/bibliography/domain/reference.py`

- Lines: 30
- Imports: attr, enum.Enum, enum.auto, typing.NewType, typing.Optional, typing.Sequence
- Classes: ReferenceType, Reference
- Methods in Reference: set_document

### `ebl/bibliography/infrastructure/__init__.py`

- Lines: 0

### `ebl/bibliography/infrastructure/bibliography.py`

- Lines: 165
- Imports: ebl.bibliography.application.bibliography_repository.BibliographyRepository, ebl.bibliography.application.serialization.create_mongo_entry, ebl.bibliography.application.serialization.create_object_entry, ebl.mongo_collection.MongoCollection, typing.Any, typing.Dict, typing.Optional, typing.Sequence
- Constants: COLLECTION
- Classes: MongoBibliographyRepository
- Methods in MongoBibliographyRepository: __init__, create, query_by_id, query_by_ids, update, query_by_author_year_and_title, query_by_container_title_and_collection_number, query_by_title_short_and_volume, _query, list_all_bibliography
- Functions: join_reference_documents

### `ebl/bibliography/web/__init__.py`

- Lines: 0

### `ebl/bibliography/web/bibliography_entries.py`

- Lines: 67
- Imports: ebl.bibliography.application.bibliography.Bibliography, ebl.bibliography.domain.bibliography_entry.CSL_JSON_SCHEMA, ebl.cache.application.cache.DAILY_TIMEOUT, ebl.users.web.require_scope.require_scope, falcon, falcon.Request, falcon.Response, falcon.media.validators.jsonschema.validate, falcon_caching.Cache, json
- Classes: BibliographyResource, BibliographyEntriesResource, BibliographyList, BibliographyAll
- Methods in BibliographyResource: __init__, on_get, on_post
- Methods in BibliographyEntriesResource: __init__, on_get, on_post
- Methods in BibliographyList: __init__, on_get
- Methods in BibliographyAll: __init__, on_get

### `ebl/bibliography/web/bootstrap.py`

- Lines: 22
- Imports: ebl.bibliography.web.bibliography_entries.BibliographyAll, ebl.bibliography.web.bibliography_entries.BibliographyEntriesResource, ebl.bibliography.web.bibliography_entries.BibliographyList, ebl.bibliography.web.bibliography_entries.BibliographyResource, ebl.context.Context, falcon
- Functions: create_bibliography_routes

