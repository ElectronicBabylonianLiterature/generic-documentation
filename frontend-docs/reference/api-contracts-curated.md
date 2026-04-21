# Reference: API Contracts (Curated)

This document provides curated request/response contracts from core repositories and services with concrete examples.

## Transport Contract
- Source: [src/http/ApiClient.ts](src/http/ApiClient.ts)
- GET JSON: fetchJson<T>(path, authenticate)
- GET BLOB: fetchBlob(path, authenticate)
- POST JSON: postJson<T>(path, body, authenticate=true)
- PUT JSON: putJson<T>(path, body)

## Dictionary Contracts
- Source: [src/dictionary/infrastructure/WordRepository.ts](src/dictionary/infrastructure/WordRepository.ts)
- GET /words/{id}
  - Response: Word
- GET /words?lemmas={comma-separated}
  - Response: Word[]
- GET /words?query={text}
  - Response: Word[]
- GET /words?lemma={lemma}
  - Response: Word[]
- GET /words/all
  - Response: string[]
- POST /words/{id}
  - Request: Word object payload
  - Response: Word
- POST /words/create-proper-noun
  - Request example:
    {
      "lemma": "Marduk",
      "pos": ["PN"]
    }
  - Response: Word

## Bibliography Contracts
- Source: [src/bibliography/infrastructure/BibliographyRepository.ts](src/bibliography/infrastructure/BibliographyRepository.ts)
- GET /bibliography/{id}
  - Response: Record<string, unknown> mapped to BibliographyEntry
- GET /bibliography/list?ids={comma-separated}
  - Response: Record<string, unknown>[] mapped to BibliographyEntry[]
- GET /bibliography?query={text}
  - Response: Record<string, unknown>[] mapped to BibliographyEntry[]
- POST /bibliography/{id}
  - Request: CSL data object
  - Response: BibliographyEntry
- POST /bibliography
  - Request: CSL data object
  - Response: BibliographyEntry
- GET /bibliography/all
  - Response: string[]

## Sign Contracts
- Source: [src/signs/infrastructure/SignRepository.ts](src/signs/infrastructure/SignRepository.ts)
- GET /signs/{name}/images
  - Response: CroppedAnnotation[]
- GET /signs?{query}
  - Response: Sign[]
- GET /signs/{name}
  - Response: Sign
- GET /signs/all
  - Response: string[]
- GET /signs/{name}/{sortEra}
  - Response: OrderedSign[]
- GET /signs/transliteration/{text}
  - Response: UnicodeAtf[]

## Dossier Contracts
- Source: [src/dossiers/infrastructure/DossiersRepository.ts](src/dossiers/infrastructure/DossiersRepository.ts)
- GET /dossiers
  - Response: DossierRecordDto[] or { dossiers: DossierRecordDto[] }
- GET /dossiers?ids[]={id}
  - Response: DossierRecordDto[]
- GET /dossiers/suggestions?q={query}
  - Response: { id, description? }[]
- GET /dossiers/filter?{filters}
  - Response: DossierRecordDto[] or { dossiers: DossierRecordDto[] }

## AFO Register Contracts
- Source: [src/afo-register/infrastructure/AfoRegisterRepository.ts](src/afo-register/infrastructure/AfoRegisterRepository.ts)
- GET /afo-register?{query}
  - Response: AfoRegisterRecord[]
- POST /afo-register/texts-numbers
  - Request: string[]
  - Response: AfoRegisterRecord[]
- GET /afo-register/suggestions?text_query={query}
  - Response: AfoRegisterRecordSuggestion[]

## Fragmentarium Contracts (Selected Core)
- Source: [src/fragmentarium/infrastructure/FragmentRepository.ts](src/fragmentarium/infrastructure/FragmentRepository.ts)
- GET /statistics
  - Response: { transliteratedFragments, lines, totalFragments }
- GET /fragments/{number}
  - Response: FragmentDto mapped to Fragment
- GET /fragments?{params}
  - Response: FragmentInfoDto[] mapped to FragmentInfo[]
- POST /fragments/{number}/edition
  - Request: EditionFields
  - Response: Fragment
- POST /fragments/{number}/lemmatization
  - Request: { lemmatization: LemmatizationDto }
  - Response: Fragment
- POST /fragments/{number}/references
  - Request: { references: Reference[] }
  - Response: Fragment
- GET /fragments/{number}/annotations?generateAnnotations={bool}
  - Response: { annotations: { geometry, data }[] } mapped to Annotation[]
- POST /fragments/{number}/annotations
  - Request: { fragmentNumber, annotations[] }
  - Response: Annotation[]
- GET /fragments/{number}/named-entities
  - Response: ApiEntityAnnotationSpan[]
- POST /fragments/{number}/named-entities
  - Request: { annotations: ApiEntityAnnotationSpan[] }
  - Response: Fragment

## Image Blob Contracts
- Source: [src/fragmentarium/infrastructure/ImageRepository.ts](src/fragmentarium/infrastructure/ImageRepository.ts)
- GET(BLOB) /images/{fileName}
- GET(BLOB) /folios/{name}/{number}
- GET(BLOB) /fragments/{number}/photo
- GET(BLOB) /fragments/{number}/thumbnail/{size}
  - 404 behavior: repository converts missing thumbnail to { blob: null }

## Error Semantics
- Non-OK responses are converted to ApiError with message, status, and payload context.
- Token retrieval is retried once before failure surfacing.
- Sources: [src/http/ApiClient.ts](src/http/ApiClient.ts), [src/http/ApiClient.test.ts](src/http/ApiClient.test.ts), [src/http/ApiClient.edge-cases.test.ts](src/http/ApiClient.edge-cases.test.ts)
