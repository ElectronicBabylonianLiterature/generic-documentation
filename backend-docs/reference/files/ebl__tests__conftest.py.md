# File Reference: ebl/tests/conftest.py

- Lines: 692
- Characters: 21076

## Top-Level Symbols

- Classes: TestWordRepository, TestBibliographyRepository, TestSignRepository, FakeFile, TestFilesRepository, EnsureAnnotationPost
- Functions: mongo_client, database, changelog, word_repository, dictionary, cropped_sign_images_repository, mongo_cache_repository, ebl_ai_client, bibliography_repository, bibliography, sign_repository, transliteration_factory, parallel_repository, parallel_line_injector, text_repository, corpus, fragment_repository, findspot_repository, findspots, fragmentarium, fragment_finder, fragment_matcher, fragment_updater, afo_register_repository, file, file_repository, folio_with_allowed_scope, folio_with_restricted_scope, folio_repository, photo, create_test_photo, photo_repository, thumbnail_repository, annotations_repository, lemma_repository, annotations_service, user, dossiers_repository, context, client, guest_client, cached_client, text_with_labels, word, make_changelog_entry, signs, create_mongo_bibliography_entry, named_entity_spans
- Constants: None

## Methods by Class

- TestWordRepository: query_by_lemma_prefix
- TestBibliographyRepository: query_by_author_year_and_title
- TestSignRepository: search_composite_signs
- FakeFile: __init__, length, content_type, metadata, close, read
- TestFilesRepository: __init__, _create
- EnsureAnnotationPost: on_post

## Imports

- PIL.Image
- attr
- datetime
- dictdiffer.diff
- ebl.afo_register.infrastructure.mongo_afo_register_repository.MongoAfoRegisterRepository
- ebl.app
- ebl.bibliography.application.bibliography.Bibliography
- ebl.bibliography.application.serialization.create_object_entry
- ebl.bibliography.infrastructure.bibliography.MongoBibliographyRepository
- ebl.cache.application.custom_cache.ChapterCache
- ebl.cache.infrastructure.mongo_cache_repository.MongoCacheRepository
- ebl.changelog.Changelog
- ebl.context
- ebl.corpus.application.corpus.Corpus
- ebl.corpus.infrastructure.mongo_text_repository.MongoTextRepository
- ebl.dictionary.application.dictionary_service.Dictionary
- ebl.dictionary.infrastructure.word_repository.MongoWordRepository
- ebl.dossiers.infrastructure.mongo_dossiers_repository.MongoDossiersRepository
- ebl.ebl_ai_client.EblAiClient
- ebl.files.application.file_repository.File
- ebl.files.infrastructure.grid_fs_file_repository.GridFsFileRepository
- ebl.fragmentarium.application.annotations_service.AnnotationsService
- ebl.fragmentarium.application.fragment_finder.FragmentFinder
- ebl.fragmentarium.application.fragment_finder.ThumbnailSize
- ebl.fragmentarium.application.fragment_matcher.FragmentMatcher
- ebl.fragmentarium.application.fragment_updater.FragmentUpdater
- ebl.fragmentarium.application.fragmentarium.Fragmentarium
- ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory
- ebl.fragmentarium.domain.named_entity.EntityAnnotationSpan
- ebl.fragmentarium.domain.named_entity.NamedEntityType
- ebl.fragmentarium.infrastructure.cropped_sign_images_repository.MongoCroppedSignImagesRepository
- ebl.fragmentarium.infrastructure.mongo_annotations_repository.MongoAnnotationsRepository
- ebl.fragmentarium.infrastructure.mongo_findspot_repository.MongoFindspotRepository
- ebl.fragmentarium.infrastructure.mongo_fragment_repository.MongoFragmentRepository
- ebl.fragmentarium.web.annotations.AnnotationResource
- ebl.lemmatization.infrastrcuture.mongo_suggestions_finder.MongoLemmaRepository
- ebl.signs.infrastructure.mongo_sign_repository.MongoSignRepository
- ebl.signs.infrastructure.mongo_sign_repository.SignSchema
- ebl.tests.factories.archaeology.FINDSPOT_COUNT
- ebl.tests.factories.archaeology.FindspotFactory
- ebl.tests.factories.bibliography.BibliographyEntryFactory
- ebl.transliteration.application.parallel_line_injector.ParallelLineInjector
- ebl.transliteration.domain.at_line.ColumnAtLine
- ebl.transliteration.domain.at_line.ObjectAtLine
- ebl.transliteration.domain.at_line.SurfaceAtLine
- ebl.transliteration.domain.atf
- ebl.transliteration.domain.labels.ColumnLabel
- ebl.transliteration.domain.labels.ObjectLabel
- ebl.transliteration.domain.labels.SurfaceLabel
- ebl.transliteration.domain.line_number.LineNumber
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.sign.Logogram
- ebl.transliteration.domain.sign.Sign
- ebl.transliteration.domain.sign.SignListRecord
- ebl.transliteration.domain.sign.SortKeys
- ebl.transliteration.domain.sign.Value
- ebl.transliteration.domain.sign_tokens.Reading
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.word_tokens.Word
- ebl.transliteration.infrastructure.mongo_parallel_repository.MongoParallelRepository
- ebl.users.domain.user.Guest
- ebl.users.domain.user.User
- ebl.users.infrastructure.auth0.Auth0User
- falcon.testing
- falcon_auth.NoneAuthBackend
- falcon_caching.Cache
- io
- json
- marshmallow.EXCLUDE
- os
- pathlib.Path
- pydash
- pymongo.MongoClient
- pymongo.database.Database
- pytest
- typing.Any
- typing.List
- typing.Mapping
- typing.Sequence
- typing.Union
- uuid

