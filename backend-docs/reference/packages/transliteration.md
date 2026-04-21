# Package Reference: ebl/transliteration

- Files: 93
- Total lines: 8395

## File-Level API Summary

### `ebl/transliteration/__init__.py`

- Lines: 0

### `ebl/transliteration/application/__init__.py`

- Lines: 0

### `ebl/transliteration/application/at_line_schemas.py`

- Lines: 112
- Imports: ebl.schemas.NameEnumField, ebl.transliteration.application.label_schemas.ColumnLabelSchema, ebl.transliteration.application.label_schemas.ObjectLabelSchema, ebl.transliteration.application.label_schemas.SurfaceLabelSchema, ebl.transliteration.application.line_schemas.LineBaseSchema, ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.at_line.ColumnAtLine, ebl.transliteration.domain.at_line.CompositeAtLine, ebl.transliteration.domain.at_line.DiscourseAtLine, ebl.transliteration.domain.at_line.DivisionAtLine, ebl.transliteration.domain.at_line.HeadingAtLine, ebl.transliteration.domain.at_line.ObjectAtLine, ebl.transliteration.domain.at_line.SealAtLine, ebl.transliteration.domain.at_line.SurfaceAtLine, ebl.transliteration.domain.atf, ebl.transliteration.domain.tokens.ValueToken, marshmallow.fields, marshmallow.post_load
- Classes: AtLineSchema, SealAtLineSchema, HeadingAtLineSchema, ColumnAtLineSchema, DiscourseAtLineSchema, SurfaceAtLineSchema, ObjectAtLineSchema, DivisionAtLineSchema, CompositeAtLineSchema
- Methods in SealAtLineSchema: make_line
- Methods in HeadingAtLineSchema: make_line
- Methods in ColumnAtLineSchema: make_line
- Methods in DiscourseAtLineSchema: make_line
- Methods in SurfaceAtLineSchema: make_line
- Methods in ObjectAtLineSchema: make_line
- Methods in DivisionAtLineSchema: make_line
- Methods in CompositeAtLineSchema: make_line

### `ebl/transliteration/application/dollar_line_schemas.py`

- Lines: 138
- Imports: ebl.schemas.NameEnumField, ebl.transliteration.application.line_schemas.LineBaseSchema, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.atf, ebl.transliteration.domain.dollar_line.ImageDollarLine, ebl.transliteration.domain.dollar_line.LooseDollarLine, ebl.transliteration.domain.dollar_line.RulingDollarLine, ebl.transliteration.domain.dollar_line.ScopeContainer, ebl.transliteration.domain.dollar_line.SealDollarLine, ebl.transliteration.domain.dollar_line.StateDollarLine, ebl.transliteration.domain.tokens.ValueToken, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, typing.Mapping, typing.Type, typing.Union
- Classes: DollarLineSchema, LooseDollarLineSchema, ImageDollarLineSchema, RulingDollarLineSchema, SealDollarLineSchema, ScopeContainerSchema, StateDollarLineSchema
- Methods in LooseDollarLineSchema: make_line
- Methods in ImageDollarLineSchema: make_line
- Methods in RulingDollarLineSchema: make_line
- Methods in SealDollarLineSchema: make_line
- Methods in ScopeContainerSchema: make__scope_container, load_scope
- Methods in StateDollarLineSchema: make_line, load_extent, dump_extent

### `ebl/transliteration/application/label_schemas.py`

- Lines: 57
- Imports: ebl.schemas.NameEnumField, ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser.parse_labels, ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, marshmallow.Schema, marshmallow.ValidationError, marshmallow.fields, marshmallow.post_load
- Classes: LabelSchema, ColumnLabelSchema, SurfaceLabelSchema, ObjectLabelSchema
- Methods in ColumnLabelSchema: make_label
- Methods in SurfaceLabelSchema: make_label
- Methods in ObjectLabelSchema: make_label
- Functions: try_parse_labels, labels

### `ebl/transliteration/application/lemmatization_schema.py`

- Lines: 15
- Imports: ebl.lemmatization.domain.lemmatization.LemmatizationToken, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: LemmatizationTokenSchema
- Methods in LemmatizationTokenSchema: make_token

### `ebl/transliteration/application/line_number_schemas.py`

- Lines: 63
- Imports: ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.line_number.LineNumberRange, ebl.transliteration.domain.line_number.OldLineNumber, marshmallow.EXCLUDE, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, marshmallow.validate, marshmallow_oneofschema.OneOfSchema, typing.Mapping, typing.Type
- Classes: OldLineNumberSchema, LineNumberSchema, LineNumberRangeSchema, OneOfLineNumberSchema
- Methods in OldLineNumberSchema: make_old_line_number
- Methods in LineNumberSchema: make_line_number
- Methods in LineNumberRangeSchema: make_line_number_range

### `ebl/transliteration/application/line_schemas.py`

- Lines: 98
- Imports: ebl.transliteration.application.label_schemas.labels, ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema, ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.line.ControlLine, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.translation_line.Extent, ebl.transliteration.domain.translation_line.TranslationLine, marshmallow.EXCLUDE, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: LineBaseSchema, TextLineSchema, ControlLineSchema, EmptyLineSchema, NoteLineSchema, ExtentSchema, TranslationLineSchema
- Methods in TextLineSchema: make_line
- Methods in ControlLineSchema: make_line
- Methods in EmptyLineSchema: make_line
- Methods in NoteLineSchema: make_line
- Methods in ExtentSchema: make_extent
- Methods in TranslationLineSchema: make_line

### `ebl/transliteration/application/museum_number_schema.py`

- Lines: 9
- Imports: ebl.common.application.schemas.AbstractMuseumNumberSchema, ebl.transliteration.domain.museum_number.MuseumNumber, marshmallow.post_load
- Classes: MuseumNumberSchema
- Methods in MuseumNumberSchema: create_museum_number

### `ebl/transliteration/application/note_line_part_schemas.py`

- Lines: 107
- Imports: ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.schemas.NameEnumField, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.markup.BibliographyPart, ebl.transliteration.domain.markup.BoldPart, ebl.transliteration.domain.markup.EmphasisPart, ebl.transliteration.domain.markup.LanguagePart, ebl.transliteration.domain.markup.ParagraphPart, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.markup.SubscriptPart, ebl.transliteration.domain.markup.SuperscriptPart, ebl.transliteration.domain.markup.UrlPart, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, marshmallow_oneofschema.OneOfSchema, typing.Mapping, typing.Type
- Classes: StringPartSchema, EmphasisPartSchema, SuperscriptPartSchema, SubscriptPartSchema, BoldPartSchema, LanguagePartSchema, BibliographyPartSchema, ParagraphPartSchema, UrlPartSchema, OneOfNoteLinePartSchema
- Methods in StringPartSchema: make_part
- Methods in EmphasisPartSchema: make_part
- Methods in SuperscriptPartSchema: make_part
- Methods in SubscriptPartSchema: make_part
- Methods in BoldPartSchema: make_part
- Methods in LanguagePartSchema: make_part
- Methods in BibliographyPartSchema: make_part
- Methods in ParagraphPartSchema: make_part
- Methods in UrlPartSchema: make_part

### `ebl/transliteration/application/one_of_line_schema.py`

- Lines: 70
- Imports: ebl.transliteration.application.at_line_schemas.ColumnAtLineSchema, ebl.transliteration.application.at_line_schemas.CompositeAtLineSchema, ebl.transliteration.application.at_line_schemas.DiscourseAtLineSchema, ebl.transliteration.application.at_line_schemas.DivisionAtLineSchema, ebl.transliteration.application.at_line_schemas.HeadingAtLineSchema, ebl.transliteration.application.at_line_schemas.ObjectAtLineSchema, ebl.transliteration.application.at_line_schemas.SealAtLineSchema, ebl.transliteration.application.at_line_schemas.SurfaceAtLineSchema, ebl.transliteration.application.dollar_line_schemas.ImageDollarLineSchema, ebl.transliteration.application.dollar_line_schemas.LooseDollarLineSchema, ebl.transliteration.application.dollar_line_schemas.RulingDollarLineSchema, ebl.transliteration.application.dollar_line_schemas.SealDollarLineSchema, ebl.transliteration.application.dollar_line_schemas.StateDollarLineSchema, ebl.transliteration.application.line_schemas.ControlLineSchema, ebl.transliteration.application.line_schemas.EmptyLineSchema, ebl.transliteration.application.line_schemas.NoteLineSchema, ebl.transliteration.application.line_schemas.TextLineSchema, ebl.transliteration.application.line_schemas.TranslationLineSchema, ebl.transliteration.application.parallel_line_schemas.ParallelCompositionSchema, ebl.transliteration.application.parallel_line_schemas.ParallelFragmentSchema
- Classes: OneOfLineSchema, ParallelLineSchema

### `ebl/transliteration/application/parallel_line_injector.py`

- Lines: 74
- Imports: abc.ABC, abc.abstractmethod, attr, ebl.errors.NotFoundError, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.parallel_line.ChapterName, ebl.transliteration.domain.parallel_line.ParallelFragment, ebl.transliteration.domain.parallel_line.ParallelText, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_id.TextId, functools.singledispatchmethod, typing.Sequence, typing.TypeVar
- Constants: T
- Classes: ParallelRepository, ParallelLineInjector
- Methods in ParallelRepository: fragment_exists, find_implicit_chapter, chapter_exists
- Methods in ParallelLineInjector: __init__, inject, inject_transliteration, _inject_line, _, _

### `ebl/transliteration/application/parallel_line_schemas.py`

- Lines: 124
- Imports: ebl.corpus.application.id_schemas.TextIdSchema, ebl.schemas.NameEnumField, ebl.schemas.StageField, ebl.transliteration.application.label_schemas.ColumnLabelSchema, ebl.transliteration.application.label_schemas.ObjectLabelSchema, ebl.transliteration.application.label_schemas.SurfaceLabelSchema, ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema, ebl.transliteration.application.line_schemas.LineBaseSchema, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.application.token_schemas.OneOfTokenSchema, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.parallel_line.ChapterName, ebl.transliteration.domain.parallel_line.Labels, ebl.transliteration.domain.parallel_line.ParallelComposition, ebl.transliteration.domain.parallel_line.ParallelFragment, ebl.transliteration.domain.parallel_line.ParallelText, ebl.transliteration.domain.tokens.ValueToken, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: ParallelLineSchema, LabelsSchema, ParallelFragmentSchema, ChapterNameSchema, ParallelTextSchema, ParallelCompositionSchema
- Methods in LabelsSchema: make_labels
- Methods in ParallelFragmentSchema: make_line
- Methods in ChapterNameSchema: make_id
- Methods in ParallelTextSchema: make_line
- Methods in ParallelCompositionSchema: make_line
- Functions: exists

### `ebl/transliteration/application/sign_repository.py`

- Lines: 41
- Imports: abc.ABC, abc.abstractmethod, ebl.transliteration.domain.sign.Sign, ebl.transliteration.domain.sign.SignName, typing.Optional, typing.Sequence
- Classes: SignRepository
- Methods in SignRepository: create, find, find_many, search_by_id, search_all, search_by_lists_name, search_composite_signs, search_include_homophones, search, search_by_lemma, list_all_signs

### `ebl/transliteration/application/signs_visitor.py`

- Lines: 213
- Imports: attr, ebl.errors.NotFoundError, ebl.transliteration.application.sign_repository.SignRepository, ebl.transliteration.domain.atf.Flag, ebl.transliteration.domain.atf.VARIANT_SEPARATOR, ebl.transliteration.domain.atf_parsers.lark_parser.parse_compound_grapheme, ebl.transliteration.domain.atf_parsers.lark_parser.parse_reading, ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS, ebl.transliteration.domain.enclosure_tokens.Gloss, ebl.transliteration.domain.enclosure_type.EnclosureType, ebl.transliteration.domain.sign.Sign, ebl.transliteration.domain.sign.SignName, ebl.transliteration.domain.sign_tokens.CompoundGrapheme, ebl.transliteration.domain.sign_tokens.Divider, ebl.transliteration.domain.sign_tokens.Grapheme, ebl.transliteration.domain.sign_tokens.NamedSign, ebl.transliteration.domain.sign_tokens.Number, ebl.transliteration.domain.standardization.INVALID, ebl.transliteration.domain.standardization.Standardization, ebl.transliteration.domain.standardization.UNKNOWN
- Constants: S, T
- Classes: SignsVisitor
- Methods in SignsVisitor: result, result_string, result_unicode, visit_word, visit_gloss, visit_unknown_sign, visit_named_sign, visit_number, visit_compound_grapheme, _visit_compound_grapheme_part, visit_grapheme, visit_divider, visit_variant, _visit_variant, _visit_sign, _find, _visit_tokens
- Functions: strip_flags, skip_enclosures, skip_erasures

### `ebl/transliteration/application/text_schema.py`

- Lines: 15
- Imports: ebl.transliteration.application.one_of_line_schema.OneOfLineSchema, ebl.transliteration.domain.atf.DEFAULT_ATF_PARSER_VERSION, ebl.transliteration.domain.text.Text, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: TextSchema
- Methods in TextSchema: make_text

### `ebl/transliteration/application/token_schemas.py`

- Lines: 625
- Imports: abc.abstractmethod, ebl.schemas.NameEnumField, ebl.schemas.ValueEnumField, ebl.transliteration.domain.atf, ebl.transliteration.domain.atf.Flag, ebl.transliteration.domain.egyptian_metrical_feet_separator_token.EgyptianMetricalFeetSeparator, ebl.transliteration.domain.enclosure_tokens.AccidentalOmission, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss, ebl.transliteration.domain.enclosure_tokens.Emendation, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.enclosure_tokens.Gloss, ebl.transliteration.domain.enclosure_tokens.IntentionalOmission, ebl.transliteration.domain.enclosure_tokens.LinguisticGloss, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.enclosure_tokens.PhoneticGloss, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.enclosure_type.EnclosureType, ebl.transliteration.domain.greek_tokens.GreekLetter
- Classes: BaseTokenSchema, ValueTokenSchema, LanguageShiftSchema, EnclosureSchema, DocumentOrientedGlossSchema, BrokenAwaySchema, PerhapsBrokenAwaySchema, AccidentalOmissionSchema, IntentionalOmissionSchema, RemovalSchema, EmendationSchema, ErasureSchema, UnknownNumberOfSignsSchema, EgyptianMetricalFeetSeparatorSchema, WordOmittedSchema, TabulationSchema, CommentaryProtocolSchema, DividerSchema, ColumnSchema, UnidentifiedSignSchema, UnclearSignSchema, JoinerSchema, InWordNewlineSchema, NamedSignSchema, ReadingSchema, LogogramSchema, NumberSchema, BaseWordSchema, WordSchema, LoneDeterminativeSchema, VariantSchema, GraphemeSchema, CompoundGraphemeSchema, GlossSchema, DeterminativeSchema, PhoneticGlossSchema, LinguisticGlossSchema, LineBreakSchema, AkkadianWordSchema, BreakSchema, CaesuraSchema, MetricalFootSeparatorSchema, GreekLetterSchema, GreekWordSchema, OneOfWordSchema, OneOfTokenSchema
- Methods in ValueTokenSchema: make_token
- Methods in LanguageShiftSchema: make_token
- Methods in EnclosureSchema: make_token
- Methods in DocumentOrientedGlossSchema: make_token
- Methods in BrokenAwaySchema: make_token
- Methods in PerhapsBrokenAwaySchema: make_token
- Methods in AccidentalOmissionSchema: make_token
- Methods in IntentionalOmissionSchema: make_token
- Methods in RemovalSchema: make_token

### `ebl/transliteration/application/transliteration_query_factory.py`

- Lines: 19
- Imports: ebl.transliteration.application.sign_repository.SignRepository, ebl.transliteration.application.signs_visitor.SignsVisitor, ebl.transliteration.domain.transliteration_query.TransliterationQuery, ebl.transliteration.domain.transliteration_query.TransliterationQueryEmpty
- Classes: TransliterationQueryFactory
- Methods in TransliterationQueryFactory: __init__, create_empty, create

### `ebl/transliteration/domain/__init__.py`

- Lines: 0

### `ebl/transliteration/domain/alignment.py`

- Lines: 41
- Imports: attr, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.word_tokens.AbstractWord, functools.singledispatchmethod, typing.Optional, typing.TypeVar
- Constants: A, T
- Classes: AlignmentError, AlignmentToken
- Methods in AlignmentError: __init__
- Methods in AlignmentToken: apply, _

### `ebl/transliteration/domain/at_line.py`

- Lines: 114
- Imports: abc.abstractmethod, attr, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.atf.Composite, ebl.transliteration.domain.atf.Discourse, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.markup.convert_part_sequence, typing.Optional, typing.Sequence, typing.Tuple
- Classes: AtLine, SealAtLine, HeadingAtLine, ColumnAtLine, DiscourseAtLine, SurfaceAtLine, ObjectAtLine, DivisionAtLine, CompositeAtLine
- Methods in AtLine: display_value, atf, lemmatization
- Methods in SealAtLine: display_value
- Methods in HeadingAtLine: display_value
- Methods in ColumnAtLine: display_value
- Methods in DiscourseAtLine: display_value
- Methods in SurfaceAtLine: display_value
- Methods in ObjectAtLine: display_value
- Methods in DivisionAtLine: display_value
- Methods in CompositeAtLine: _check_text, display_value

### `ebl/transliteration/domain/at_line_transformer.py`

- Lines: 127
- Imports: attr, ebl.transliteration.domain.at_line.ColumnAtLine, ebl.transliteration.domain.at_line.CompositeAtLine, ebl.transliteration.domain.at_line.DiscourseAtLine, ebl.transliteration.domain.at_line.DivisionAtLine, ebl.transliteration.domain.at_line.HeadingAtLine, ebl.transliteration.domain.at_line.ObjectAtLine, ebl.transliteration.domain.at_line.SealAtLine, ebl.transliteration.domain.at_line.SurfaceAtLine, ebl.transliteration.domain.atf, ebl.transliteration.domain.common_transformer.CommonTransformer, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, lark.Token, lark.visitors.v_args, typing.List
- Classes: ObjectData, AtLineTransformer
- Methods in AtLineTransformer: __init__, at_line, ebl_atf_at_line__free_text, ebl_atf_at_line__LCASE_LETTER, ebl_atf_at_line__seal, ebl_atf_at_line__column, ebl_atf_at_line__discourse, ebl_atf_at_line__heading, ebl_atf_at_line__OBJECT, ebl_atf_at_line__generic_object, ebl_atf_at_line__fragment, ebl_atf_at_line__ebl_atf_common__SURFACE, ebl_atf_at_line__SURFACE, ebl_atf_at_line__generic_surface, ebl_atf_at_line__face, ebl_atf_at_line__edge, ebl_atf_at_line__surface_with_status, ebl_atf_at_line__object_with_status, ebl_atf_at_line__divisions, ebl_atf_at_line__composite_start, ebl_atf_at_line__composite_end, ebl_atf_at_line__composite_composite, ebl_atf_at_line__composite_milestone

### `ebl/transliteration/domain/atf.py`

- Lines: 254
- Imports: ebl.transliteration.domain.side.Side, enum.Enum, enum.unique, re, typing.Mapping, typing.NewType, typing.Optional, unicodedata
- Constants: ATF_PARSER_VERSION, COMPOUND_GRAPHEME_DELIMITER, DEFAULT_ATF_PARSER_VERSION, EGYPTIAN_METRICAL_FEET_SEPARATOR, ERASURE_BOUNDARY, IN_WORD_NEWLINE, LINE_BREAK, TABULATION, UNCLEAR_SIGN, UNIDENTIFIED_SIGN, UNKNOWN_NUMBER_OF_SIGNS, VARIANT_SEPARATOR, WORD_OMITTED, WORD_SEPARATOR
- Classes: Surface, Status, DollarStatus, CommentaryProtocol, Flag, Joiner, Ruling, Object, Scope, Qualification, Extent, State, Discourse, Composite
- Methods in Surface: __init__, from_label, from_atf
- Functions: to_sub_index, sub_index_to_int

### `ebl/transliteration/domain/atf_parsers/lark.py`

- Lines: 27
- Imports: ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.ValueToken, lark.lexer.Token, lark.tree.Tree, typing.Sequence
- Functions: _token_to_list, tokens_to_value_tokens

### `ebl/transliteration/domain/atf_parsers/lark_parser.py`

- Lines: 254
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS, ebl.transliteration.domain.enclosure_error.EnclosureError, ebl.transliteration.domain.enclosure_visitor.EnclosureValidator, ebl.transliteration.domain.greek_tokens.GreekWord, ebl.transliteration.domain.label_transformer.LabelTransformer, ebl.transliteration.domain.labels.DuplicateStatusError, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_number.AbstractLineNumber, ebl.transliteration.domain.line_transformer.LineTransformer, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.markup.ParagraphPart, ebl.transliteration.domain.note_line.NoteLine, ebl.transliteration.domain.parallel_line.ParallelLine, ebl.transliteration.domain.sign_tokens.CompoundGrapheme, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text_line.TextLine
- Constants: ATF_COMMON_PATH, ATF_GRAMMAR_PATH, CHAPTER_PARSER, LABEL_PARSER, LINE_NUMBER_PARSER, LINE_PARSER, LINE_PARSER_STARTS, MANUSCRIPT_PARSER, MARKUP_PARSER, NOTE_LINE_PARSER, PARALLEL_LINE_PARSER, PARATEXT_PARSER, TRANSLATION_LINE_PARSER, WORD_PARSER
- Functions: parse_word, parse_normalized_akkadian_word, parse_greek_word, parse_compound_grapheme, parse_reading, parse_erasure, parse_line, parse_note_line, parse_markup, split_paragraphs, parse_markup_paragraphs, parse_parallel_line, parse_translation_line, parse_labels, parse_text_line, parse_line_number, validate_line, clean_line, parse_atf_lark, create_transliteration_error_data, _, _, _, _

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf.lark`

- Lines: 27

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_abbreviations.lark`

- Lines: 174

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_at_line.lark`

- Lines: 33

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_chapter.lark`

- Lines: 19

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_common.lark`

- Lines: 91

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_control_line.lark`

- Lines: 1

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_dollar_line.lark`

- Lines: 44

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_empty_line.lark`

- Lines: 1

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_legacy_control_line.lark`

- Lines: 4

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_manuscript_line.lark`

- Lines: 25

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_note_line.lark`

- Lines: 15

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_parallel_line.lark`

- Lines: 22

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_text_line.lark`

- Lines: 290

### `ebl/transliteration/domain/atf_parsers/lark_parser/ebl_atf_translation_line.lark`

- Lines: 25

### `ebl/transliteration/domain/atf_parsers/lark_parser/legacy_atf.lark`

- Lines: 11

### `ebl/transliteration/domain/atf_parsers/lark_parser/oracc_atf_lem_line.lark`

- Lines: 25

### `ebl/transliteration/domain/atf_parsers/lark_parser_errors.py`

- Lines: 10
- Imports: ebl.transliteration.domain.enclosure_error.EnclosureError, lark.exceptions.ParseError, lark.exceptions.UnexpectedInput, lark.exceptions.VisitError, typing.Tuple, typing.Type

### `ebl/transliteration/domain/atf_parsers/reconstructed_text_parser.py`

- Lines: 39
- Imports: ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.normalized_akkadian.Break, ebl.transliteration.domain.text_line_transformer.TextLineTransformer, ebl.transliteration.domain.tokens.Token, lark.exceptions.ParseError, lark.exceptions.UnexpectedInput, lark.lark.Lark, typing.Sequence
- Constants: RECONSTRUCTED_LINE_PARSER
- Functions: parse_reconstructed_word, parse_break, parse_reconstructed_line

### `ebl/transliteration/domain/atf_visitor.py`

- Lines: 153
- Imports: ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.atf.WORD_SEPARATOR, ebl.transliteration.domain.egyptian_metrical_feet_separator_token.EgyptianMetricalFeetSeparator, ebl.transliteration.domain.enclosure_tokens.AccidentalOmission, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss, ebl.transliteration.domain.enclosure_tokens.Emendation, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.enclosure_tokens.IntentionalOmission, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.side.Side, ebl.transliteration.domain.sign_tokens.Divider, ebl.transliteration.domain.tokens.CommentaryProtocol, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.tokens.LineBreak, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, ebl.transliteration.domain.word_tokens.Word, typing.Callable
- Classes: AtfVisitorState, AtfVisitor
- Methods in AtfVisitorState: __init__, append_with_forced_separator, append_with_separator, append_left_bracket, append_right_bracket, append_token, append_separator, set_omit, set_force
- Methods in AtfVisitor: __init__, result, visit, visit_language_shift, visit_word, visit_document_oriented_gloss, visit_broken_away, visit_perhaps_broken_away, visit_omission, visit_accidental_omission, visit_removal, visit_emendation, _side, visit_erasure, visit_divider, visit_line_break, visit_egyptian_metrical_feet_separator, visit_commentary_protocol
- Functions: convert_to_atf

### `ebl/transliteration/domain/common_transformer.py`

- Lines: 115
- Imports: ebl.transliteration.domain.atf.Object, ebl.transliteration.domain.atf.Optional, ebl.transliteration.domain.atf.Status, ebl.transliteration.domain.atf.Surface, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.line_number.LineNumberRange, lark.visitors.Token, lark.visitors.Transformer, lark.visitors.v_args, typing.Iterable, typing.Sequence
- Constants: PREFIXES
- Classes: LegacyPrimeUtil, CommonTransformer
- Methods in LegacyPrimeUtil: _index_to_letters, primes_to_prefix
- Methods in CommonTransformer: __init__, ebl_atf_common__INT, ebl_atf_common__single_line_number, ebl_atf_common__legacy_single_line_number, ebl_atf_common__line_number_range, ebl_atf_common__labels, ebl_atf_common__column_label, ebl_atf_common__surface_label, ebl_atf_common__object_label, ebl_atf_common__status

### `ebl/transliteration/domain/converters.py`

- Lines: 16
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.tokens.Token, typing.Iterable, typing.Tuple
- Functions: convert_token_sequence, convert_string_sequence, convert_flag_sequence

### `ebl/transliteration/domain/dollar_line.py`

- Lines: 143
- Imports: abc.abstractmethod, attr, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf, ebl.transliteration.domain.line.Line, enum.Enum, typing.Optional, typing.Tuple, typing.Union
- Classes: DollarLine, SealDollarLine, LooseDollarLine, ImageDollarLine, RulingDollarLine, ScopeContainer, StateDollarLine
- Methods in DollarLine: display_value, atf, lemmatization, is_end_of
- Methods in SealDollarLine: display_value
- Methods in LooseDollarLine: display_value
- Methods in ImageDollarLine: display_value
- Methods in RulingDollarLine: display_value
- Methods in ScopeContainer: _check_text, value, to_value
- Methods in StateDollarLine: display_value, is_end_of, to_atf

### `ebl/transliteration/domain/dollar_line_transformer.py`

- Lines: 139
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.dollar_line.DollarLine, ebl.transliteration.domain.dollar_line.ImageDollarLine, ebl.transliteration.domain.dollar_line.LooseDollarLine, ebl.transliteration.domain.dollar_line.RulingDollarLine, ebl.transliteration.domain.dollar_line.ScopeContainer, ebl.transliteration.domain.dollar_line.SealDollarLine, ebl.transliteration.domain.dollar_line.StateDollarLine, lark.visitors.Transformer, lark.visitors.v_args, typing.List
- Classes: DollarLineTransformer
- Methods in DollarLineTransformer: __init__, dollar_line, ebl_atf_dollar_line__free_text, ebl_atf_dollar_line__loose, ebl_atf_dollar_line__ruling, ebl_atf_dollar_line__image, ebl_atf_dollar_line__seal, ebl_atf_dollar_line__DOLLAR_STATUS, ebl_atf_dollar_line__STATE, ebl_atf_dollar_line__OBJECT, ebl_atf_dollar_line__generic_object, ebl_atf_dollar_line__fragment, ebl_atf_dollar_line__SURFACE, ebl_atf_dollar_line__ebl_atf_common__SURFACE, ebl_atf_dollar_line__generic_surface, ebl_atf_dollar_line__face, ebl_atf_dollar_line__edge, ebl_atf_dollar_line__SCOPE, ebl_atf_dollar_line__EXTENT, ebl_atf_dollar_line__INT, ebl_atf_dollar_line__range, ebl_atf_dollar_line__QUALIFICATION, ebl_atf_dollar_line__state, ebl_atf_dollar_line__state_extent, ebl_atf_dollar_line__state_scope

### `ebl/transliteration/domain/egyptian_metrical_feet_separator_token.py`

- Lines: 39
- Imports: attr, ebl.transliteration.domain.atf, ebl.transliteration.domain.converters.convert_flag_sequence, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, typing.Sequence
- Classes: EgyptianMetricalFeetSeparator
- Methods in EgyptianMetricalFeetSeparator: clean_value, of, parts, _sign, string_flags, value, accept

### `ebl/transliteration/domain/enclosure_error.py`

- Lines: 2
- Classes: EnclosureError

### `ebl/transliteration/domain/enclosure_tokens.py`

- Lines: 212
- Imports: abc.abstractmethod, attr, ebl.transliteration.domain.atf, ebl.transliteration.domain.converters.convert_token_sequence, ebl.transliteration.domain.side.Side, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, typing.Mapping, typing.Sequence, typing.Type, typing.TypeVar
- Constants: E, G
- Classes: Enclosure, DocumentOrientedGloss, BrokenAway, PerhapsBrokenAway, AccidentalOmission, IntentionalOmission, Removal, Emendation, Erasure, Gloss, Determinative, PhoneticGloss, LinguisticGloss
- Methods in Enclosure: get_sides, value, clean_value, parts, is_open, is_close, open, close, of, of_value
- Methods in DocumentOrientedGloss: get_sides, accept
- Methods in BrokenAway: get_sides, accept
- Methods in PerhapsBrokenAway: get_sides, accept
- Methods in AccidentalOmission: get_sides, accept
- Methods in IntentionalOmission: get_sides, accept
- Methods in Removal: get_sides, accept
- Methods in Emendation: get_sides, accept
- Methods in Erasure: get_sides, center, accept
- Methods in Gloss: of, open, close, parts, value, clean_value, accept

### `ebl/transliteration/domain/enclosure_transformer.py`

- Lines: 93
- Imports: ebl.transliteration.domain.atf_parsers.lark.tokens_to_value_tokens, ebl.transliteration.domain.enclosure_tokens.AccidentalOmission, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.Determinative, ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss, ebl.transliteration.domain.enclosure_tokens.Erasure, ebl.transliteration.domain.enclosure_tokens.IntentionalOmission, ebl.transliteration.domain.enclosure_tokens.LinguisticGloss, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.enclosure_tokens.PhoneticGloss, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.erasure_visitor.set_erasure_state, ebl.transliteration.domain.tokens.ErasureState, lark.visitors.Transformer, lark.visitors.v_args
- Classes: EnclosureTransformer, GlossTransformer
- Methods in EnclosureTransformer: __init__, ebl_atf_text_line__open_accidental_omission, ebl_atf_text_line__close_accidental_omission, ebl_atf_text_line__open_intentional_omission, ebl_atf_text_line__close_intentional_omission, ebl_atf_text_line__open_removal, ebl_atf_text_line__close_removal, ebl_atf_text_line__close_broken_away, ebl_atf_text_line__open_broken_away, ebl_atf_text_line__close_perhaps_broken_away, ebl_atf_text_line__open_perhaps_broken_away, ebl_atf_text_line__open_document_oriented_gloss, ebl_atf_text_line__close_document_oriented_gloss, ebl_atf_text_line__erasure, _transform_erasure
- Methods in GlossTransformer: __init__, ebl_atf_text_line__determinative, ebl_atf_text_line__phonetic_gloss, ebl_atf_text_line__linguistic_gloss

### `ebl/transliteration/domain/enclosure_type.py`

- Lines: 54
- Imports: enum.Enum, enum.unique, typing.AbstractSet, typing.FrozenSet, typing.Set
- Classes: EnclosureType
- Methods in EnclosureType: __init__, required, forbidden, does_not_forbid, are_requirements_satisfied_by

### `ebl/transliteration/domain/enclosure_visitor.py`

- Lines: 266
- Imports: attr, ebl.transliteration.domain.enclosure_error.EnclosureError, ebl.transliteration.domain.enclosure_tokens.AccidentalOmission, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss, ebl.transliteration.domain.enclosure_tokens.Emendation, ebl.transliteration.domain.enclosure_tokens.Enclosure, ebl.transliteration.domain.enclosure_tokens.Gloss, ebl.transliteration.domain.enclosure_tokens.IntentionalOmission, ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.enclosure_type.EnclosureType, ebl.transliteration.domain.greek_tokens.GreekWord, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.sign_tokens.NamedSign, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, ebl.transliteration.domain.tokens.Variant, ebl.transliteration.domain.word_tokens.Word, typing.FrozenSet
- Classes: EnclosureVisitorState, EnclosureValidator, EnclosureUpdater
- Methods in EnclosureVisitorState: has_enclosures, is_open, open, close, _is_allowed_to_open, _is_allowed_to_close, _is_required
- Methods in EnclosureValidator: enclosures, done, visit_variant, visit_word, visit_gloss, visit_named_sign, visit_akkadian_word, visit_greek_word, visit_accidental_omission, visit_intentional_omission, visit_removal, visit_broken_away, visit_perhaps_broken_away, visit_emendation, visit_document_oriented_gloss, _update_state
- Methods in EnclosureUpdater: tokens, _set_enclosure_type, _append_token, visit, visit_variant, visit_word, visit_named_sign, visit_akkadian_word, visit_greek_word, visit_gloss, visit_accidental_omission, visit_intentional_omission, visit_removal, visit_broken_away, visit_perhaps_broken_away, visit_document_oriented_gloss, visit_emendation, _visit_parts, _update_enclosures
- Functions: set_enclosure_type

### `ebl/transliteration/domain/erasure_visitor.py`

- Lines: 26
- Imports: ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, ebl.transliteration.domain.word_tokens.ErasureState, lark.tree.Tree, typing.MutableSequence, typing.Sequence
- Classes: ErasureVisitor
- Methods in ErasureVisitor: __init__, tokens, visit
- Functions: set_erasure_state

### `ebl/transliteration/domain/genre.py`

- Lines: 11
- Imports: enum.Enum, enum.unique
- Classes: Genre

### `ebl/transliteration/domain/greek_tokens.py`

- Lines: 89
- Imports: attr, ebl.lemmatization.domain.lemmatization.Lemma, ebl.transliteration.domain.atf, ebl.transliteration.domain.converters.convert_flag_sequence, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, ebl.transliteration.domain.word_tokens.AbstractWord, typing.Optional, typing.Sequence
- Classes: GreekLetter, GreekWord
- Methods in GreekLetter: value, clean_value, parts, of
- Methods in GreekWord: language, normalized, alignable, value, set_language, accept, of

### `ebl/transliteration/domain/label_transformer.py`

- Lines: 11
- Imports: ebl.transliteration.domain.common_transformer.CommonTransformer, ebl.transliteration.domain.labels.Label, typing.Sequence
- Classes: LabelTransformer
- Methods in LabelTransformer: __init__, labels

### `ebl/transliteration/domain/label_validator.py`

- Lines: 41
- Imports: ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.labels.LabelVisitor, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, typing.Sequence
- Classes: LabelValidator
- Methods in LabelValidator: __init__, visit_surface_label, visit_column_label, visit_object_label
- Functions: validate_labels

### `ebl/transliteration/domain/labels.py`

- Lines: 160
- Imports: abc.ABC, abc.abstractmethod, attr, ebl.transliteration.domain.atf.Object, ebl.transliteration.domain.atf.Status, ebl.transliteration.domain.atf.Surface, pydash, roman, typing.Iterable, typing.Sequence, typing.Tuple, typing.Union
- Classes: DuplicateStatusError, LabelVisitor, Label, ColumnLabel, SurfaceLabel, ObjectLabel
- Methods in LabelVisitor: visit_surface_label, visit_column_label, visit_object_label
- Methods in Label: abbreviation, _atf, status_string, accept, to_value, to_atf
- Methods in ColumnLabel: from_label, from_int, abbreviation, _atf, accept
- Methods in SurfaceLabel: _check_text, from_label, abbreviation, _atf, accept, to_atf
- Methods in ObjectLabel: _check_text, from_object, abbreviation, _atf, accept, to_atf
- Functions: no_duplicate_status, convert_status_sequence

### `ebl/transliteration/domain/language.py`

- Lines: 44
- Imports: enum.Enum, enum.auto
- Classes: Language
- Methods in Language: lemmatizable, of_atf

### `ebl/transliteration/domain/language_visitor.py`

- Lines: 47
- Imports: ebl.transliteration.domain.greek_tokens.GreekWord, ebl.transliteration.domain.language.DEFAULT_LANGUAGE, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, ebl.transliteration.domain.word_tokens.Word, typing.Iterable, typing.List, typing.Sequence, typing.Union
- Classes: LanguageVisitor
- Methods in LanguageVisitor: __init__, tokens, visit, visit_language_shift, visit_word, visit_greek_word, _append
- Functions: set_language

### `ebl/transliteration/domain/line.py`

- Lines: 70
- Imports: abc.ABC, abc.abstractmethod, attr, ebl.fragmentarium.domain.token_annotation.LineLemmaAnnotation, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.alignment.AlignmentToken, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.tokens.TokenVisitor, typing.Sequence, typing.Tuple, typing.TypeVar
- Constants: L
- Classes: Line, ControlLine, EmptyLine
- Methods in Line: atf, lemmatization, key, update_lemmatization, update_lemma_annotation, update_alignment, merge, update_alignments, accept
- Methods in ControlLine: atf, lemmatization
- Methods in EmptyLine: atf, lemmatization

### `ebl/transliteration/domain/line_label.py`

- Lines: 53
- Imports: attr, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line_number.AbstractLineNumber, typing.Optional
- Classes: LineLabel
- Methods in LineLabel: set_column, set_surface, set_object, set_line_number, set_line_index, set_seal, formatted_label

### `ebl/transliteration/domain/line_number.py`

- Lines: 67
- Imports: abc.ABC, abc.abstractmethod, attr, ebl.bibliography.domain.reference.Reference, typing.Optional
- Classes: AbstractLineNumber, LineNumber, LineNumberRange, OldLineNumber
- Methods in AbstractLineNumber: label, is_beginning_of_side, atf, is_matching_number
- Methods in LineNumber: label, is_beginning_of_side, is_matching_number
- Methods in LineNumberRange: label, is_beginning_of_side, is_matching_number

### `ebl/transliteration/domain/line_transformer.py`

- Lines: 44
- Imports: ebl.transliteration.domain.at_line_transformer.AtLineTransformer, ebl.transliteration.domain.dollar_line_transformer.DollarLineTransformer, ebl.transliteration.domain.line.ControlLine, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.note_line_transformer.NoteLineTransformer, ebl.transliteration.domain.parallel_line_transformer.ParallelLineTransformer, ebl.transliteration.domain.text_line_transformer.TextLineTransformer, ebl.transliteration.domain.translation_line_transformer.TranslationLineTransformer, lark.exceptions.ParseError, lark.visitors.VisitError, lark.visitors.v_args
- Classes: LineTransformer
- Methods in LineTransformer: __init__, transform, empty_line, control_line, ebl_atf_translation_line__legacy_translation_block_line

### `ebl/transliteration/domain/markup.py`

- Lines: 192
- Imports: abc.ABC, abc.abstractmethod, attr, ebl.bibliography.domain.reference.BibliographyId, ebl.bibliography.domain.reference.Reference, ebl.bibliography.domain.reference.ReferenceType, ebl.transliteration.domain.atf_visitor.convert_to_atf, ebl.transliteration.domain.enclosure_visitor.set_enclosure_type, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.language_visitor.set_language, ebl.transliteration.domain.tokens.Token, re, typing.Iterable, typing.Pattern, typing.Sequence, typing.Tuple, typing.TypeVar
- Constants: MP, TP
- Classes: MarkupPart, TextPart, StringPart, MarkupTokenPart, EmphasisPart, SuperscriptPart, SubscriptPart, BoldPart, LanguagePart, BibliographyPart, ParagraphPart, UrlPart
- Methods in MarkupPart: value, key, rstrip, title_case
- Methods in TextPart: rstrip, title_case
- Methods in StringPart: value
- Methods in MarkupTokenPart: value
- Methods in LanguagePart: code, value, key, of_transliteration
- Methods in BibliographyPart: validate_reference, value, of
- Functions: escape, titlecase, convert_part_sequence, rstrip, title_case, to_title

### `ebl/transliteration/domain/museum_number.py`

- Lines: 103
- Imports: attr, functools, math, re, typing.Mapping, typing.Tuple
- Classes: MuseumNumber
- Methods in MuseumNumber: __lt__, __str__, __eq__, _prefix_order, _number_order, _suffix_order, of
- Functions: _is_not_empty, _does_not_contain_period, _require_suffix_if_contains_period

### `ebl/transliteration/domain/normalized_akkadian.py`

- Lines: 124
- Imports: abc.abstractmethod, attr, ebl.lemmatization.domain.lemmatization.Lemma, ebl.transliteration.domain.atf.Flag, ebl.transliteration.domain.enclosure_tokens.Enclosure, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, ebl.transliteration.domain.word_tokens.AbstractWord, pydash, typing.Optional, typing.Sequence, typing.Type, typing.TypeVar
- Constants: B
- Classes: AkkadianWord, Break, Caesura, MetricalFootSeparator
- Methods in AkkadianWord: _validate_modifiers, language, normalized, value, accept, of
- Methods in Break: _symbol, parts, value, of, certain, uncertain
- Methods in Caesura: _symbol, accept
- Methods in MetricalFootSeparator: _symbol, accept

### `ebl/transliteration/domain/note_line.py`

- Lines: 27
- Imports: attr, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.markup.convert_part_sequence, typing.Sequence
- Classes: NoteLine
- Methods in NoteLine: key, atf, lemmatization

### `ebl/transliteration/domain/note_line_transformer.py`

- Lines: 98
- Imports: ebl.bibliography.domain.reference.BibliographyId, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.markup.BibliographyPart, ebl.transliteration.domain.markup.BoldPart, ebl.transliteration.domain.markup.EmphasisPart, ebl.transliteration.domain.markup.LanguagePart, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.markup.StringPart, ebl.transliteration.domain.markup.SubscriptPart, ebl.transliteration.domain.markup.SuperscriptPart, ebl.transliteration.domain.markup.UrlPart, ebl.transliteration.domain.note_line.NoteLine, lark.Tree, lark.lexer.Token, lark.visitors.Transformer, lark.visitors.v_args, typing.Sequence
- Constants: MARKUP_PREFIXES, NOTE_LINE_PREFIXES
- Classes: MarkupTransformer, NoteLineTransformer
- Methods in MarkupTransformer: __init__, markup, ebl_atf_note_line__markup, ebl_atf_note_line__language_part, ebl_atf_note_line__markup_token_part, ebl_atf_note_line__string_part, ebl_atf_note_line__bibliography_part, ebl_atf_note_line__note_text, ebl_atf_note_line__url_part, ebl_atf_note_line__url
- Methods in NoteLineTransformer: __init__, note_line

### `ebl/transliteration/domain/parallel_line.py`

- Lines: 110
- Imports: abc.abstractmethod, attr, ebl.common.domain.stage.Stage, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.labels.ObjectLabel, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_number.AbstractLineNumber, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text_id.TextId, typing.Optional, typing.Sequence, typing.Tuple
- Classes: ChapterName, ParallelLine, Labels, ParallelFragment, ParallelText, ParallelComposition
- Methods in ChapterName: __str__
- Methods in ParallelLine: display_value, atf, lemmatization
- Methods in Labels: all, __str__
- Methods in ParallelFragment: display_value
- Methods in ParallelText: display_value
- Methods in ParallelComposition: display_value

### `ebl/transliteration/domain/parallel_line_transformer.py`

- Lines: 81
- Imports: ebl.common.domain.stage.Stage, ebl.transliteration.domain.common_transformer.CommonTransformer, ebl.transliteration.domain.genre.Genre, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.parallel_line.ChapterName, ebl.transliteration.domain.parallel_line.Labels, ebl.transliteration.domain.parallel_line.ParallelComposition, ebl.transliteration.domain.parallel_line.ParallelFragment, ebl.transliteration.domain.parallel_line.ParallelText, ebl.transliteration.domain.text_id.TextId, lark.visitors.v_args, roman
- Classes: ParallelLineTransformer
- Methods in ParallelLineTransformer: __init__, ebl_atf_parallel_line__parallel_fragment, ebl_atf_parallel_line__museum_number, ebl_atf_parallel_line__parallel_text, ebl_atf_parallel_line__text_id, ebl_atf_parallel_line__chapter_name, chapter_name, _transform_chapter_name, ebl_atf_parallel_line__parallel_composition

### `ebl/transliteration/domain/side.py`

- Lines: 7
- Imports: enum.Enum, enum.auto
- Classes: Side

### `ebl/transliteration/domain/sign.py`

- Lines: 83
- Imports: attr, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.museum_number.MuseumNumber, typing.NewType, typing.Optional, typing.Sequence
- Classes: SignListRecord, Value, Logogram, Fossey, SortKeys, Sign
- Methods in Sign: standardization, set_logograms

### `ebl/transliteration/domain/sign_tokens.py`

- Lines: 278
- Imports: attr, ebl.transliteration.domain.atf, ebl.transliteration.domain.atf.to_sub_index, ebl.transliteration.domain.converters.convert_flag_sequence, ebl.transliteration.domain.converters.convert_string_sequence, ebl.transliteration.domain.converters.convert_token_sequence, ebl.transliteration.domain.enclosure_tokens.BrokenAway, ebl.transliteration.domain.sign.SignName, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, ebl.transliteration.domain.tokens.ValueToken, typing.Optional, typing.Sequence, typing.Union
- Classes: AbstractSign, Divider, NamedSign, Reading, Logogram, Number, Grapheme, CompoundGrapheme
- Methods in AbstractSign: string_flags
- Methods in Divider: value, parts, clean_value, string_flags, accept, of
- Methods in NamedSign: _check_sub_index, name, clean_value, parts, value, accept
- Methods in Reading: of, of_name
- Methods in Logogram: value, clean_value, _surrogate_value, of, of_name
- Methods in Number: accept, of, of_name
- Methods in Grapheme: __str__, value, clean_value, parts, accept, of
- Methods in CompoundGrapheme: name, value, parts, accept, of

### `ebl/transliteration/domain/signs_transformer.py`

- Lines: 142
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.atf.sub_index_to_int, ebl.transliteration.domain.atf.to_sub_index, ebl.transliteration.domain.egyptian_metrical_feet_separator_token.EgyptianMetricalFeetSeparator, ebl.transliteration.domain.sign_tokens.CompoundGrapheme, ebl.transliteration.domain.sign_tokens.Grapheme, ebl.transliteration.domain.sign_tokens.Logogram, ebl.transliteration.domain.sign_tokens.Number, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.UnknownNumberOfSigns, ebl.transliteration.domain.tokens.ValueToken, ebl.transliteration.domain.unknown_sign_tokens.UnclearSign, ebl.transliteration.domain.unknown_sign_tokens.UnidentifiedSign, lark.Tree, lark.visitors.Transformer, lark.visitors.v_args, re, typing.Sequence
- Classes: SignTransformer
- Methods in SignTransformer: __init__, ebl_atf_text_line__unidentified_sign, ebl_atf_text_line__egyptian_metrical_feet_separator, ebl_atf_text_line__unclear_sign, ebl_atf_text_line__unknown_number_of_signs, ebl_atf_text_line__joiner, ebl_atf_text_line__reading, ebl_atf_text_line__value_name_part, ebl_atf_text_line__logogram, ebl_atf_text_line__surrogate, ebl_atf_text_line__logogram_name_part, ebl_atf_text_line__number, ebl_atf_text_line__number_name_head, ebl_atf_text_line__number_name_part, ebl_atf_text_line__sub_index, ebl_atf_text_line__modifier, ebl_atf_text_line__modifiers, ebl_atf_text_line__flags, ebl_atf_text_line__grapheme, ebl_atf_text_line__sub_compound, ebl_atf_text_line__compound_grapheme, _parsed_graphemes_to_parts, _flatten_grapheme_elements
- Functions: tree_to_string

### `ebl/transliteration/domain/standardization.py`

- Lines: 44
- Imports: attr, ebl.transliteration.domain.atf.VARIANT_SEPARATOR, ebl.transliteration.domain.sign.Sign, typing.Sequence
- Constants: INVALID, UNKNOWN
- Classes: Standardization
- Methods in Standardization: is_splittable, get_value, of_sign, of_string, escape_standardization
- Functions: is_splittable

### `ebl/transliteration/domain/text.py`

- Lines: 266
- Imports: attr, collections.defaultdict, ebl.fragmentarium.domain.named_entity.EntityAnnotationSpan, ebl.fragmentarium.domain.token_annotation.TextLemmaAnnotation, ebl.lemmatization.domain.lemmatization.Lemmatization, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.merger.Merger, ebl.transliteration.domain.at_line.ColumnAtLine, ebl.transliteration.domain.at_line.ObjectAtLine, ebl.transliteration.domain.at_line.SealAtLine, ebl.transliteration.domain.at_line.SurfaceAtLine, ebl.transliteration.domain.atf.ATF_PARSER_VERSION, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_label.LineLabel, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.translation_line.Extent, ebl.transliteration.domain.translation_line.TranslationLine, ebl.transliteration.domain.transliteration_error.ErrorAnnotation
- Classes: LabelsValidator, Text
- Methods in LabelsValidator: __init__, get_errors, _get_overlaps, _get_index, _validate_line, _, _, _validate_extent
- Methods in Text: _validate_extents, number_of_lines, text_lines, lemmatization, atf, labels, is_empty, update_lemmatization, update_lemma_annotation, merge, set_parser_version, _get_max_token_id, set_token_ids, of_iterable, set_named_entities
- Functions: set_id

### `ebl/transliteration/domain/text_id.py`

- Lines: 17
- Imports: attr, ebl.transliteration.domain.genre.Genre, roman
- Classes: TextId
- Methods in TextId: __str__

### `ebl/transliteration/domain/text_line.py`

- Lines: 165
- Imports: attr, ebl.fragmentarium.domain.token_annotation.LineLemmaAnnotation, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.merger.Merger, ebl.transliteration.domain.alignment.AlignmentError, ebl.transliteration.domain.alignment.AlignmentToken, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.atf_visitor.convert_to_atf, ebl.transliteration.domain.enclosure_visitor.set_enclosure_type, ebl.transliteration.domain.language_visitor.set_language, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_number.AbstractLineNumber, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, ebl.transliteration.domain.word_tokens.AbstractWord, ebl.transliteration.domain.word_tokens.Word, itertools.zip_longest, pydash, typing.Callable
- Constants: L, T
- Classes: TextLine
- Methods in TextLine: key, content, of_iterable, atf, lemmatization, update_lemmatization, update_lemma_annotation, update_alignment, _update_tokens, merge, update_alignments, accept, set_named_entities
- Functions: update_tokens, merge_tokens

### `ebl/transliteration/domain/text_line_transformer.py`

- Lines: 228
- Imports: ebl.transliteration.domain.atf, ebl.transliteration.domain.atf.Flag, ebl.transliteration.domain.atf_parsers.lark.tokens_to_value_tokens, ebl.transliteration.domain.common_transformer.CommonTransformer, ebl.transliteration.domain.enclosure_tokens.Emendation, ebl.transliteration.domain.enclosure_transformer.EnclosureTransformer, ebl.transliteration.domain.enclosure_transformer.GlossTransformer, ebl.transliteration.domain.greek_tokens.GreekLetter, ebl.transliteration.domain.greek_tokens.GreekWord, ebl.transliteration.domain.normalized_akkadian.AkkadianWord, ebl.transliteration.domain.normalized_akkadian.Caesura, ebl.transliteration.domain.normalized_akkadian.MetricalFootSeparator, ebl.transliteration.domain.sign_tokens.Divider, ebl.transliteration.domain.signs_transformer.SignTransformer, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.Column, ebl.transliteration.domain.tokens.CommentaryProtocol, ebl.transliteration.domain.tokens.Joiner, ebl.transliteration.domain.tokens.LanguageShift, ebl.transliteration.domain.tokens.LineBreak
- Constants: NOTE_LINE_PREFIXES, TEXT_LINE_PREFIXES
- Classes: WordTransformer, NormalizedAkkadianTransformer, GreekTransformer, TextLineTransformer
- Methods in WordTransformer: __init__, ebl_atf_text_line__lone_determinative, ebl_atf_text_line__word, _create_word, ebl_atf_text_line__joiner, ebl_atf_text_line__in_word_newline, ebl_atf_text_line__variant, ebl_atf_text_line__inline_erasure
- Methods in NormalizedAkkadianTransformer: __init__, ebl_atf_text_line__text, ebl_atf_text_line__certain_caesura, ebl_atf_text_line__uncertain_caesura, ebl_atf_text_line__certain_foot_separator, ebl_atf_text_line__uncertain_foot_separator, ebl_atf_text_line__akkadian_word, ebl_atf_text_line__normalized_modifiers, ebl_atf_text_line__normalized_modifier, ebl_atf_text_line__akkadian_string, ebl_atf_text_line__separator, ebl_atf_text_line__open_emendation, ebl_atf_text_line__close_emendation
- Methods in GreekTransformer: __init__, ebl_atf_text_line__greek_word, ebl_atf_text_line__greek_letter
- Methods in TextLineTransformer: __init__, text_line, ebl_atf_text_line__text, ebl_atf_text_line__language_shift, ebl_atf_text_line__normalized_akkadian_shift, ebl_atf_text_line__greek_shift, ebl_atf_text_line__word_omitted, ebl_atf_text_line__tabulation, ebl_atf_text_line__commentary_protocol, ebl_atf_text_line__divider, ebl_atf_text_line__line_break, ebl_atf_text_line__column_token, ebl_atf_text_line__divider_variant

### `ebl/transliteration/domain/tokens.py`

- Lines: 365
- Imports: abc.ABC, abc.abstractmethod, attr, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf, ebl.transliteration.domain.enclosure_type.EnclosureType, ebl.transliteration.domain.language.Language, enum.Enum, enum.auto, typing.AbstractSet, typing.Optional, typing.Sequence, typing.Type, typing.TypeVar
- Constants: T, VT
- Classes: TokenVisitor, ErasureState, Token, ValueToken, LanguageShift, UnknownNumberOfSigns, WordOmitted, Tabulation, CommentaryProtocol, Column, Variant, Joiner, LineBreak
- Methods in TokenVisitor: visit, visit_word, visit_language_shift, visit_document_oriented_gloss, visit_broken_away, visit_perhaps_broken_away, visit_accidental_omission, visit_intentional_omission, visit_removal, visit_emendation, visit_erasure, visit_divider, visit_egyptian_metrical_feet_separator, visit_line_break, visit_commentary_protocol, visit_variant, visit_gloss, visit_named_sign, visit_number, visit_grapheme, visit_compound_grapheme, visit_unknown_sign, visit_akkadian_word, visit_greek_word, visit_metrical_foot_separator
- Methods in Token: value, parts, clean_value, lemmatizable, alignable, get_key, set_unique_lemma, update_alignment, set_enclosure_type, set_erasure, merge, accept
- Methods in ValueToken: value, parts, of
- Methods in LanguageShift: language, normalized, accept, normalized_akkadian
- Methods in UnknownNumberOfSigns: value, parts, of
- Methods in WordOmitted: value, parts, of
- Methods in Tabulation: value, parts, of
- Methods in CommentaryProtocol: protocol, accept
- Methods in Column: of, _check_number, value, parts

### `ebl/transliteration/domain/translation_line.py`

- Lines: 64
- Imports: attr, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.label_validator.validate_labels, ebl.transliteration.domain.labels.ColumnLabel, ebl.transliteration.domain.labels.Label, ebl.transliteration.domain.labels.SurfaceLabel, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_number.AbstractLineNumber, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.markup.convert_part_sequence, pydash, typing.Optional, typing.Sequence
- Constants: DEFAULT_LANGUAGE
- Classes: Extent, TranslationLine
- Methods in Extent: column, surface, __str__
- Methods in TranslationLine: translation, prefix, atf, lemmatization

### `ebl/transliteration/domain/translation_line_transformer.py`

- Lines: 24
- Imports: ebl.transliteration.domain.common_transformer.CommonTransformer, ebl.transliteration.domain.markup.MarkupPart, ebl.transliteration.domain.note_line_transformer.MarkupTransformer, ebl.transliteration.domain.translation_line.Extent, ebl.transliteration.domain.translation_line.TranslationLine, lark.visitors.v_args
- Classes: TranslationLineTransformer
- Methods in TranslationLineTransformer: __init__, translation_line, ebl_atf_translation_line__translation_extent

### `ebl/transliteration/domain/transliteration_error.py`

- Lines: 29
- Imports: typing.List, typing.Sequence
- Classes: ErrorAnnotation, TransliterationError, DuplicateLabelError, ExtentLabelError
- Methods in ErrorAnnotation: __init__, to_dict
- Methods in TransliterationError: __init__

### `ebl/transliteration/domain/transliteration_query.py`

- Lines: 217
- Imports: __future__.annotations, attr, collections.OrderedDict, ebl.errors.DataError, ebl.transliteration.domain.atf_parsers.lark_parser.parse_line, ebl.transliteration.domain.text_line.TextLine, ebl.transliteration.domain.tokens.TokenVisitor, enum.Enum, re, typing.List, typing.Sequence, typing.Tuple, typing.cast
- Classes: Type, TransliterationQuery, TransliterationQueryText, TransliterationQueryWildCard, TransliterationQueryLine, TransliterationQueryEmpty
- Methods in TransliterationQuery: __attrs_post_init__, _regexp, _classify, all_wildcards, is_empty, sign_names, children_regexp, create_children, create_inline_children, get_children_from_segments, match, get_line_number, make_transliteration_query_line, make_transliteration_query_text, make_transliteration_query_wildcard
- Methods in TransliterationQueryText: _regexp, sign_names, _create_sign_regexp, _create_signs, _parse
- Methods in TransliterationQueryWildCard: sign_names, _regexp, _regexp_alternative
- Methods in TransliterationQueryLine: _classify, _regexp
- Methods in TransliterationQueryEmpty: __attrs_post_init__

### `ebl/transliteration/domain/unknown_sign_tokens.py`

- Lines: 56
- Imports: abc.abstractmethod, attr, ebl.transliteration.domain.atf, ebl.transliteration.domain.converters.convert_flag_sequence, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, typing.Sequence, typing.Type, typing.TypeVar
- Constants: T
- Classes: UnknownSign, UnidentifiedSign, UnclearSign
- Methods in UnknownSign: clean_value, of, parts, _sign, string_flags, value, accept
- Methods in UnidentifiedSign: _sign
- Methods in UnclearSign: _sign

### `ebl/transliteration/domain/word_tokens.py`

- Lines: 209
- Imports: abc.abstractmethod, attr, ebl.lemmatization.domain.lemmatization.Lemma, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.lemmatization.domain.lemmatization.LemmatizationToken, ebl.transliteration.domain.atf, ebl.transliteration.domain.converters.convert_token_sequence, ebl.transliteration.domain.language.Language, ebl.transliteration.domain.tokens.ErasureState, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.tokens.TokenVisitor, typing.Optional, typing.Sequence, typing.Type, typing.TypeVar, typing.cast
- Constants: A, T, W
- Classes: AbstractWord, Word, LoneDeterminative, InWordNewline
- Methods in AbstractWord: language, normalized, parts, clean_value, has_variant, lemmatizable, set_unique_lemma, set_alignment, set_has_variant_alignment, set_has_omitted_alignment, update_alignment, merge, _merge_word, _is_compatible, set_id
- Methods in Word: of, language, normalized, value, set_language, accept
- Methods in LoneDeterminative: of_value, lemmatizable
- Methods in InWordNewline: value, parts, of

### `ebl/transliteration/infrastructure/__init__.py`

- Lines: 0

### `ebl/transliteration/infrastructure/collections.py`

- Lines: 4
- Constants: CHAPTERS_COLLECTION, FINDSPOTS_COLLECTION, FRAGMENTS_COLLECTION, TEXTS_COLLECTION

### `ebl/transliteration/infrastructure/mongo_parallel_repository.py`

- Lines: 66
- Imports: ebl.errors.NotFoundError, ebl.mongo_collection.MongoCollection, ebl.transliteration.application.parallel_line_injector.ParallelRepository, ebl.transliteration.application.parallel_line_schemas.ChapterNameSchema, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.parallel_line.ChapterName, ebl.transliteration.domain.text_id.TextId, ebl.transliteration.infrastructure.collections.CHAPTERS_COLLECTION, ebl.transliteration.infrastructure.collections.FRAGMENTS_COLLECTION, ebl.transliteration.infrastructure.queries.query_number_is, pymongo.database.Database
- Classes: MongoParallelRepository
- Methods in MongoParallelRepository: __init__, fragment_exists, find_implicit_chapter, chapter_exists

### `ebl/transliteration/infrastructure/queries.py`

- Lines: 48
- Imports: ebl.common.application.schemas.AccessionSchema, ebl.common.domain.accession.Accession, ebl.fragmentarium.application.archaeology_schemas.ExcavationNumberSchema, ebl.fragmentarium.domain.archaeology.ExcavationNumber, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.domain.museum_number.MuseumNumber, functools.singledispatch
- Functions: query_number_is, replace_suffix, build_query, _, _, _

