# File Reference: ebl/app.py

- Lines: 142
- Characters: 5888

## Top-Level Symbols

- Classes: None
- Functions: decode_certificate, set_sentry_user, create_context, create_api, create_app, get_app
- Constants: None

## Imports

- Cryptodome.PublicKey.RSA
- althaia
- base64.b64decode
- ebl.afo_register.infrastructure.mongo_afo_register_repository.MongoAfoRegisterRepository
- ebl.afo_register.web.bootstrap.create_afo_register_routes
- ebl.bibliography.infrastructure.bibliography.MongoBibliographyRepository
- ebl.bibliography.web.bootstrap.create_bibliography_routes
- ebl.cache.application.cache.create_cache
- ebl.cache.application.custom_cache.ChapterCache
- ebl.cache.infrastructure.mongo_cache_repository.MongoCacheRepository
- ebl.changelog.Changelog
- ebl.context.Context
- ebl.corpus.infrastructure.mongo_text_repository.MongoTextRepository
- ebl.corpus.web.bootstrap.create_corpus_routes
- ebl.dictionary.infrastructure.word_repository.MongoWordRepository
- ebl.dictionary.web.bootstrap.create_dictionary_routes
- ebl.dossiers.infrastructure.mongo_dossiers_repository.MongoDossiersRepository
- ebl.dossiers.web.bootstrap.create_dossiers_routes
- ebl.ebl_ai_client.EblAiClient
- ebl.error_handler
- ebl.files.infrastructure.grid_fs_file_repository.GridFsFileRepository
- ebl.files.web.bootstrap.create_files_route
- ebl.fragmentarium.infrastructure.cropped_sign_images_repository.MongoCroppedSignImagesRepository
- ebl.fragmentarium.infrastructure.mongo_annotations_repository.MongoAnnotationsRepository
- ebl.fragmentarium.infrastructure.mongo_findspot_repository.MongoFindspotRepository
- ebl.fragmentarium.infrastructure.mongo_fragment_repository.MongoFragmentRepository
- ebl.fragmentarium.web.bootstrap.create_fragmentarium_routes
- ebl.lemmatization.infrastrcuture.mongo_suggestions_finder.MongoLemmaRepository
- ebl.lemmatization.web.bootstrap.create_lemmatization_routes
- ebl.markup.web.bootstrap.create_markup_routes
- ebl.signs.infrastructure.mongo_sign_repository.MongoSignRepository
- ebl.signs.web.bootstrap.create_signs_routes
- ebl.transliteration.application.parallel_line_injector.ParallelLineInjector
- ebl.transliteration.infrastructure.mongo_parallel_repository.MongoParallelRepository
- ebl.users.domain.user.Guest
- ebl.users.infrastructure.auth0.Auth0Backend
- falcon
- falcon_auth.FalconAuthMiddleware
- falcon_auth.MultiAuthBackend
- falcon_auth.NoneAuthBackend
- os
- pymongo.MongoClient
- sentry_sdk
- sentry_sdk.configure_scope
- sentry_sdk.integrations.falcon.FalconIntegration

