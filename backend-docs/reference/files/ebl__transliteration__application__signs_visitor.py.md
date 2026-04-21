# File Reference: ebl/transliteration/application/signs_visitor.py

- Lines: 213
- Characters: 7285

## Top-Level Symbols

- Classes: SignsVisitor
- Functions: strip_flags, skip_enclosures, skip_erasures
- Constants: S, T

## Methods by Class

- SignsVisitor: result, result_string, result_unicode, visit_word, visit_gloss, visit_unknown_sign, visit_named_sign, visit_number, visit_compound_grapheme, _visit_compound_grapheme_part, visit_grapheme, visit_divider, visit_variant, _visit_variant, _visit_sign, _find, _visit_tokens

## Imports

- attr
- ebl.errors.NotFoundError
- ebl.transliteration.application.sign_repository.SignRepository
- ebl.transliteration.domain.atf.Flag
- ebl.transliteration.domain.atf.VARIANT_SEPARATOR
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_compound_grapheme
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_reading
- ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS
- ebl.transliteration.domain.enclosure_tokens.Gloss
- ebl.transliteration.domain.enclosure_type.EnclosureType
- ebl.transliteration.domain.sign.Sign
- ebl.transliteration.domain.sign.SignName
- ebl.transliteration.domain.sign_tokens.CompoundGrapheme
- ebl.transliteration.domain.sign_tokens.Divider
- ebl.transliteration.domain.sign_tokens.Grapheme
- ebl.transliteration.domain.sign_tokens.NamedSign
- ebl.transliteration.domain.sign_tokens.Number
- ebl.transliteration.domain.standardization.INVALID
- ebl.transliteration.domain.standardization.Standardization
- ebl.transliteration.domain.standardization.UNKNOWN
- ebl.transliteration.domain.standardization.is_splittable
- ebl.transliteration.domain.tokens.ErasureState
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.tokens.TokenVisitor
- ebl.transliteration.domain.tokens.Variant
- ebl.transliteration.domain.unknown_sign_tokens.UnknownSign
- ebl.transliteration.domain.word_tokens.Word
- pydash.flat_map_deep
- re
- typing.Callable
- typing.MutableSequence
- typing.Optional
- typing.Sequence
- typing.TypeVar
- typing.Union

