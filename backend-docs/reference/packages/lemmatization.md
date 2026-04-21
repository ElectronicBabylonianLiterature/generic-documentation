# Package Reference: ebl/lemmatization

- Files: 5
- Total lines: 167

## File-Level API Summary

### `ebl/lemmatization/application/suggestion_finder.py`

- Lines: 23
- Imports: abc.ABC, abc.abstractmethod, ebl.dictionary.application.dictionary_service.Dictionary, ebl.lemmatization.domain.lemmatization.Lemma, typing.Sequence
- Classes: LemmaRepository, SuggestionFinder
- Methods in LemmaRepository: query_lemmas
- Methods in SuggestionFinder: __init__, find_lemmas

### `ebl/lemmatization/domain/lemmatization.py`

- Lines: 23
- Imports: attr, ebl.dictionary.domain.word.WordId, typing.Optional, typing.Sequence
- Classes: LemmatizationError, LemmatizationToken, Lemmatization
- Methods in LemmatizationError: __init__

### `ebl/lemmatization/infrastrcuture/mongo_suggestions_finder.py`

- Lines: 74
- Imports: ebl.dictionary.domain.word.WordId, ebl.lemmatization.application.suggestion_finder.LemmaRepository, ebl.lemmatization.domain.lemmatization.Lemma, ebl.mongo_collection.MongoCollection, typing.List, typing.Sequence
- Constants: COLLECTION
- Classes: MongoLemmaRepository
- Methods in MongoLemmaRepository: __init__, query_lemmas
- Functions: aggregate_lemmas

### `ebl/lemmatization/web/bootstrap.py`

- Lines: 14
- Imports: ebl.context.Context, ebl.dictionary.application.dictionary_service.Dictionary, ebl.lemmatization.application.suggestion_finder.SuggestionFinder, ebl.lemmatization.web.lemma_search.LemmaSearch, falcon
- Functions: create_lemmatization_routes

### `ebl/lemmatization/web/lemma_search.py`

- Lines: 33
- Imports: ebl.lemmatization.application.suggestion_finder.SuggestionFinder, falcon, typing.Tuple
- Classes: LemmaSearch
- Methods in LemmaSearch: __init__, on_get
- Functions: get_parameters

