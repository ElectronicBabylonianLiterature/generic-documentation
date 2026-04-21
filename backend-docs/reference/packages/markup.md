# Package Reference: ebl/markup

- Files: 5
- Total lines: 58

## File-Level API Summary

### `ebl/markup/__init__.py`

- Lines: 0

### `ebl/markup/domain/__init__.py`

- Lines: 0

### `ebl/markup/domain/converters.py`

- Lines: 23
- Imports: ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema, ebl.transliteration.domain.atf_parsers.lark_parser.parse_markup_paragraphs, ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS, ebl.transliteration.domain.markup.MarkupPart, marshmallow.ValidationError, typing.Dict, typing.Sequence
- Functions: markup_from_string, markup_to_json, markup_string_to_json

### `ebl/markup/web/__init__.py`

- Lines: 0

### `ebl/markup/web/bootstrap.py`

- Lines: 35
- Imports: ebl.cache.application.cache.DAILY_TIMEOUT, ebl.context.Context, ebl.markup.domain.converters.markup_string_to_json, falcon, falcon.Request, falcon.Response, falcon_caching.Cache, json
- Classes: Markup, CachedMarkup
- Methods in Markup: on_get
- Methods in CachedMarkup: __init__, on_get
- Functions: create_markup_routes

