# File Reference: ebl/tests/corpus/test_signs_updater.py

- Lines: 194
- Characters: 5471

## Top-Level Symbols

- Classes: None
- Functions: words_from_string, signs_updater, empty_text, manuscripts, variant_with_empty_manuscript_textline, variants, chapter_with_empty_manuscript_textline, chapter_with_line_without_manuscript_line, manuscript_with_colophon_lines, manuscript_with_unplaced_lines, chapter_with_colophon_lines, chapter_with_unplaced_lines, complex_chapter, update_and_serialize_signs, test_empty_manuscript, test_empty_textline, test_colophon_lines, test_unplaced_lines, test_signs_updater_completeness
- Constants: WORDS

## Imports

- ebl.corpus.application.schemas.ChapterSchema
- ebl.corpus.application.signs_updater.SignsUpdater
- ebl.corpus.domain.chapter.Chapter
- ebl.tests.factories.corpus.ChapterFactory
- ebl.tests.factories.corpus.LineFactory
- ebl.tests.factories.corpus.LineVariantFactory
- ebl.tests.factories.corpus.ManuscriptFactory
- ebl.tests.factories.corpus.ManuscriptLineFactory
- ebl.transliteration.domain.line_number.LineNumber
- ebl.transliteration.domain.sign_tokens.Reading
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.word_tokens.Word
- pytest
- typing.List
- typing.Optional

