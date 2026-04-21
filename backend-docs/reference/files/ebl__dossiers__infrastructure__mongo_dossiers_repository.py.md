# File Reference: ebl/dossiers/infrastructure/mongo_dossiers_repository.py

- Lines: 284
- Characters: 9974

## Top-Level Symbols

- Classes: DossierRecordSchema, DossierRecordSuggestionSchema, MongoDossiersRepository
- Functions: None
- Constants: DOSSIERS_COLLECTION, BIBLIOGRAPHY_COLLECTION, FRAGMENTS_COLLECTION, MAX_QUERY_LENGTH, MAX_SUGGESTION_WORDS

## Methods by Class

- DossierRecordSchema: make_record
- DossierRecordSuggestionSchema: make_suggestion
- MongoDossiersRepository: __init__, create, find_all, query_by_ids, search, search_suggestions, filter_by_fragment_criteria, _build_fragment_query, _build_genre_filter, _extract_dossier_ids_from_fragments, _extract_dossier_id, _fetch_dossiers, _extract_reference_ids, _fetch_bibliography_entries, _inject_dossiers_with_bibliography

## Imports

- attr
- ebl.bibliography.application.reference_schema.ApiReferenceSchema
- ebl.bibliography.domain.reference.BibliographyId
- ebl.common.domain.provenance.Provenance
- ebl.dossiers.application.dossiers_repository.DossiersRepository
- ebl.dossiers.domain.dossier_record.DossierRecord
- ebl.dossiers.domain.dossier_record.DossierRecordSuggestion
- ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema
- ebl.mongo_collection.MongoCollection
- marshmallow.EXCLUDE
- marshmallow.Schema
- marshmallow.fields
- marshmallow.post_load
- pymongo.database.Database
- re
- typing.Dict
- typing.List
- typing.Optional
- typing.Sequence

