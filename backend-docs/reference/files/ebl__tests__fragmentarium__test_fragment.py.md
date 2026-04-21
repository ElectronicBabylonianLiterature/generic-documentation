# File Reference: ebl/tests/fragmentarium/test_fragment.py

- Lines: 505
- Characters: 16057

## Top-Level Symbols

- Classes: None
- Functions: transliterated_fragment, fragment_with_token_ids, test_number, test_accession, cdli_images, traditional_references, test_publication, test_acquisition, test_description, test_collection, test_script, test_museum, test_length, test_width, test_thickness, test_joins, test_notes, test_signs, test_record, test_folios, test_text, test_uncurated_references, test_uncurated_references_none, test_references, test_references_default, test_genre, test_set_genre, test_invalid_genre, test_scopes, test_external_number, test_external_numbers, test_add_transliteration, test_update_transliteration, test_add_lowest_join_transliteration, test_set_notes, test_update_lemmatization, test_update_lemmatization_incompatible, test_set_references, test_set_text, test_get_matching_lines, test_updating_fragment_sets_token_ids, test_deleting_words_keeps_remaining_ids, test_get_word_by_id, test_get_non_existent_word_by_id, short_fragment, test_set_token_ids, test_adding_words_sets_ids
- Constants: GET_MATCHING_LINES_DATA

## Imports

- attr
- ebl.common.domain.period.Period
- ebl.fragmentarium.domain.folios.Folio
- ebl.fragmentarium.domain.folios.Folios
- ebl.fragmentarium.domain.fragment.Acquisition
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.fragmentarium.domain.fragment.Genre
- ebl.fragmentarium.domain.fragment.Measure
- ebl.fragmentarium.domain.fragment.NotLowestJoinError
- ebl.fragmentarium.domain.fragment.Notes
- ebl.fragmentarium.domain.fragment.Script
- ebl.fragmentarium.domain.fragment.UncuratedReference
- ebl.fragmentarium.domain.fragment_external_numbers.ExternalNumbers
- ebl.fragmentarium.domain.joins.Join
- ebl.fragmentarium.domain.joins.Joins
- ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding
- ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate
- ebl.lemmatization.domain.lemmatization.Lemmatization
- ebl.lemmatization.domain.lemmatization.LemmatizationError
- ebl.lemmatization.domain.lemmatization.LemmatizationToken
- ebl.tests.factories.bibliography.ReferenceFactory
- ebl.tests.factories.fragment.FragmentFactory
- ebl.tests.factories.fragment.LemmatizedFragmentFactory
- ebl.tests.factories.fragment.TransliteratedFragmentFactory
- ebl.tests.factories.parallel_line.ParallelCompositionFactory
- ebl.tests.factories.record.RecordFactory
- ebl.transliteration.application.signs_visitor.SignsVisitor
- ebl.transliteration.domain.atf.Atf
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark
- ebl.transliteration.domain.markup.EmphasisPart
- ebl.transliteration.domain.markup.StringPart
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.transliteration_query.TransliterationQuery
- freezegun.freeze_time
- pytest

