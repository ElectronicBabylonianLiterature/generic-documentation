# File Reference: ebl/fragmentarium/update_fragments.py

- Lines: 159
- Characters: 5334

## Top-Level Symbols

- Classes: State
- Functions: update_fragment, find_transliterated, update, create_context_
- Constants: None

## Methods by Class

- State: add_updated, add_error, add_querying_error, _add_lemmatization_error, _add_transliteration_error, _add_error, to_tsv, merge

## Imports

- argparse
- attr
- ebl.app.create_context
- ebl.context.Context
- ebl.fragmentarium.application.fragment_repository.FragmentRepository
- ebl.fragmentarium.application.fragment_updater.FragmentUpdater
- ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.lemmatization.domain.lemmatization.LemmatizationError
- ebl.signs.infrastructure.memoizing_sign_repository.MemoizingSignRepository
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.transliteration_error.TransliterationError
- ebl.users.domain.user.ApiUser
- functools.reduce
- multiprocessing.Pool
- tqdm.tqdm
- typing.List

