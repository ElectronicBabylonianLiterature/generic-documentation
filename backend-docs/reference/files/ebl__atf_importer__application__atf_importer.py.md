# File Reference: ebl/atf_importer/application/atf_importer.py

- Lines: 132
- Characters: 4734

## Top-Level Symbols

- Classes: AtfImporterArgs, AtfImporter
- Functions: None
- Constants: None

## Methods by Class

- AtfImporterArgs: No methods
- AtfImporter: __init__, convert_to_ebl_lines, setup_importer, run_importer, process_file, import_into_database, cli, main

## Imports

- argparse
- attr
- ebl.app.create_context
- ebl.atf_importer.application.atf_importer_config.AtfImporterConfig
- ebl.atf_importer.application.database_importer.DatabaseImporter
- ebl.atf_importer.application.glossary.Glossary
- ebl.atf_importer.application.glossary.GlossaryParser
- ebl.atf_importer.application.lines_getter.EblLinesGetter
- ebl.atf_importer.application.logger.Logger
- ebl.atf_importer.application.logger.LoggerUtil
- ebl.atf_importer.domain.legacy_atf_converter.LegacyAtfConverter
- ebl.context.Context
- ebl.transliteration.domain.text.Text
- glob
- os
- pymongo.MongoClient
- typing.Any
- typing.Dict
- typing.List
- typing.TypedDict

