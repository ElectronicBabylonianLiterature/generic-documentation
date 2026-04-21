# File Reference: ebl/transliteration/domain/transliteration_query.py

- Lines: 217
- Characters: 7127

## Top-Level Symbols

- Classes: Type, TransliterationQuery, TransliterationQueryText, TransliterationQueryWildCard, TransliterationQueryLine, TransliterationQueryEmpty
- Functions: None
- Constants: None

## Methods by Class

- Type: No methods
- TransliterationQuery: __attrs_post_init__, _regexp, _classify, all_wildcards, is_empty, sign_names, children_regexp, create_children, create_inline_children, get_children_from_segments, match, get_line_number, make_transliteration_query_line, make_transliteration_query_text, make_transliteration_query_wildcard
- TransliterationQueryText: _regexp, sign_names, _create_sign_regexp, _create_signs, _parse
- TransliterationQueryWildCard: sign_names, _regexp, _regexp_alternative
- TransliterationQueryLine: _classify, _regexp
- TransliterationQueryEmpty: __attrs_post_init__

## Imports

- __future__.annotations
- attr
- collections.OrderedDict
- ebl.errors.DataError
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_line
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.tokens.TokenVisitor
- enum.Enum
- re
- typing.List
- typing.Sequence
- typing.Tuple
- typing.cast

