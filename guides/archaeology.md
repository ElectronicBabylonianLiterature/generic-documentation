Archaeological information is stored in the `archaeology` property of a tablet record (or "fragment"). The `findspotId` field within that property contains the unique identifier that matches the `_id` of a document in the `findspots` collection. The archaeology property contains the following fields:

### `archaeology` Property Fields:
- `excavationNumber` (object):
  - `prefix` (string): Excavation season or prefix
  - `number` (string): Artifact number
  - `suffix` (string): Additional identifier suffix
- `site` (string): Archaeological site name from [this list](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/ebl/common/domain/provenance.py). The long name ("Aššur", "Ḫuzirina") follows the conventions of the [Cuneiform Inscriptions Geographical Site Index (CIGS)](https://zenodo.org/records/14568765)
- `isRegularExcavation` (boolean|null): Whether the find comes from a regular excavation or from uncontrolled diggings.
- `date` (object):
  - `start` (object): Date of finding of the artifact, if known; if not, start date of the excavation campaign. 
    - `year` (number)
    - `month` (number, optional)
    - `day` (number, optional)
  - `end` (object, optional): End date of the excavation campaign.
    - `year` (number)
    - `month` (number, optional)
    - `day` (number, optional)
  - `notes` (string): Notes relating to the date. Typically, campaign number (1st campaign, 2nd campaign, etc.).
- `findspotId` (number): Reference ID to findspot document

### Example of archaeology property fully populated:
```
    "archaeology" : {
        "excavationNumber" : {
            "prefix" : "SU-1951",
            "number" : "1",
            "suffix" : ""
        },
        "site" : "Ḫuzirina",
        "isRegularExcavation" : true,
        "date" : {
            "start" : {
                "year" : 1951,
                "month" : 5,
                "day" : 15
            },
            "end" : {
                "year" : 1951,
                "month" : 6,
                "day" : 15
            }
        },
        "findspotId" : 43
    }
```

### `findspot` Document Fields:
- `_id` (number): Unique identifier
- `sector` (string): Broad archaeological sector
- `area` (string): Specific area designation
- `building` (string): Building identifier
- `buildingType` (string|null): Type of building. It must be one of:
   - `RESIDENTIAL`: 
   - `TEMPLE`: 
   - `PALACE`: 
   - `OTHER_MONUMENTAL`: 
   - `UNKNOWN`: 
   - `NOT_IN_BUILDING`: 
- `context` (string): 
- `date` (object):
  - `start` (object): 
    - `year` (number)
    - `month` (number, optional)
    - `day` (number, optional)
  - `end` (object, optional): 
    - `year` (number)
    - `month` (number, optional)
    - `day` (number, optional)
  - `notes` (string, optional)
- `levelLayerPhase` (string): Stratigraphic information
- `room` (string): Room or locus identifier
- `primaryContext` (boolean|null): 
- `site` (string): Archaeological site name (see above).

### Example of findspot document fully populated:
```
{
    "_id" : 2947,
    "sector" : "Scribal Quarter (Tablet Hill)",
    "area" : "TA",
    "building" : "",
    "buildingType" : null,
    "context" : "",
    "date" : {
        "start" : {
            "year" : -1792
        },
        "end" : {
            "year" : -1722
        },
        "notes" : "According to the list of dated tablets in OIP 78, 74–76"
    },
    "levelLayerPhase" : "X/1",
    "room" : "Locus 179",
    "primaryContext" : null,
    "site" : "Nippur"
}
```
