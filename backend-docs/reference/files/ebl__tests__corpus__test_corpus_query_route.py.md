# File Reference: ebl/tests/corpus/test_corpus_query_route.py

- Lines: 267
- Characters: 6803

## Top-Level Symbols

- Classes: None
- Functions: word_with_lemma, query_item_of, test_query_chapter_lemmas, test_query_chapter_signs, test_query_chapter_lemmas_and_signs
- Constants: LEMMA_MANUSCRIPT, VARIANT_1, LINE_1, LINE_2, LINE_3, SIGNS, MANUSCRIPTS, VARIANT_LINES, LINES, CHAPTER_WITH_SIGNS_AND_LEMMAS

## Imports

- attr
- ebl.corpus.application.id_schemas.TextIdSchema
- ebl.corpus.domain.chapter.Chapter
- ebl.dictionary.domain.word.WordId
- ebl.tests.corpus.test_mongo_text_repository.LITERATURE_TEXT
- ebl.tests.factories.corpus.ChapterFactory
- ebl.tests.factories.corpus.LineFactory
- ebl.tests.factories.corpus.LineVariantFactory
- ebl.tests.factories.corpus.ManuscriptFactory
- ebl.tests.factories.corpus.ManuscriptLineFactory
- ebl.transliteration.domain.genre.Genre
- ebl.transliteration.domain.normalized_akkadian.AkkadianWord
- ebl.transliteration.domain.text_id.TextId
- ebl.transliteration.domain.tokens.ValueToken
- falcon
- pytest
- typing.List
- typing.Optional

