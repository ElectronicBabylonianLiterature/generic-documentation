# File Reference: ebl/atf_importer/domain/legacy_atf_converter.py

- Lines: 250
- Characters: 10142

## Top-Level Symbols

- Classes: LegacyAtfConverter
- Functions: include_line
- Constants: None

## Methods by Class

- LegacyAtfConverter: __init__, convert_lines_from_string, convert_lines_from_path, atf_to_text, convert_lines, _convert_line, _get_line_tree_data, _convert_lem_line, _parse_lines, _parse_line, _parse_and_validate_line, _report_and_correct_errors, _handle_legacy_translation, _insert_translation_line, serialize_words, serizalize_lemmas_and_guidewords, _log_line, _log_lem_line

## Imports

- codecs
- ebl.atf_importer.application.atf_importer_config.AtfImporterConfigData
- ebl.atf_importer.application.glossary.Glossary
- ebl.atf_importer.application.lemmatization.LemmaLookup
- ebl.atf_importer.application.logger.Logger
- ebl.atf_importer.application.logger.LoggerUtil
- ebl.atf_importer.domain.atf_conversions.GetLemmaValuesAndGuidewords
- ebl.atf_importer.domain.atf_conversions.GetWords
- ebl.atf_importer.domain.atf_indexing_visitor.IndexingVisitor
- ebl.atf_importer.domain.atf_preprocessor.AtfPreprocessor
- ebl.atf_importer.domain.legacy_atf_line_validator.LegacyAtfLineValidator
- ebl.atf_importer.domain.legacy_atf_visitor.LegacyAtfVisitor
- ebl.atf_importer.domain.legacy_atf_visitor.column_transformer
- ebl.atf_importer.domain.legacy_atf_visitor.translation_block_transformer
- ebl.transliteration.domain.atf.ATF_PARSER_VERSION
- ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS
- ebl.transliteration.domain.line.ControlLine
- ebl.transliteration.domain.line.EmptyLine
- ebl.transliteration.domain.line_transformer.LineTransformer
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.transliteration_error.ExtentLabelError
- ebl.transliteration.domain.transliteration_error.TransliterationError
- lark.Lark
- lark.ParseError
- lark.visitors.Tree
- typing.Any
- typing.Dict
- typing.List
- typing.Optional
- typing.Tuple
- typing.Type

