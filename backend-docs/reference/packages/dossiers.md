# Package Reference: ebl/dossiers

- Files: 5
- Total lines: 446

## File-Level API Summary

### `ebl/dossiers/application/dossiers_repository.py`

- Lines: 43
- Imports: abc.ABC, abc.abstractmethod, ebl.dossiers.domain.dossier_record.DossierRecord, ebl.dossiers.domain.dossier_record.DossierRecordSuggestion, typing.Optional, typing.Sequence
- Classes: DossiersRepository
- Methods in DossiersRepository: find_all, query_by_ids, search, search_suggestions, filter_by_fragment_criteria, create

### `ebl/dossiers/domain/dossier_record.py`

- Lines: 25
- Imports: attr, ebl.bibliography.domain.reference.Reference, ebl.common.domain.provenance.Provenance, ebl.fragmentarium.domain.fragment.Script, typing.Optional, typing.Sequence
- Classes: DossierRecord, DossierRecordSuggestion

### `ebl/dossiers/infrastructure/mongo_dossiers_repository.py`

- Lines: 284
- Imports: attr, ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.bibliography.domain.reference.BibliographyId, ebl.common.domain.provenance.Provenance, ebl.dossiers.application.dossiers_repository.DossiersRepository, ebl.dossiers.domain.dossier_record.DossierRecord, ebl.dossiers.domain.dossier_record.DossierRecordSuggestion, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.mongo_collection.MongoCollection, marshmallow.EXCLUDE, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, pymongo.database.Database, re, typing.Dict, typing.List, typing.Optional, typing.Sequence
- Constants: BIBLIOGRAPHY_COLLECTION, DOSSIERS_COLLECTION, FRAGMENTS_COLLECTION, MAX_QUERY_LENGTH, MAX_SUGGESTION_WORDS
- Classes: DossierRecordSchema, DossierRecordSuggestionSchema, MongoDossiersRepository
- Methods in DossierRecordSchema: make_record
- Methods in DossierRecordSuggestionSchema: make_suggestion
- Methods in MongoDossiersRepository: __init__, create, find_all, query_by_ids, search, search_suggestions, filter_by_fragment_criteria, _build_fragment_query, _build_genre_filter, _extract_dossier_ids_from_fragments, _extract_dossier_id, _fetch_dossiers, _extract_reference_ids, _fetch_bibliography_entries, _inject_dossiers_with_bibliography

### `ebl/dossiers/web/bootstrap.py`

- Lines: 22
- Imports: ebl.context.Context, ebl.dossiers.web.dossier_records.DossiersFilterResource, ebl.dossiers.web.dossier_records.DossiersResource, ebl.dossiers.web.dossier_records.DossiersSearchResource, ebl.dossiers.web.dossier_records.DossiersSuggestionsResource, falcon
- Functions: create_dossiers_routes

### `ebl/dossiers/web/dossier_records.py`

- Lines: 72
- Imports: ebl.dossiers.application.dossiers_repository.DossiersRepository, ebl.dossiers.infrastructure.mongo_dossiers_repository.DossierRecordSchema, ebl.dossiers.infrastructure.mongo_dossiers_repository.DossierRecordSuggestionSchema, ebl.errors.NotFoundError, falcon.Request, falcon.Response, marshmallow.EXCLUDE, urllib.parse.parse_qs
- Classes: DossiersResource, DossiersSearchResource, DossiersFilterResource, DossiersSuggestionsResource
- Methods in DossiersResource: __init__, on_get
- Methods in DossiersSearchResource: __init__, on_get
- Methods in DossiersFilterResource: __init__, on_get
- Methods in DossiersSuggestionsResource: __init__, on_get

