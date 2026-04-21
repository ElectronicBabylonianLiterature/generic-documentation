# File Reference: ebl/bibliography/application/bibliography.py

- Lines: 137
- Characters: 5328

## Top-Level Symbols

- Classes: Bibliography
- Functions: None
- Constants: COLLECTION

## Methods by Class

- Bibliography: __init__, create, find, find_many, update, search, list_all_bibliography, _parse_author_year_and_title, _parse_container_title_short_and_collection_number, _parse_title_short_and_volume, search_author_year_and_title, search_container_title_and_collection_number, search_title_short_and_volume, validate_references

## Imports

- ebl.bibliography.application.bibliography_repository.BibliographyRepository
- ebl.bibliography.application.serialization.create_mongo_entry
- ebl.bibliography.domain.reference.Reference
- ebl.changelog.Changelog
- ebl.errors.DataError
- ebl.errors.NotFoundError
- ebl.users.domain.user.User
- pydash.uniq_with
- re
- typing.Optional
- typing.Sequence

