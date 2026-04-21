# File Reference: ebl/corpus/web/chapter_schemas.py

- Lines: 280
- Characters: 10099

## Top-Level Symbols

- Classes: MuseumNumberString, ApiOldSiglumSchema, ApiManuscriptSchema, ApiManuscriptLineSchema, LineNumberString, ApiLineVariantSchema, ApiLineSchema, ApiChapterSchema
- Functions: _deserialize_transliteration, _serialize_number, _serialize_atf, _split_reconstruction, _parse_reconstruction, deserialize_translation
- Constants: None

## Methods by Class

- MuseumNumberString: _serialize, _deserialize
- ApiOldSiglumSchema: No methods
- ApiManuscriptSchema: No methods
- ApiManuscriptLineSchema: make_manuscript_line
- LineNumberString: _serialize, _deserialize
- ApiLineVariantSchema: make_line_variant
- ApiLineSchema: make_line
- ApiChapterSchema: No methods

## Imports

- ebl.bibliography.application.reference_schema.ApiReferenceSchema
- ebl.corpus.application.schemas.ChapterSchema
- ebl.corpus.application.schemas.LineVariantSchema
- ebl.corpus.application.schemas.ManuscriptSchema
- ebl.corpus.application.schemas.OldSiglumSchema
- ebl.corpus.application.schemas.labels
- ebl.corpus.application.schemas.manuscript_id
- ebl.corpus.domain.line.Line
- ebl.corpus.domain.line_variant.LineVariant
- ebl.corpus.domain.manuscript_line.ManuscriptLine
- ebl.corpus.domain.parser.parse_paratext
- ebl.fragmentarium.application.joins_schema.JoinsSchema
- ebl.fragmentarium.domain.joins.Joins
- ebl.markup.domain.converters.markup_from_string
- ebl.transliteration.application.line_number_schemas.OldLineNumberSchema
- ebl.transliteration.application.one_of_line_schema.OneOfLineSchema
- ebl.transliteration.application.token_schemas.OneOfTokenSchema
- ebl.transliteration.domain.atf_parsers.lark_parser.TransliterationError
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_line_number
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_note_line
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_parallel_line
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_text_line
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_translation_line
- ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS
- ebl.transliteration.domain.atf_parsers.reconstructed_text_parser.parse_reconstructed_line
- ebl.transliteration.domain.atf_visitor.convert_to_atf
- ebl.transliteration.domain.line.EmptyLine
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.note_line.NoteLine
- ebl.transliteration.domain.parallel_line.ParallelLine
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.translation_line.TranslationLine
- lark.exceptions.ParseError
- lark.exceptions.UnexpectedInput
- marshmallow.EXCLUDE
- marshmallow.Schema
- marshmallow.ValidationError
- marshmallow.fields
- marshmallow.post_load
- marshmallow.validate
- typing.Optional
- typing.Sequence
- typing.Tuple

