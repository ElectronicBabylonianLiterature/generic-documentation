# File Reference: ebl/tests/fragmentarium/test_fragment_updater.py

- Lines: 412
- Characters: 14473

## Top-Level Symbols

- Classes: None
- Functions: test_update_edition, test_update_update_transliteration_not_found, test_update_update_transliteration_not_lowest_join, test_update_genres, test_update_scopes, test_update_date, test_update_dates_in_text, test_update_lemmatization, test_update_update_lemmatization_not_found, test_update_references, test_update_references_invalid, test_update_introduction, test_update_notes, test_update_lemma_annotation, test_update_named_entities
- Constants: SCHEMA, FROZEN_TIME

## Imports

- ebl.common.domain.scopes.Scope
- ebl.errors.DataError
- ebl.errors.NotFoundError
- ebl.fragmentarium.application.fragment_schema.FragmentSchema
- ebl.fragmentarium.application.fragment_updater.FragmentUpdater
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.fragmentarium.domain.fragment.Genre
- ebl.fragmentarium.domain.fragment.NotLowestJoinError
- ebl.fragmentarium.domain.joins.Join
- ebl.fragmentarium.domain.joins.Joins
- ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate
- ebl.lemmatization.domain.lemmatization.Lemmatization
- ebl.lemmatization.domain.lemmatization.LemmatizationToken
- ebl.tests.factories.bibliography.ReferenceFactory
- ebl.tests.factories.fragment.DateFactory
- ebl.tests.factories.fragment.FragmentFactory
- ebl.tests.factories.fragment.TransliteratedFragmentFactory
- ebl.transliteration.domain.atf.Atf
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark
- ebl.transliteration.domain.museum_number.MuseumNumber
- freezegun.freeze_time
- pytest

