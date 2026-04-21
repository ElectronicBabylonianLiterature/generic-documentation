# Package Reference: ebl/tests

- Files: 262
- Total lines: 127136

## File-Level API Summary

### `ebl/tests/__init__.py`

- Lines: 0

### `ebl/tests/afo_register/test_afo_register.py`

- Lines: 94
- Imports: ebl.afo_register.domain.afo_register_record.AfoRegisterRecord, ebl.afo_register.domain.afo_register_record.AfoRegisterRecordSuggestion, ebl.afo_register.infrastructure.mongo_afo_register_repository.AfoRegisterRecordSchema, ebl.afo_register.infrastructure.mongo_afo_register_repository.AfoRegisterRecordSuggestionSchema, ebl.tests.factories.afo_register.AfoRegisterRecordFactory, ebl.tests.factories.afo_register.AfoRegisterRecordSuggestionFactory, pytest
- Functions: afo_register_record, afo_register_record_suggestion, test_afo_register_record_creation, test_afo_register_record_defaults, test_afo_register_record_to_dict, test_afo_register_record_suggestion_to_dict, test_afo_register_record_from_dict, test_afo_register_record_suggestion_from_dict

### `ebl/tests/afo_register/test_afo_register_repository.py`

- Lines: 82
- Imports: ebl.afo_register.application.afo_register_repository.AfoRegisterRepository, ebl.tests.factories.afo_register.AfoRegisterRecordFactory, ebl.tests.factories.afo_register.AfoRegisterRecordSuggestionFactory, natsort.natsorted
- Functions: test_find_by_id, test_find_by_afo_number_and_page, test_find_by_all_record_parameters, test_search_by_texts_and_numbers, test_find_record_suggestions

### `ebl/tests/afo_register/test_afo_register_route.py`

- Lines: 78
- Imports: ebl.afo_register.application.afo_register_repository.AfoRegisterRepository, ebl.afo_register.domain.afo_register_record.AfoRegisterRecord, ebl.afo_register.infrastructure.mongo_afo_register_repository.AfoRegisterRecordSchema, ebl.afo_register.infrastructure.mongo_afo_register_repository.AfoRegisterRecordSuggestionSchema, ebl.tests.factories.afo_register.AfoRegisterRecordFactory, ebl.tests.factories.afo_register.AfoRegisterRecordSuggestionFactory, falcon, json, pytest
- Functions: afo_register_record, test_search_afo_register_record_route, test_search_by_texts_and_numbers_route, test_search_afo_register_suggestions_route

### `ebl/tests/alignment/__init__.py`

- Lines: 0

### `ebl/tests/alignment/test_align.py`

- Lines: 33
- Imports: alignment.vocabulary.Vocabulary, ebl.alignment.application.align.align, ebl.alignment.application.align.align_pair, ebl.alignment.domain.scoring.match, ebl.alignment.domain.sequence.NamedSequence, hamcrest.assert_that, hamcrest.contains_exactly, hamcrest.has_properties
- Functions: test_align_pair, test_align

### `ebl/tests/alignment/test_alignment_result.py`

- Lines: 18
- Imports: alignment.vocabulary.Vocabulary, ebl.alignment.domain.result.AlignmentResult, ebl.alignment.domain.sequence.NamedSequence
- Functions: test_alignment_result

### `ebl/tests/alignment/test_named_sequence.py`

- Lines: 26
- Imports: alignment.sequence.Sequence, alignment.vocabulary.Vocabulary, ebl.alignment.domain.sequence.NamedSequence, ebl.tests.factories.fragment.FragmentFactory
- Functions: test_of_signs, test_of_fragment

### `ebl/tests/alignment/test_scoring.py`

- Lines: 38
- Imports: alignment.vocabulary.Vocabulary, ebl.alignment.domain.scoring.EblScoring, pytest
- Functions: test_scoring, test_gap_start, test_gap_xtension

### `ebl/tests/assertions.py`

- Lines: 14
- Imports: hamcrest.core.assert_that.assert_that, hamcrest.library.contains_exactly, hamcrest.library.has_entries
- Functions: assert_exception_has_errors

### `ebl/tests/asserts.py`

- Lines: 14
- Imports: ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Token
- Functions: assert_token_serialization

### `ebl/tests/atf_importer/__init__.py`

- Lines: 0

### `ebl/tests/atf_importer/conftest.py`

- Lines: 242
- Imports: builtins, ebl.atf_importer.application.atf_importer.AtfImporter, ebl.tests.atf_importer.test_data.database_setup.populate_database_for_tests, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text.TextLine, os, pymongo.MongoClient, pytest, unittest.mock.patch, uuid
- Functions: pytest_configure, database, pytest_unconfigure, patched_fragment_updater, mock_input, create_file, setup_and_run_importer, check_importing_and_logs, check_logs, check_custom_logs_content, check_lemmatization

### `ebl/tests/atf_importer/test_atf_importer_core.py`

- Lines: 181
- Imports: ebl.atf_importer.application.atf_importer.AtfImporter, ebl.tests.atf_importer.conftest.create_file, ebl.tests.factories.fragment.FragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text.Text, itertools.repeat, os, pymongo.MongoClient, pytest, tempfile, unittest.mock.MagicMock, unittest.mock.patch, zipfile
- Functions: create_cli_argv, test_atf_importer, test_convert_to_ebl_lines_without_getter, test_import_into_database_exception_handling, test_cli_method, test_main_method

### `ebl/tests/atf_importer/test_atf_importer_lemmatization.py`

- Lines: 390
- Imports: ebl.tests.atf_importer.conftest.check_importing_and_logs, ebl.tests.atf_importer.conftest.check_lemmatization, ebl.tests.atf_importer.conftest.setup_and_run_importer, ebl.tests.atf_importer.test_glossaries_data.GLOSSARY, ebl.tests.atf_importer.test_glossaries_data.QPN_GLOSSARY, ebl.tests.factories.fragment.FragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text.ColumnAtLine, ebl.transliteration.domain.text.SurfaceAtLine, ebl.transliteration.domain.text.TextLine, ebl.transliteration.domain.text.TranslationLine, itertools.repeat, itertools.zip_longest
- Functions: test_lemmatization, test_lemmatization_with_removal, test_lemmatization_with_removal2, test_lemmatization_with_tabulation, test_lemmatization_with_dividers, test_lemmatization_complex_indexing, test_problematic_lemmatization, test_lemmatization_ambiguity, test_lemmatization_missing_lemmas, test_manual_lemmatization_extended, test_lemmatization_tokens_length_mismatch, test_lemmatized_and_translated

### `ebl/tests/atf_importer/test_atf_importer_workflow.py`

- Lines: 188
- Imports: ebl.fragmentarium.application.joins_schema.JoinSchema, ebl.fragmentarium.domain.fragment_external_numbers.ExternalNumbers, ebl.fragmentarium.domain.joins.Join, ebl.fragmentarium.domain.joins.Joins, ebl.tests.atf_importer.conftest.check_importing_and_logs, ebl.tests.atf_importer.conftest.check_logs, ebl.tests.atf_importer.conftest.setup_and_run_importer, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.LemmatizedFragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, os
- Functions: test_logger_writes_files, test_find_museum_number_by_cdli_number, test_find_museum_number_by_traditional_reference, test_museum_number_input_by_user, test_museum_number_skip_by_user, test_ask_overwrite_existing_edition, test_ask_overwrite_existing_edition_cancel, test_import_fragment_to_lowest_join, test_import_fragment_correct_parsing_errors, test_import_fragment_correct_parsing_errors2

### `ebl/tests/atf_importer/test_atf_preprocessor.py`

- Lines: 159
- Imports: ebl.atf_importer.application.atf_importer_config.AtfImporterConfig, ebl.atf_importer.application.logger.Logger, ebl.atf_importer.domain.legacy_atf_converter.LegacyAtfConverter, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, json, pytest
- Constants: FOLLOWING_SIGN_IS_NOT_A_LOGOGRAM, LEGACY_GRAMMAR_SIGNS, PARSE_AND_TRANSFORM_LEGACY, PROBLEMATIC_TEXT_LINES
- Functions: test_text_lines, test_lemma_line_c_type_is_lem_line

### `ebl/tests/atf_importer/test_atf_preprocessor_translation.py`

- Lines: 187
- Imports: ebl.atf_importer.application.atf_importer_config.AtfImporterConfig, ebl.atf_importer.application.logger.Logger, ebl.atf_importer.domain.legacy_atf_converter.LegacyAtfConverter, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, pytest
- Constants: TRANSLATION_EXPECTED_A, TRANSLATION_EXPECTED_B, TRANSLATION_EXPECTED_C, TRANSLATION_EXPECTED_D, TRANSLATION_EXPECTED_E, TRANSLATION_EXPECTED_F, TRANSLATION_EXPECTED_G, TRANSLATION_LEGACY_A, TRANSLATION_LEGACY_B, TRANSLATION_LEGACY_C, TRANSLATION_LEGACY_D, TRANSLATION_LEGACY_E, TRANSLATION_LEGACY_F, TRANSLATION_LEGACY_G
- Functions: test_legacy_translation

### `ebl/tests/atf_importer/test_data.zip`

- Lines: 2948

### `ebl/tests/atf_importer/test_data/database_setup.py`

- Lines: 47
- Imports: json, os, pathlib.Path, pymongo.MongoClient
- Functions: load_test_signs, load_test_words, _populate_collection, populate_database_for_tests

### `ebl/tests/atf_importer/test_data/signs.json`

- Lines: 83434
- JSON configuration or dataset file.

### `ebl/tests/atf_importer/test_data/words.json`

- Lines: 5667
- JSON configuration or dataset file.

### `ebl/tests/atf_importer/test_glossaries_data.py`

- Lines: 96
- Constants: GLOSSARY, QPN_GLOSSARY

### `ebl/tests/atf_importer/test_lemma_lines.json`

- Lines: 161
- JSON configuration or dataset file.

### `ebl/tests/bibliography/__init__.py`

- Lines: 0

### `ebl/tests/bibliography/test_bibliography.py`

- Lines: 210
- Imports: ebl.errors.DataError, ebl.errors.DuplicateError, ebl.errors.NotFoundError, ebl.tests.factories.bibliography.BibliographyEntryFactory, ebl.tests.factories.bibliography.ReferenceFactory, mockito.verify, pytest
- Constants: COLLECTION
- Functions: test_search_container_short_collection_number, test_search_title_short_volume, test_search_author_title_year, test_find, test_create, test_create_duplicate, test_entry_not_found, test_update, test_update_not_found, test_validate_references, test_validate_references_invalid, test_list_all_signs

### `ebl/tests/bibliography/test_bibliography_repository.py`

- Lines: 57
- Imports: ebl.errors.DuplicateError, ebl.errors.NotFoundError, ebl.tests.factories.bibliography.BibliographyEntryFactory, pydash, pytest
- Constants: COLLECTION
- Functions: test_create, test_create_duplicate, test_find, test_entry_not_found, test_update, test_update_not_found

### `ebl/tests/bibliography/test_bibliography_route.py`

- Lines: 151
- Imports: ebl.tests.factories.bibliography.BibliographyEntryFactory, falcon, json, pydash, pytest
- Constants: INVALID_ENTRIES
- Functions: saved_entry, saved_entries, test_get_entry, test_get_entry_not_found, test_create_entry, test_create_entry_duplicate, test_create_entry_invalid, test_update_entry, test_update_entry_not_found, test_update_entry_invalid, test_search, test_list_all_bibliography, test_list_bibliography

### `ebl/tests/bibliography/test_reference.py`

- Lines: 89
- Imports: ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.bibliography.domain.reference.BibliographyId, ebl.bibliography.domain.reference.Reference, ebl.bibliography.domain.reference.ReferenceType, ebl.tests.factories.bibliography.BibliographyEntryFactory
- Constants: ID, LINES_CITED, NOTES, PAGES, REFERENCE
- Functions: create_reference_with_document, test_reference, test_defaults, test_to_dict, test_to_dict_with_document, test_from_dict, test_from_dict_with_document

### `ebl/tests/cache/__init__.py`

- Lines: 0

### `ebl/tests/cache/test_cache.py`

- Lines: 40
- Imports: ebl.cache.application.cache.cache_control, falcon, falcon.testing
- Constants: DIRECTIVES, PATH
- Classes: TestResource, TestResourceWhen
- Methods in TestResource: on_get
- Methods in TestResourceWhen: on_get
- Functions: do_get, test_cache_control, test_cache_control_when

### `ebl/tests/cache/test_custom_cache.py`

- Lines: 48
- Imports: ebl.cache.application.custom_cache.ChapterCache, ebl.corpus.domain.chapter.ChapterId, ebl.tests.factories.corpus.ChapterFactory, mockito.verify
- Functions: test_custom_cache_has, test_custom_cache_get, test_custom_cache_set, test_custom_cache_delete, test_custom_cache_delete_all, test_custom_cache_delete_chapter

### `ebl/tests/cache/test_mongo_cache_repository.py`

- Lines: 52
- Imports: pytest
- Constants: CACHE_COLLECTION
- Functions: test_set, test_has, test_get, test_delete, test_exists_with_regex, test_delete_all

### `ebl/tests/chronology/test_chronology.py`

- Lines: 101
- Imports: ebl.chronology.chronology.Chronology, ebl.chronology.chronology.ChronologySchema, ebl.chronology.chronology.King, ebl.chronology.chronology.KingSchema, json
- Functions: test_king_creation, test_chronology_creation, test_find_king_by_name, test_find_king_by_order_global, test_king_schema_deserialization, test_chronology_schema_deserialization

### `ebl/tests/common/test_accession.py`

- Lines: 24
- Imports: ebl.common.application.schemas.AccessionSchema, ebl.common.domain.accession.Accession, pytest
- Constants: ACCESSION, ACCESSION_DTO
- Functions: test_of, test_of_invalid, test_serialize, test_deserialize

### `ebl/tests/common/test_parameter_parser.py`

- Lines: 119
- Imports: ebl.common.query.parameter_parser.parse_integer_field, ebl.common.query.parameter_parser.parse_lemmas, ebl.common.query.parameter_parser.parse_lines, ebl.common.query.parameter_parser.parse_pages, ebl.common.query.parameter_parser.parse_transliteration, ebl.common.query.query_result.LemmaQueryType, ebl.errors.DataError, ebl.transliteration.application.transliteration_query_factory.TransliterationQueryFactory, pydash.flow, pytest, re
- Constants: PARAMS
- Functions: test_parse_integer_field, test_parse_integer_field_invalid, test_parse_pages, test_parse_pages_missing_id, test_parse_lemmas, test_parse_lemmas_invalid, test_parse_lines, test_parse_lines_invalid, test_parse_transliteration, test_pipeline

### `ebl/tests/common/test_period.py`

- Lines: 18
- Imports: ebl.common.domain.period.Period, pytest
- Functions: test_mapping, test_invalid_name, test_invalid_abbreviation

### `ebl/tests/common/test_project.py`

- Lines: 18
- Imports: ebl.common.domain.project.ResearchProject, pytest
- Functions: test_mapping, test_invalid_name, test_invalid_abbreviation

### `ebl/tests/conftest.py`

- Lines: 692
- Imports: PIL.Image, attr, datetime, dictdiffer.diff, ebl.afo_register.infrastructure.mongo_afo_register_repository.MongoAfoRegisterRepository, ebl.app, ebl.bibliography.application.bibliography.Bibliography, ebl.bibliography.application.serialization.create_object_entry, ebl.bibliography.infrastructure.bibliography.MongoBibliographyRepository, ebl.cache.application.custom_cache.ChapterCache, ebl.cache.infrastructure.mongo_cache_repository.MongoCacheRepository, ebl.changelog.Changelog, ebl.context, ebl.corpus.application.corpus.Corpus, ebl.corpus.infrastructure.mongo_text_repository.MongoTextRepository, ebl.dictionary.application.dictionary_service.Dictionary, ebl.dictionary.infrastructure.word_repository.MongoWordRepository, ebl.dossiers.infrastructure.mongo_dossiers_repository.MongoDossiersRepository, ebl.ebl_ai_client.EblAiClient, ebl.files.application.file_repository.File
- Classes: TestWordRepository, TestBibliographyRepository, TestSignRepository, FakeFile, TestFilesRepository, EnsureAnnotationPost
- Methods in TestWordRepository: query_by_lemma_prefix
- Methods in TestBibliographyRepository: query_by_author_year_and_title
- Methods in TestSignRepository: search_composite_signs
- Methods in FakeFile: __init__, length, content_type, metadata, close, read
- Methods in TestFilesRepository: __init__, _create
- Methods in EnsureAnnotationPost: on_post
- Functions: mongo_client, database, changelog, word_repository, dictionary, cropped_sign_images_repository, mongo_cache_repository, ebl_ai_client, bibliography_repository, bibliography, sign_repository, transliteration_factory, parallel_repository, parallel_line_injector, text_repository, corpus, fragment_repository, findspot_repository, findspots, fragmentarium, fragment_finder, fragment_matcher, fragment_updater, afo_register_repository, file, file_repository, folio_with_allowed_scope, folio_with_restricted_scope, folio_repository, photo, create_test_photo, photo_repository, thumbnail_repository, annotations_repository, lemma_repository, annotations_service, user, dossiers_repository, context, client

### `ebl/tests/corpus/__init__.py`

- Lines: 0

### `ebl/tests/corpus/support.py`

- Lines: 31
- Imports: ebl.corpus.domain.chapter.Chapter, ebl.corpus.web.chapter_schemas.ApiChapterSchema, ebl.users.domain.user.Guest
- Constants: ANY_USER
- Functions: allow_references, allow_signs, create_chapter_dto, create_chapter_url

### `ebl/tests/corpus/test_alignment.py`

- Lines: 35
- Imports: ebl.corpus.domain.alignment.Alignment, ebl.corpus.domain.alignment.ManuscriptLineAlignment, ebl.transliteration.domain.alignment.AlignmentToken
- Functions: test_number_of_lines, test_number_of_manuscripts

### `ebl/tests/corpus/test_alignment_schemas.py`

- Lines: 126
- Imports: ebl.corpus.domain.alignment.Alignment, ebl.corpus.domain.alignment.ManuscriptLineAlignment, ebl.corpus.web.alignment_schema.AlignmentSchema, ebl.corpus.web.alignment_schema.AlignmentTokenSchema, ebl.transliteration.domain.alignment.AlignmentToken, ebl.transliteration.domain.greek_tokens.GreekLetter, ebl.transliteration.domain.greek_tokens.GreekWord, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.word_tokens.Word
- Functions: test_alignment, test_only_value

### `ebl/tests/corpus/test_api_chapter_schema.py`

- Lines: 213
- Imports: ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.corpus.application.record_schemas.RecordSchema, ebl.corpus.domain.chapter.Chapter, ebl.corpus.web.chapter_schemas.ApiChapterSchema, ebl.corpus.web.chapter_schemas.ApiManuscriptSchema, ebl.corpus.web.chapter_schemas.ApiOldSiglumSchema, ebl.fragmentarium.application.joins_schema.JoinsSchema, ebl.tests.factories.bibliography.ReferenceFactory, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.ChapterQueryColophonLinesFactory, ebl.tests.factories.corpus.LineFactory, ebl.tests.factories.corpus.LineVariantFactory, ebl.tests.factories.corpus.ManuscriptFactory, ebl.tests.factories.corpus.ManuscriptLineFactory, ebl.transliteration.application.line_number_schemas.OldLineNumberSchema, ebl.transliteration.application.one_of_line_schema.OneOfLineSchema, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.atf_visitor.convert_to_atf, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.museum_number.MuseumNumber
- Functions: create, test_serialize_manuscript, test_deserialize_manuscript, test_serialize, test_deserialize

### `ebl/tests/corpus/test_chapter.py`

- Lines: 530
- Imports: attr, ebl.common.domain.manuscript_type.ManuscriptType, ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.common.domain.provenance.Provenance, ebl.common.domain.stage.Stage, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.Classification, ebl.corpus.domain.chapter.ExtantLine, ebl.corpus.domain.chapter.TextLineEntry, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript.Siglum, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.domain.record.Author, ebl.corpus.domain.record.AuthorRole, ebl.corpus.domain.record.Record, ebl.corpus.domain.record.Translator, ebl.tests.factories.bibliography.ReferenceFactory
- Constants: ACCESSION, APPROXIMATE, CATEGORY, CHAPTER, CHAPTER_NAME, CLASSIFICATION, COLOPHON, GENRE, INDEX, IS_BEGINNING_OF_SECTION, IS_SECOND_LINE_OF_PARALLELISM, LABELS, LINE_1, LINE_2, LINE_3, LINE_NUMBER, LINE_RECONSTRUCTION, LINE_VARIANT_1, LINE_VARIANT_2, LINE_VARIANT_3
- Functions: test_constructor_sets_correct_fields, test_sign_tokens_collects_unique_signs_across_manuscripts, test_duplicate_ids_are_invalid, test_duplicate_sigla_are_invalid, test_missing_manuscripts_are_invalid, test_duplicate_manuscript_line_labels_are_invalid, test_duplicate_line_numbers_invalid, test_stage, test_text_lines, test_invalid_extent, test_extent_before_translation, test_overlapping, test_overlapping_languages, test_extant_lines, test_extant_lines_mixed_sides

### `ebl/tests/corpus/test_chapter_alignment_route.py`

- Lines: 173
- Imports: attr, ebl.corpus.web.chapter_schemas.ApiChapterSchema, ebl.tests.corpus.support.allow_references, ebl.tests.corpus.support.allow_signs, ebl.tests.corpus.support.create_chapter_url, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextFactory, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.sign_tokens.Logogram, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.word_tokens.AbstractWord, ebl.transliteration.domain.word_tokens.Word, falcon, json, pytest, typing.cast
- Constants: DTO
- Functions: test_updating_alignment_and_invalidate_chapter_display_cache, test_updating_invalid_stage, test_updating_invalid_alignment

### `ebl/tests/corpus/test_chapter_colophons_route.py`

- Lines: 30
- Imports: ebl.tests.corpus.support.create_chapter_url, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.ManuscriptFactory, ebl.transliteration.application.text_schema.TextSchema, ebl.transliteration.domain.text.Text, falcon
- Functions: test_get

### `ebl/tests/corpus/test_chapter_display.py`

- Lines: 47
- Imports: ebl.corpus.domain.chapter.make_title, ebl.corpus.domain.chapter_display.ChapterDisplay, ebl.corpus.domain.chapter_display.LineDisplay, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.LineFactory, ebl.tests.factories.corpus.TextFactory, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.translation_line.DEFAULT_LANGUAGE, ebl.transliteration.domain.translation_line.TranslationLine
- Functions: test_line_display_of_line, test_chapter_display_of_chapter

### `ebl/tests/corpus/test_chapter_display_lines_route.py`

- Lines: 83
- Imports: ebl.corpus.application.manuscript_reference_injector.ManuscriptReferenceInjector, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.text.Text, ebl.corpus.web.display_schemas.LineDetailsDisplay, ebl.corpus.web.display_schemas.LineDetailsDisplaySchema, ebl.errors.Defect, ebl.errors.NotFoundError, ebl.tests.corpus.support.allow_references, ebl.tests.corpus.support.create_chapter_url, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextFactory, falcon, pytest
- Functions: chapter, text, url, _make_line_details, test_get, test_chapter_not_found, test_line_not_found, test_invalid_line

### `ebl/tests/corpus/test_chapter_display_route.py`

- Lines: 129
- Imports: attr, ebl.corpus.application.display_schemas.ChapterDisplaySchema, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter_display.ChapterDisplay, ebl.corpus.domain.text.Text, ebl.tests.corpus.support.create_chapter_url, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.LineFactory, ebl.tests.factories.corpus.TextFactory, falcon, pytest
- Functions: chapter, text, url, test_get, test_get_partial, test_get_cached, test_text_not_found, test_chapter_not_found

### `ebl/tests/corpus/test_chapter_display_schema.py`

- Lines: 127
- Imports: attr, ebl.corpus.application.display_schemas.ChapterDisplaySchema, ebl.corpus.application.record_schemas.RecordSchema, ebl.corpus.application.schemas.ManuscriptLineSchema, ebl.corpus.application.schemas.ManuscriptSchema, ebl.corpus.domain.chapter_display.ChapterDisplay, ebl.corpus.domain.line_variant.LineVariant, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextFactory, ebl.transliteration.application.line_number_schemas.OldLineNumberSchema, ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema, ebl.transliteration.application.line_schemas.NoteLineSchema, ebl.transliteration.application.line_schemas.TranslationLineSchema, ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema, ebl.transliteration.application.one_of_line_schema.ParallelLineSchema, ebl.transliteration.application.token_schemas.OneOfTokenSchema, typing.Sequence
- Constants: CHAPTER_DISPLAY
- Functions: variants_to_dict, to_dict, test_dump, test_load, test_load_missing_data

### `ebl/tests/corpus/test_chapter_extant_lines_route.py`

- Lines: 17
- Imports: ebl.corpus.web.extant_lines.ExtantLinesSchema, ebl.tests.corpus.support.create_chapter_url, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.ManuscriptFactory, falcon
- Functions: test_get

### `ebl/tests/corpus/test_chapter_info.py`

- Lines: 49
- Imports: ebl.corpus.application.id_schemas.ChapterIdSchema, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter_info.ChapterInfo, ebl.corpus.web.chapter_info_schema.ChapterInfoLineSchema, ebl.corpus.web.chapter_info_schema.ChapterInfoSchema, ebl.tests.factories.corpus.ChapterFactory, ebl.transliteration.application.line_schemas.TextLineSchema, ebl.transliteration.application.signs_visitor.SignsVisitor, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.transliteration_query.TransliterationQuery, typing.cast
- Functions: test_of, test_chapter_info_schema

### `ebl/tests/corpus/test_chapter_lemmatization_route.py`

- Lines: 181
- Imports: attr, ebl.corpus.domain.chapter.Chapter, ebl.dictionary.domain.word.WordId, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.tests.corpus.support.allow_references, ebl.tests.corpus.support.allow_signs, ebl.tests.corpus.support.create_chapter_dto, ebl.tests.corpus.support.create_chapter_url, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextFactory, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.word_tokens.Word, falcon, json, pytest
- Constants: DTO
- Functions: test_updating_lemmatization_invalidates_chapter_display_cache, test_updating_invalid_stage, test_updating_invalid_lemmatization

### `ebl/tests/corpus/test_chapter_lines_route.py`

- Lines: 307
- Imports: attr, ebl.common.domain.stage.Stage, ebl.corpus.domain.parser.parse_chapter, ebl.corpus.web.chapter_schemas.ApiLineSchema, ebl.tests.corpus.support.allow_references, ebl.tests.corpus.support.allow_signs, ebl.tests.corpus.support.create_chapter_dto, ebl.tests.corpus.support.create_chapter_url, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextFactory, ebl.transliteration.domain.atf.ATF_PARSER_VERSION, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.text_line.TextLine, falcon, json, pytest, typing.cast
- Constants: EMPTY_EDIT_DTO, INVALID_INTERTEXT, INVALID_LINE, INVALID_RECONSTRUCTION, INVALID_TRANSLATION, LINE_DTO, TOO_MANY_NOTES
- Functions: test_updating_invalidates_chapter_display_cache, test_updating_strophic_information, test_updating_chapter_not_found, test_updating_invalid_category, test_updating_invalid_id, test_update_invalid_entity, test_importing_invalidates_chapter_display_cache, test_import_invalid_entity

### `ebl/tests/corpus/test_chapter_manuscripts_route.py`

- Lines: 266
- Imports: attr, ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.common.domain.manuscript_type.ManuscriptType, ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.common.domain.provenance.Provenance, ebl.common.domain.stage.Stage, ebl.tests.corpus.support.allow_references, ebl.tests.corpus.support.allow_signs, ebl.tests.corpus.support.create_chapter_dto, ebl.tests.corpus.support.create_chapter_url, ebl.tests.factories.bibliography.ReferenceFactory, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextFactory, ebl.transliteration.domain.museum_number.MuseumNumber, falcon, json, pytest
- Constants: AMBIGUOUS_MANUSCRIPTS, INVALID_MUSEUM_NUMBER, INVALID_PROVENANCE
- Functions: test_get, test_updating_invalidates_chapter_display_cache, test_updating_text_not_found, test_updating_invalid_reference, test_updating_text_category, test_updating_invalid_id, test_updating_invalid_stage, test_update_invalid_entity

### `ebl/tests/corpus/test_chapter_merge.py`

- Lines: 705
- Imports: attr, ebl.common.domain.stage.Stage, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.Classification, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.dictionary.domain.word.WordId, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.normalized_akkadian.Caesura, ebl.transliteration.domain.note_line.NoteLine
- Constants: ANOTHER_NEW_LINE, CHAPTER, CHAPTER_NAME, CLASSIFICATION, IS_BEGINNING_OF_SECTION, IS_SECOND_LINE_OF_PARALLELISM, LABELS, LINE, MANUSCRIPT, MANUSCRIPT_ID, MANUSCRIPT_LINE, MUSEUM_NUMBER, NEW_CHAPTER_NAME, NEW_CLASSIFICATION, NEW_LABELS, NEW_LINE, NEW_MANUSCRIPT, NEW_MANUSCRIPT_ID, NEW_ORDER, NEW_PARATEXT
- Functions: test_merge_manuscript_line, test_merge_line_variant, test_merge_line, test_merge_chapter

### `ebl/tests/corpus/test_chapter_schema.py`

- Lines: 212
- Imports: attr, ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.bibliography.domain.reference.Reference, ebl.corpus.application.record_schemas.AuthorSchema, ebl.corpus.application.record_schemas.RecordSchema, ebl.corpus.application.record_schemas.TranslatorSchema, ebl.corpus.application.schemas.ChapterSchema, ebl.corpus.application.schemas.OldSiglumSchema, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.record.Author, ebl.corpus.domain.record.AuthorRole, ebl.corpus.domain.record.Translator, ebl.corpus.web.chapter_schemas.ApiOldSiglumSchema, ebl.tests.factories.bibliography.ReferenceFactory, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.LineFactory, ebl.tests.factories.corpus.LineVariantFactory, ebl.tests.factories.corpus.ManuscriptFactory
- Constants: CHAPTER, FIRST_MANUSCRIPT_LINE, LINE, LINE_VARIANT, MANUSCRIPT, REFERENCES, SECOND_MANUSCRIPT_LINE, TRANSLATION_LINE, UNCERTAIN_FRAGMENTS
- Functions: strip_document, strip_documents, get_museum_number, to_dict, test_dump, test_load, test_author_schema, test_translator_schema

### `ebl/tests/corpus/test_chapter_unplaced_lines_route.py`

- Lines: 30
- Imports: ebl.tests.corpus.support.create_chapter_url, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.ManuscriptFactory, ebl.transliteration.application.text_schema.TextSchema, ebl.transliteration.domain.text.Text, falcon
- Functions: test_get

### `ebl/tests/corpus/test_corpus.py`

- Lines: 933
- Imports: attr, ebl.corpus.application.corpus.Corpus, ebl.corpus.application.id_schemas.TextIdSchema, ebl.corpus.application.lemmatization.ChapterLemmatization, ebl.corpus.application.lemmatization.LineVariantLemmatization, ebl.corpus.application.schemas.ChapterSchema, ebl.corpus.domain.alignment.Alignment, ebl.corpus.domain.alignment.ManuscriptLineAlignment, ebl.corpus.domain.chapter_display.ChapterDisplay, ebl.corpus.domain.dictionary_line.DictionaryLine, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.lines_update.LinesUpdate, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.domain.parser.parse_chapter, ebl.dictionary.domain.word.WordId, ebl.errors.DataError, ebl.errors.Defect, ebl.errors.NotFoundError, ebl.lemmatization.domain.lemmatization.LemmatizationToken
- Constants: CHAPTER, CHAPTERS_COLLECTION, CHAPTER_WITHOUT_DOCUMENTS, TEXT
- Functions: expect_bibliography, expect_invalid_references, expect_signs, expect_chapter_update, expect_find_and_update_chapter, test_list_all_texts, test_list_all_chapters, test_find_text, test_listing_texts, test_find_chapter, test_find_chapter_for_display, test_search_lemma, test_find_line, test_find_line_with_manuscript_joins, test_find_manuscripts, test_find_manuscripts_with_joins, test_find_chapter_raises_exception_if_references_not_found, test_update_chapter, test_updating_alignment, test_updating_manuscript_lemmatization, test_invalid_alignment, test_updating_manuscripts, test_invalid_manuscripts, test_update_manuscripts_raises_exception_if_invalid_references, test_updating_lines_edit, test_updating_lines_delete, test_updating_lines_add, test_importing_lines, test_merging_lines, test_update_lines_raises_exception_if_invalid_signs

### `ebl/tests/corpus/test_corpus_list_all_route.py`

- Lines: 47
- Imports: ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.text.Text, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextFactory, falcon, pytest
- Functions: chapter, text, test_list_all_texts_route, test_list_all_chapters_route

### `ebl/tests/corpus/test_corpus_query_route.py`

- Lines: 267
- Imports: attr, ebl.corpus.application.id_schemas.TextIdSchema, ebl.corpus.domain.chapter.Chapter, ebl.dictionary.domain.word.WordId, ebl.tests.corpus.test_mongo_text_repository.LITERATURE_TEXT, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.LineFactory, ebl.tests.factories.corpus.LineVariantFactory, ebl.tests.factories.corpus.ManuscriptFactory, ebl.tests.factories.corpus.ManuscriptLineFactory, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.text_id.TextId, ebl.transliteration.domain.tokens.ValueToken, falcon, pytest, typing.List, typing.Optional
- Constants: CHAPTER_WITH_SIGNS_AND_LEMMAS, LEMMA_MANUSCRIPT, LINES, LINE_1, LINE_2, LINE_3, MANUSCRIPTS, SIGNS, VARIANT_1, VARIANT_LINES
- Functions: word_with_lemma, query_item_of, test_query_chapter_lemmas, test_query_chapter_signs, test_query_chapter_lemmas_and_signs

### `ebl/tests/corpus/test_corpus_text.py`

- Lines: 51
- Imports: ebl.common.domain.stage.Stage, ebl.corpus.domain.chapter.Classification, ebl.corpus.domain.chapter.make_title, ebl.corpus.domain.text.ChapterListing, ebl.corpus.domain.text.Text, ebl.corpus.domain.text.UncertainFragment, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text_id.TextId, ebl.transliteration.domain.translation_line.TranslationLine
- Constants: APPROXIMATE, CATEGORY, CHAPTER, CHAPTER_NAME, CLASSIFICATION, GENRE, HAS_DOI, INDEX, INTRO, NAME, STAGE, TEXT, TRANSLATION, UNCERTAIN_FRAGMENTS, VERSES
- Functions: test_text_constructor_sets_correct_fields, test_title

### `ebl/tests/corpus/test_create_alignment_map.py`

- Lines: 41
- Imports: ebl.corpus.domain.create_alignment_map.AlignmentMap, ebl.corpus.domain.create_alignment_map.create_alignment_map, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.normalized_akkadian.Caesura, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.ValueToken, pytest, typing.List
- Functions: _make_sequence, test_create_alignment_map, test_create_alignment_map_remove_unalignable

### `ebl/tests/corpus/test_extant_lines_schema.py`

- Lines: 44
- Imports: ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.web.extant_lines.ExtantLinesSchema, ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text_id.TextId, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.word_tokens.Word
- Constants: LABELS, MANUSCRIPT_TEXT_1
- Functions: test_extant_lines_schema

### `ebl/tests/corpus/test_line.py`

- Lines: 18
- Imports: ebl.corpus.domain.line.Line, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.translation_line.Extent, ebl.transliteration.domain.translation_line.TranslationLine, pytest
- Functions: test_invalid_extent

### `ebl/tests/corpus/test_line_details_schema.py`

- Lines: 75
- Imports: ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.corpus.web.chapter_schemas.ApiOldSiglumSchema, ebl.corpus.web.display_schemas.JoinDisplaySchema, ebl.corpus.web.display_schemas.LineDetailsDisplay, ebl.corpus.web.display_schemas.LineDetailsDisplaySchema, ebl.tests.factories.bibliography.ReferenceFactory, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.LineFactory, ebl.tests.factories.corpus.LineVariantFactory, ebl.tests.factories.corpus.ManuscriptFactory, ebl.tests.factories.corpus.ManuscriptLineFactory, ebl.transliteration.application.one_of_line_schema.OneOfLineSchema
- Constants: CHAPTER, LINE, LINE_DETAILS, MANUSCRIPT, MANUSCRIPT_LINE, REFERENCES
- Functions: test_serialize

### `ebl/tests/corpus/test_line_variant.py`

- Lines: 131
- Imports: attr, ebl.corpus.domain.line.ManuscriptLine, ebl.corpus.domain.line_variant.LineVariant, ebl.tests.factories.corpus.LineVariantFactory, ebl.tests.factories.corpus.ManuscriptLineFactory, ebl.transliteration.domain.atf.Ruling, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.dollar_line.RulingDollarLine, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.parallel_line.ParallelComposition, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.word_tokens.AbstractWord, ebl.transliteration.domain.word_tokens.Word
- Constants: INTERTEXT, LABELS, LINE_NUMBER, LINE_RECONSTRUCTION, LINE_VARIANT, MANUSCRIPT_ID, MANUSCRIPT_TEXT, NOTE, OMITTED_WORDS, PARALLEL_LINES, PARATEXT, WORD
- Functions: test_line_variant_constructor, test_invalid_enclosures, test_set_has_variant_alignment, test_set_has_omitted_alignment

### `ebl/tests/corpus/test_make_title.py`

- Lines: 12
- Imports: ebl.corpus.domain.chapter.make_title, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.translation_line.TranslationLine
- Constants: TRANSLATION
- Functions: test_make_title

### `ebl/tests/corpus/test_manuscript.py`

- Lines: 44
- Imports: ebl.common.domain.manuscript_type.ManuscriptType, ebl.common.domain.period.Period, ebl.common.domain.provenance.Provenance, ebl.corpus.domain.manuscript.Manuscript, ebl.tests.factories.corpus.ManuscriptLineFactory, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text_line.TextLine, pytest, typing.Union
- Functions: test_is_empty, test_invalid_siglum, test_giving_museum_number_and_accession_is_invalid

### `ebl/tests/corpus/test_manuscript_attestation.py`

- Lines: 23
- Imports: attr, ebl.corpus.domain.manuscript_attestation.ManuscriptAttestation, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.ManuscriptAttestationFactory, ebl.tests.factories.corpus.TextFactory
- Functions: test_manuscript_attestation

### `ebl/tests/corpus/test_manuscript_line.py`

- Lines: 116
- Imports: attr, ebl.corpus.domain.line.ManuscriptLine, ebl.tests.factories.corpus.ManuscriptLineFactory, ebl.transliteration.domain.atf, ebl.transliteration.domain.dollar_line.DollarLine, ebl.transliteration.domain.dollar_line.StateDollarLine, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.word_tokens.Word, pytest, typing.Sequence, typing.Union
- Constants: WORD1, WORD2, WORD3
- Functions: test_invalid_labels, test_is_beginning_of_side, test_is_end_of_side, test_update_manuscript_alignment, test_get_textline_content, test_get_emptyline_content

### `ebl/tests/corpus/test_manuscript_line_display_schema.py`

- Lines: 108
- Imports: ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.bibliography.domain.reference.BibliographyId, ebl.bibliography.domain.reference.Reference, ebl.bibliography.domain.reference.ReferenceType, ebl.corpus.application.schemas.OldSiglumSchema, ebl.corpus.domain.manuscript.OldSiglum, ebl.corpus.web.chapter_schemas.ApiOldSiglumSchema, ebl.corpus.web.display_schemas.JoinDisplaySchema, ebl.corpus.web.display_schemas.ManuscriptLineDisplay, ebl.corpus.web.display_schemas.ManuscriptLineDisplaySchema, ebl.tests.factories.bibliography.BibliographyEntryFactory, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.ManuscriptFactory, ebl.transliteration.application.one_of_line_schema.OneOfLineSchema
- Constants: BIBLIOGRAPHY_ENTRY, ID, LINES_CITED, NOTES, PAGES, REFERENCE, REFERENCE_WITH_DOCUMENT
- Functions: test_old_siglum_schema, test_api_old_siglum_schema, test_serialize

### `ebl/tests/corpus/test_mongo_text_repository.py`

- Lines: 557
- Imports: attr, ebl.corpus.application.schemas.ChapterSchema, ebl.corpus.application.schemas.TextSchema, ebl.corpus.application.text_repository.TextRepository, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter_display.ChapterDisplay, ebl.corpus.domain.dictionary_line.DictionaryLine, ebl.corpus.domain.text.Text, ebl.corpus.domain.text.UncertainFragment, ebl.dictionary.domain.word.WordId, ebl.errors.DuplicateError, ebl.errors.NotFoundError, ebl.fragmentarium.application.joins_schema.JoinSchema, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.joins.Join, ebl.fragmentarium.domain.joins.Joins, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.ChapterQueryColophonLinesFactory, ebl.tests.factories.corpus.LineFactory, ebl.tests.factories.corpus.LineVariantFactory
- Constants: CHAPTER, CHAPTERS_COLLECTION, CHAPTER_FILTERED_QUERY, CHAPTER_SIGN_SCHEMA, JOINS_COLLECTION, LEMMA_MANUSCRIPT, MANUSCRIPT_ID, MUSEUM_NUMBER, QUERY_LEMMA, TEXTS_COLLECTION, UNCERTAIN_FRAGMENT
- Functions: when_text_in_collection, when_chapter_in_collection, test_creating_text, test_creating_chapter, test_it_is_not_possible_to_create_duplicate_texts, test_it_is_not_possible_to_create_duplicate_chapters, test_finding_text, test_find_raises_exception_if_text_not_found, test_listing_texts, test_finding_chapter, test_finding_chapter_for_display, test_finding_line, test_finding_line_not_found, test_finding_line_chapter_not_found, test_updating_chapter, test_updating_non_existing_chapter_raises_exception, test_query_by_transliteration, make_dictionary_line, test_query_by_lemma, test_query_by_transliteration_lookup, test_query_by_transliteration_matches_legacy_chapter_without_sign_tokens, test_query_manuscripts_by_chapter, test_query_manuscripts_by_chapter_not_found, test_query_manuscripts_with_joins_by_chapter_no_joins, test_query_manuscripts_with_joins_is_in_fragmentarium, test_query_manuscripts_with_joins_by_chapter, test_query_corpus_by_manuscripts, test_query_corpus_by_uncertain_fragments, test_get_sign_data, test_get_all_sign_data

### `ebl/tests/corpus/test_parse_chapter.py`

- Lines: 304
- Imports: ebl.common.domain.manuscript_type.ManuscriptType, ebl.common.domain.period.Period, ebl.common.domain.provenance.Provenance, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript.Siglum, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.domain.parser.parse_chapter, ebl.corpus.domain.parser.parse_manuscript, ebl.corpus.domain.parser.parse_paratext, ebl.errors.DataError, ebl.tests.factories.corpus.ManuscriptFactory, ebl.transliteration.domain.atf_parsers.lark_parser.parse_labels, ebl.transliteration.domain.atf_parsers.lark_parser.parse_note_line, ebl.transliteration.domain.atf_parsers.lark_parser.parse_parallel_line, ebl.transliteration.domain.atf_parsers.lark_parser.parse_text_line, ebl.transliteration.domain.atf_parsers.lark_parser.parse_translation_line, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.line_number.LineNumber
- Functions: parse_siglum, test_parse_siglum, test_parse_siglum_standard_text, parse_manuscript, test_parse_manuscript, test_parse_manuscript_invalid, parse_reconstruction, test_parse_reconstruction, parse_line_variant, test_parse_line_variant, parse_chapter_line, test_parse_chapter_line, test_parse_translation, test_parse_chapter, test_parse_chapter_empty

### `ebl/tests/corpus/test_signs_updater.py`

- Lines: 194
- Imports: ebl.corpus.application.schemas.ChapterSchema, ebl.corpus.application.signs_updater.SignsUpdater, ebl.corpus.domain.chapter.Chapter, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.LineFactory, ebl.tests.factories.corpus.LineVariantFactory, ebl.tests.factories.corpus.ManuscriptFactory, ebl.tests.factories.corpus.ManuscriptLineFactory, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.word_tokens.Word, pytest, typing.List, typing.Optional
- Constants: WORDS
- Functions: words_from_string, signs_updater, empty_text, manuscripts, variant_with_empty_manuscript_textline, variants, chapter_with_empty_manuscript_textline, chapter_with_line_without_manuscript_line, manuscript_with_colophon_lines, manuscript_with_unplaced_lines, chapter_with_colophon_lines, chapter_with_unplaced_lines, complex_chapter, update_and_serialize_signs, test_empty_manuscript, test_empty_textline, test_colophon_lines, test_unplaced_lines, test_signs_updater_completeness

### `ebl/tests/corpus/test_stage.py`

- Lines: 10
- Imports: ebl.common.domain.stage.Stage, pytest, re
- Functions: test_slug

### `ebl/tests/corpus/test_text.py`

- Lines: 23
- Imports: ebl.common.domain.stage.Stage, ebl.tests.factories.corpus.ChapterListingFactory, ebl.tests.factories.corpus.TextFactory, pytest
- Functions: test_has_multiple_stages

### `ebl/tests/corpus/test_text_id.py`

- Lines: 18
- Imports: ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.text_id.TextId, pytest
- Functions: test_str

### `ebl/tests/corpus/test_texts_route.py`

- Lines: 79
- Imports: ebl.corpus.application.schemas.TextSchema, ebl.corpus.domain.chapter_info.ChapterInfo, ebl.corpus.web.chapter_info_schema.ChapterInfoSchema, ebl.tests.corpus.support.allow_references, ebl.tests.corpus.support.allow_signs, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextFactory, ebl.transliteration.application.signs_visitor.SignsVisitor, ebl.transliteration.domain.transliteration_query.TransliterationQuery, falcon
- Functions: create_dto, test_get_text, test_text_not_found, test_invalid_section, test_invalid_index, test_listing_texts, test_searching_texts

### `ebl/tests/corpus/test_uncertain_fragment_attestation.py`

- Lines: 37
- Imports: attr, ebl.corpus.application.schemas.UncertainFragmentAttestationSchema, ebl.corpus.domain.uncertain_fragment_attestation.UncertainFragmentAttestation, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextFactory, ebl.tests.factories.corpus.UncertainFragmentAttestationFactory, ebl.transliteration.domain.museum_number.MuseumNumber
- Functions: test_manuscript_attestation

### `ebl/tests/dictionary/__init__.py`

- Lines: 0

### `ebl/tests/dictionary/test_akkadian_sort.py`

- Lines: 63
- Imports: ebl.dictionary.infrastructure.akkadian_sort._split_prefix_and_roman, ebl.dictionary.infrastructure.akkadian_sort.akkadian_sort_key
- Functions: test_akkadian_sort_orders_words_with_roman_suffixes, test_split_prefix_without_roman_suffix, test_split_prefix_with_invalid_roman_suffix

### `ebl/tests/dictionary/test_create_proper_noun.py`

- Lines: 476
- Imports: attr, ebl.app, ebl.dictionary.application.dictionary_service.Dictionary, ebl.dictionary.application.word_schema.ProperNounCreationRequestSchema, ebl.users.infrastructure.auth0.Auth0User, falcon, falcon.testing, falcon_auth.JWTAuthBackend, falcon_auth.NoneAuthBackend, json, marshmallow.ValidationError, pytest
- Classes: TestProperNounCreationRequestSchema, TestMongoWordRepositoryCreateProperNoun, TestDictionaryCreateProperNoun, TestProperNounCreationEndpoint
- Methods in TestProperNounCreationRequestSchema: schema, test_schema_accepts_valid_lemma_and_pos_tags, test_schema_accepts_valid_lemma_with_empty_pos_tags, test_schema_rejects_missing_lemma, test_schema_rejects_empty_lemma_string, test_schema_rejects_pos_that_is_not_a_list, test_schema_rejects_pos_tags_with_non_string_values, test_schema_accepts_pos_tags_with_multiple_values, test_schema_deserialization_produces_correct_structure, test_schema_defaults_pos_to_empty_list_when_omitted, test_schema_dumps_data_correctly
- Methods in TestMongoWordRepositoryCreateProperNoun: test_create_proper_noun_successful_creation, test_create_proper_noun_document_structure, test_create_proper_noun_empty_collections, test_create_proper_noun_with_single_pos_tag, test_create_proper_noun_with_empty_pos_tags, test_create_proper_noun_id_format, test_create_proper_noun_duplicate_lemma_raises_error, test_create_proper_noun_with_multiple_pos_tags, test_create_proper_noun_special_characters_in_lemma, test_create_proper_noun_preserves_lemma_case, test_create_proper_noun_returns_word_id
- Methods in TestDictionaryCreateProperNoun: test_delegation_to_repository, test_return_value_is_word_id, test_with_empty_pos_tags, test_with_multiple_pos_tags, test_service_returns_exact_word_id_from_repository, test_repository_exceptions_propagate
- Methods in TestProperNounCreationEndpoint: create_proper_noun_client, unauthorized_client, test_create_proper_noun_success, test_create_proper_noun_with_empty_pos, test_create_proper_noun_with_multiple_pos, test_create_proper_noun_missing_lemma, test_create_proper_noun_empty_lemma, test_create_proper_noun_pos_not_list, test_create_proper_noun_pos_has_non_string_values, test_create_proper_noun_duplicate, test_create_proper_noun_missing_scope, test_create_proper_noun_missing_auth_token, test_create_proper_noun_invalid_auth_token, test_create_proper_noun_response_content_type, test_create_proper_noun_response_id_matches_word_id, test_create_proper_noun_rejects_unknown_fields, test_create_proper_noun_preserves_lemma_case, test_create_proper_noun_success_payload_has_required_shape, test_create_proper_noun_returns_500_when_created_word_not_found, test_create_proper_noun_returns_500_when_create_returns_invalid_id

### `ebl/tests/dictionary/test_dictionary.py`

- Lines: 199
- Imports: copy, ebl.errors.NotFoundError, freezegun.freeze_time, pydash, pytest, urllib.parse.urlencode
- Constants: COLLECTION
- Functions: test_list_all_words, test_create_and_find, test_create_and_find_many, test_word_not_found, test_search_finds_all_homonyms, test_search_finds_by_meaning, test_search_finds_by_root, test_search_finds_by_vowel_class, test_search_finds_by_all_params, test_search_finds_duplicates, test_search_not_found, test_search_filters_by_origin, test_search_defaults_to_cda_origin, test_update, test_changelog, test_update_word_not_found

### `ebl/tests/dictionary/test_dictionary_service.py`

- Lines: 198
- Imports: ebl.dictionary.application.dictionary_service._build_search_result, ebl.dictionary.application.dictionary_service._collect_parsed_params, ebl.dictionary.application.dictionary_service._parse_origin_value, ebl.dictionary.application.dictionary_service._parse_vowel_class_value, ebl.dictionary.application.dictionary_service.get_search_params, urllib.parse.urlencode
- Classes: TestParseVowelClassValue, TestParseOriginValue, TestCollectParsedParams, TestBuildSearchResult, TestGetSearchParams
- Methods in TestParseVowelClassValue: test_parse_simple_vowel_class, test_parse_vowel_class_with_comma_separator, test_parse_vowel_class_with_mixed_separators, test_parse_vowel_class_strips_whitespace, test_parse_empty_vowel_class_returns_empty_tuple, test_parse_vowel_class_only_separators_returns_empty, test_parse_vowel_class_with_trailing_separator
- Methods in TestParseOriginValue: test_parse_single_origin, test_parse_comma_separated_origins, test_parse_origin_with_spaces_not_split
- Methods in TestCollectParsedParams: test_collect_query_parameter, test_collect_origin_parameter, test_collect_vowel_class_parameter, test_collect_multiple_vowel_classes, test_collect_multiple_origins, test_collect_other_parameters, test_collect_mixed_parameters, test_collect_empty_list
- Methods in TestBuildSearchResult: test_build_result_with_word_only, test_build_result_with_origins, test_build_result_with_vowel_classes, test_build_result_with_all_params, test_build_result_empty_other_params_no_origin_added, test_build_result_defaults_to_empty_origin_list
- Methods in TestGetSearchParams: test_get_search_params_with_word, test_get_search_params_with_origin, test_get_search_params_with_multiple_origins, test_get_search_params_with_vowel_class, test_get_search_params_with_meaning, test_get_search_params_with_root, test_get_search_params_empty_query, test_get_search_params_complex_query

### `ebl/tests/dictionary/test_word_repository.py`

- Lines: 277
- Imports: copy, ebl.dictionary.infrastructure.word_repository, ebl.dictionary.infrastructure.word_repository.MongoWordRepository, ebl.errors.NotFoundError, pydash, pytest, typing.Any, typing.Dict, typing.cast
- Constants: COLLECTION
- Functions: _make_query_params, test_create, test_find, test_find_many, test_word_not_found, test_search_finds_all_homonyms, test_search_finds_by_meaning, test_search_finds_by_root, test_search_finds_by_vowel_class, test_search_finds_by_all_params, test_search_finds_duplicates, test_search_not_found, test_search_filters_by_origin, test_search_filters_by_multiple_origins_in_single_word, test_update, test_create_substring_expression_structure, test_create_lemma_search_pipeline_structure, test_query_by_lemma_prefix_uses_collation

### `ebl/tests/dictionary/test_word_schema.py`

- Lines: 46
- Imports: ebl.dictionary.application.word_schema.WordSchema, ebl.dictionary.domain.word.WordOrigin
- Functions: test_serialization_and_deserialization, test_origin_array_serialization, test_single_origin_string_converted_to_array, test_origin_enum_list_normalized, test_origin_enum_value_normalized

### `ebl/tests/dictionary/test_word_search.py`

- Lines: 244
- Imports: ebl.dictionary.web.word_search.WordSearch
- Classes: TestParseNestedQueryString, TestNormalizeOriginValues, TestExtractSearchParams, TestSanitize, TestMergeQueryAndOrigin, TestNormalizeQuery, TestBuildQueryString, TestOnGet
- Methods in TestParseNestedQueryString: test_no_query_key_returns_params_unchanged, test_query_not_string_returns_params_unchanged, test_query_without_equals_returns_params_unchanged, test_query_with_embedded_query_string_parses_correctly, test_query_with_repeated_keys_creates_list, test_query_with_existing_params_merges_correctly, test_query_with_duplicate_key_existing_as_string_creates_list, test_query_with_duplicate_key_existing_as_list_appends
- Methods in TestNormalizeOriginValues: test_normalize_string_origin_returns_unchanged, test_normalize_single_item_list_returns_string, test_normalize_multiple_origins_joins_with_comma
- Methods in TestExtractSearchParams: test_no_query_or_word_returns_empty_dict, test_query_value_used_when_both_query_and_word_present, test_word_key_used_when_only_word_present, test_origin_added_to_sanitized_when_present, test_origin_not_added_when_not_present, test_meaning_included_in_query_string, test_root_included_in_query_string, test_vowel_class_included_in_query_string, test_vowel_class_without_query_returns_query_with_vowel_class, test_origin_and_vowel_class_without_query, test_origin_only_without_query_returns_empty, test_multiple_search_params_all_included
- Methods in TestSanitize: test_sanitize_with_query_and_lemma_returns_both, test_sanitize_with_only_lemma_returns_lemma, test_sanitize_with_only_lemmas_returns_lemmas, test_sanitize_with_query_extracts_search_params, test_sanitize_with_embedded_query_string, test_sanitize_preserves_vowelClass_from_nested_query
- Methods in TestMergeQueryAndOrigin: test_merge_when_origin_already_in_query_returns_unchanged, test_merge_appends_origin_to_nonempty_query, test_merge_with_empty_query_returns_origin_only, test_merge_with_query_containing_multiple_params
- Methods in TestNormalizeQuery: test_normalize_query_with_equals_returns_unchanged, test_normalize_simple_query_encodes_as_query_param, test_normalize_query_with_special_chars_encodes_properly
- Methods in TestBuildQueryString: test_build_query_string_from_dict, test_build_query_string_with_list_values_repeated, test_build_query_string_with_special_characters, test_build_query_string_empty_dict
- Methods in TestOnGet: test_on_get_with_query_param_calls_dispatch, test_on_get_with_lemma_calls_search_lemma, test_on_get_with_lemmas_calls_find_many

### `ebl/tests/dictionary/test_words_route.py`

- Lines: 209
- Imports: falcon, json, pytest
- Functions: saved_word, another_saved_word, test_get_word, test_get_words, test_word_not_found, test_search_word, test_search_word_lemma, test_search_word_lemma_with_origin, test_search_word_no_query, test_search_word_invalid_query, test_search_word_double_query, test_search_word_origin_only_is_invalid, test_search_word_with_origin_filter, test_search_word_with_different_origin, test_search_word_with_multiple_origins_filter, test_search_word_with_word_having_multiple_origins, test_update_word, test_update_word_not_found, test_update_word_invalid_entity, test_list_all_words_route

### `ebl/tests/dossiers/test_dossier.py`

- Lines: 80
- Imports: ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.common.domain.provenance.Provenance, ebl.dossiers.domain.dossier_record.DossierRecord, ebl.dossiers.infrastructure.mongo_dossiers_repository.DossierRecordSchema, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.domain.fragment.Script, ebl.tests.factories.dossier.DossierRecordFactory, pytest
- Functions: dossier_record, test_dossier_record_creation, test_dossier_record_defaults, test_dossier_record_to_dict, test_dossier_record_from_dict

### `ebl/tests/dossiers/test_dossiers_repository.py`

- Lines: 199
- Imports: ebl.bibliography.application.bibliography_repository.BibliographyRepository, ebl.dossiers.application.dossiers_repository.DossiersRepository, ebl.tests.factories.dossier.DossierRecordFactory
- Functions: test_find_all, test_query_by_ids, test_search_by_id, test_search_by_description, test_search_case_insensitive, test_search_empty_query, test_search_no_matches, test_search_limits_results, test_search_with_provenance_filter, test_search_with_script_period_filter, test_search_with_multiple_filters, test_search_escapes_regex_metacharacters

### `ebl/tests/dossiers/test_dossiers_route.py`

- Lines: 432
- Imports: ebl.bibliography.application.bibliography_repository.BibliographyRepository, ebl.dossiers.application.dossiers_repository.DossiersRepository, ebl.dossiers.domain.dossier_record.DossierRecord, ebl.dossiers.infrastructure.mongo_dossiers_repository.DossierRecordSchema, ebl.tests.factories.dossier.DossierRecordFactory, ebl.tests.factories.fragment.FragmentFactory, falcon, pytest
- Functions: dossier_record, another_dossier_record, unrelated_dossier_record, test_fetch_dossier_record_route, test_fetch_all_dossiers_route, _create_test_dossiers, _assert_search_result, test_search_dossiers_route, test_search_dossiers_by_description, test_search_dossiers_empty_query, test_search_dossiers_no_query_param, test_search_dossiers_with_provenance, test_search_dossiers_with_script_period, test_search_dossiers_with_multiple_filters, test_filter_dossiers_no_params, test_filter_dossiers_by_provenance, test_filter_dossiers_by_script_period, test_filter_dossiers_by_genre, test_dossiers_suggestions_route, test_dossiers_suggestions_empty_query

### `ebl/tests/downloader.py`

- Lines: 6
- Imports: pymongo_inmemory.context.Context, pymongo_inmemory.downloader.download

### `ebl/tests/factories/__init__.py`

- Lines: 0

### `ebl/tests/factories/afo_register.py`

- Lines: 66
- Imports: ebl.afo_register.domain.afo_register_record.AfoRegisterRecord, ebl.afo_register.domain.afo_register_record.AfoRegisterRecordSuggestion, factory, faker.Faker, natsort.natsorted, typing.Sequence
- Constants: PUBLICATIONS
- Classes: AfoRegisterRecordFactory, AfoRegisterRecordSuggestionFactory
- Functions: get_afo_number, get_page, get_text, get_text_number, get_text_numbers, get_lines_discussed, get_discussed_by

### `ebl/tests/factories/annotation.py`

- Lines: 70
- Imports: ebl.fragmentarium.application.cropped_sign_image.CroppedSign, ebl.fragmentarium.domain.annotation.Annotation, ebl.fragmentarium.domain.annotation.AnnotationData, ebl.fragmentarium.domain.annotation.AnnotationValueType, ebl.fragmentarium.domain.annotation.Annotations, ebl.fragmentarium.domain.annotation.Geometry, ebl.tests.factories.fragment.ScriptFactory, ebl.transliteration.domain.museum_number.MuseumNumber, factory.fuzzy
- Classes: GeometryFactory, AnnotationDataFactory, CroppedSignFactory, AnnotationFactory, AnnotationsFactory, AnnotationsWithScriptFactory

### `ebl/tests/factories/archaeology.py`

- Lines: 86
- Imports: ebl.fragmentarium.domain.archaeology.Archaeology, ebl.fragmentarium.domain.archaeology.ExcavationNumber, ebl.fragmentarium.domain.date_range.DateRange, ebl.fragmentarium.domain.date_range.PartialDate, ebl.fragmentarium.domain.findspot.BuildingType, ebl.fragmentarium.domain.findspot.ExcavationPlan, ebl.fragmentarium.domain.findspot.ExcavationSite, ebl.fragmentarium.domain.findspot.Findspot, ebl.tests.factories.bibliography.ReferenceFactory, ebl.tests.factories.collections.TupleFactory, factory.fuzzy
- Constants: FINDSPOT_COUNT
- Classes: PartialDateFactory, DateRangeFactory, ExcavationPlanFactory, FindspotFactory, ArchaeologyFactory

### `ebl/tests/factories/bibliography.py`

- Lines: 56
- Imports: ebl.bibliography.domain.reference.BibliographyId, ebl.bibliography.domain.reference.Reference, ebl.bibliography.domain.reference.ReferenceType, ebl.tests.factories.collections.TupleFactory, factory.fuzzy
- Classes: BibliographyEntryFactory, ReferenceFactory

### `ebl/tests/factories/collections.py`

- Lines: 6
- Imports: factory
- Classes: TupleFactory

### `ebl/tests/factories/colophon.py`

- Lines: 78
- Imports: ebl.common.domain.provenance.Provenance, ebl.fragmentarium.domain.colophon.Colophon, ebl.fragmentarium.domain.colophon.ColophonOwnership, ebl.fragmentarium.domain.colophon.ColophonStatus, ebl.fragmentarium.domain.colophon.ColophonType, ebl.fragmentarium.domain.colophon.IndividualAttestation, ebl.fragmentarium.domain.colophon.IndividualType, ebl.fragmentarium.domain.colophon.IndividualTypeAttestation, ebl.fragmentarium.domain.colophon.NameAttestation, ebl.fragmentarium.domain.colophon.ProvenanceAttestation, factory, random
- Classes: NameAttestationFactory, ProvenanceAttestationFactory, IndividualTypeFactory, IndividualAttestationFactory, ColophonFactory

### `ebl/tests/factories/corpus.py`

- Lines: 318
- Imports: ebl.common.domain.manuscript_type.ManuscriptType, ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.common.domain.project.ResearchProject, ebl.common.domain.provenance.Provenance, ebl.common.domain.stage.Stage, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.Classification, ebl.corpus.domain.chapter_query.ChapterQueryColophonLines, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript.OldSiglum, ebl.corpus.domain.manuscript_attestation.ManuscriptAttestation, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.domain.record.Author, ebl.corpus.domain.record.AuthorRole, ebl.corpus.domain.record.Record, ebl.corpus.domain.record.Translator, ebl.corpus.domain.text.ChapterListing
- Classes: OldSiglumFactory, JoinsFactory, ManuscriptFactory, ManuscriptLineFactory, LineVariantFactory, OldLineNumberFactory, LineFactory, AuthorFactory, TranslatorFactory, RecordFactory, ChapterQueryColophonLinesFactory, ChapterFactory, ChapterListingFactory, TextFactory, ManuscriptAttestationFactory, UncertainFragmentAttestationFactory

### `ebl/tests/factories/dossier.py`

- Lines: 34
- Imports: ebl.chronology.chronology.chronology, ebl.common.domain.provenance.Provenance, ebl.dossiers.domain.dossier_record.DossierRecord, ebl.tests.factories.bibliography.ReferenceFactory, ebl.tests.factories.fragment.ScriptFactory, factory, random.randint
- Classes: DossierRecordFactory

### `ebl/tests/factories/fragment.py`

- Lines: 714
- Imports: ebl.chronology.chronology.King, ebl.chronology.chronology.chronology, ebl.common.domain.accession.Accession, ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.common.domain.project.ResearchProject, ebl.corpus.domain.chapter.Stage, ebl.dictionary.domain.word.WordId, ebl.fragmentarium.domain.date.Date, ebl.fragmentarium.domain.date.DateKing, ebl.fragmentarium.domain.date.DateKingSchema, ebl.fragmentarium.domain.date.Day, ebl.fragmentarium.domain.date.Month, ebl.fragmentarium.domain.date.Ur3Calendar, ebl.fragmentarium.domain.date.Year, ebl.fragmentarium.domain.folios.Folio, ebl.fragmentarium.domain.folios.Folios, ebl.fragmentarium.domain.fragment.Acquisition, ebl.fragmentarium.domain.fragment.DossierReference, ebl.fragmentarium.domain.fragment.Fragment
- Classes: JoinFactory, ScriptFactory, YearFactory, MonthFactory, DayFactory, DateFactory, ExternalNumbersFactory, FragmentDossierReferenceFactory, AcquisitionFactory, FragmentFactory, InterestingFragmentFactory, TransliteratedFragmentFactory, LemmatizedFragmentFactory
- Functions: create_date_king

### `ebl/tests/factories/ids.py`

- Lines: 24
- Imports: ebl.common.domain.stage.Stage, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.parallel_line.ChapterName, ebl.transliteration.domain.text_id.TextId, factory
- Classes: TextIdFactory, ChapterNameFactory

### `ebl/tests/factories/parallel_line.py`

- Lines: 58
- Imports: ebl.tests.factories.ids.ChapterNameFactory, ebl.tests.factories.ids.TextIdFactory, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.parallel_line.Labels, ebl.transliteration.domain.parallel_line.ParallelComposition, ebl.transliteration.domain.parallel_line.ParallelFragment, ebl.transliteration.domain.parallel_line.ParallelText, factory
- Classes: LabelsFactory, ParallelFragmentFactory, ParallelTextFactory, ParallelCompositionFactory

### `ebl/tests/factories/record.py`

- Lines: 20
- Imports: ebl.fragmentarium.domain.record.Record, ebl.fragmentarium.domain.record.RecordEntry, ebl.fragmentarium.domain.record.RecordType, ebl.tests.factories.collections.TupleFactory, factory.fuzzy
- Classes: RecordEntryFactory, RecordFactory

### `ebl/tests/files/__init__.py`

- Lines: 0

### `ebl/tests/files/test_grid_fs_file_repository.py`

- Lines: 15
- Imports: ebl.files.infrastructure.grid_fs_file_repository.GridFsFileRepository
- Functions: test_content_type_falls_back_to_metadata_content_type

### `ebl/tests/files/test_images_route.py`

- Lines: 21
- Imports: falcon
- Functions: test_get_image, test_get_image_not_found, test_get_image_as_guest

### `ebl/tests/fragmentarium/__init__.py`

- Lines: 0

### `ebl/tests/fragmentarium/test_annotation.py`

- Lines: 80
- Imports: ebl.fragmentarium.application.cropped_sign_image.CroppedSign, ebl.fragmentarium.domain.annotation.Annotation, ebl.fragmentarium.domain.annotation.AnnotationData, ebl.fragmentarium.domain.annotation.AnnotationValueType, ebl.fragmentarium.domain.annotation.Annotations, ebl.fragmentarium.domain.annotation.BoundingBoxPrediction, ebl.fragmentarium.domain.annotation.Geometry, ebl.fragmentarium.domain.fragment.Script, ebl.transliteration.domain.museum_number.MuseumNumber
- Constants: ANNOTATION, ANNOTATIONS, BBOX, CROPPED_SIGN, DATA, GEOMETRY, HEIGHT, ID, IMAGE_ID, LABEL, MUSEUM_NUMBER, PATH, SCRIPT, SIGN_NAME, TYPE, VALUE, WIDTH, X, Y
- Functions: test_geometry, test_data, test_annotation, test_annotations, test_annotations_from_bounding_box_predictions, test_bounding_boxes_prediction

### `ebl/tests/fragmentarium/test_annotations_repository.py`

- Lines: 94
- Imports: ebl.fragmentarium.application.annotations_schema.AnnotationsSchema, ebl.fragmentarium.application.annotations_schema.AnnotationsWithScriptSchema, ebl.fragmentarium.domain.annotation.Annotations, ebl.tests.factories.annotation.AnnotationsFactory, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.ScriptFactory, ebl.transliteration.domain.museum_number.MuseumNumber
- Constants: COLLECTION
- Functions: test_find_by_sign, test_retrieve_all, test_retrieve_all_non_empty, test_create, test_update, test_query_by_museum_number, test_query_by_museum_number_not_found

### `ebl/tests/fragmentarium/test_annotations_route.py`

- Lines: 138
- Imports: ebl.fragmentarium.application.annotations_schema.AnnotationsSchema, ebl.fragmentarium.domain.annotation.Annotations, ebl.tests.conftest.create_test_photo, ebl.tests.factories.annotation.AnnotationFactory, ebl.tests.factories.annotation.AnnotationsFactory, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, falcon, httpretty, itertools.zip_longest, json
- Functions: get_update_data, test_find_annotations, test_generate_annotations, test_update, test_update_number_mismatch, test_update_invalid_number, test_update_invalid, test_update_not_allowed

### `ebl/tests/fragmentarium/test_annotations_schema.py`

- Lines: 157
- Imports: ebl.fragmentarium.application.annotations_schema.AnnotationsSchema, ebl.fragmentarium.application.annotations_schema.AnnotationsWithScriptSchema, ebl.fragmentarium.application.cropped_sign_image.CroppedSign, ebl.fragmentarium.application.fragment_schema.ScriptSchema, ebl.fragmentarium.domain.annotation.Annotation, ebl.fragmentarium.domain.annotation.AnnotationData, ebl.fragmentarium.domain.annotation.AnnotationValueType, ebl.fragmentarium.domain.annotation.Annotations, ebl.fragmentarium.domain.annotation.Geometry, ebl.tests.factories.fragment.ScriptFactory, ebl.transliteration.domain.museum_number.MuseumNumber, marshmallow.ValidationError, pytest
- Constants: ANNOTATION, ANNOTATIONS, HEIGHT, ID, IMAGE_ID, LABEL, MUSEUM_NUMBER, PATH, PROVENANCE, SCRIPT, SCRIPT_DUMPED, SERIALIZED, SIGN_NAME, TYPE, VALUE, WIDTH, X, Y
- Functions: test_load, test_dump, sample_annotation_with_pca, sample_annotation_without_pca, schema, test_save_load_cycle_with_pca, test_omit_pca_when_none, test_malformed_pcaClustering, test_complete_pca_required

### `ebl/tests/fragmentarium/test_annotations_service.py`

- Lines: 172
- Imports: attr, ebl.ebl_ai_client.EblAiClient, ebl.fragmentarium.application.annotations_schema.AnnotationsSchema, ebl.fragmentarium.application.annotations_service.AnnotationsService, ebl.fragmentarium.application.cropped_sign_image.Base64, ebl.fragmentarium.application.cropped_sign_image.CroppedSignImage, ebl.fragmentarium.domain.annotation.Annotations, ebl.tests.conftest.create_test_photo, ebl.tests.factories.annotation.AnnotationDataFactory, ebl.tests.factories.annotation.AnnotationFactory, ebl.tests.factories.annotation.AnnotationsFactory, ebl.tests.factories.annotation.CroppedSignFactory, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, itertools.zip_longest
- Constants: SCHEMA
- Functions: test_cropped_images_from_sign, test_generate_annotations, test_find, test_update

### `ebl/tests/fragmentarium/test_archaeology_schemas.py`

- Lines: 52
- Imports: ebl.fragmentarium.application.archaeology_schemas.ArchaeologySchema, ebl.fragmentarium.application.archaeology_schemas.ExcavationNumberSchema, ebl.fragmentarium.application.archaeology_schemas.FindspotSchema, ebl.fragmentarium.application.date_schemas.DateRangeSchema, ebl.fragmentarium.domain.archaeology.Archaeology, ebl.tests.factories.archaeology.ArchaeologyFactory, pytest
- Functions: test_serialize_archaeology, test_deserialize_archaeology

### `ebl/tests/fragmentarium/test_colophon_route.py`

- Lines: 39
- Imports: ebl.tests.factories.colophon.ColophonFactory, ebl.tests.factories.colophon.IndividualAttestationFactory, ebl.tests.factories.colophon.NameAttestationFactory, ebl.tests.factories.fragment.FragmentFactory, falcon
- Functions: test_fetch_names_route

### `ebl/tests/fragmentarium/test_colophon_schema.py`

- Lines: 72
- Imports: ebl.common.domain.provenance.Provenance, ebl.fragmentarium.application.colophon_schema.ColophonOwnership, ebl.fragmentarium.application.colophon_schema.ColophonSchema, ebl.fragmentarium.application.colophon_schema.ColophonStatus, ebl.fragmentarium.application.colophon_schema.ColophonType, ebl.fragmentarium.application.colophon_schema.IndividualType, ebl.fragmentarium.application.colophon_schema.IndividualTypeAttestationSchema, ebl.fragmentarium.application.colophon_schema.NameAttestationSchema, ebl.fragmentarium.application.colophon_schema.ProvenanceAttestationSchema, ebl.fragmentarium.domain.colophon.NameAttestation, ebl.fragmentarium.domain.colophon.ProvenanceAttestation
- Functions: test_name_attestation_schema, test_provenance_attestation_schema, test_colophon_schema_integration

### `ebl/tests/fragmentarium/test_create_line_to_vec.py`

- Lines: 108
- Imports: ebl.fragmentarium.application.matches.create_line_to_vec.create_line_to_vec, ebl.fragmentarium.application.matches.create_line_to_vec.split_lines, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, pytest
- Functions: test_create_line_to_vec_from_atf, test_split_lines, test_split_multiple_lines, test_create_line_to_vec, test_line_to_vec_encoding_from_list

### `ebl/tests/fragmentarium/test_cropped_annotations_service.py`

- Lines: 68
- Imports: ebl.fragmentarium.application.cropped_annotations_service.CroppedAnnotationService, ebl.fragmentarium.application.cropped_sign_image.Base64, ebl.fragmentarium.application.cropped_sign_image.CroppedSignImage, ebl.fragmentarium.domain.date.DateSchema, ebl.fragmentarium.infrastructure.mongo_fragment_repository.MongoFragmentRepository, ebl.tests.factories.annotation.AnnotationFactory, ebl.tests.factories.annotation.AnnotationsWithScriptFactory, ebl.tests.factories.fragment.FragmentFactory
- Functions: test_find_annotations_by_sign

### `ebl/tests/fragmentarium/test_cropped_sign_images_repository.py`

- Lines: 52
- Imports: ebl.fragmentarium.application.cropped_sign_image.Base64, ebl.fragmentarium.application.cropped_sign_image.CroppedSignImage, ebl.fragmentarium.application.cropped_sign_image.CroppedSignImageSchema, ebl.fragmentarium.infrastructure.cropped_sign_images_repository.MongoCroppedSignImagesRepository, ebl.transliteration.domain.museum_number.MuseumNumber
- Functions: test_delete_by_fragment_number, test_cropped_sign_image_schema_with_fragment_number

### `ebl/tests/fragmentarium/test_cropped_sign_schema.py`

- Lines: 23
- Imports: ebl.fragmentarium.application.cropped_sign_image.CroppedSign, ebl.fragmentarium.application.cropped_sign_image.CroppedSignSchema, pytest
- Functions: test_schema

### `ebl/tests/fragmentarium/test_date.py`

- Lines: 40
- Imports: ebl.fragmentarium.domain.date.DateSchema, ebl.fragmentarium.domain.date.DaySchema, ebl.fragmentarium.domain.date.MonthSchema, ebl.fragmentarium.domain.date.YearSchema
- Functions: test_labeled_schema, test_date_schema

### `ebl/tests/fragmentarium/test_dates_in_text_route.py`

- Lines: 78
- Imports: ebl.fragmentarium.domain.date.DateSchema, ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.fragment.DateFactory, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.MonthFactory, ebl.tests.factories.fragment.YearFactory, falcon, json, pytest
- Functions: test_update_date, test_update_invalid_dates_in_text

### `ebl/tests/fragmentarium/test_dtos.py`

- Lines: 175
- Imports: attr, ebl.common.application.schemas.AccessionSchema, ebl.common.domain.project.ResearchProject, ebl.errors.DataError, ebl.fragmentarium.application.archaeology_schemas.ArchaeologySchema, ebl.fragmentarium.application.colophon_schema.ColophonSchema, ebl.fragmentarium.application.fragment_fields_schemas.AcquisitionSchema, ebl.fragmentarium.application.fragment_fields_schemas.DossierReferenceSchema, ebl.fragmentarium.application.fragment_fields_schemas.ExternalNumbersSchema, ebl.fragmentarium.application.fragment_fields_schemas.IntroductionSchema, ebl.fragmentarium.application.fragment_fields_schemas.NotesSchema, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.application.fragment_info_schema.ApiFragmentInfoSchema, ebl.fragmentarium.application.genre_schema.GenreSchema, ebl.fragmentarium.application.joins_schema.JoinsSchema, ebl.fragmentarium.application.named_entity_schema.NamedEntitySchema, ebl.fragmentarium.domain.date.DateSchema, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment_info.FragmentInfo, ebl.fragmentarium.domain.joins.Joins
- Functions: lemmatized_fragment, has_photo, expected_dto, test_create_response_dto, test_create_fragment_info_dto, test_parse_museum_number, test_parse_invalid_museum_number

### `ebl/tests/fragmentarium/test_findspot_repository.py`

- Lines: 21
- Imports: ebl.fragmentarium.application.archaeology_schemas.FindspotSchema, ebl.tests.factories.archaeology.FindspotFactory, pytest
- Constants: FINDSPOTS
- Functions: test_create, test_fetch

### `ebl/tests/fragmentarium/test_findspots_route.py`

- Lines: 13
- Imports: ebl.fragmentarium.application.archaeology_schemas.FindspotSchema, falcon
- Functions: test_fetch_all_findspots

### `ebl/tests/fragmentarium/test_folio.py`

- Lines: 17
- Imports: ebl.fragmentarium.domain.folios.Folio
- Constants: FOLIO, NAME, NUMBER
- Functions: test_name, test_number, test_file_name

### `ebl/tests/fragmentarium/test_folios.py`

- Lines: 9
- Imports: ebl.fragmentarium.domain.folios.Folio, ebl.fragmentarium.domain.folios.Folios
- Functions: test_filter_folios

### `ebl/tests/fragmentarium/test_folios_route.py`

- Lines: 28
- Imports: falcon
- Functions: test_get_folio, test_get_folio_name_not_found, test_get_folio_number_not_found, test_get_restricted_folio_as_guest

### `ebl/tests/fragmentarium/test_fragment.py`

- Lines: 505
- Imports: attr, ebl.common.domain.period.Period, ebl.fragmentarium.domain.folios.Folio, ebl.fragmentarium.domain.folios.Folios, ebl.fragmentarium.domain.fragment.Acquisition, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment.Genre, ebl.fragmentarium.domain.fragment.Measure, ebl.fragmentarium.domain.fragment.NotLowestJoinError, ebl.fragmentarium.domain.fragment.Notes, ebl.fragmentarium.domain.fragment.Script, ebl.fragmentarium.domain.fragment.UncuratedReference, ebl.fragmentarium.domain.fragment_external_numbers.ExternalNumbers, ebl.fragmentarium.domain.joins.Join, ebl.fragmentarium.domain.joins.Joins, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding, ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate, ebl.lemmatization.domain.lemmatization.Lemmatization, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.lemmatization.domain.lemmatization.LemmatizationToken
- Constants: GET_MATCHING_LINES_DATA
- Functions: transliterated_fragment, fragment_with_token_ids, test_number, test_accession, cdli_images, traditional_references, test_publication, test_acquisition, test_description, test_collection, test_script, test_museum, test_length, test_width, test_thickness, test_joins, test_notes, test_signs, test_record, test_folios, test_text, test_uncurated_references, test_uncurated_references_none, test_references, test_references_default, test_genre, test_set_genre, test_invalid_genre, test_scopes, test_external_number, test_external_numbers, test_add_transliteration, test_update_transliteration, test_add_lowest_join_transliteration, test_set_notes, test_update_lemmatization, test_update_lemmatization_incompatible, test_set_references, test_set_text, test_get_matching_lines

### `ebl/tests/fragmentarium/test_fragment_afo_register_route.py`

- Lines: 30
- Imports: ebl.tests.factories.afo_register.AfoRegisterRecordFactory, ebl.tests.factories.fragment.FragmentFactory, falcon, json
- Functions: test_query_fragmentarium_afo_register

### `ebl/tests/fragmentarium/test_fragment_archaeology_route.py`

- Lines: 77
- Imports: attr, ebl.fragmentarium.application.archaeology_schemas.ArchaeologySchema, ebl.fragmentarium.domain.archaeology.Archaeology, ebl.fragmentarium.domain.archaeology.ExcavationNumber, ebl.fragmentarium.domain.findspot.ExcavationSite, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.archaeology.DateRangeFactory, ebl.tests.factories.fragment.FragmentFactory, falcon, json, pytest
- Constants: ARCHAEOLOGIES, ARCHAEOLOGY
- Functions: test_update_archaeology, test_invalid_excavation_number_update

### `ebl/tests/fragmentarium/test_fragment_date_route.py`

- Lines: 74
- Imports: ebl.fragmentarium.domain.date.DateSchema, ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.fragment.DateFactory, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.MonthFactory, ebl.tests.factories.fragment.YearFactory, falcon, json, pytest
- Functions: test_update_date, test_update_invalid_date

### `ebl/tests/fragmentarium/test_fragment_finder.py`

- Lines: 161
- Imports: attr, ebl.errors.NotFoundError, ebl.fragmentarium.application.fragment_finder.ThumbnailSize, ebl.fragmentarium.domain.folios.Folio, ebl.fragmentarium.domain.fragment_info.FragmentInfo, ebl.tests.factories.fragment.FragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, pytest
- Functions: test_find, test_find_with_lines, test_find_without_lines, test_list_all_fragments, test_find_not_found, test_find_random, test_find_interesting, test_folio_pager, test_fragment_finder, test_find_photo, test_find_thumbnail, test_find_folio

### `ebl/tests/fragmentarium/test_fragment_genre_route.py`

- Lines: 75
- Imports: ebl.fragmentarium.application.genre_schema.GenreSchema, ebl.fragmentarium.domain.fragment.Genre, ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.fragment.FragmentFactory, falcon, json, pytest
- Functions: test_update_genres, test_update_invalid_genres

### `ebl/tests/fragmentarium/test_fragment_in_corpus_route.py`

- Lines: 81
- Imports: ebl.corpus.application.schemas.ManuscriptAttestationSchema, ebl.corpus.application.schemas.UncertainFragmentAttestationSchema, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.ManuscriptAttestationFactory, ebl.tests.factories.corpus.ManuscriptFactory, ebl.tests.factories.corpus.TextFactory, ebl.tests.factories.corpus.UncertainFragmentAttestationFactory, ebl.tests.factories.fragment.FragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, falcon
- Constants: CHAPTER, FRAGMENT_MANUSCRIPT, FRAGMENT_UNCERTAIN, MANUSCRIPT_ATTESTATION, MUSEUM_NUMBER_MANUSCRIPT, MUSEUM_NUMBER_UNCERTAIN, TEXT, UNCERTAIN_FRAGMENT_ATTESTATION
- Functions: test_search_fragment_attestations_in_corpus_as_manuscript, test_search_fragment_attestations_in_corpus_as_uncertain

### `ebl/tests/fragmentarium/test_fragment_info.py`

- Lines: 81
- Imports: attr, ebl.fragmentarium.domain.fragment_info.FragmentInfo, ebl.fragmentarium.domain.record.Record, ebl.fragmentarium.domain.record.RecordEntry, ebl.fragmentarium.domain.record.RecordType, ebl.tests.factories.bibliography.ReferenceFactory, ebl.tests.factories.fragment.FragmentFactory, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark
- Constants: FRAGMENT, FRAGMENT_WITH_REFERENCES, MATCHING_LINES
- Functions: test_of, test_of_with_references, test_of_with_record, test_of_defaults

### `ebl/tests/fragmentarium/test_fragment_matcher.py`

- Lines: 96
- Imports: ebl.common.domain.period.Period, ebl.fragmentarium.application.fragment_matcher.LineToVecRanking, ebl.fragmentarium.application.fragment_matcher.sort_scores_to_list, ebl.fragmentarium.application.line_to_vec.LineToVecEntry, ebl.fragmentarium.application.line_to_vec.LineToVecScore, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.ScriptFactory, ebl.transliteration.domain.museum_number.MuseumNumber
- Constants: SCRIPT
- Functions: test_find, test_sort_scores_to_list, test_line_to_vec, test_empty_line_to_vec

### `ebl/tests/fragmentarium/test_fragment_matcher_route.py`

- Lines: 49
- Imports: ebl.fragmentarium.application.fragment_schema.ScriptSchema, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, falcon
- Functions: test_fragment_matcher_route, test_fragment_matcher_route_error

### `ebl/tests/fragmentarium/test_fragment_pager_schema.py`

- Lines: 15
- Imports: ebl.fragmentarium.application.fragment_pager_info_schema.FragmentPagerInfoSchema, ebl.fragmentarium.domain.fragment_pager_info.FragmentPagerInfo, ebl.transliteration.domain.museum_number.MuseumNumber
- Functions: test_schema

### `ebl/tests/fragmentarium/test_fragment_repository.py`

- Lines: 1247
- Imports: attr, datetime.date, datetime.timedelta, ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.common.domain.project.ResearchProject, ebl.common.domain.scopes.Scope, ebl.common.query.query_result.LemmaQueryType, ebl.common.query.query_result.QueryItem, ebl.common.query.query_result.QueryResult, ebl.common.query.query_schemas.QueryResultSchema, ebl.dictionary.domain.word.WordId, ebl.errors.NotFoundError, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.application.joins_schema.JoinSchema, ebl.fragmentarium.application.line_to_vec.LineToVecEntry, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment.Genre, ebl.fragmentarium.domain.fragment.Introduction
- Constants: ANOTHER_LEMMATIZED_FRAGMENT, COLLECTION, FRAGMENT_IDS, JOINS_COLLECTION, MUSEUM_NUMBERS, SCHEMA
- Functions: create_tranliteration_query_lines, test_create, test_create_many, test_create_join, test_query_by_museum_number, test_museum_number_wildcard, test_query_by_museum_number_joins, test_query_by_museum_number_references, test_query_by_parallel_line_exists, test_fragment_not_found, test_find_random, test_find_random_skips_restricted_fragments, test_folio_pager_exception, test_query_next_and_previous_fragment, test_update_transliteration_with_record, test_update_update_transliteration_not_found, test_update_genres, test_update_scopes, test_update_date, test_update_dates_in_text, test_update_lemmatization, test_update_introduction, test_update_notes, test_update_script, test_update_update_lemmatization_not_found, test_statistics, test_statistics_no_fragments, test_create_indexes_cover_fragment_search_filters, test_query_fragmentarium_number, test_query_fragmentarium_not_found, test_query_fragmentarium_reference_id, test_query_fragmentarium_id_and_pages, test_empty_result_query_reference_id_and_pages, test_query_fragmentarium_id_and_pages_legacy_without_reference_page_tokens, test_query_fragmentarium_transliteration, test_query_fragmentarium_sorting, test_query_fragmentarium_transliteration_and_number, test_query_fragmentarium_transliteration_and_number_and_references, test_query_fragmentarium_transliteration_and_number_and_references_not_found, test_find_transliterated

### `ebl/tests/fragmentarium/test_fragment_repository_afo_register.py`

- Lines: 25
- Imports: ebl.common.query.query_schemas.AfORegisterToFragmentQueryResultSchema, ebl.tests.factories.afo_register.AfoRegisterRecordFactory, ebl.tests.factories.fragment.FragmentFactory
- Functions: test_query_fragmentarium_afo_register

### `ebl/tests/fragmentarium/test_fragment_repository_colophon.py`

- Lines: 35
- Imports: ebl.fragmentarium.domain.fragment.Fragment, ebl.tests.factories.colophon.ColophonFactory, ebl.tests.factories.colophon.IndividualAttestationFactory, ebl.tests.factories.colophon.NameAttestationFactory, ebl.tests.factories.fragment.FragmentFactory
- Functions: test_fetch_names

### `ebl/tests/fragmentarium/test_fragment_schema.py`

- Lines: 76
- Imports: ebl.common.domain.scopes.Scope, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.domain.joins.Join, ebl.fragmentarium.domain.joins.Joins, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.LemmatizedFragmentFactory, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.domain.museum_number.MuseumNumber
- Constants: SCOPES, SERIALIZED_SCOPES
- Functions: test_serialization_and_deserialization, test_default_joins, test_number_serialization, test_number_deserialization, test_scope_serialization, test_scope_deserialization, test_empty_accession_serialization, test_empty_accession_deserialization

### `ebl/tests/fragmentarium/test_fragment_scope.py`

- Lines: 57
- Imports: ebl.common.domain.scopes.Scope, ebl.fragmentarium.web.dtos.create_response_dto, ebl.schemas.ScopeField, ebl.tests.factories.fragment.FragmentFactory, falcon, json, pytest
- Functions: test_update_scopes

### `ebl/tests/fragmentarium/test_fragment_script_route.py`

- Lines: 79
- Imports: ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.ScriptFactory, falcon, json, pytest
- Functions: test_update_script, test_update_invalid_script

### `ebl/tests/fragmentarium/test_fragment_updater.py`

- Lines: 412
- Imports: ebl.common.domain.scopes.Scope, ebl.errors.DataError, ebl.errors.NotFoundError, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment.Genre, ebl.fragmentarium.domain.fragment.NotLowestJoinError, ebl.fragmentarium.domain.joins.Join, ebl.fragmentarium.domain.joins.Joins, ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate, ebl.lemmatization.domain.lemmatization.Lemmatization, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.tests.factories.bibliography.ReferenceFactory, ebl.tests.factories.fragment.DateFactory, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.museum_number.MuseumNumber
- Constants: FROZEN_TIME, SCHEMA
- Functions: test_update_edition, test_update_update_transliteration_not_found, test_update_update_transliteration_not_lowest_join, test_update_genres, test_update_scopes, test_update_date, test_update_dates_in_text, test_update_lemmatization, test_update_update_lemmatization_not_found, test_update_references, test_update_references_invalid, test_update_introduction, test_update_notes, test_update_lemma_annotation, test_update_named_entities

### `ebl/tests/fragmentarium/test_fragmentarium.py`

- Lines: 32
- Imports: ebl.fragmentarium.domain.fragment_info.FragmentInfo, ebl.tests.factories.fragment.TransliteratedFragmentFactory
- Functions: test_needs_revision, test_statistics

### `ebl/tests/fragmentarium/test_fragments_route.py`

- Lines: 132
- Imports: attr, ebl.common.domain.scopes.Scope, ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, falcon, pytest, urllib.parse.urlencode
- Functions: test_get, test_get_invalid_lines, test_get_invalid_id, test_get_not_found, test_get_fragment_as_guest, test_get_restricted_fragment_as_guest, test_fragments_retrieve_all, test_get_all_fragment_ocred_signs

### `ebl/tests/fragmentarium/test_fragments_search_route.py`

- Lines: 534
- Imports: attr, datetime.date, datetime.timedelta, ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.common.domain.project.ResearchProject, ebl.common.domain.scopes.Scope, ebl.fragmentarium.application.fragment_info_schema.ApiFragmentInfoSchema, ebl.fragmentarium.application.fragment_info_schema.ApiFragmentInfosPaginationSchema, ebl.fragmentarium.domain.findspot.ExcavationSite, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment.Script, ebl.fragmentarium.domain.fragment_info.FragmentInfo, ebl.fragmentarium.domain.fragment_infos_pagination.FragmentInfosPagination, ebl.fragmentarium.domain.genres.genres, ebl.fragmentarium.domain.museum.Museum, ebl.fragmentarium.domain.record.RecordType, ebl.fragmentarium.infrastructure.queries.LATEST_TRANSLITERATION_LIMIT, ebl.fragmentarium.infrastructure.queries.LATEST_TRANSLITERATION_LINE_LIMIT, ebl.tests.factories.bibliography.BibliographyEntryFactory
- Functions: expected_fragment_info_dto, expected_fragment_infos_pagination_dto, query_item_of, test_query_fragmentarium_number, test_query_fragmentarium_number_not_found, test_query_fragmentarium_references, test_query_fragmentarium_transliteration, test_query_fragmentarium_lemmas, test_query_fragmentarium_lemmas_not_found, test_query_fragmentarium_combined_query, test_query_signs_invalid, test_random, test_interesting, test_needs_revision, test_search_fragment_no_query, test_search_invalid_params, test_get_options, test_search_with_scopes, test_search_script_period, test_search_project, test_search_museum, test_search_site, test_query_latest

### `ebl/tests/fragmentarium/test_genre_route.py`

- Lines: 9
- Imports: ebl.fragmentarium.domain.genres.genres, falcon
- Functions: test_get_genre

### `ebl/tests/fragmentarium/test_joins.py`

- Lines: 88
- Imports: ebl.fragmentarium.domain.joins.Join, ebl.fragmentarium.domain.joins.Joins, ebl.transliteration.domain.museum_number.MuseumNumber, hamcrest.assert_that, hamcrest.core.core.isequal.equal_to, hamcrest.has_properties, hamcrest.library.contains_exactly
- Functions: test_join, test_join_default, test_joins_fragments_sorting, test_joins_lowest, test_joins_lowest_when_no_fragments

### `ebl/tests/fragmentarium/test_lemma_annotation_routes.py`

- Lines: 53
- Imports: ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.fragment.LemmatizedFragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, falcon
- Functions: get_lemmatizable_tokens, test_collect_lemmas, test_update_lemma_annotation

### `ebl/tests/fragmentarium/test_lemmatization_route.py`

- Lines: 108
- Imports: ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.lemmatizations.LemmatizationSchema, ebl.lemmatization.domain.lemmatization.Lemmatization, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.application.lemmatization_schema.LemmatizationTokenSchema, ebl.transliteration.domain.museum_number.MuseumNumber, falcon, json, pytest
- Constants: LEMMATIZATION, SERIALIZED, TOKEN
- Functions: test_serialize_lemmatization, test_deserialize_lemmatization, test_update_lemmatization, test_update_lemmatization_not_found, test_update_lemmatization_invalid_number, test_update_lemmatization_invalid_entity, test_update_lemmatization_atf_change

### `ebl/tests/fragmentarium/test_line_to_vec_ranking_schema.py`

- Lines: 35
- Imports: ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.application.fragment_matcher.LineToVecRanking, ebl.fragmentarium.application.line_to_vec.LineToVecScore, ebl.fragmentarium.application.line_to_vec_ranking_schema.LineToVecRankingSchema, ebl.tests.factories.fragment.ScriptFactory, ebl.transliteration.domain.museum_number.MuseumNumber
- Constants: SCRIPT, SERIALIZED_SCRIPT
- Functions: test_line_to_vec_ranking_schema

### `ebl/tests/fragmentarium/test_line_to_vec_score.py`

- Lines: 72
- Imports: ebl.fragmentarium.application.matches.line_to_vec_score.score, ebl.fragmentarium.application.matches.line_to_vec_score.score_weighted, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding, pytest
- Functions: test_score, test_weighted_score, test_matching_subsequence_itself

### `ebl/tests/fragmentarium/test_list_all_route.py`

- Lines: 12
- Imports: ebl.tests.factories.fragment.FragmentFactory, falcon
- Functions: test_list_all_fragments

### `ebl/tests/fragmentarium/test_migrate_cropped_images.py`

- Lines: 118
- Imports: ebl.fragmentarium.application.cropped_sign_image.Base64, ebl.fragmentarium.application.cropped_sign_image.CroppedSignImage, ebl.fragmentarium.migrate_cropped_images, ebl.transliteration.domain.museum_number.MuseumNumber, mockito.mock, mockito.when
- Functions: test_create_annotations_service, test_show_statistics, test_regenerate_images, test_migrate_cropped_images, test_main, test_main_keyboard_interrupt, test_main_exception, test_cropped_sign_image_creation, test_cropped_sign_images_repository_delete_by_fragment_number

### `ebl/tests/fragmentarium/test_museum_number.py`

- Lines: 177
- Imports: ebl.transliteration.domain.museum_number.MuseumNumber, hamcrest.core.all_of, hamcrest.core.assert_that, hamcrest.library.equal_to, hamcrest.library.greater_than, hamcrest.library.less_than, pytest
- Constants: NUMBER, NUMBERS_AND_SUFFIXES, PREFIX, PREFIXES, SUFFIX
- Functions: test_museum_number, test_str_no_suffix, test_invalid_empty_prefix, test_invalid_period_in_prefix_no_suffix, test_invalid_empty_number, test_invalid_period_in_number, test_invalid_period_in_suffix, test_of_short_prefix, test_of_short_prefix_no_suffix, test_of_long_prefix, test_of_invalid, test_order_equal, test_order_prefix, test_order_number, test_order_suffix

### `ebl/tests/fragmentarium/test_museum_number_schema.py`

- Lines: 30
- Imports: ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.domain.museum_number.MuseumNumber, pytest
- Constants: MUSEUM_NUMBER, SERIALIZED
- Functions: test_dump, test_load, test_invalid, test_missing

### `ebl/tests/fragmentarium/test_named_entities.py`

- Lines: 28
- Imports: ebl.tests.factories.fragment.TransliteratedFragmentFactory, pytest
- Functions: entity_annotated_fragment, test_named_entities, test_word_entities

### `ebl/tests/fragmentarium/test_named_entity_route.py`

- Lines: 47
- Imports: ebl.fragmentarium.application.named_entity_schema.EntityAnnotationSpanSchema, ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, falcon, pytest
- Functions: serialized_annotations, test_fetch_named_entity_annotation, test_update_named_entity_annotation

### `ebl/tests/fragmentarium/test_named_entity_schemas.py`

- Lines: 59
- Imports: ebl.fragmentarium.application.named_entity_schema.EntityAnnotationSpanSchema, ebl.fragmentarium.application.named_entity_schema.NamedEntitySchema, ebl.fragmentarium.domain.named_entity.EntityAnnotationSpan, ebl.fragmentarium.domain.named_entity.NamedEntity, ebl.fragmentarium.domain.named_entity.NamedEntityType, pytest
- Functions: test_named_entity_schema, test_entity_annotation_span_schema

### `ebl/tests/fragmentarium/test_pager_route.py`

- Lines: 59
- Imports: ebl.tests.factories.fragment.FragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, falcon, pytest
- Functions: test_get_fragment_pager, test_get_fragment_pager_cache, test_get_fragment_pager_invalid_id, test_get_folio_pager, test_get_folio_pager_invalid_id

### `ebl/tests/fragmentarium/test_photos_route.py`

- Lines: 32
- Imports: ebl.fragmentarium.application.fragment_finder.ThumbnailSize, falcon, pytest
- Functions: test_get_photo, test_get_photo_not_found, test_get_thumbnail, test_get_thumbnail_not_found

### `ebl/tests/fragmentarium/test_provenance_route.py`

- Lines: 18
- Imports: ebl.common.domain.provenance.Provenance, falcon
- Functions: test_get_provenance

### `ebl/tests/fragmentarium/test_record.py`

- Lines: 18
- Imports: datetime, ebl.fragmentarium.domain.record.Record, ebl.fragmentarium.domain.record.RecordEntry, ebl.fragmentarium.domain.record.RecordType, freezegun.freeze_time, pytest
- Functions: test_add_record

### `ebl/tests/fragmentarium/test_references_route.py`

- Lines: 104
- Imports: ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.bibliography.ReferenceFactory, ebl.tests.factories.fragment.FragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.users.domain.user.Guest, falcon, json, pytest
- Constants: ANY_USER
- Functions: test_update_references, test_update_references_not_found, test_update_references_invalid_museum_number, test_update_references_invalid_reference, test_update_references_invalid_id

### `ebl/tests/fragmentarium/test_retrieve_annotations.py`

- Lines: 132
- Imports: PIL.Image, ebl.fragmentarium.retrieve_annotations, ebl.fragmentarium.retrieve_annotations.BoundingBox, ebl.fragmentarium.retrieve_annotations.create_annotations, ebl.tests.factories.annotation.AnnotationsFactory, ebl.tests.factories.annotation.GeometryFactory, mockito.mock, mockito.verify, mockito.when
- Functions: test_create_annotations, test_from_relative_to_absolute_coordinates, test_write_annotations, test_write_fragment_numbers, test_argument_parsing_only_one_argument, test_argument_parsing_defaults, test_context_fallback_to_mongo

### `ebl/tests/fragmentarium/test_script_schema.py`

- Lines: 32
- Imports: ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.domain.fragment.Script, pytest
- Functions: test_schema

### `ebl/tests/fragmentarium/test_statistics_route.py`

- Lines: 27
- Imports: ebl.tests.factories.fragment.TransliteratedFragmentFactory, falcon
- Constants: PATH
- Functions: test_get_statistics, test_get_statistics_cache

### `ebl/tests/fragmentarium/test_transliteration.py`

- Lines: 46
- Imports: ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.transliteration_error.TransliterationError, pytest
- Functions: test_text, test_signs, test_validate_valid_signs, test_validate_invalid_value, test_validate_multiple_errors

### `ebl/tests/fragmentarium/test_transliteration_query_factory.py`

- Lines: 30
- Imports: ebl.errors.DataError, ebl.transliteration.application.signs_visitor.SignsVisitor, ebl.transliteration.application.transliteration_query_factory.TransliterationQueryFactory, ebl.transliteration.domain.transliteration_query.TransliterationQuery, pytest
- Functions: test_create_empty, test_create_query, test_create_query_invalid

### `ebl/tests/fragmentarium/test_transliteration_update_factory.py`

- Lines: 40
- Imports: ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory, ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.transliteration_error.TransliterationError, pytest
- Functions: test_create, test_create_empty, test_create_invalid_atf

### `ebl/tests/fragmentarium/test_transliterations_route.py`

- Lines: 347
- Imports: attr, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment.Introduction, ebl.fragmentarium.domain.fragment.Notes, ebl.fragmentarium.domain.joins.Join, ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate, ebl.fragmentarium.web.dtos.create_response_dto, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.LemmatizedFragmentFactory, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.markup.EmphasisPart, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.museum_number.MuseumNumber, falcon, freezegun.freeze_time, json, pytest
- Constants: INTRO_FIXTURE, NOTES_FIXTURE
- Functions: test_update_transliteration, test_update_transliteration_merge_lemmatization, test_update_transliteration_invalid_atf, test_update_transliteration_not_lowest_join, test_update_transliteration_not_found, test_update_transliteration_invalid, test_update_transliteration_invalid_entity, test_update_notes, test_update_invalid_notes, test_update_introduction, test_update_invalid_introduction, test_update_multiple_fields

### `ebl/tests/fragmentarium/test_update_annotations.py`

- Lines: 0

### `ebl/tests/fragmentarium/test_update_ocred_signs.py`

- Lines: 266
- Imports: argparse, ebl.fragmentarium.update_ocred_signs, json, mockito.verify, mockito.when, os, pytest, tempfile
- Functions: sample_ocred_signs_file, sample_fragments, test_update_single_fragment, test_update_single_fragment_without_match, test_update_single_fragment_error, test_update_from_json_file, test_update_from_json_file_with_errors, test_main

### `ebl/tests/io/test_fragment_importer.py`

- Lines: 227
- Imports: attr, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.domain.fragment.Fragment, ebl.io.fragments.importer.create_sort_index, ebl.io.fragments.importer.ensure_unique, ebl.io.fragments.importer.load_collection, ebl.io.fragments.importer.load_data, ebl.io.fragments.importer.set_word_ids, ebl.io.fragments.importer.update_sort_keys, ebl.io.fragments.importer.validate, ebl.io.fragments.importer.validate_id, ebl.io.fragments.importer.write_to_db, ebl.mongo_collection.MongoCollection, ebl.tests.factories.fragment.LemmatizedFragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, functools.partial, json, marshmallow.ValidationError, pymongo, pymongo.errors.BulkWriteError
- Constants: MOCKFILE
- Functions: fragment, valid_fragment_data, fragments_collection, mock_json_file, test_load_json, test_load_collection, test_load_invalid_json, test_validation, test_missing_required_field, test_invalid_enum, test_invalid_input_type, test_ensure_id, test_missing_id, test_invalid_id, test_ensure_unique, test_ensure_unique_duplicate, test_write_to_db, test_write_to_db_duplicate, test_update_sort_index, test_set_word_ids

### `ebl/tests/io/test_thumbnails.py`

- Lines: 16
- Imports: PIL.Image, ebl.fragmentarium.application.fragment_finder.ThumbnailSize, ebl.io.fragments.thumbnails.resize, pytest
- Functions: large_image, test_resize

### `ebl/tests/lemmatization/test_lemma_search_route.py`

- Lines: 44
- Imports: ebl.tests.factories.fragment.LemmatizedFragmentFactory, falcon, pytest
- Functions: test_search_fragment, test_search_fragment_no_query, test_search_invalid_params

### `ebl/tests/lemmatization/test_suggestion_finder.py`

- Lines: 173
- Imports: attr, ebl.dictionary.domain.word.WordId, ebl.lemmatization.application.suggestion_finder.SuggestionFinder, ebl.tests.factories.fragment.FragmentFactory, ebl.tests.factories.fragment.LemmatizedFragmentFactory, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.domain.atf.Flag, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.sign_tokens.Logogram, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.word_tokens.Word
- Constants: ANOTHER_LEMMATIZED_FRAGMENT, COLLECTION
- Functions: test_query_lemmas, test_query_lemmas_normalized, test_query_lemmas_multiple, test_query_lemmas_ignores_in_value, test_query_lemmas_not_found, test_find_suggestions

### `ebl/tests/markup/test_markup_route.py`

- Lines: 77
- Imports: falcon
- Functions: test_get_markup

### `ebl/tests/signs/__init__.py`

- Lines: 0

### `ebl/tests/signs/test_memoizing_sign_repository.py`

- Lines: 112
- Imports: ebl.signs.infrastructure.memoizing_sign_repository.MemoizingSignRepository
- Functions: test_find_memoization, test_search_memoization, test_search_by_lists_name_memoization, test_search_include_homophones, test_search_composite_signs, test_search_by_id, test_search_all, test_search_by_lemma

### `ebl/tests/signs/test_sign_images_route.py`

- Lines: 59
- Imports: ebl.fragmentarium.application.cropped_sign_image.Base64, ebl.fragmentarium.application.cropped_sign_image.CroppedSignImage, ebl.tests.factories.annotation.AnnotationDataFactory, ebl.tests.factories.annotation.AnnotationFactory, ebl.tests.factories.annotation.AnnotationsFactory, ebl.tests.factories.annotation.CroppedSignFactory, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, falcon
- Functions: test_signs_get

### `ebl/tests/signs/test_sign_repository.py`

- Lines: 322
- Imports: ebl.errors.NotFoundError, ebl.signs.infrastructure.mongo_sign_repository.SignSchema, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.domain.museum_number.MuseumNumber, marshmallow.EXCLUDE, pytest
- Constants: COLLECTION
- Functions: mongo_sign_igi, mongo_sign_d, sign_igi, mongo_sign_si, sign_si, mongo_sign_si_2, sign_si_2, test_create, test_find, test_sign_not_found, test_search, test_search_all, test_search_all_no_result, test_search_by_id, test_search_by_id_no_result, test_search_by_lists_name, test_search_not_found, test_find_signs_by_order, test_get_unicode_from_atf, test_find_signs_by_order_not_found, test_list_all_signs

### `ebl/tests/signs/test_sign_schema.py`

- Lines: 130
- Imports: ebl.signs.infrastructure.mongo_sign_repository.FosseySchema, ebl.signs.infrastructure.mongo_sign_repository.LogogramSchema, ebl.signs.infrastructure.mongo_sign_repository.SignDtoSchema, ebl.signs.infrastructure.mongo_sign_repository.SignSchema, ebl.signs.infrastructure.mongo_sign_repository.SortKeysSchema, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.sign.Fossey, ebl.transliteration.domain.sign.Logogram, ebl.transliteration.domain.sign.Sign, ebl.transliteration.domain.sign.SignListRecord, ebl.transliteration.domain.sign.SignName, ebl.transliteration.domain.sign.SortKeys, ebl.transliteration.domain.sign.Value
- Functions: test_logogram_schema, test_fossey_schema, test_sort_keys_schema, test_sign_schema, test_sign_dto_schema

### `ebl/tests/signs/test_sign_search_route.py`

- Lines: 152
- Imports: attr, copy, ebl.signs.infrastructure.mongo_sign_repository.SignDtoSchema, ebl.transliteration.domain.sign.Fossey, ebl.transliteration.domain.sign.Sign, ebl.transliteration.domain.sign.SignName, falcon, pytest
- Functions: test_signs_get, test_signs_not_found, test_signs_search_route, test_signs_search_route_error, test_all_signs_route

### `ebl/tests/test_app_bootstrap.py`

- Lines: 66
- Imports: Cryptodome.PublicKey.RSA, attr.exceptions.FrozenInstanceError, base64, ebl.app, ebl.context, ebl.ebl_ai_client.EblAiClient, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory, ebl.transliteration.application.transliteration_query_factory.TransliterationQueryFactory, falcon, pymongo_inmemory.MongoClient, pytest
- Functions: configure_environment, noop_sentry_init, test_get_app_bootstraps, test_create_context_helpers

### `ebl/tests/test_changelog.py`

- Lines: 15
- Imports: freezegun.freeze_time
- Constants: COLLECTION, NEW, OLD, RESOURCE_ID, RESOURCE_TYPE
- Functions: test_create

### `ebl/tests/test_dispatcher.py`

- Lines: 41
- Imports: ebl.dispatcher.DispatchError, ebl.dispatcher.create_dispatcher, pytest
- Constants: COMMANDS, DISPATCH
- Functions: test_valid_params, test_invalid_params, test_key_error_from_command

### `ebl/tests/test_ebl_ai_client.py`

- Lines: 166
- Imports: ebl.ebl_ai_client.BoundingBoxPredictionSchema, ebl.ebl_ai_client.EblAiApiError, ebl.ebl_ai_client.EblAiClient, ebl.fragmentarium.application.annotations_schema.AnnotationsSchema, ebl.fragmentarium.domain.annotation.BoundingBoxPrediction, ebl.tests.conftest.create_test_photo, ebl.transliteration.domain.museum_number.MuseumNumber, httpretty, json, marshmallow.ValidationError, pytest
- Constants: SCHEMA
- Functions: test_bounding_box_predition_schema, test_generate_annotations, test_generate_annotations_error, test_generate_annotations_empty_results, test_generate_annotations_invalid_coordinates, test_generate_annotations_unexpected_fields

### `ebl/tests/test_error_handler.py`

- Lines: 40
- Imports: ebl.dispatcher.DispatchError, ebl.error_handler, ebl.errors.DataError, ebl.errors.DuplicateError, ebl.errors.NotFoundError, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.transliteration.domain.alignment.AlignmentError, falcon, falcon.testing, pytest
- Classes: ErrorResource
- Methods in ErrorResource: __init__, on_get
- Functions: simulate_error, test_error_handler_mapping

### `ebl/tests/test_image.jpeg`

- Lines: 1460

### `ebl/tests/test_merger.py`

- Lines: 83
- Imports: ebl.merger.Merger, unicodedata.normalize
- Constants: OLD
- Functions: inner_merge, map_, remove_values, map_normalized, test_merge_empty, test_merge_no_changes, test_merge_add_line, test_merge_remove_line, test_merge_edit_line, test_merge_edit_lines, test_merge_repeated_tokens_is_deterministic, test_merge_unicode_normalization

### `ebl/tests/test_mongo_collection.py`

- Lines: 230
- Imports: bson.ObjectId, datetime, ebl.errors.DuplicateError, ebl.errors.NotFoundError, ebl.mongo_collection.MongoCollection, pymongo.errors.AutoReconnect, pymongo.errors.DuplicateKeyError, pytest, unittest.mock.Mock
- Functions: collection, test_create_many_and_find_by_id, test_create_and_find_by_id, test_create_duplicate, test_find_by_id_document_not_found, test_find, test_exists, test_delete, test_delete_not_found, test_find_document_not_found, test_find_many, test_find_many_document_not_found, test_aggregate, test_update, test_update_many, test_update_document_not_found, test_replace, test_replace_document_not_found, test_count, test_get_all_values_ignores_object_ids, test_unicode_and_datetime_roundtrip, test_insert_one_retries_once_on_auto_reconnect, test_insert_one_reraises_auto_reconnect_after_last_attempt, test_insert_one_duplicate_after_auto_reconnect_returns_document_id

### `ebl/tests/test_schemas.py`

- Lines: 63
- Imports: ebl.schemas.NameEnumField, ebl.schemas.ValueEnumField, enum.Enum, marshmallow.Schema, marshmallow.ValidationError, pytest
- Classes: _TestEnumStr, _TestEnumInt, _TestSchemaStr, _TestSchemaInt
- Functions: test_str_value_enum, test_int_value_enum, test_value_enum_none, test_value_enum_exception

### `ebl/tests/transliteration/__init__.py`

- Lines: 0

### `ebl/tests/transliteration/test_alignment.py`

- Lines: 38
- Imports: ebl.transliteration.domain.alignment.AlignmentError, ebl.transliteration.domain.alignment.AlignmentToken, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.Variant, ebl.transliteration.domain.unknown_sign_tokens.UnclearSign, ebl.transliteration.domain.unknown_sign_tokens.UnidentifiedSign, ebl.transliteration.domain.word_tokens.Word, pytest
- Functions: test_apply, test_apply_invalid

### `ebl/tests/transliteration/test_at_line.py`

- Lines: 134
- Imports: ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.at_line.ColumnAtLine, ebl.transliteration.domain.at_line.CompositeAtLine, ebl.transliteration.domain.at_line.DiscourseAtLine, ebl.transliteration.domain.at_line.HeadingAtLine, ebl.transliteration.domain.at_line.ObjectAtLine, ebl.transliteration.domain.at_line.SurfaceAtLine, ebl.transliteration.domain.atf, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.markup.StringPart, pytest
- Functions: test_at_line_heading, test_at_line_column, test_at_line_column_no_status, test_at_line_discourse, test_at_line_surface, test_at_line_surface_no_status, test_at_line_surface_instantiate_text_with_wrong_surface, test_at_line_object_no_status, test_at_line_object, test_at_line_composite, test_at_line_composite_constant, test_at_line_composite_milestone, test_at_line_composite_raise_error

### `ebl/tests/transliteration/test_atf.py`

- Lines: 28
- Imports: ebl.transliteration.domain.atf.sub_index_to_int, ebl.transliteration.domain.atf.to_sub_index, pytest
- Constants: SUB_INDICES
- Functions: test_to_sub_index, test_sub_index_to_int

### `ebl/tests/transliteration/test_atf_parser.py`

- Lines: 141
- Imports: ebl.common.domain.period.Period, ebl.common.domain.provenance.Provenance, ebl.common.domain.stage.Stage, ebl.tests.assertions.assert_exception_has_errors, ebl.transliteration.domain.at_line.SurfaceAtLine, ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.dollar_line.ScopeContainer, ebl.transliteration.domain.dollar_line.StateDollarLine, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.line.ControlLine, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.transliteration_error.DuplicateLabelError, ebl.transliteration.domain.transliteration_error.TransliterationError, hamcrest.library.starts_with, lark.Lark, lark.UnexpectedCharacters, pytest
- Constants: DEFAULT_LANGUAGE, MANUSCRIPT_LINE_PARSER_PATH, PARALLEL_LINE_PARSER_PATH
- Functions: test_parser_version, test_parse_atf, test_invalid_atf, test_duplicate_labels, siglum_parser, test_stages_periods_equality, test_provenances_coverage

### `ebl/tests/transliteration/test_dollar_line.py`

- Lines: 145
- Imports: ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf, ebl.transliteration.domain.dollar_line.ImageDollarLine, ebl.transliteration.domain.dollar_line.LooseDollarLine, ebl.transliteration.domain.dollar_line.RulingDollarLine, ebl.transliteration.domain.dollar_line.ScopeContainer, ebl.transliteration.domain.dollar_line.StateDollarLine, pytest
- Functions: test_loose_dollar_line, test_image_dollar_line, test_ruling_dollar_line, test_ruling_dollar_line_status, test_scope_container, test_strict_dollar_line_with_none, test_state_dollar_line, test_state_dollar_line_content, test_state_dollar_line_non_empty_string_error, test_state_dollar_line_range, test_state_dollar_line_end_of

### `ebl/tests/transliteration/test_enclosure_tokens.py`

- Lines: 114
- Imports: ebl.tests.asserts.assert_token_serialization, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.enclosure_tokens.AccidentalOmission, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss, ebl.transliteration.domain.enclosure_tokens.Emendation, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.enclosure_tokens.IntentionalOmission, ebl.transliteration.domain.enclosure_tokens.LinguisticGloss, ebl.transliteration.domain.enclosure_tokens.PhoneticGloss, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.side.Side, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.Joiner, pytest
- Functions: test_enclosure, test_determinative, test_phonetic_gloss, test_linguistic_gloss

### `ebl/tests/transliteration/test_enclosure_visitor_types.py`

- Lines: 399
- Imports: ebl.transliteration.domain.atf_parsers.lark_parser.parse_line, ebl.transliteration.domain.enclosure_tokens.AccidentalOmission, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss, ebl.transliteration.domain.enclosure_tokens.Emendation, ebl.transliteration.domain.enclosure_tokens.IntentionalOmission, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.enclosure_type.EnclosureType, ebl.transliteration.domain.enclosure_visitor.EnclosureUpdater, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.normalized_akkadian.Caesura, ebl.transliteration.domain.normalized_akkadian.MetricalFootSeparator, ebl.transliteration.domain.sign_tokens.Number, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.tokens.Token
- Functions: map_line, test_enclosure_type

### `ebl/tests/transliteration/test_enclosure_visitor_validation.py`

- Lines: 172
- Imports: ebl.transliteration.domain.atf_parsers.lark_parser.parse_line, ebl.transliteration.domain.enclosure_error.EnclosureError, ebl.transliteration.domain.enclosure_visitor.EnclosureValidator, pytest
- Functions: validate_line, test_valid, test_invalid

### `ebl/tests/transliteration/test_greek_tokens.py`

- Lines: 84
- Imports: ebl.fragmentarium.application.named_entity_schema.NamedEntitySchema, ebl.tests.asserts.assert_token_serialization, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.atf, ebl.transliteration.domain.greek_tokens.GreekLetter, ebl.transliteration.domain.greek_tokens.GreekWord, ebl.transliteration.domain.language.Language, pytest
- Functions: test_greek_letter, test_greek_word

### `ebl/tests/transliteration/test_label_schema.py`

- Lines: 40
- Imports: ebl.transliteration.application.at_line_schemas.ColumnLabelSchema, ebl.transliteration.application.at_line_schemas.ObjectLabelSchema, ebl.transliteration.application.at_line_schemas.SurfaceLabelSchema, ebl.transliteration.domain.atf, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel
- Functions: test_load_and_dump_column_label_schema, test_load_and_dump_surface_label_schema, test_load_and_dump_object_label_schema

### `ebl/tests/transliteration/test_labels.py`

- Lines: 119
- Imports: ebl.transliteration.domain.atf.Object, ebl.transliteration.domain.atf.Status, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.atf_parsers.lark_parser.parse_labels, ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.labels.LabelVisitor, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, pytest, typing.List, typing.Tuple
- Functions: test_parse_labels, test_parse_labels_multiple, test_parse_labels_empty, test_parse_labels_invalud, test_abbreviation, test_label_to_value, test_label_to_atf, test_duplicate_status_is_invalid

### `ebl/tests/transliteration/test_language.py`

- Lines: 51
- Imports: ebl.transliteration.domain.language.DEFAULT_LANGUAGE, ebl.transliteration.domain.language.Language, pytest
- Functions: test_lemmatizable, test_of_atf, test_default_language

### `ebl/tests/transliteration/test_lemmatization.py`

- Lines: 29
- Imports: ebl.lemmatization.domain.lemmatization.Lemmatization, ebl.lemmatization.domain.lemmatization.LemmatizationToken
- Constants: TOKENS
- Functions: create_token, create_lemmatized_token, test_equality, test_tokens

### `ebl/tests/transliteration/test_lemmatization_schema.py`

- Lines: 25
- Imports: ebl.dictionary.domain.word.WordId, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.application.lemmatization_schema.LemmatizationTokenSchema, pytest
- Constants: TOKENS
- Functions: test_serialize_lemmatization_token, test_deserialize_lemmatization_token

### `ebl/tests/transliteration/test_line.py`

- Lines: 34
- Imports: ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.line.ControlLine, ebl.transliteration.domain.line.EmptyLine, pytest
- Functions: test_empty_line, test_control_line, test_update_lemmatization

### `ebl/tests/transliteration/test_line_breaks.py`

- Lines: 30
- Imports: ebl.tests.asserts.assert_token_serialization, ebl.transliteration.domain.enclosure_type.EnclosureType, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.LineBreak, ebl.transliteration.domain.word_tokens.InWordNewline
- Functions: test_in_word_new_line, test_line_break

### `ebl/tests/transliteration/test_line_label.py`

- Lines: 35
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_label.LineLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.line_number.LineNumberRange, pytest
- Functions: test_format_line_label

### `ebl/tests/transliteration/test_line_merge.py`

- Lines: 282
- Imports: ebl.dictionary.domain.word.WordId, ebl.transliteration.domain.atf, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.line.ControlLine, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.word_tokens.Word, pytest
- Functions: test_merge

### `ebl/tests/transliteration/test_line_number.py`

- Lines: 63
- Imports: ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.line_number.LineNumberRange, pytest, typing.Optional
- Functions: test_line_number, test_line_number_range, test_is_line_matching_number

### `ebl/tests/transliteration/test_line_number_schemas.py`

- Lines: 52
- Imports: ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.line_number.LineNumberRange, pytest
- Functions: test_line_number_schema

### `ebl/tests/transliteration/test_line_schemas.py`

- Lines: 831
- Imports: ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.bibliography.domain.reference.BibliographyId, ebl.bibliography.domain.reference.Reference, ebl.bibliography.domain.reference.ReferenceType, ebl.corpus.domain.chapter.Stage, ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.application.one_of_line_schema.OneOfLineSchema, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.at_line.ColumnAtLine, ebl.transliteration.domain.at_line.CompositeAtLine, ebl.transliteration.domain.at_line.DiscourseAtLine, ebl.transliteration.domain.at_line.DivisionAtLine, ebl.transliteration.domain.at_line.HeadingAtLine, ebl.transliteration.domain.at_line.ObjectAtLine, ebl.transliteration.domain.at_line.SealAtLine, ebl.transliteration.domain.at_line.SurfaceAtLine, ebl.transliteration.domain.atf, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.dollar_line.ImageDollarLine
- Constants: EXTRA_LINES_FOR_LOAD_LINE_TEST, LINES
- Functions: test_dump_line, test_load_line

### `ebl/tests/transliteration/test_lone_determinative.py`

- Lines: 77
- Imports: ebl.fragmentarium.application.named_entity_schema.NamedEntitySchema, ebl.tests.asserts.assert_token_serialization, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.language.DEFAULT_LANGUAGE, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.word_tokens.ErasureState, ebl.transliteration.domain.word_tokens.LoneDeterminative, pytest
- Functions: test_of_value, test_lone_determinative, test_set_language

### `ebl/tests/transliteration/test_markup.py`

- Lines: 127
- Imports: ebl.bibliography.domain.reference.BibliographyId, ebl.bibliography.domain.reference.Reference, ebl.bibliography.domain.reference.ReferenceType, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.markup.BibliographyPart, ebl.transliteration.domain.markup.EmphasisPart, ebl.transliteration.domain.markup.LanguagePart, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.markup.rstrip, ebl.transliteration.domain.markup.title_case, ebl.transliteration.domain.markup.titlecase, ebl.transliteration.domain.markup.to_title, ebl.transliteration.domain.sign_tokens.Divider, ebl.transliteration.domain.sign_tokens.Reading, pytest, typing.Sequence
- Constants: BIBLIOGRAPHY_PART, LANGUAGE_PART, LONG_TEXT, LONG_TEXT_TITLECASE, PUNCTUATION, TEXT
- Functions: test_part_rstrip, test_titlecase, test_part_title_case, test_rstrip, test_title_case, test_context_aware_title_case, test_to_title

### `ebl/tests/transliteration/test_mongo_parallel_repository.py`

- Lines: 69
- Imports: ebl.common.domain.stage.Stage, ebl.corpus.application.schemas.ChapterSchema, ebl.errors.NotFoundError, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.tests.factories.corpus.ChapterFactory, ebl.tests.factories.corpus.TextIdFactory, ebl.tests.factories.fragment.FragmentFactory, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.parallel_line.ChapterName, ebl.transliteration.domain.text_id.TextId, ebl.transliteration.infrastructure.mongo_parallel_repository.MongoParallelRepository, pymongo.database.Database, pytest
- Constants: CHAPTERS_COLLECTION, CHAPTER_NAME, FRAGMENTS_COLLECTION, MUSEUM_NUMBER
- Functions: test_fragment_exists_true, test_fragment_exists_false, test_chapter_exists_true, test_chapter_exists_false, test_find_implicit_chapter, test_find_implicit_chapter_not_found

### `ebl/tests/transliteration/test_normalized_akkadian.py`

- Lines: 174
- Imports: ebl.dictionary.domain.word.WordId, ebl.fragmentarium.application.named_entity_schema.NamedEntitySchema, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.tests.asserts.assert_token_serialization, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.atf.Flag, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Emendation, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.normalized_akkadian.Caesura, ebl.transliteration.domain.normalized_akkadian.MetricalFootSeparator, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.UnknownNumberOfSigns, ebl.transliteration.domain.tokens.ValueToken, pytest
- Functions: test_akkadian_word, test_akkadian_word_invalid_modifier, test_set_unique_lemma, test_set_unique_lemma_empty, test_set_alignment, test_set_alignment_empty, test_caesura, test_metrical_foot_separator

### `ebl/tests/transliteration/test_note_line.py`

- Lines: 81
- Imports: ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.markup.EmphasisPart, ebl.transliteration.domain.markup.LanguagePart, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.EnclosureType, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.UnknownNumberOfSigns, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.word_tokens.Word, typing.Sequence
- Constants: EXPECTED_ATF
- Functions: expected_transliteration, test_note_line

### `ebl/tests/transliteration/test_note_parts.py`

- Lines: 38
- Imports: ebl.bibliography.domain.reference.BibliographyId, ebl.bibliography.domain.reference.Reference, ebl.bibliography.domain.reference.ReferenceType, ebl.transliteration.domain.markup.BibliographyPart, pytest
- Constants: BIBLIOGRAPHY_ID
- Functions: test_bibliography_part, test_bibliography_part_escape, test_invalid_reference

### `ebl/tests/transliteration/test_parallel_line.py`

- Lines: 93
- Imports: ebl.corpus.domain.chapter.Stage, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.atf.Status, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.parallel_line.ChapterName, ebl.transliteration.domain.parallel_line.Labels, ebl.transliteration.domain.parallel_line.ParallelComposition, ebl.transliteration.domain.parallel_line.ParallelFragment, ebl.transliteration.domain.parallel_line.ParallelText, ebl.transliteration.domain.text_id.TextId, pytest
- Functions: test_parallel_fragment, test_parallel_text, test_parallel_composition

### `ebl/tests/transliteration/test_parallel_line_injector.py`

- Lines: 72
- Imports: attr, ebl.errors.NotFoundError, ebl.tests.factories.fragment.TransliteratedFragmentFactory, ebl.tests.factories.ids.ChapterNameFactory, ebl.tests.factories.parallel_line.ParallelFragmentFactory, ebl.tests.factories.parallel_line.ParallelTextFactory, ebl.transliteration.domain.parallel_line.ChapterName, ebl.transliteration.domain.parallel_line.ParallelFragment, ebl.transliteration.domain.parallel_line.ParallelText, pytest
- Functions: test_inject_parallel_fragment, test_inject_parallel_text, test_inject_parallel_text_implicit_chapter, test_inject_parallel_text_implicit_chapter_not_found, test_inject_other_lines, test_inject_transliteration

### `ebl/tests/transliteration/test_parse_at_line.py`

- Lines: 93
- Imports: ebl.transliteration.domain.at_line.ColumnAtLine, ebl.transliteration.domain.at_line.CompositeAtLine, ebl.transliteration.domain.at_line.DiscourseAtLine, ebl.transliteration.domain.at_line.DivisionAtLine, ebl.transliteration.domain.at_line.HeadingAtLine, ebl.transliteration.domain.at_line.ObjectAtLine, ebl.transliteration.domain.at_line.SealAtLine, ebl.transliteration.domain.at_line.SurfaceAtLine, ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.transliteration_error.TransliterationError, pytest
- Functions: test_parse_atf_at_line, test_parse_atf_at_line_duplicate_status_error

### `ebl/tests/transliteration/test_parse_egyptian.py`

- Lines: 115
- Imports: ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.atf.Flag, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.egyptian_metrical_feet_separator_token.EgyptianMetricalFeetSeparator, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.word_tokens.Word, pytest, typing.List
- Functions: test_egpytian_feet_metrical_feet_line, test_egpytian_feet_metrical_feet_atf

### `ebl/tests/transliteration/test_parse_erasure.py`

- Lines: 59
- Imports: ebl.transliteration.domain.atf_parsers.lark_parser.parse_erasure, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.sign_tokens.Divider, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.unknown_sign_tokens.UnclearSign, ebl.transliteration.domain.unknown_sign_tokens.UnidentifiedSign, ebl.transliteration.domain.word_tokens.ErasureState, ebl.transliteration.domain.word_tokens.Word, pytest
- Constants: ERASURE_CENTER, ERASURE_LEFT, ERASURE_RIGHT
- Functions: test_erasure

### `ebl/tests/transliteration/test_parse_image_dollar_line.py`

- Lines: 28
- Imports: ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.dollar_line.ImageDollarLine, ebl.transliteration.domain.text.Text, pytest
- Functions: test_parse_image_dollar_line

### `ebl/tests/transliteration/test_parse_loose_dollar_line.py`

- Lines: 20
- Imports: ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.dollar_line.LooseDollarLine, ebl.transliteration.domain.text.Text, pytest
- Functions: test_parse_loose_dollar_line

### `ebl/tests/transliteration/test_parse_markup_paragraphs.py`

- Lines: 72
- Imports: ebl.bibliography.domain.reference.BibliographyId, ebl.tests.transliteration.test_parse_note_line.expected_language_part, ebl.transliteration.domain.atf_parsers.lark_parser.parse_markup_paragraphs, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.markup.BibliographyPart, ebl.transliteration.domain.markup.BoldPart, ebl.transliteration.domain.markup.EmphasisPart, ebl.transliteration.domain.markup.ParagraphPart, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.markup.SubscriptPart, ebl.transliteration.domain.markup.SuperscriptPart, ebl.transliteration.domain.markup.UrlPart, pytest
- Functions: test_parse_markup_paragraphs

### `ebl/tests/transliteration/test_parse_note_line.py`

- Lines: 83
- Imports: ebl.bibliography.domain.reference.BibliographyId, ebl.transliteration.domain.atf_parsers.lark_parser.LINE_PARSER, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.atf_parsers.lark_parser.parse_markup, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.markup.BibliographyPart, ebl.transliteration.domain.markup.BoldPart, ebl.transliteration.domain.markup.EmphasisPart, ebl.transliteration.domain.markup.LanguagePart, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.markup.SubscriptPart, ebl.transliteration.domain.markup.SuperscriptPart, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_line_transformer.TextLineTransformer, pytest
- Functions: parse_text, expected_language_part, test_parse_markup, test_parse_note_line

### `ebl/tests/transliteration/test_parse_parallel_line.py`

- Lines: 96
- Imports: ebl.corpus.domain.chapter.Stage, ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_line, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.parallel_line.ChapterName, ebl.transliteration.domain.parallel_line.Labels, ebl.transliteration.domain.parallel_line.ParallelComposition, ebl.transliteration.domain.parallel_line.ParallelFragment, ebl.transliteration.domain.parallel_line.ParallelText, ebl.transliteration.domain.text_id.TextId, pytest
- Functions: test_parse_atf_at_line

### `ebl/tests/transliteration/test_parse_ruling_dollar_line.py`

- Lines: 42
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.dollar_line.RulingDollarLine, ebl.transliteration.domain.text.Text, pytest
- Functions: test_parse_ruling_dollar_line

### `ebl/tests/transliteration/test_parse_state_dollar_line.py`

- Lines: 286
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.dollar_line.ScopeContainer, ebl.transliteration.domain.dollar_line.StateDollarLine, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.transliteration_error.TransliterationError, pytest
- Functions: test_parse_state_dollar_line, test_parse_state_dollar_line_surface_ambiguity, test_parse_state_dollar_line_invalid

### `ebl/tests/transliteration/test_parse_state_dollar_line_exhaustive.py`

- Lines: 143
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.dollar_line.ScopeContainer, ebl.transliteration.domain.dollar_line.StateDollarLine, ebl.transliteration.domain.text.Text, pytest
- Constants: EXTENTS, QUALIFICATIONS, SCOPES, STATES, STATUSES
- Functions: test_qualification, test_extent, test_scope, test_state, test_status, test_combinations

### `ebl/tests/transliteration/test_parse_text_line.py`

- Lines: 1344
- Imports: ebl.tests.assertions.assert_exception_has_errors, ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.enclosure_tokens.AccidentalOmission, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.enclosure_tokens.IntentionalOmission, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.greek_tokens.GreekLetter, ebl.transliteration.domain.greek_tokens.GreekWord, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.line_number.LineNumberRange, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.sign_tokens.CompoundGrapheme, ebl.transliteration.domain.sign_tokens.Divider
- Constants: DEFAULT_LANGUAGE
- Functions: create_number_part, test_parser_version, test_parse_text_line, test_parse_dividers, test_parse_atf_language_shifts, test_parse_normalized_akkadain_shift, test_invalid_text_line, test_invalid_brackets

### `ebl/tests/transliteration/test_parse_translation_line.py`

- Lines: 45
- Imports: ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.atf_parsers.lark_parser.parse_translation_line, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.translation_line.Extent, ebl.transliteration.domain.translation_line.TranslationLine, pytest
- Functions: test_parse_translation_line

### `ebl/tests/transliteration/test_parse_word.py`

- Lines: 875
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_word, ebl.transliteration.domain.enclosure_tokens.AccidentalOmission, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.enclosure_tokens.IntentionalOmission, ebl.transliteration.domain.enclosure_tokens.LinguisticGloss, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.enclosure_tokens.PhoneticGloss, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.sign.SignName, ebl.transliteration.domain.sign_tokens.CompoundGrapheme, ebl.transliteration.domain.sign_tokens.Grapheme, ebl.transliteration.domain.sign_tokens.Logogram, ebl.transliteration.domain.sign_tokens.Number, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.UnknownNumberOfSigns, ebl.transliteration.domain.tokens.ValueToken
- Functions: test_word, test_lone_determinative, test_invalid_lone_determinative, test_invalid

### `ebl/tests/transliteration/test_queries.py`

- Lines: 38
- Imports: ebl.transliteration.infrastructure.queries.build_query, pytest
- Constants: NUMBERS, PATH_PREFIX, PREFIXES, SUFFIXES, WILDCARDS
- Functions: create_dto, add_path_prefix, test_build_query

### `ebl/tests/transliteration/test_reconstructed_text_parser.py`

- Lines: 623
- Imports: ebl.corpus.domain.enclosure_validator.validate, ebl.transliteration.domain.atf.Flag, ebl.transliteration.domain.atf_parsers.reconstructed_text_parser.parse_break, ebl.transliteration.domain.atf_parsers.reconstructed_text_parser.parse_reconstructed_line, ebl.transliteration.domain.atf_parsers.reconstructed_text_parser.parse_reconstructed_word, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Emendation, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.normalized_akkadian.Caesura, ebl.transliteration.domain.normalized_akkadian.MetricalFootSeparator, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.tokens.UnknownNumberOfSigns, ebl.transliteration.domain.tokens.ValueToken, lark.exceptions.ParseError, lark.exceptions.UnexpectedInput, pytest, re
- Constants: WORD
- Functions: assert_parse, assert_parse_error, test_word, test_invalid_word, test_caesura, test_feet_separator, test_invalid_break, test_reconstructed_line, test_invalid_reconstructed_line, test_validate_invalid, test_validate_valid

### `ebl/tests/transliteration/test_scope_schema.py`

- Lines: 15
- Imports: ebl.transliteration.application.dollar_line_schemas.ScopeContainerSchema, ebl.transliteration.domain.atf, ebl.transliteration.domain.dollar_line.ScopeContainer
- Functions: test_dump_scope_schema, test_load_scope_schema

### `ebl/tests/transliteration/test_sign.py`

- Lines: 133
- Imports: ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.sign.Fossey, ebl.transliteration.domain.sign.Logogram, ebl.transliteration.domain.sign.Sign, ebl.transliteration.domain.sign.SignListRecord, ebl.transliteration.domain.sign.SignName, ebl.transliteration.domain.sign.SortKeys, ebl.transliteration.domain.sign.Value
- Functions: test_logogram, test_sort_keys, test_fossey, test_sign, test_standardization_abz, test_standardization_multiple_abz, test_standardization_no_abz

### `ebl/tests/transliteration/test_sign_tokens.py`

- Lines: 491
- Imports: ebl.tests.asserts.assert_token_serialization, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.atf, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.sign.SignName, ebl.transliteration.domain.sign_tokens.CompoundGrapheme, ebl.transliteration.domain.sign_tokens.Divider, ebl.transliteration.domain.sign_tokens.Grapheme, ebl.transliteration.domain.sign_tokens.Logogram, ebl.transliteration.domain.sign_tokens.Number, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.unknown_sign_tokens.UnclearSign, ebl.transliteration.domain.unknown_sign_tokens.UnidentifiedSign, pytest
- Functions: test_divider, test_unidentified_sign, test_unidentified_sign_with_flags, test_unclear_sign, test_unclear_sign_with_flags, test_reading, test_logogram, test_number, test_compound_grapheme, test_grapheme

### `ebl/tests/transliteration/test_signs_visitor.py`

- Lines: 115
- Imports: ebl.transliteration.application.signs_visitor.SignsVisitor, ebl.transliteration.domain.atf_parsers.lark_parser.parse_line, pytest, typing.Sequence
- Functions: test_signs_visitor_string, test_signs_visitor_unicode

### `ebl/tests/transliteration/test_text.py`

- Lines: 174
- Imports: ebl.dictionary.domain.word.WordId, ebl.lemmatization.domain.lemmatization.Lemmatization, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf, ebl.transliteration.domain.dollar_line.RulingDollarLine, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text.LineLabel, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.translation_line.Extent, ebl.transliteration.domain.translation_line.TranslationLine, ebl.transliteration.domain.transliteration_error.ExtentLabelError, ebl.transliteration.domain.word_tokens.Word
- Constants: PARSER_VERSION
- Functions: test_of_iterable, test_lines, test_text_lines, test_number_of_lines, test_version, test_set_version, test_lemmatization, test_atf, test_update_lemmatization, test_update_lemmatization_incompatible, test_update_lemmatization_wrong_lines, test_labels, test_translation_before_text, test_invalid_extent, test_extent_before_translation, test_exent_overlapping, test_extent_overlapping_languages

### `ebl/tests/transliteration/test_text_line.py`

- Lines: 257
- Imports: ebl.dictionary.domain.word.WordId, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf_parsers.lark_parser.parse_line, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.enclosure_type.EnclosureType, ebl.transliteration.domain.language.DEFAULT_LANGUAGE, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.tokens.UnknownNumberOfSigns, ebl.transliteration.domain.tokens.ValueToken
- Constants: LINE_NUMBER
- Functions: test_text_line_of_iterable, test_text_line_of_iterable_normalized, test_text_line_atf, test_text_line_atf_gloss, test_text_line_atf_erasure, test_lemmatization, test_update_lemmatization, test_update_lemmatization_incompatible, test_update_lemmatization_wrong_lenght

### `ebl/tests/transliteration/test_text_merge.py`

- Lines: 307
- Imports: ebl.dictionary.domain.word.WordId, ebl.transliteration.domain.atf, ebl.transliteration.domain.dollar_line.RulingDollarLine, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.line.ControlLine, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.markup.EmphasisPart, ebl.transliteration.domain.markup.LanguagePart, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.tokens.Variant, ebl.transliteration.domain.word_tokens.Word, pytest
- Functions: test_merge

### `ebl/tests/transliteration/test_text_schema.py`

- Lines: 80
- Imports: ebl.dictionary.domain.word.WordId, ebl.transliteration.application.one_of_line_schema.OneOfLineSchema, ebl.transliteration.application.text_schema.TextSchema, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.line.ControlLine, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.word_tokens.LoneDeterminative, ebl.transliteration.domain.word_tokens.Word, pytest
- Functions: test_dump_line, test_load_line

### `ebl/tests/transliteration/test_tokens.py`

- Lines: 274
- Imports: ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.tests.asserts.assert_token_serialization, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.alignment.AlignmentError, ebl.transliteration.domain.alignment.AlignmentToken, ebl.transliteration.domain.atf, ebl.transliteration.domain.egyptian_metrical_feet_separator_token.EgyptianMetricalFeetSeparator, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss, ebl.transliteration.domain.enclosure_type.EnclosureType, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.sign_tokens.Divider, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.Column, ebl.transliteration.domain.tokens.CommentaryProtocol, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.tokens.Tabulation
- Constants: TOKENS
- Functions: test_value_token, test_language_shift, test_set_unique_lemma_incompatible, test_set_unique_lemma_with_lemma, test_set_unique_lemma_no_lemma, test_set_alignment_incompatible, test_set_non_empty_alignment, test_set_alignment_no_alignment, test_merge, test_unknown_number_of_signs, test_egyptian_metrical_feet_separator, test_tabulation, test_commentary_protocol, test_column, test_column_with_number, test_invalid_column, test_variant, test_joiner

### `ebl/tests/transliteration/test_translation_line.py`

- Lines: 36
- Imports: ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.translation_line.Extent, ebl.transliteration.domain.translation_line.TranslationLine, pytest
- Functions: test_parallel_fragment

### `ebl/tests/transliteration/test_transliteration_query.py`

- Lines: 61
- Imports: ebl.transliteration.application.signs_visitor.SignsVisitor, ebl.transliteration.domain.transliteration_query.TransliterationQuery, pytest, re
- Constants: GET_IS_SEQUENCE_EMPTY_DATA, REGEXP_DATA
- Functions: test_regexp, test_is_sequence_empty

### `ebl/tests/transliteration/test_word.py`

- Lines: 308
- Imports: ebl.dictionary.domain.word.WordId, ebl.fragmentarium.application.named_entity_schema.NamedEntitySchema, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.tests.asserts.assert_token_serialization, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.application.token_schemas.OneOfWordSchema, ebl.transliteration.domain.atf, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.language.DEFAULT_LANGUAGE, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.sign_tokens.Logogram, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.UnknownNumberOfSigns, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.tokens.Variant
- Functions: test_defaults, test_word, test_clean_value, test_lemmatizable, test_alignable, test_has_variant, test_set_language, test_set_unique_lemma, test_set_unique_lemma_empty, test_set_unique_lemma_invalid, test_set_alignment, test_merge

### `ebl/tests/users/__init__.py`

- Lines: 0

### `ebl/tests/users/test_auth0_backend.py`

- Lines: 147
- Imports: Cryptodome.PublicKey.RSA, datetime, ebl.users.infrastructure.auth0.Auth0Backend, falcon, falcon.testing, falcon.testing.client._ResultBase, falcon_auth.FalconAuthMiddleware, jwt, typing.Any, typing.Dict, typing.Optional, typing.Tuple
- Classes: OkResource
- Methods in OkResource: on_get
- Functions: create_key_pair, create_token, create_client, simulate_get, test_auth_backend_valid_token, test_auth_backend_missing_authorization, test_auth_backend_malformed_token, test_auth_backend_missing_audience, test_auth_backend_invalid_issuer, test_auth_backend_expired_token

### `ebl/tests/users/test_auth0_user.py`

- Lines: 192
- Imports: ebl.common.domain.scopes.Scope, ebl.users.infrastructure.auth0.Auth0User, pytest
- Constants: PROFILE
- Classes: ProfileFactory
- Methods in ProfileFactory: __init__, create
- Functions: create_default_profile, test_has_scope, test_profile, mock_fetch_user_info, test_memoize_profile, test_ebl_name, test_can_read_folio, test_can_read_fragment, test_get_scopes, test_permissions_only_has_scope, test_get_scopes_merges_and_deduplicates_scope_and_permissions, test_get_scopes_filters_permissions_by_prefix_and_suffix, test_get_scopes_ignores_unknown_and_invalid_permissions_values, test_get_scopes_without_scope_claim_uses_permissions_only

### `ebl/tests/users/test_guest_user.py`

- Lines: 27
- Imports: ebl.common.domain.scopes.Scope, ebl.users.domain.user.Guest
- Constants: USER
- Functions: test_has_scope, test_profile, test_ebl_name, test_can_read_folio, test_can_read_fragment

### `ebl/tests/users/test_require_scope.py`

- Lines: 74
- Imports: ebl.users.infrastructure.auth0.Auth0User, ebl.users.web.require_scope.require_scope, falcon, falcon.testing, falcon_auth.FalconAuthMiddleware, falcon_auth.NoneAuthBackend
- Constants: SCOPE
- Classes: TestResource
- Methods in TestResource: on_get
- Functions: do_get, do_get_with_access_token, test_require_scope_present, test_require_scope_not_present, test_require_scope_present_in_permissions_only_token, test_require_scope_forbids_when_permissions_claim_is_not_array

