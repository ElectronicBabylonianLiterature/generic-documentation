# Authorization Matrix

Last updated: May 2026

Scope and guard coverage derived from resource decorators and guard functions.

| Scope/Guard | Route Count | Routes |
|---|---:|---|
| `annotate:fragments` | 1 | `/fragments/{number}/annotations` |
| `create:proper_nouns` | 1 | `/words/create-proper-noun` |
| `lemmatize:fragments` | 4 | `/fragments/{number}/collect-lemmas`<br>`/fragments/{number}/lemma-annotation`<br>`/fragments/{number}/lemmatization`<br>`/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/lemmatization` |
| `read:<folio>-folios (dynamic)` | 2 | `/folios/{name}/{number}`<br>`/fragments/{number}/pager/{folio_name}/{folio_number}` |
| `read:<fragment-group>-fragments (dynamic)` | 4 | `/fragments/{number}`<br>`/fragments/{number}/photo`<br>`/fragments/{number}/scopes`<br>`/fragments/{number}/thumbnail/{resolution}` |
| `transliterate:fragments` | 10 | `/fragments/{number}/archaeology`<br>`/fragments/{number}/colophon`<br>`/fragments/{number}/date`<br>`/fragments/{number}/dates-in-text`<br>`/fragments/{number}/edition`<br>`/fragments/{number}/genres`<br>`/fragments/{number}/match`<br>`/fragments/{number}/named-entities`<br>`/fragments/{number}/references`<br>`/fragments/{number}/script` |
| `write:bibliography` | 2 | `/bibliography`<br>`/bibliography/{id_}` |
| `write:texts` | 4 | `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/alignment`<br>`/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/import`<br>`/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/lines`<br>`/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/manuscripts` |
| `write:words` | 1 | `/words/{object_id}` |
