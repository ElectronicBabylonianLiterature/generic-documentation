# File Reference: ebl/corpus/domain/chapter.py

- Lines: 251
- Characters: 8144

## Top-Level Symbols

- Classes: ChapterVisitor, Classification, TextLineEntry, ChapterId, Chapter
- Functions: make_title
- Constants: T

## Methods by Class

- ChapterVisitor: visit
- Classification: No methods
- TextLineEntry: No methods
- ChapterId: to_tuple, __str__
- Chapter: id_, text_lines, invalid_lines, extant_lines, manuscript_line_labels, get_manuscript, get_matching_lines, _get_matching_line_indexes, get_matching_colophon_lines, _get_matching_colophon_lines, merge, _get_extant_lines, _get_manuscript_text_lines, _match

## Imports

- attr
- ebl.common.domain.stage.Stage
- ebl.corpus.domain.chapter_query.ChapterQueryColophonLines
- ebl.corpus.domain.chapter_validators
- ebl.corpus.domain.extant_line.ExtantLine
- ebl.corpus.domain.line.Line
- ebl.corpus.domain.manuscript.Manuscript
- ebl.corpus.domain.manuscript.Siglum
- ebl.corpus.domain.manuscript_line.ManuscriptLine
- ebl.corpus.domain.manuscript_line.ManuscriptLineLabel
- ebl.corpus.domain.record.Record
- ebl.errors.NotFoundError
- ebl.merger.Merger
- ebl.transliteration.domain.markup.MarkupPart
- ebl.transliteration.domain.markup.to_title
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.text_id.TextId
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.translation_line.DEFAULT_LANGUAGE
- ebl.transliteration.domain.translation_line.TranslationLine
- ebl.transliteration.domain.transliteration_query.TransliterationQuery
- enum.Enum
- enum.unique
- pydash
- re
- typing.Iterator
- typing.Mapping
- typing.Optional
- typing.Sequence
- typing.Set
- typing.Tuple
- typing.TypeVar
- typing.Union

