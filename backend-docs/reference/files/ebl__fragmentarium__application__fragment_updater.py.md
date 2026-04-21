# File Reference: ebl/fragmentarium/application/fragment_updater.py

- Lines: 205
- Characters: 8394

## Top-Level Symbols

- Classes: FragmentUpdater
- Functions: None
- Constants: COLLECTION

## Methods by Class

- FragmentUpdater: __init__, update_edition, update_script, update_date, update_dates_in_text, update_genres, update_scopes, update_lemmatization, update_lemma_annotation, update_references, update_archaeology, update_colophon, _create_result, _create_changelog, update_named_entities

## Imports

- ebl.bibliography.application.bibliography.Bibliography
- ebl.bibliography.domain.reference.Reference
- ebl.changelog.Changelog
- ebl.files.application.file_repository.FileRepository
- ebl.fragmentarium.application.fragment_repository.FragmentRepository
- ebl.fragmentarium.application.fragment_schema.FragmentSchema
- ebl.fragmentarium.domain.archaeology.Archaeology
- ebl.fragmentarium.domain.colophon.Colophon
- ebl.fragmentarium.domain.date.Date
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.fragmentarium.domain.fragment.Genre
- ebl.fragmentarium.domain.fragment.Script
- ebl.fragmentarium.domain.named_entity.EntityAnnotationSpan
- ebl.fragmentarium.domain.token_annotation.TextLemmaAnnotation
- ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate
- ebl.lemmatization.domain.lemmatization.Lemmatization
- ebl.transliteration.application.parallel_line_injector.ParallelLineInjector
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.users.domain.user.User
- enum.Enum
- typing.List
- typing.Optional
- typing.Sequence
- typing.Tuple

