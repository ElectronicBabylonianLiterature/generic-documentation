Archaeological information is stored in the `archaeology` property of a tablet record (or "fragment"). The `findspotId` field within that property contains the unique identifier that matches the `_id` of a document in the `findspots` collection. The archaeology property contains the following fields:

### `archaeology` Property Fields:
- `excavationNumber` (object):
  - `prefix` (string): Usually abbreviation of site or campaign, e.g. `W` for Warka, `3N` for third Nippur Campaign.
  - `number` (string): Artifact number
  - `suffix` (string): Additional identifier suffix
- `site` (string): Archaeological site name from [this list](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/ebl/common/domain/provenance.py). The long name ("Aššur", "Ḫuzirina") follows the conventions of the [Cuneiform Inscriptions Geographical Site Index (CIGS)](https://zenodo.org/records/14568765), if available.
- `isRegularExcavation` (boolean|null): Whether the find comes from a regular excavation or from uncontrolled diggings.
  - Regular Excavations: Excavation by a legal archaeological project. The location of the tablet is known from the archaeological documentation of the findspot. The findspot does not have to be precisely recorded, the assignment to the site by the excavator is sufficient.
  - Uncontrolled diggings: Excavation by looters. The location of the tablet can only be reconstructed on the basis of the content of the text or the information provided by the dealer, the tablet itself only became known to science in its dislocated state. 
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
- `sector` (string): Broad archaeological sector. Defined not by the excavator, but by the topography of the site.
- `area` (string): Specific area designation as established by the excavators. 
- `building` (string): Name of the building, as given by the excavator/primary publication.
- `buildingType` (string|null): Type of building, defined by the excavator/primary publication. It must be one of:
   - `RESIDENTIAL`: Usually relatively small buildings, clearly demarcated from the neighboring houses, whose rooms are organized around a central courtyard. They are forming quarters together with many similar buildings.
   - `TEMPLE`: A building that shows typical signs of sacred use, such as thick, buttressed walls and a cella. The decisive criterion is not the size, but the use.
   - `PALACE`: Residential architecture that far exceeds the size of the otherwise documented buildings at this site or in this time and region.
   - `OTHER_MONUMENTAL`: A building or part of a building that exceeds the usual dimensions of architecture at this site or in this time and region, but whose exact purpose cannot be determined.
   - `UNKNOWN`: Associated architecture was recorded, but was too poorly preserved or documented to make more detailed statements.
   - `NOT_IN_BUILDING`: No associated architecture recorded.
- `context` (string): Smallest archaeologically definable unit. All the Objects within the Context were deposited in one stratigraphic event. Provides the exact location of the find as well as stratigraphic information.
- `date` (object): Date of the earliest and latest dated or datable artifacts found within the same level.
  - `start` (object): Earliest artifact.
    - `year` (number)
    - `month` (number, optional)
    - `day` (number, optional)
  - `end` (object, optional): Latest artifact.
    - `year` (number)
    - `month` (number, optional)
    - `day` (number, optional)
  - `notes` (string, optional)
- `levelLayerPhase` (string): Stratigraphic information. Denomination of the layer as given by the excavator/primary publication.
- `room` (string): Room or locus identifier, as given by the excavator. A room should be clearly demarcated from its surroundings.
- `primaryContext` (boolean|null): Defines whether the tablets were found in their original location.
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
