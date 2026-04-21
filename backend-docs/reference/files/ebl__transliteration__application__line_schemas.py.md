# File Reference: ebl/transliteration/application/line_schemas.py

- Lines: 98
- Characters: 3258

## Top-Level Symbols

- Classes: LineBaseSchema, TextLineSchema, ControlLineSchema, EmptyLineSchema, NoteLineSchema, ExtentSchema, TranslationLineSchema
- Functions: None
- Constants: None

## Methods by Class

- LineBaseSchema: No methods
- TextLineSchema: make_line
- ControlLineSchema: make_line
- EmptyLineSchema: make_line
- NoteLineSchema: make_line
- ExtentSchema: make_extent
- TranslationLineSchema: make_line

## Imports

- ebl.transliteration.application.label_schemas.labels
- ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema
- ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema
- ebl.transliteration.application.token_schemas.OneOfTokenSchema
- ebl.transliteration.domain.line.ControlLine
- ebl.transliteration.domain.line.EmptyLine
- ebl.transliteration.domain.note_line.NoteLine
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.tokens.ValueToken
- ebl.transliteration.domain.translation_line.Extent
- ebl.transliteration.domain.translation_line.TranslationLine
- marshmallow.EXCLUDE
- marshmallow.Schema
- marshmallow.fields
- marshmallow.post_load

