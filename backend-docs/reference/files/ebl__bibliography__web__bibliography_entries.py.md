# File Reference: ebl/bibliography/web/bibliography_entries.py

- Lines: 67
- Characters: 2424

## Top-Level Symbols

- Classes: BibliographyResource, BibliographyEntriesResource, BibliographyList, BibliographyAll
- Functions: None
- Constants: None

## Methods by Class

- BibliographyResource: __init__, on_get, on_post
- BibliographyEntriesResource: __init__, on_get, on_post
- BibliographyList: __init__, on_get
- BibliographyAll: __init__, on_get

## Imports

- ebl.bibliography.application.bibliography.Bibliography
- ebl.bibliography.domain.bibliography_entry.CSL_JSON_SCHEMA
- ebl.cache.application.cache.DAILY_TIMEOUT
- ebl.users.web.require_scope.require_scope
- falcon
- falcon.Request
- falcon.Response
- falcon.media.validators.jsonschema.validate
- falcon_caching.Cache
- json

