# Package Reference: ebl/corpus

- Files: 75
- Total lines: 6324

## File-Level API Summary

### `ebl/corpus/__init__.py`

- Lines: 0

### `ebl/corpus/application/__init__.py`

- Lines: 0

### `ebl/corpus/application/alignment_updater.py`

- Lines: 116
- Imports: attr, ebl.corpus.application.chapter_updater.ChapterUpdater, ebl.corpus.domain.alignment.Alignment, ebl.corpus.domain.alignment.ManuscriptLineAlignment, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterItem, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.transliteration.domain.alignment.AlignmentError, functools.singledispatchmethod, typing.List
- Classes: AlignmentUpdater
- Methods in AlignmentUpdater: __init__, line_index, variant_index, manuscript_line_index, current_alignment, visit, _visit_line, _visit_line_variant, _visit_manuscript_line, _validate_chapter, _update_chapter, _after_chapter_update

### `ebl/corpus/application/chapter_updater.py`

- Lines: 55
- Imports: abc.ABC, abc.abstractmethod, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterItem, ebl.corpus.domain.chapter.ChapterVisitor, ebl.errors.DataError, ebl.errors.Defect, functools.singledispatchmethod, typing.Optional
- Classes: ChapterUpdater
- Methods in ChapterUpdater: __init__, update, _update_chapter, visit, _visit_chapter, _visit_manuscripts, _visit_lines, _after_chapter_update, _try_update_chapter, _validate_chapter

### `ebl/corpus/application/corpus.py`

- Lines: 231
- Imports: attr, ebl.common.query.query_result.CorpusQueryResult, ebl.corpus.application.alignment_updater.AlignmentUpdater, ebl.corpus.application.chapter_updater.ChapterUpdater, ebl.corpus.application.lemmatization.ChapterLemmatization, ebl.corpus.application.lemmatization_updater.LemmatizationUpdater, ebl.corpus.application.lines_updater.LinesUpdater, ebl.corpus.application.manuscript_reference_injector.ManuscriptReferenceInjector, ebl.corpus.application.manuscripts_updater.ManuscriptUpdater, ebl.corpus.application.schemas.ChapterSchema, ebl.corpus.application.text_repository.CorpusFragmentsMapping, ebl.corpus.application.text_repository.TextRepository, ebl.corpus.application.text_validator.TextValidator, ebl.corpus.domain.alignment.Alignment, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.chapter_display.ChapterDisplay, ebl.corpus.domain.chapter_info.ChapterInfo, ebl.corpus.domain.chapter_info.ChapterInfosPagination, ebl.corpus.domain.dictionary_line.DictionaryLine
- Constants: COLLECTION
- Classes: Corpus
- Methods in Corpus: __init__, find, find_chapter, find_chapter_for_display, find_line, find_line_with_manuscript_joins, find_manuscripts, find_manuscripts_with_joins, search_corpus_by_fragment, _inject_references_to_manuscripts, search_transliteration, search_lemma, query, list, list_all_texts, list_all_chapters, update_alignment, get_sign_data, get_all_sign_data, update_manuscript_lemmatization, update_manuscripts, import_lines, update_lines, _update_chapter, update_chapter

### `ebl/corpus/application/display_schemas.py`

- Lines: 91
- Imports: ebl.corpus.application.id_schemas.ChapterIdSchema, ebl.corpus.application.record_schemas.RecordSchema, ebl.corpus.application.schemas.LineVariantSchema, ebl.corpus.application.schemas.ManuscriptSchema, ebl.corpus.domain.chapter_display.ChapterDisplay, ebl.corpus.domain.chapter_display.LineDisplay, ebl.corpus.domain.record.Record, ebl.transliteration.application.line_number_schemas.OldLineNumberSchema, ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema, ebl.transliteration.application.line_schemas.TranslationLineSchema, ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema, marshmallow.Schema, marshmallow.fields, marshmallow.post_dump, marshmallow.post_load
- Classes: LineVariantDisplaySchema, LineDisplaySchema, ChapterDisplaySchema
- Methods in LineDisplaySchema: make_line, add_variant_indexes
- Methods in ChapterDisplaySchema: make_chapter, add_line_indexes

### `ebl/corpus/application/id_schemas.py`

- Lines: 26
- Imports: ebl.corpus.domain.chapter.ChapterId, ebl.schemas.StageField, ebl.schemas.ValueEnumField, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.text_id.TextId, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, marshmallow.validate
- Classes: TextIdSchema, ChapterIdSchema
- Methods in TextIdSchema: make_id
- Methods in ChapterIdSchema: make_id

### `ebl/corpus/application/lemmatization.py`

- Lines: 14
- Imports: attr, ebl.lemmatization.domain.lemmatization.LemmatizationToken, typing.Sequence
- Classes: LineVariantLemmatization

### `ebl/corpus/application/lemmatization_schema.py`

- Lines: 20
- Imports: ebl.corpus.application.lemmatization.LineVariantLemmatization, ebl.transliteration.application.lemmatization_schema.LemmatizationTokenSchema, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: LineVariantLemmatizationSchema
- Methods in LineVariantLemmatizationSchema: make_lemmatization

### `ebl/corpus/application/lemmatization_updater.py`

- Lines: 110
- Imports: attr, ebl.corpus.application.chapter_updater.ChapterUpdater, ebl.corpus.application.lemmatization.ChapterLemmatization, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterItem, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.text_line.update_tokens, functools.singledispatchmethod, typing.List, typing.Sequence
- Classes: LemmatizationUpdater
- Methods in LemmatizationUpdater: __init__, line_index, variant_index, manuscript_line_index, current_lemmatization, visit, _visit_line, _visit_line_variant, _visit_manuscript_line, _validate_chapter, _update_chapter, _after_chapter_update

### `ebl/corpus/application/lines_updater.py`

- Lines: 36
- Imports: attr, ebl.corpus.application.chapter_updater.ChapterUpdater, ebl.corpus.application.signs_updater.SignsUpdater, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.lines_update.LinesUpdate, ebl.transliteration.application.sign_repository.SignRepository, ebl.transliteration.domain.atf.ATF_PARSER_VERSION
- Classes: LinesUpdater
- Methods in LinesUpdater: __init__, _visit_lines, _update_chapter

### `ebl/corpus/application/manuscript_reference_injector.py`

- Lines: 62
- Imports: attr, ebl.bibliography.application.bibliography.Bibliography, ebl.bibliography.domain.reference.Reference, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterItem, ebl.corpus.domain.chapter.ChapterVisitor, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript.OldSiglum, ebl.errors.Defect, functools.singledispatchmethod, typing.Iterable, typing.List, typing.Optional, typing.Sequence
- Classes: ManuscriptReferenceInjector
- Methods in ManuscriptReferenceInjector: __init__, chapter, visit, _visit_chapter, _visit_manuscript, inject_manuscript, _inject_references, _inject_reference, _inject_old_sigla

### `ebl/corpus/application/manuscripts_updater.py`

- Lines: 32
- Imports: attr, ebl.corpus.application.chapter_updater.ChapterUpdater, ebl.corpus.application.signs_updater.SignsUpdater, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.manuscript.Manuscript, ebl.transliteration.application.sign_repository.SignRepository, ebl.transliteration.domain.museum_number.MuseumNumber, typing.Sequence
- Classes: ManuscriptUpdater
- Methods in ManuscriptUpdater: __init__, _update_chapter

### `ebl/corpus/application/record_schemas.py`

- Lines: 44
- Imports: ebl.corpus.domain.record.Author, ebl.corpus.domain.record.AuthorRole, ebl.corpus.domain.record.Record, ebl.corpus.domain.record.Translator, ebl.schemas.NameEnumField, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: AuthorSchema, TranslatorSchema, RecordSchema
- Methods in AuthorSchema: make_author
- Methods in TranslatorSchema: make_translator
- Methods in RecordSchema: make_record

### `ebl/corpus/application/schemas.py`

- Lines: 406
- Imports: ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.common.domain.manuscript_type.ManuscriptType, ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.common.domain.provenance.Provenance, ebl.corpus.application.id_schemas.ChapterIdSchema, ebl.corpus.application.id_schemas.TextIdSchema, ebl.corpus.application.record_schemas.RecordSchema, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.Classification, ebl.corpus.domain.chapter_query.ChapterQueryColophonLinesSchema, ebl.corpus.domain.dictionary_line.DictionaryLine, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript.OldSiglum, ebl.corpus.domain.manuscript.is_invalid_non_standard_text, ebl.corpus.domain.manuscript.is_invalid_standard_text, ebl.corpus.domain.manuscript_attestation.ManuscriptAttestation, ebl.corpus.domain.manuscript_line.ManuscriptLine
- Classes: OldSiglumSchema, ManuscriptSchema, ManuscriptLineSchema, LineVariantSchema, LineSchema, DictionaryLineSchema, DictionaryLinePaginationSchema, ChapterSchema, UncertainFragmentSchema, ChapterListingSchema, TextSchema, ManuscriptAttestationSchema, UncertainFragmentAttestationSchema
- Methods in OldSiglumSchema: make_old_siglum
- Methods in ManuscriptSchema: validate_provenance, make_manuscript
- Methods in ManuscriptLineSchema: make_manuscript_line
- Methods in LineVariantSchema: make_line_variant
- Methods in LineSchema: make_line
- Methods in DictionaryLineSchema: make_dictionary_line
- Methods in ChapterSchema: make_chapter
- Methods in UncertainFragmentSchema: make_uncertain_fragment
- Methods in ChapterListingSchema: make_chapter_listing
- Functions: manuscript_id

### `ebl/corpus/application/signs_updater.py`

- Lines: 32
- Imports: attr, ebl.corpus.domain.chapter.Chapter, ebl.signs.infrastructure.memoizing_sign_repository.MemoizingSignRepository, ebl.transliteration.application.sign_repository.SignRepository, ebl.transliteration.application.signs_visitor.SignsVisitor, ebl.transliteration.domain.atf.WORD_SEPARATOR, ebl.transliteration.domain.text.TextLine, typing.Optional, typing.Sequence
- Classes: SignsUpdater
- Methods in SignsUpdater: __init__, update, _create_signs, _map_lines, _map_line

### `ebl/corpus/application/text_repository.py`

- Lines: 115
- Imports: abc.ABC, abc.abstractmethod, ebl.common.query.query_result.CorpusQueryResult, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.chapter_display.ChapterDisplay, ebl.corpus.domain.dictionary_line.DictionaryLine, ebl.corpus.domain.line.Line, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript_attestation.ManuscriptAttestation, ebl.corpus.domain.text.Text, ebl.corpus.domain.text.TextId, ebl.corpus.domain.uncertain_fragment_attestation.UncertainFragmentAttestation, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.transliteration_query.TransliterationQuery, typing.List, typing.Optional, typing.Sequence, typing.Tuple
- Classes: CorpusFragmentsMapping, TextRepository
- Methods in TextRepository: create, create_chapter, find, find_chapter, find_chapter_for_display, find_line, list, list_all_texts, list_all_chapters, update, query_by_transliteration, query_by_lemma, query_manuscripts_by_chapter, query_corpus_by_manuscripts, query_corpus_by_uncertain_fragments, query_corpus_by_related_fragments, query_manuscripts_with_joins_by_chapter, query, get_sign_data, get_all_sign_data

### `ebl/corpus/application/text_validator.py`

- Lines: 122
- Imports: ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterItem, ebl.corpus.domain.chapter.ChapterVisitor, ebl.corpus.domain.chapter.TextLineEntry, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Siglum, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.errors.DataError, ebl.errors.Defect, ebl.transliteration.domain.alignment.AlignmentError, ebl.transliteration.domain.greek_tokens.GreekWord, ebl.transliteration.domain.line_number.AbstractLineNumber, ebl.transliteration.domain.tokens.TokenVisitor, ebl.transliteration.domain.word_tokens.Word, functools.singledispatchmethod, pydash, typing.Optional
- Classes: AlignmentVisitor, TextValidator
- Methods in AlignmentVisitor: __init__, visit_word, visit_greek_word, validate
- Methods in TextValidator: __init__, line, chapter, visit, _visit_chapter, _visit_line, _visit_line_variant, _visit_manuscript_line
- Functions: data_error, create_error_message

### `ebl/corpus/domain/__init__.py`

- Lines: 0

### `ebl/corpus/domain/alignment.py`

- Lines: 38
- Imports: attr, ebl.transliteration.domain.alignment.AlignmentToken, typing.Sequence
- Classes: ManuscriptLineAlignment, Alignment
- Methods in Alignment: get_line, get_variant, get_manuscript_line, get_number_of_lines, get_number_of_variants, get_number_of_manuscripts

### `ebl/corpus/domain/chapter.py`

- Lines: 251
- Imports: attr, ebl.common.domain.stage.Stage, ebl.corpus.domain.chapter_query.ChapterQueryColophonLines, ebl.corpus.domain.chapter_validators, ebl.corpus.domain.extant_line.ExtantLine, ebl.corpus.domain.line.Line, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript.Siglum, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.domain.manuscript_line.ManuscriptLineLabel, ebl.corpus.domain.record.Record, ebl.errors.NotFoundError, ebl.merger.Merger, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.markup.to_title, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text_id.TextId, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.translation_line.DEFAULT_LANGUAGE, ebl.transliteration.domain.translation_line.TranslationLine
- Constants: T
- Classes: ChapterVisitor, Classification, TextLineEntry, ChapterId, Chapter
- Methods in ChapterVisitor: visit
- Methods in ChapterId: to_tuple, __str__
- Methods in Chapter: id_, text_lines, invalid_lines, extant_lines, manuscript_line_labels, get_manuscript, get_matching_lines, _get_matching_line_indexes, get_matching_colophon_lines, _get_matching_colophon_lines, merge, _get_extant_lines, _get_manuscript_text_lines, _match
- Functions: make_title

### `ebl/corpus/domain/chapter_display.py`

- Lines: 142
- Imports: attr, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.chapter_validators, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.record.Record, ebl.corpus.domain.text.Text, ebl.errors.NotFoundError, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.line_number.AbstractLineNumber, ebl.transliteration.domain.line_number.OldLineNumber, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.markup.to_title, ebl.transliteration.domain.translation_line.DEFAULT_LANGUAGE, ebl.transliteration.domain.translation_line.TranslationLine, typing.Callable, typing.Sequence
- Classes: LineDisplay, ChapterDisplay
- Methods in LineDisplay: title, get_atf, of_line
- Methods in ChapterDisplay: title, atf, get_manuscript, of_chapter
- Functions: get_default_translation

### `ebl/corpus/domain/chapter_info.py`

- Lines: 37
- Imports: attr, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.line.Line, ebl.corpus.domain.manuscript.Siglum, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.transliteration_query.TransliterationQuery, typing.Mapping, typing.Sequence
- Classes: ChapterInfo, ChapterInfosPagination
- Methods in ChapterInfo: of

### `ebl/corpus/domain/chapter_query.py`

- Lines: 58
- Imports: attr, ebl.corpus.domain.manuscript.Manuscript, ebl.transliteration.domain.text_line.L, ebl.transliteration.domain.text_line.TextLine, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, typing.Mapping, typing.Sequence, typing.Union
- Classes: ChapterQueryColophonLines, ChapterQueryColophonLinesSchema
- Methods in ChapterQueryColophonLines: get_matching_lines, select_matching_colophon_lines_filtered, filter_text_lines
- Methods in ChapterQueryColophonLinesSchema: make_colophon_lines

### `ebl/corpus/domain/chapter_transformer.py`

- Lines: 106
- Imports: ebl.common.domain.manuscript_type.ManuscriptType, ebl.common.domain.period.Period, ebl.common.domain.provenance.Provenance, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript.Siglum, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.transliteration.domain.label_transformer.LabelTransformer, ebl.transliteration.domain.line_transformer.LineTransformer, lark.visitors.v_args, typing.Iterable
- Classes: ChapterTransformer
- Methods in ChapterTransformer: __init__, manuscript_label, get_siglum, detailed_siglum, ebl_atf_manuscript_line__detailed_siglum, standard_text_siglum, ebl_atf_manuscript_line__standard_text_siglum, siglum, ebl_atf_manuscript_line__siglum, manuscript_line, reconstruction, line_variant, chapter_translation, chapter_line, chapter

### `ebl/corpus/domain/chapter_validators.py`

- Lines: 128
- Imports: ebl.corpus.domain.chapter, ebl.corpus.domain.line.Line, ebl.corpus.domain.line.ManuscriptLineLabel, ebl.corpus.domain.manuscript.Manuscript, ebl.transliteration.domain.line_number.AbstractLineNumber, itertools, pydash, typing.Mapping, typing.Sequence
- Functions: validate_manuscript_ids, validate_manuscript_sigla, validate_line_numbers, validate_translations, _validate_extents, _validate_extent_ranges, validate_orphan_manuscript_ids, validate_manuscript_line_labels, _make_labels_readable

### `ebl/corpus/domain/create_alignment_map.py`

- Lines: 61
- Imports: difflib, ebl.transliteration.domain.text_line.AlignmentMap, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.word_tokens.AbstractWord, pydash, typing.Callable, typing.Sequence
- Classes: Mapper
- Methods in Mapper: __init__, map_, _get_method, _keep, _remove, _add
- Functions: create_alignment_map

### `ebl/corpus/domain/dictionary_display.py`

- Lines: 32
- Imports: attr, ebl.common.domain.stage.Stage, ebl.corpus.domain.dictionary_line.DictionaryLine, ebl.corpus.domain.line.Line, ebl.corpus.web.display_schemas.LineDetailsDisplay, ebl.transliteration.domain.text_id.TextId
- Classes: DictionaryLineDisplay
- Methods in DictionaryLineDisplay: from_dictionary_line

### `ebl/corpus/domain/dictionary_line.py`

- Lines: 29
- Imports: attr, ebl.common.domain.stage.Stage, ebl.corpus.domain.chapter_validators, ebl.corpus.domain.line.Line, ebl.corpus.domain.manuscript.Manuscript, ebl.transliteration.domain.text_id.TextId, typing.Sequence
- Classes: DictionaryLine, DictionaryLinePagination

### `ebl/corpus/domain/enclosure_validator.py`

- Lines: 15
- Imports: ebl.transliteration.domain.enclosure_error.EnclosureError, ebl.transliteration.domain.enclosure_visitor.EnclosureValidator, ebl.transliteration.domain.tokens.Token, typing.Iterable
- Functions: validate

### `ebl/corpus/domain/extant_line.py`

- Lines: 23
- Imports: attr, ebl.corpus.domain.line.Line, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.line_number.AbstractLineNumber, typing.Sequence
- Classes: ExtantLine
- Methods in ExtantLine: of

### `ebl/corpus/domain/line.py`

- Lines: 84
- Imports: attr, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.domain.manuscript_line.ManuscriptLineLabel, ebl.merger.Merger, ebl.transliteration.domain.line_number.AbstractLineNumber, ebl.transliteration.domain.line_number.OldLineNumber, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.translation_line.TranslationLine, pydash, typing.Optional, typing.Sequence
- Classes: Line
- Methods in Line: _validate_translations, manuscript_ids, manuscript_line_labels, get_manuscript_line, get_manuscript_text_lines, get_manuscript_text_line, merge, set_variant_alignment_flags

### `ebl/corpus/domain/line_variant.py`

- Lines: 163
- Imports: attr, ebl.corpus.domain.create_alignment_map.create_alignment_map, ebl.corpus.domain.enclosure_validator.validate, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.domain.manuscript_line.ManuscriptLineLabel, ebl.merger.Merger, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.enclosure_visitor.set_enclosure_type, ebl.transliteration.domain.language_visitor.set_language, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.parallel_line.ParallelLine, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.text_line.merge_tokens, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.word_tokens.AbstractWord, functools.singledispatch, pydash, typing.Callable
- Classes: LineVariant
- Methods in LineVariant: validate_reconstruction, reconstruction_atf, note_atf, parallels_atf, get_manuscript_lines_atf, manuscript_ids, manuscript_line_labels, _variant_alignments, _omitted_words, get_manuscript_line, get_manuscript_text_lines, get_manuscript_text_line, merge, set_alignment_flags, set_has_variant_alignment, set_has_omitted_alignment

### `ebl/corpus/domain/lines_update.py`

- Lines: 11
- Imports: attr, ebl.corpus.domain.line.Line, typing.Mapping, typing.Sequence, typing.Set
- Classes: LinesUpdate

### `ebl/corpus/domain/manuscript.py`

- Lines: 93
- Imports: attr, ebl.bibliography.domain.reference.Reference, ebl.common.domain.manuscript_type.ManuscriptType, ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.common.domain.provenance.Provenance, ebl.fragmentarium.domain.joins.Joins, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_line.TextLine, typing.Optional, typing.Sequence
- Classes: Siglum, OldSiglum, Manuscript
- Methods in Siglum: __str__
- Methods in Manuscript: validate_accession, validate_provenance, text_lines, siglum
- Functions: is_invalid_standard_text, is_invalid_non_standard_text

### `ebl/corpus/domain/manuscript_attestation.py`

- Lines: 15
- Imports: attr, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.text.Text
- Classes: ManuscriptAttestation
- Methods in ManuscriptAttestation: manuscript_siglum

### `ebl/corpus/domain/manuscript_line.py`

- Lines: 99
- Imports: attr, ebl.corpus.domain.manuscript.Manuscript, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.dollar_line.DollarLine, ebl.transliteration.domain.label_validator.validate_labels, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.line_number.AbstractLineNumber, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.text_line.AlignmentMap, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Token, typing.Callable, typing.Optional, typing.Sequence, typing.Tuple, typing.Union, typing.cast
- Classes: ManuscriptLine
- Methods in ManuscriptLine: label, line_prefix_atf, is_beginning_of_side, is_end_of_side, is_empty, get_atf, merge, update_alignments, get_line_content, has_lemma

### `ebl/corpus/domain/parser.py`

- Lines: 41
- Imports: ebl.corpus.domain.chapter_transformer.ChapterTransformer, ebl.corpus.domain.line.Line, ebl.corpus.domain.manuscript.Manuscript, ebl.errors.DataError, ebl.transliteration.domain.atf_parsers.lark_parser.CHAPTER_PARSER, ebl.transliteration.domain.atf_parsers.lark_parser.MANUSCRIPT_PARSER, ebl.transliteration.domain.atf_parsers.lark_parser.PARATEXT_PARSER, ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS, ebl.transliteration.domain.dollar_line.DollarLine, ebl.transliteration.domain.note_line.NoteLine, typing.Iterable, typing.Optional, typing.Sequence, typing.Union
- Functions: parse_chapter, parse_manuscript, parse_paratext

### `ebl/corpus/domain/record.py`

- Lines: 32
- Imports: attr, enum.Enum, enum.auto, typing.Sequence
- Classes: AuthorRole, Author, Translator, Record

### `ebl/corpus/domain/text.py`

- Lines: 52
- Imports: attr, ebl.bibliography.domain.reference.Reference, ebl.common.domain.stage.Stage, ebl.corpus.domain.chapter.make_title, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text_id.TextId, ebl.transliteration.domain.translation_line.TranslationLine, typing.Sequence
- Classes: UncertainFragment, ChapterListing, Text
- Methods in ChapterListing: title
- Methods in Text: id, has_multiple_stages

### `ebl/corpus/domain/uncertain_fragment_attestation.py`

- Lines: 9
- Imports: attr, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.text.Text
- Classes: UncertainFragmentAttestation

### `ebl/corpus/infrastructure/__init__.py`

- Lines: 0

### `ebl/corpus/infrastructure/chapter_query_filters.py`

- Lines: 122
- Imports: ebl.transliteration.domain.transliteration_query.TransliterationQuery, pymongo.collection.Collection, typing.Dict, typing.List, typing.Mapping, typing.Tuple
- Functions: filter_query_by_transliteration, find_manuscript_matches, get_line_indexes, get_all_line_manuscript_indexes, find_chapter_query_lines, find_lines_in_range, collect_matching_lines, remove_duplicates

### `ebl/corpus/infrastructure/corpus_lemma_matcher.py`

- Lines: 262
- Imports: ebl.common.query.query_result.LemmaQueryType, ebl.common.query.util.drop_duplicates, ebl.common.query.util.filter_array, ebl.common.query.util.flatten_field, ebl.common.query.util.ngrams, typing.Dict, typing.List, typing.Optional
- Classes: CorpusLemmaMatcher
- Methods in CorpusLemmaMatcher: __init__, build_pipeline, _rejoin_lines, _join_vocabulary, _unwind_lines, _unwind_variants, _unwind_manuscripts, _create_match_pipeline, _lemma_paths, _flat_lemma_paths, _lemma_path_combinations, _and, _or, _line, _phrase

### `ebl/corpus/infrastructure/corpus_search_aggregations.py`

- Lines: 157
- Imports: ebl.common.query.query_result.LemmaQueryType, ebl.common.query.util.flatten_field, ebl.corpus.infrastructure.corpus_lemma_matcher.CorpusLemmaMatcher, ebl.corpus.infrastructure.corpus_sign_matcher.CorpusSignMatcher, typing.Dict, typing.List
- Classes: CorpusPatternMatcher
- Methods in CorpusPatternMatcher: __init__, _limit_result, _wrap_query_items_with_total, _drop_merged_duplicates, _merge_pipelines, build_pipeline

### `ebl/corpus/infrastructure/corpus_sign_matcher.py`

- Lines: 269
- Imports: ebl.common.query.util.flatten_field, ebl.common.query.util.ngrams, typing.Dict, typing.List
- Classes: CorpusSignMatcher
- Methods in CorpusSignMatcher: __init__, _merge_manuscripts_and_signs, _create_sign_line_ngrams, _match_single_line, _match_multiline, _expand_line_ranges, _merge_manuscripts_to_include, _flatten_variants, _filter_textlines, _filter_line_variants_to_include, _deduplicate_matches, _regroup_chapters, build_pipeline

### `ebl/corpus/infrastructure/manuscript_lemma_filter.py`

- Lines: 43
- Functions: _lemma_filter, filter_manuscripts_by_lemma

### `ebl/corpus/infrastructure/manuscript_sign_matcher.py`

- Lines: 108
- Imports: ebl.common.query.util.ngrams, typing.Dict, typing.List
- Classes: SignMatcher
- Methods in SignMatcher: __init__, _merge_manuscripts_and_signs, _create_ngrams, _collect_indexes, build_pipeline

### `ebl/corpus/infrastructure/mongo_text_repository.py`

- Lines: 19
- Imports: ebl.corpus.infrastructure.mongo_text_repository_find.MongoTextRepositoryFind, ebl.corpus.infrastructure.mongo_text_repository_get.MongoTextRepositoryGet, ebl.corpus.infrastructure.mongo_text_repository_list.MongoTextRepositoryList, ebl.corpus.infrastructure.mongo_text_repository_modify.MongoTextRepositoryModify, ebl.corpus.infrastructure.mongo_text_repository_query.MongoTextRepositoryQuery
- Classes: MongoTextRepository

### `ebl/corpus/infrastructure/mongo_text_repository_base.py`

- Lines: 28
- Imports: ebl.corpus.application.text_repository.TextRepository, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.text.TextId, ebl.errors.NotFoundError, ebl.mongo_collection.MongoCollection, ebl.transliteration.infrastructure.collections.CHAPTERS_COLLECTION, ebl.transliteration.infrastructure.collections.TEXTS_COLLECTION, pymongo.database.Database
- Classes: MongoTextRepositoryBase
- Methods in MongoTextRepositoryBase: __init__
- Functions: text_not_found, chapter_not_found, line_not_found

### `ebl/corpus/infrastructure/mongo_text_repository_find.py`

- Lines: 88
- Imports: ebl.bibliography.infrastructure.bibliography.join_reference_documents, ebl.corpus.application.display_schemas.ChapterDisplaySchema, ebl.corpus.application.schemas.ChapterSchema, ebl.corpus.application.schemas.LineSchema, ebl.corpus.application.schemas.TextSchema, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.chapter_display.ChapterDisplay, ebl.corpus.domain.line.Line, ebl.corpus.domain.text.Text, ebl.corpus.domain.text.TextId, ebl.corpus.infrastructure.mongo_text_repository_base.MongoTextRepositoryBase, ebl.corpus.infrastructure.mongo_text_repository_base.chapter_not_found, ebl.corpus.infrastructure.mongo_text_repository_base.line_not_found, ebl.corpus.infrastructure.mongo_text_repository_base.text_not_found, ebl.corpus.infrastructure.queries.aggregate_chapter_display, ebl.corpus.infrastructure.queries.chapter_id_query, ebl.corpus.infrastructure.queries.join_chapters, ebl.errors.NotFoundError
- Classes: MongoTextRepositoryFind
- Methods in MongoTextRepositoryFind: find, find_chapter, find_chapter_for_display, find_line

### `ebl/corpus/infrastructure/mongo_text_repository_get.py`

- Lines: 36
- Imports: ebl.corpus.domain.chapter.ChapterId, ebl.corpus.infrastructure.mongo_text_repository_base.MongoTextRepositoryBase, ebl.corpus.infrastructure.queries.chapter_id_query, typing.Sequence
- Classes: MongoTextRepositoryGet
- Methods in MongoTextRepositoryGet: get_sign_data, get_all_sign_data

### `ebl/corpus/infrastructure/mongo_text_repository_list.py`

- Lines: 68
- Imports: ebl.bibliography.infrastructure.bibliography.join_reference_documents, ebl.corpus.application.schemas.TextSchema, ebl.corpus.domain.text.Text, ebl.corpus.infrastructure.mongo_text_repository_base.MongoTextRepositoryBase, ebl.corpus.infrastructure.queries.join_chapters, pymongo, typing.Dict, typing.List, typing.Sequence, typing.Union
- Classes: MongoTextRepositoryList
- Methods in MongoTextRepositoryList: list, list_all_texts, list_all_chapters

### `ebl/corpus/infrastructure/mongo_text_repository_modify.py`

- Lines: 72
- Imports: ebl.corpus.application.schemas.ChapterSchema, ebl.corpus.application.schemas.TextSchema, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.text.Text, ebl.corpus.infrastructure.mongo_text_repository_base.MongoTextRepositoryBase, ebl.corpus.infrastructure.queries.chapter_id_query, pymongo
- Classes: MongoTextRepositoryModify
- Methods in MongoTextRepositoryModify: create_indexes, create, create_chapter, update

### `ebl/corpus/infrastructure/mongo_text_repository_query.py`

- Lines: 215
- Imports: ebl.common.query.query_result.CorpusQueryResult, ebl.common.query.query_schemas.CorpusQueryResultSchema, ebl.corpus.application.schemas.ChapterSchema, ebl.corpus.application.schemas.DictionaryLineSchema, ebl.corpus.application.schemas.ManuscriptSchema, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.dictionary_line.DictionaryLine, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.infrastructure.chapter_query_filters.filter_query_by_transliteration, ebl.corpus.infrastructure.corpus_search_aggregations.CorpusPatternMatcher, ebl.corpus.infrastructure.manuscript_lemma_filter.filter_manuscripts_by_lemma, ebl.corpus.infrastructure.mongo_text_repository_base.chapter_not_found, ebl.corpus.infrastructure.mongo_text_repository_query_fragment.MongoTextRepositoryQueryFragment, ebl.corpus.infrastructure.queries.chapter_id_query, ebl.corpus.infrastructure.queries.join_text_title, ebl.errors.NotFoundError, ebl.fragmentarium.infrastructure.queries.is_in_fragmentarium, ebl.fragmentarium.infrastructure.queries.join_joins, ebl.transliteration.domain.genre.Genre
- Classes: MongoTextRepositoryQuery
- Methods in MongoTextRepositoryQuery: _transliteration_mongo_query, query_by_transliteration, _limit_by_genre, query_by_lemma, query, query_manuscripts_by_chapter, query_manuscripts_with_joins_by_chapter

### `ebl/corpus/infrastructure/mongo_text_repository_query_fragment.py`

- Lines: 131
- Imports: ebl.corpus.application.schemas.ManuscriptAttestationSchema, ebl.corpus.application.schemas.UncertainFragmentAttestationSchema, ebl.corpus.application.text_repository.CorpusFragmentsMapping, ebl.corpus.domain.manuscript_attestation.ManuscriptAttestation, ebl.corpus.domain.uncertain_fragment_attestation.UncertainFragmentAttestation, ebl.corpus.infrastructure.mongo_text_repository_base.MongoTextRepositoryBase, ebl.corpus.infrastructure.queries.join_text, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.domain.museum_number.MuseumNumber, typing.List, typing.Sequence, typing.TypedDict, typing.cast
- Classes: MuseumNumberMapping, MongoTextRepositoryQueryFragment
- Methods in MongoTextRepositoryQueryFragment: query_corpus_by_manuscripts, query_corpus_by_uncertain_fragments, query_corpus_by_related_fragments
- Functions: get_museum_number_mappings

### `ebl/corpus/infrastructure/queries.py`

- Lines: 215
- Imports: ebl.corpus.domain.chapter.ChapterId, ebl.transliteration.infrastructure.collections.CHAPTERS_COLLECTION, ebl.transliteration.infrastructure.collections.TEXTS_COLLECTION, typing.List
- Functions: chapter_id_query, join_uncertain_fragments, join_chapters, aggregate_chapter_display, join_text, join_text_title

### `ebl/corpus/update_texts.py`

- Lines: 110
- Imports: argparse, attr, ebl.app.create_context, ebl.corpus.application.corpus.Corpus, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.lines_update.LinesUpdate, ebl.corpus.domain.text.Text, ebl.corpus.domain.text.TextId, ebl.users.domain.user.ApiUser, functools.reduce, multiprocessing.Pool, tqdm.tqdm, typing.List
- Classes: State
- Methods in State: add_updated, add_error, to_tsv, merge
- Functions: update_text, update, get_text_ids

### `ebl/corpus/web/__init__.py`

- Lines: 0

### `ebl/corpus/web/alignment_schema.py`

- Lines: 81
- Imports: ebl.corpus.domain.alignment.Alignment, ebl.corpus.domain.alignment.ManuscriptLineAlignment, ebl.transliteration.domain.alignment.AlignmentToken, ebl.transliteration.domain.atf_parsers.lark_parser.parse_greek_word, ebl.transliteration.domain.atf_parsers.lark_parser.parse_normalized_akkadian_word, ebl.transliteration.domain.atf_parsers.lark_parser.parse_word, ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.word_tokens.AbstractWord, marshmallow.Schema, marshmallow.ValidationError, marshmallow.fields, marshmallow.post_load, typing.Optional
- Classes: AlignmentTokenSchema, ManuscriptAlignmentSchema, AlignmentSchema
- Methods in AlignmentTokenSchema: make_alignment_token, _create_variant, _create_word
- Methods in ManuscriptAlignmentSchema: make_manuscript_alignment
- Methods in AlignmentSchema: make_alignment

### `ebl/corpus/web/alignments.py`

- Lines: 33
- Imports: ebl.cache.application.custom_cache.ChapterCache, ebl.corpus.web.alignment_schema.AlignmentSchema, ebl.corpus.web.chapter_schemas.ApiChapterSchema, ebl.corpus.web.text_utils.create_chapter_id, ebl.marshmallowschema.validate, ebl.users.web.require_scope.require_scope, falcon
- Classes: AlignmentResource
- Methods in AlignmentResource: __init__, on_post

### `ebl/corpus/web/bootstrap.py`

- Lines: 90
- Imports: ebl.context.Context, ebl.corpus.application.corpus.Corpus, ebl.corpus.web.alignments.AlignmentResource, ebl.corpus.web.chapters.ChapterSignsResource, ebl.corpus.web.chapters.ChaptersAllResource, ebl.corpus.web.chapters.ChaptersByLemmaResource, ebl.corpus.web.chapters.ChaptersDisplayResource, ebl.corpus.web.chapters.ChaptersResource, ebl.corpus.web.chapters.CorpusQueryResource, ebl.corpus.web.chapters.make_all_chapter_signs_resource, ebl.corpus.web.colophons.CorpusColophonsResource, ebl.corpus.web.extant_lines.ExtantLinesResource, ebl.corpus.web.lemmatizations.LemmatizationResource, ebl.corpus.web.lines.LineResource, ebl.corpus.web.lines.LinesImportResource, ebl.corpus.web.lines.LinesResource, ebl.corpus.web.manuscripts.ManuscriptsResource, ebl.corpus.web.texts.TextResource, ebl.corpus.web.texts.TextSearchResource, ebl.corpus.web.texts.TextsAllResource
- Functions: create_corpus_routes

### `ebl/corpus/web/chapter_info_schema.py`

- Lines: 39
- Imports: ebl.corpus.application.id_schemas.ChapterIdSchema, ebl.corpus.web.chapter_schemas.ApiLineSchema, ebl.transliteration.application.line_schemas.TextLineSchema, ebl.transliteration.application.line_schemas.TranslationLineSchema, marshmallow.Schema, marshmallow.fields
- Classes: ChapterInfoLineSchema, ChapterInfoSchema, ChapterInfosPaginationSchema

### `ebl/corpus/web/chapter_schemas.py`

- Lines: 280
- Imports: ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.corpus.application.schemas.ChapterSchema, ebl.corpus.application.schemas.LineVariantSchema, ebl.corpus.application.schemas.ManuscriptSchema, ebl.corpus.application.schemas.OldSiglumSchema, ebl.corpus.application.schemas.labels, ebl.corpus.application.schemas.manuscript_id, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.domain.parser.parse_paratext, ebl.fragmentarium.application.joins_schema.JoinsSchema, ebl.fragmentarium.domain.joins.Joins, ebl.markup.domain.converters.markup_from_string, ebl.transliteration.application.line_number_schemas.OldLineNumberSchema, ebl.transliteration.application.one_of_line_schema.OneOfLineSchema, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.atf_parsers.lark_parser.TransliterationError, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.atf_parsers.lark_parser.parse_line_number
- Classes: MuseumNumberString, ApiOldSiglumSchema, ApiManuscriptSchema, ApiManuscriptLineSchema, LineNumberString, ApiLineVariantSchema, ApiLineSchema, ApiChapterSchema
- Methods in MuseumNumberString: _serialize, _deserialize
- Methods in ApiManuscriptLineSchema: make_manuscript_line
- Methods in LineNumberString: _serialize, _deserialize
- Methods in ApiLineVariantSchema: make_line_variant
- Methods in ApiLineSchema: make_line
- Functions: _deserialize_transliteration, _serialize_number, _serialize_atf, _split_reconstruction, _parse_reconstruction, deserialize_translation

### `ebl/corpus/web/chapters.py`

- Lines: 241
- Imports: collections.defaultdict, ebl.cache.application.cache.DEFAULT_TIMEOUT, ebl.cache.application.custom_cache.ChapterCache, ebl.common.domain.stage.Stage, ebl.common.query.parameter_parser.parse_lemmas, ebl.common.query.parameter_parser.parse_lines, ebl.common.query.parameter_parser.parse_transliteration, ebl.common.query.query_schemas.CorpusQueryResultSchema, ebl.corpus.application.corpus.Corpus, ebl.corpus.application.display_schemas.ChapterDisplaySchema, ebl.corpus.application.schemas.ManuscriptAttestationSchema, ebl.corpus.application.schemas.UncertainFragmentAttestationSchema, ebl.corpus.domain.dictionary_display.DictionaryLineDisplay, ebl.corpus.web.chapter_schemas.ApiChapterSchema, ebl.corpus.web.display_schemas.DictionaryLineDisplaySchema, ebl.corpus.web.text_utils.create_chapter_id, ebl.errors.DataError, ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.transliteration.application.transliteration_query_factory.TransliterationQueryFactory, ebl.transliteration.domain.genre.Genre
- Classes: ChaptersResource, ChaptersDisplayResource, ChaptersByFragmentResource, ChaptersByLemmaResource, CorpusQueryResource, ChaptersAllResource, ChapterSignsResource
- Methods in ChaptersResource: __init__, on_get
- Methods in ChaptersDisplayResource: __init__, _create_line_variant_map, _select_lines_and_variants, on_get
- Methods in ChaptersByFragmentResource: __init__, on_get
- Methods in ChaptersByLemmaResource: __init__, on_get
- Methods in CorpusQueryResource: __init__, on_get
- Methods in ChaptersAllResource: __init__, on_get
- Methods in ChapterSignsResource: __init__, on_get
- Functions: make_all_chapter_signs_resource

### `ebl/corpus/web/colophons.py`

- Lines: 34
- Imports: ebl.corpus.application.corpus.Corpus, ebl.corpus.web.text_utils.create_chapter_id, ebl.transliteration.application.text_schema.TextSchema, falcon, marshmallow.Schema, marshmallow.fields
- Classes: CorpusColophonSchema, CorpusColophonsResource
- Methods in CorpusColophonsResource: __init__, on_get

### `ebl/corpus/web/display_schemas.py`

- Lines: 140
- Imports: attr, ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.bibliography.domain.reference.Reference, ebl.corpus.application.schemas.DictionaryLineSchema, ebl.corpus.domain.line.Line, ebl.corpus.domain.line_variant.LineVariant, ebl.corpus.domain.manuscript.Manuscript, ebl.corpus.domain.manuscript.OldSiglum, ebl.corpus.domain.manuscript_line.ManuscriptLine, ebl.corpus.web.chapter_schemas.ApiManuscriptSchema, ebl.corpus.web.chapter_schemas.ApiOldSiglumSchema, ebl.fragmentarium.domain.joins.Join, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.application.one_of_line_schema.OneOfLineSchema, ebl.transliteration.domain.dollar_line.DollarLine, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.text_line.TextLine, marshmallow.Schema, marshmallow.fields
- Classes: ManuscriptLineDisplay, LineVariantDisplay, LineDetailsDisplay, JoinDisplaySchema, ManuscriptLineDisplaySchema, LineVariantDisplaySchema, LineDetailsDisplaySchema, DictionaryLineDisplaySchema
- Methods in ManuscriptLineDisplay: from_manuscript_line
- Methods in LineVariantDisplay: from_line_variant
- Methods in LineDetailsDisplay: from_line_manuscripts

### `ebl/corpus/web/extant_lines.py`

- Lines: 43
- Imports: ebl.corpus.application.corpus.Corpus, ebl.corpus.web.text_utils.create_chapter_id, ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema, falcon, marshmallow.Schema, marshmallow.fields
- Classes: ExtantLineSchema, Labels, ExtantLinesSchema, ExtantLinesResource
- Methods in Labels: _serialize
- Methods in ExtantLinesResource: __init__, on_get

### `ebl/corpus/web/lemmatizations.py`

- Lines: 43
- Imports: ebl.cache.application.custom_cache.ChapterCache, ebl.corpus.application.corpus.Corpus, ebl.corpus.application.lemmatization_schema.LineVariantLemmatizationSchema, ebl.corpus.web.chapter_schemas.ApiChapterSchema, ebl.corpus.web.text_utils.create_chapter_id, ebl.marshmallowschema.validate, ebl.users.web.require_scope.require_scope, falcon, marshmallow.Schema, marshmallow.fields
- Classes: CorpusLemmatizationsSchema, LemmatizationResource
- Methods in LemmatizationResource: __init__, on_post

### `ebl/corpus/web/lines.py`

- Lines: 123
- Imports: ebl.cache.application.custom_cache.ChapterCache, ebl.corpus.application.corpus.Corpus, ebl.corpus.domain.line.Line, ebl.corpus.domain.lines_update.LinesUpdate, ebl.corpus.web.chapter_schemas.ApiChapterSchema, ebl.corpus.web.chapter_schemas.ApiLineSchema, ebl.corpus.web.display_schemas.LineDetailsDisplay, ebl.corpus.web.display_schemas.LineDetailsDisplaySchema, ebl.corpus.web.text_utils.create_chapter_id, ebl.errors.NotFoundError, ebl.marshmallowschema.validate, ebl.users.web.require_scope.require_scope, falcon, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, typing.Tuple
- Classes: LineEditSchema, LinesUpdateSchema, LinesImportSchema, LinesResource, LinesImportResource, LineResource
- Methods in LineEditSchema: make_line_edit
- Methods in LinesUpdateSchema: make_lines_update
- Methods in LinesResource: __init__, on_post
- Methods in LinesImportResource: __init__, on_post
- Methods in LineResource: __init__, on_get

### `ebl/corpus/web/manuscripts.py`

- Lines: 64
- Imports: ebl.cache.application.custom_cache.ChapterCache, ebl.corpus.application.corpus.Corpus, ebl.corpus.web.chapter_schemas.ApiChapterSchema, ebl.corpus.web.chapter_schemas.ApiManuscriptSchema, ebl.corpus.web.chapter_schemas.MuseumNumberString, ebl.corpus.web.text_utils.create_chapter_id, ebl.marshmallowschema.validate, ebl.users.web.require_scope.require_scope, falcon, marshmallow.Schema, marshmallow.fields
- Classes: ManuscriptDtoSchema, ManuscriptsResource
- Methods in ManuscriptsResource: __init__, on_get, on_post

### `ebl/corpus/web/text_schema.py`

- Lines: 18
- Imports: ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.corpus.application.schemas.ChapterListingSchema, ebl.corpus.application.schemas.TextSchema, ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema, marshmallow.fields
- Classes: ApiChapterListingSchema, ApiTextSchema

### `ebl/corpus/web/text_utils.py`

- Lines: 26
- Imports: ebl.common.domain.stage.Stage, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.text.TextId, ebl.errors.NotFoundError, ebl.transliteration.domain.genre.Genre
- Functions: create_text_id, create_chapter_id

### `ebl/corpus/web/texts.py`

- Lines: 61
- Imports: ebl.corpus.application.corpus.Corpus, ebl.corpus.web.chapter_info_schema.ChapterInfosPaginationSchema, ebl.corpus.web.text_schema.ApiTextSchema, ebl.corpus.web.text_utils.create_text_id, ebl.errors.DataError, ebl.transliteration.application.transliteration_query_factory.TransliterationQueryFactory, falcon
- Classes: TextsResource, TextResource, TextSearchResource, TextsAllResource
- Methods in TextsResource: __init__, on_get
- Methods in TextResource: __init__, on_get
- Methods in TextSearchResource: __init__, on_get
- Methods in TextsAllResource: __init__, on_get

### `ebl/corpus/web/unplaced_lines.py`

- Lines: 34
- Imports: ebl.corpus.application.corpus.Corpus, ebl.corpus.web.text_utils.create_chapter_id, ebl.transliteration.application.text_schema.TextSchema, falcon, marshmallow.Schema, marshmallow.fields
- Classes: UnplacedLinesSchema, UnplacedLinesResource
- Methods in UnplacedLinesResource: __init__, on_get

