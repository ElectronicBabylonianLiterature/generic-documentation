# File Reference: ebl/corpus/application/lemmatization_updater.py

- Lines: 110
- Characters: 3935

## Top-Level Symbols

- Classes: LemmatizationUpdater
- Functions: None
- Constants: None

## Methods by Class

- LemmatizationUpdater: __init__, line_index, variant_index, manuscript_line_index, current_lemmatization, visit, _visit_line, _visit_line_variant, _visit_manuscript_line, _validate_chapter, _update_chapter, _after_chapter_update

## Imports

- attr
- ebl.corpus.application.chapter_updater.ChapterUpdater
- ebl.corpus.application.lemmatization.ChapterLemmatization
- ebl.corpus.domain.chapter.Chapter
- ebl.corpus.domain.chapter.ChapterItem
- ebl.corpus.domain.line.Line
- ebl.corpus.domain.line_variant.LineVariant
- ebl.corpus.domain.manuscript_line.ManuscriptLine
- ebl.lemmatization.domain.lemmatization.LemmatizationError
- ebl.lemmatization.domain.lemmatization.LemmatizationToken
- ebl.transliteration.domain.text_line.update_tokens
- functools.singledispatchmethod
- typing.List
- typing.Sequence

