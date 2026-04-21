# File Reference: ebl/corpus/web/lines.py

- Lines: 123
- Characters: 3985

## Top-Level Symbols

- Classes: LineEditSchema, LinesUpdateSchema, LinesImportSchema, LinesResource, LinesImportResource, LineResource
- Functions: None
- Constants: None

## Methods by Class

- LineEditSchema: make_line_edit
- LinesUpdateSchema: make_lines_update
- LinesImportSchema: No methods
- LinesResource: __init__, on_post
- LinesImportResource: __init__, on_post
- LineResource: __init__, on_get

## Imports

- ebl.cache.application.custom_cache.ChapterCache
- ebl.corpus.application.corpus.Corpus
- ebl.corpus.domain.line.Line
- ebl.corpus.domain.lines_update.LinesUpdate
- ebl.corpus.web.chapter_schemas.ApiChapterSchema
- ebl.corpus.web.chapter_schemas.ApiLineSchema
- ebl.corpus.web.display_schemas.LineDetailsDisplay
- ebl.corpus.web.display_schemas.LineDetailsDisplaySchema
- ebl.corpus.web.text_utils.create_chapter_id
- ebl.errors.NotFoundError
- ebl.marshmallowschema.validate
- ebl.users.web.require_scope.require_scope
- falcon
- marshmallow.Schema
- marshmallow.fields
- marshmallow.post_load
- typing.Tuple

