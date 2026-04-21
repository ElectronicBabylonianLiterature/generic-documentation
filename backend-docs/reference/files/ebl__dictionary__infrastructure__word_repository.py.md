# File Reference: ebl/dictionary/infrastructure/word_repository.py

- Lines: 229
- Characters: 7532

## Top-Level Symbols

- Classes: MongoWordRepository
- Functions: _create_substring_expression, _create_lemma_search_pipeline, _create_query_by_lemma, _create_query_by_meaning, _create_query_by_root, _create_query_by_vowel_class, _create_query_by_origin
- Constants: COLLECTION, LEMMA_SEARCH_LIMIT

## Methods by Class

- MongoWordRepository: __init__, create, create_proper_noun, query_by_id, query_by_ids, query_by_lemma_meaning_root_vowels, query_by_lemma_prefix, list_all_words, update

## Imports

- ebl.changelog.Changelog
- ebl.common.query.query_collation.CollatedFieldQuery
- ebl.dictionary.application.word_repository.WordRepository
- ebl.dictionary.domain.word.WordId
- ebl.dictionary.infrastructure.akkadian_sort.create_mongo_sort_key
- ebl.mongo_collection.MongoCollection
- typing.Optional
- typing.Sequence

