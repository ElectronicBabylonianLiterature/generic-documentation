# File Reference: ebl/tests/test_mongo_collection.py

- Lines: 230
- Characters: 6683

## Top-Level Symbols

- Classes: None
- Functions: collection, test_create_many_and_find_by_id, test_create_and_find_by_id, test_create_duplicate, test_find_by_id_document_not_found, test_find, test_exists, test_delete, test_delete_not_found, test_find_document_not_found, test_find_many, test_find_many_document_not_found, test_aggregate, test_update, test_update_many, test_update_document_not_found, test_replace, test_replace_document_not_found, test_count, test_get_all_values_ignores_object_ids, test_unicode_and_datetime_roundtrip, test_insert_one_retries_once_on_auto_reconnect, test_insert_one_reraises_auto_reconnect_after_last_attempt, test_insert_one_duplicate_after_auto_reconnect_returns_document_id
- Constants: None

## Imports

- bson.ObjectId
- datetime
- ebl.errors.DuplicateError
- ebl.errors.NotFoundError
- ebl.mongo_collection.MongoCollection
- pymongo.errors.AutoReconnect
- pymongo.errors.DuplicateKeyError
- pytest
- unittest.mock.Mock

