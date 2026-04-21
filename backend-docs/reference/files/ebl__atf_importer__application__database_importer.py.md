# File Reference: ebl/atf_importer/application/database_importer.py

- Lines: 224
- Characters: 8830

## Top-Level Symbols

- Classes: DatabaseImporter, MuseumNumberGetter
- Functions: None
- Constants: None

## Methods by Class

- DatabaseImporter: __init__, import_into_database, check_and_import, _edition_overwrite_consent, _import, _check_fragment_and_edition_exist, _insert_transliterations
- MuseumNumberGetter: __init__, get_museum_number, _get_valid_museum_number_or_none, _get_museum_number_by_data, _find_museum_number_by_cdli, _find_museum_number_by_traditional_reference, _get_cdli_number_and_reference, _input_museum_number, _get_lowest_join_number

## Imports

- ebl.app.create_context
- ebl.atf_importer.application.logger.Logger
- ebl.errors.DataError
- ebl.errors.NotFoundError
- ebl.fragmentarium.application.fragment_repository.FragmentRepository
- ebl.fragmentarium.application.fragment_updater.FragmentUpdater
- ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory
- ebl.fragmentarium.web.dtos.parse_museum_number
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.text.Text
- ebl.users.domain.user.AtfImporterUser
- typing.List
- typing.Optional
- typing.Sequence

