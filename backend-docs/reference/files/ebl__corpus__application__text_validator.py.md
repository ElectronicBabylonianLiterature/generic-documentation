# File Reference: ebl/corpus/application/text_validator.py

- Lines: 122
- Characters: 3833

## Top-Level Symbols

- Classes: AlignmentVisitor, TextValidator
- Functions: data_error, create_error_message
- Constants: None

## Methods by Class

- AlignmentVisitor: __init__, visit_word, visit_greek_word, validate
- TextValidator: __init__, line, chapter, visit, _visit_chapter, _visit_line, _visit_line_variant, _visit_manuscript_line

## Imports

- ebl.corpus.domain.chapter.Chapter
- ebl.corpus.domain.chapter.ChapterItem
- ebl.corpus.domain.chapter.ChapterVisitor
- ebl.corpus.domain.chapter.TextLineEntry
- ebl.corpus.domain.line.Line
- ebl.corpus.domain.line_variant.LineVariant
- ebl.corpus.domain.manuscript.Siglum
- ebl.corpus.domain.manuscript_line.ManuscriptLine
- ebl.errors.DataError
- ebl.errors.Defect
- ebl.transliteration.domain.alignment.AlignmentError
- ebl.transliteration.domain.greek_tokens.GreekWord
- ebl.transliteration.domain.line_number.AbstractLineNumber
- ebl.transliteration.domain.tokens.TokenVisitor
- ebl.transliteration.domain.word_tokens.Word
- functools.singledispatchmethod
- pydash
- typing.Optional

