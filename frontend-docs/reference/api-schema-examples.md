# API Schema Examples (Frontend-Consumed)

These examples are inferred from frontend repository and service usage. Backend schema remains the authoritative contract.

## Dictionary: Fetch Word by ID
- Source: [src/dictionary/infrastructure/WordRepository.ts](src/dictionary/infrastructure/WordRepository.ts)
- Request
```http
GET /words/{id}
```
- Response (example)
```json
{
  "_id": "word-123",
  "lemma": ["ana"],
  "meaning": "to",
  "guideWord": "to",
  "forms": []
}
```

## Bibliography: All IDs
- Source: [src/bibliography/infrastructure/BibliographyRepository.ts](src/bibliography/infrastructure/BibliographyRepository.ts)
- Request
```http
GET /bibliography/all
```
- Response (example)
```json
["Afo1988-1", "Lambert1960-3"]
```

## Corpus: Text Slugs
- Source: [src/corpus/application/TextService.ts](src/corpus/application/TextService.ts)
- Request
```http
GET /corpus/texts/all
```
- Response (example)
```json
{
  "texts": [
    {
      "genre": "epic",
      "category": "gilgamesh",
      "index": 1
    }
  ]
}
```

## Fragmentarium: Genres
- Source: [src/fragmentarium/infrastructure/FragmentRepository.ts](src/fragmentarium/infrastructure/FragmentRepository.ts)
- Request
```http
GET /genres
```
- Response (example)
```json
[["Epic", "Narrative"], ["Ritual", "Incantation"]]
```

## Fragmentarium: Photo Blob
- Source: [src/fragmentarium/infrastructure/ImageRepository.ts](src/fragmentarium/infrastructure/ImageRepository.ts)
- Request
```http
GET /fragments/{number}/photo
```
- Response
- Binary blob payload (image)

## Error Shape
- Source: [src/http/ApiClient.ts](src/http/ApiClient.ts)
- Failure responses are normalized to API error objects including status and message payload context.
