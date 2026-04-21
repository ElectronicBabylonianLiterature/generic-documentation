# File Reference: ebl/corpus/application/corpus.py

- Lines: 231
- Characters: 9086

## Top-Level Symbols

- Classes: Corpus
- Functions: None
- Constants: COLLECTION

## Methods by Class

- Corpus: __init__, find, find_chapter, find_chapter_for_display, find_line, find_line_with_manuscript_joins, find_manuscripts, find_manuscripts_with_joins, search_corpus_by_fragment, _inject_references_to_manuscripts, search_transliteration, search_lemma, query, list, list_all_texts, list_all_chapters, update_alignment, get_sign_data, get_all_sign_data, update_manuscript_lemmatization, update_manuscripts, import_lines, update_lines, _update_chapter, update_chapter, _validate_chapter, _inject_references, _create_changelog, _inject_parallels

## Imports

- attr
- ebl.common.query.query_result.CorpusQueryResult
- ebl.corpus.application.alignment_updater.AlignmentUpdater
- ebl.corpus.application.chapter_updater.ChapterUpdater
- ebl.corpus.application.lemmatization.ChapterLemmatization
- ebl.corpus.application.lemmatization_updater.LemmatizationUpdater
- ebl.corpus.application.lines_updater.LinesUpdater
- ebl.corpus.application.manuscript_reference_injector.ManuscriptReferenceInjector
- ebl.corpus.application.manuscripts_updater.ManuscriptUpdater
- ebl.corpus.application.schemas.ChapterSchema
- ebl.corpus.application.text_repository.CorpusFragmentsMapping
- ebl.corpus.application.text_repository.TextRepository
- ebl.corpus.application.text_validator.TextValidator
- ebl.corpus.domain.alignment.Alignment
- ebl.corpus.domain.chapter.Chapter
- ebl.corpus.domain.chapter.ChapterId
- ebl.corpus.domain.chapter_display.ChapterDisplay
- ebl.corpus.domain.chapter_info.ChapterInfo
- ebl.corpus.domain.chapter_info.ChapterInfosPagination
- ebl.corpus.domain.dictionary_line.DictionaryLine
- ebl.corpus.domain.line.Line
- ebl.corpus.domain.lines_update.LinesUpdate
- ebl.corpus.domain.manuscript.Manuscript
- ebl.corpus.domain.parser.parse_chapter
- ebl.corpus.domain.text.Text
- ebl.corpus.domain.text.TextId
- ebl.errors.DataError
- ebl.errors.Defect
- ebl.errors.NotFoundError
- ebl.transliteration.application.parallel_line_injector.ParallelLineInjector
- ebl.transliteration.application.sign_repository.SignRepository
- ebl.transliteration.domain.genre.Genre
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.transliteration_query.TransliterationQuery
- ebl.users.domain.user.User
- typing.List
- typing.Optional
- typing.Sequence
- typing.Tuple

