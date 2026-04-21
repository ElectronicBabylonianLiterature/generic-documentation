# File Reference: ebl/corpus/web/alignment_schema.py

- Lines: 81
- Characters: 2822

## Top-Level Symbols

- Classes: AlignmentTokenSchema, ManuscriptAlignmentSchema, AlignmentSchema
- Functions: None
- Constants: None

## Methods by Class

- AlignmentTokenSchema: make_alignment_token, _create_variant, _create_word
- ManuscriptAlignmentSchema: make_manuscript_alignment
- AlignmentSchema: make_alignment

## Imports

- ebl.corpus.domain.alignment.Alignment
- ebl.corpus.domain.alignment.ManuscriptLineAlignment
- ebl.transliteration.domain.alignment.AlignmentToken
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_greek_word
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_normalized_akkadian_word
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_word
- ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS
- ebl.transliteration.domain.language.Language
- ebl.transliteration.domain.word_tokens.AbstractWord
- marshmallow.Schema
- marshmallow.ValidationError
- marshmallow.fields
- marshmallow.post_load
- typing.Optional

