# File Reference: ebl/tests/dossiers/test_dossiers_route.py

- Lines: 432
- Characters: 14726

## Top-Level Symbols

- Classes: None
- Functions: dossier_record, another_dossier_record, unrelated_dossier_record, test_fetch_dossier_record_route, test_fetch_all_dossiers_route, _create_test_dossiers, _assert_search_result, test_search_dossiers_route, test_search_dossiers_by_description, test_search_dossiers_empty_query, test_search_dossiers_no_query_param, test_search_dossiers_with_provenance, test_search_dossiers_with_script_period, test_search_dossiers_with_multiple_filters, test_filter_dossiers_no_params, test_filter_dossiers_by_provenance, test_filter_dossiers_by_script_period, test_filter_dossiers_by_genre, test_dossiers_suggestions_route, test_dossiers_suggestions_empty_query
- Constants: None

## Imports

- ebl.bibliography.application.bibliography_repository.BibliographyRepository
- ebl.dossiers.application.dossiers_repository.DossiersRepository
- ebl.dossiers.domain.dossier_record.DossierRecord
- ebl.dossiers.infrastructure.mongo_dossiers_repository.DossierRecordSchema
- ebl.tests.factories.dossier.DossierRecordFactory
- ebl.tests.factories.fragment.FragmentFactory
- falcon
- pytest

