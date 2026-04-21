# File Reference: ebl/tests/corpus/test_chapter_schema.py

- Lines: 212
- Characters: 8534

## Top-Level Symbols

- Classes: None
- Functions: strip_document, strip_documents, get_museum_number, to_dict, test_dump, test_load, test_author_schema, test_translator_schema
- Constants: REFERENCES, MANUSCRIPT, UNCERTAIN_FRAGMENTS, FIRST_MANUSCRIPT_LINE, SECOND_MANUSCRIPT_LINE, LINE_VARIANT, TRANSLATION_LINE, LINE, CHAPTER

## Imports

- attr
- ebl.bibliography.application.reference_schema.ApiReferenceSchema
- ebl.bibliography.application.reference_schema.ReferenceSchema
- ebl.bibliography.domain.reference.Reference
- ebl.corpus.application.record_schemas.AuthorSchema
- ebl.corpus.application.record_schemas.RecordSchema
- ebl.corpus.application.record_schemas.TranslatorSchema
- ebl.corpus.application.schemas.ChapterSchema
- ebl.corpus.application.schemas.OldSiglumSchema
- ebl.corpus.domain.chapter.Chapter
- ebl.corpus.domain.manuscript.Manuscript
- ebl.corpus.domain.record.Author
- ebl.corpus.domain.record.AuthorRole
- ebl.corpus.domain.record.Translator
- ebl.corpus.web.chapter_schemas.ApiOldSiglumSchema
- ebl.tests.factories.bibliography.ReferenceFactory
- ebl.tests.factories.corpus.ChapterFactory
- ebl.tests.factories.corpus.LineFactory
- ebl.tests.factories.corpus.LineVariantFactory
- ebl.tests.factories.corpus.ManuscriptFactory
- ebl.tests.factories.corpus.ManuscriptLineFactory
- ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema
- ebl.transliteration.application.line_schemas.NoteLineSchema
- ebl.transliteration.application.line_schemas.TranslationLineSchema
- ebl.transliteration.application.museum_number_schema.MuseumNumberSchema
- ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema
- ebl.transliteration.application.one_of_line_schema.OneOfLineSchema
- ebl.transliteration.application.one_of_line_schema.ParallelLineSchema
- ebl.transliteration.application.text_schema.TextSchema
- ebl.transliteration.application.token_schemas.OneOfTokenSchema
- ebl.transliteration.domain.line_number.LineNumber
- ebl.transliteration.domain.markup.StringPart
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.parallel_line.ParallelComposition
- ebl.transliteration.domain.translation_line.TranslationLine

