# File Reference: ebl/tests/io/test_fragment_importer.py

- Lines: 227
- Characters: 6531

## Top-Level Symbols

- Classes: None
- Functions: fragment, valid_fragment_data, fragments_collection, mock_json_file, test_load_json, test_load_collection, test_load_invalid_json, test_validation, test_missing_required_field, test_invalid_enum, test_invalid_input_type, test_ensure_id, test_missing_id, test_invalid_id, test_ensure_unique, test_ensure_unique_duplicate, test_write_to_db, test_write_to_db_duplicate, test_update_sort_index, test_set_word_ids
- Constants: MOCKFILE

## Imports

- attr
- ebl.fragmentarium.application.fragment_schema.FragmentSchema
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.io.fragments.importer.create_sort_index
- ebl.io.fragments.importer.ensure_unique
- ebl.io.fragments.importer.load_collection
- ebl.io.fragments.importer.load_data
- ebl.io.fragments.importer.set_word_ids
- ebl.io.fragments.importer.update_sort_keys
- ebl.io.fragments.importer.validate
- ebl.io.fragments.importer.validate_id
- ebl.io.fragments.importer.write_to_db
- ebl.mongo_collection.MongoCollection
- ebl.tests.factories.fragment.LemmatizedFragmentFactory
- ebl.transliteration.domain.museum_number.MuseumNumber
- functools.partial
- json
- marshmallow.ValidationError
- pymongo
- pymongo.errors.BulkWriteError
- pytest
- re

