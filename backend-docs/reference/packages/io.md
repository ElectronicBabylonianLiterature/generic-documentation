# Package Reference: ebl/io

- Files: 2
- Total lines: 430

## File-Level API Summary

### `ebl/io/fragments/importer.py`

- Lines: 349
- Imports: argparse, copy.deepcopy, csv, datetime, ebl.common.query.util.sort_by_museum_number, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.mongo_collection.MongoCollection, ebl.transliteration.application.token_schemas.WORD_SCHEMAS, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.infrastructure.collections.FRAGMENTS_COLLECTION, itertools.count, json, marshmallow.ValidationError, os, pymongo, pymongo.MongoClient, sys, typing.List, typing.Optional, typing.Sequence
- Constants: WORD_TYPES
- Functions: _load_json, assert_type, load_data, load_collection, validate, validate_id, ensure_unique, update_sort_keys, create_sort_index, set_word_ids, write_to_db, write_to_tsv

### `ebl/io/fragments/thumbnails.py`

- Lines: 81
- Imports: PIL.Image, argparse, ebl.fragmentarium.application.fragment_finder.ThumbnailSize, gridfs.GridFS, io, os, pymongo.MongoClient, tqdm.tqdm, typing.Iterable, typing.cast
- Functions: resize, clear_thumbnails, create_thumbnails

