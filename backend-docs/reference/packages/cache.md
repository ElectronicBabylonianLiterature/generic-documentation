# Package Reference: ebl/cache

- Files: 7
- Total lines: 117

## File-Level API Summary

### `ebl/cache/__init__.py`

- Lines: 0

### `ebl/cache/application/__init__.py`

- Lines: 0

### `ebl/cache/application/cache.py`

- Lines: 31
- Imports: falcon.Request, falcon.Response, falcon.after, falcon_caching.Cache, json, os, typing.Callable, typing.Sequence
- Functions: load_config, create_cache, cache_control

### `ebl/cache/application/cache_repository.py`

- Lines: 23
- Imports: abc.ABC, abc.abstractmethod
- Classes: CacheRepository
- Methods in CacheRepository: has, get, set, delete, delete_all

### `ebl/cache/application/custom_cache.py`

- Lines: 30
- Imports: attr, ebl.cache.application.cache_repository.CacheRepository, ebl.corpus.domain.chapter.ChapterId
- Classes: CustomCache, ChapterCache
- Methods in CustomCache: has, get, set, delete, delete_all
- Methods in ChapterCache: delete_chapter

### `ebl/cache/infrastructure/__init__.py`

- Lines: 0

### `ebl/cache/infrastructure/mongo_cache_repository.py`

- Lines: 33
- Imports: ebl.cache.application.cache_repository.CacheRepository, ebl.mongo_collection.MongoCollection, pymongo.database.Database
- Constants: COLLECTION
- Classes: MongoCacheRepository
- Methods in MongoCacheRepository: __init__, has, get, set, delete, delete_all

