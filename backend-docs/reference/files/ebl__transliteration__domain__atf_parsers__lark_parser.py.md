# File Reference: ebl/transliteration/domain/atf_parsers/lark_parser.py

- Lines: 254
- Characters: 8552

## Top-Level Symbols

- Classes: None
- Functions: parse_word, parse_normalized_akkadian_word, parse_greek_word, parse_compound_grapheme, parse_reading, parse_erasure, parse_line, parse_note_line, parse_markup, split_paragraphs, parse_markup_paragraphs, parse_parallel_line, parse_translation_line, parse_labels, parse_text_line, parse_line_number, validate_line, clean_line, parse_atf_lark, create_transliteration_error_data, _, _, _, _
- Constants: ATF_GRAMMAR_PATH, ATF_COMMON_PATH, LINE_PARSER_STARTS, WORD_PARSER, NOTE_LINE_PARSER, MARKUP_PARSER, PARALLEL_LINE_PARSER, TRANSLATION_LINE_PARSER, PARATEXT_PARSER, CHAPTER_PARSER, MANUSCRIPT_PARSER, LINE_PARSER, LINE_NUMBER_PARSER, LABEL_PARSER

## Imports

- ebl.transliteration.domain.atf
- ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS
- ebl.transliteration.domain.enclosure_error.EnclosureError
- ebl.transliteration.domain.enclosure_visitor.EnclosureValidator
- ebl.transliteration.domain.greek_tokens.GreekWord
- ebl.transliteration.domain.label_transformer.LabelTransformer
- ebl.transliteration.domain.labels.DuplicateStatusError
- ebl.transliteration.domain.labels.Label
- ebl.transliteration.domain.line.EmptyLine
- ebl.transliteration.domain.line.Line
- ebl.transliteration.domain.line_number.AbstractLineNumber
- ebl.transliteration.domain.line_transformer.LineTransformer
- ebl.transliteration.domain.markup.MarkupPart
- ebl.transliteration.domain.markup.ParagraphPart
- ebl.transliteration.domain.note_line.NoteLine
- ebl.transliteration.domain.parallel_line.ParallelLine
- ebl.transliteration.domain.sign_tokens.CompoundGrapheme
- ebl.transliteration.domain.sign_tokens.Reading
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.translation_line.TranslationLine
- ebl.transliteration.domain.transliteration_error.DuplicateLabelError
- ebl.transliteration.domain.transliteration_error.ErrorAnnotation
- ebl.transliteration.domain.transliteration_error.TransliterationError
- ebl.transliteration.domain.word_tokens.Word
- functools.singledispatch
- itertools.dropwhile
- lark.exceptions.ParseError
- lark.exceptions.UnexpectedInput
- lark.exceptions.VisitError
- lark.lark.Lark
- lark.lark.Tree
- pydash
- re
- typing.Iterator
- typing.Sequence

