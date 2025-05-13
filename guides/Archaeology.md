<p><a target="_blank" href="https://app.eraser.io/workspace/4xF5j4k6DI6Iwp1QR32g" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

Archaeological information is stored in the `archaeology` property of a tablet record (or "fragment"). The `findspotId` field within that property contains the unique identifier that matches the `_id` of a document in the `findspots` collection. The archaeology property contains the following fields:

### `archaeology` Property Fields:
- `excavationNumber`  (object):
    - `prefix`  (string): Usually abbreviation of site or campaign, e.g. `W`  for Warka, `3N`  for third Nippur Campaign.
    - `number`  (string): Artifact number
    - `suffix`  (string): Additional identifier suffix
- `site`  (string): Archaeological site name from [﻿this list](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/ebl/common/domain/provenance.py) . The long name ("Aššur", "Ḫuzirina") follows the conventions of the [﻿Cuneiform Inscriptions Geographical Site Index (CIGS)](https://zenodo.org/records/14568765) , if available.
- `isRegularExcavation`  (boolean|null): Whether the find comes from a regular excavation or from uncontrolled diggings.
    - Regular Excavations: Excavation by a legal archaeological project. The location of the tablet is known from the archaeological documentation of the findspot. The findspot does not have to be precisely recorded, the assignment to the site by the excavator is sufficient.
    - Uncontrolled diggings: Excavation by looters. The location of the tablet can only be reconstructed on the basis of the content of the text or the information provided by the dealer, the tablet itself only became known to science in its dislocated state.
- `date`  (object):
    - `start`  (object): Date of finding of the artefact, if known; if not, start date of the excavation campaign. 
        - `year`  (number)
        - `month`  (number, optional)
        - `day`  (number, optional)
    - `end`  (object, optional): End date of the excavation campaign.
        - `year`  (number)
        - `month`  (number, optional)
        - `day`  (number, optional)
    - `notes`  (string): Notes relating to the date. Typically, campaign number (1st campaign, 2nd campaign, etc.).
- `findspotId`  (number): Reference ID to findspot document
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
- `_id`  (number): Unique identifier, arbitrary number
- `sector`  (string): Broad archaeological sector. Defined by the topography of the site, e.g. a separate tell.
- `area`  (string): Specific area designation as established by the excavators. 
- `building`  (string): Name of the building, as given by the excavator/authoritative publication.
- `buildingType`  (string|null): Type of building, defined by the excavator/authoritative publication. It must be one of:
    - `RESIDENTIAL` : Usually relatively small buildings with domestic installations and inventory; clearly demarcated from the neighboring houses. They constitute quarters together with many similar buildings.
    - `TEMPLE` : A building that shows typical signs of sacred use, such as thick, buttressed walls and a cella. The decisive criterion is not the size, but the use.
    - `PALACE` : Residential architecture with rooms for royal representation. The building exceeds the size of the otherwise documented ones at this site or in this time and region.
    - `OTHER_MONUMENTAL` : A building or part of a building that exceeds the usual dimensions of architecture at this site or in this time and region, but whose exact purpose cannot be determined. Lacking domestic inventory, rooms for representation, or cultic features.
    - `UNKNOWN` : Associated architecture was recorded, but was too poorly preserved or documented to make more detailed statements.
    - `NOT_IN_BUILDING` : No associated architecture recorded.
- `context`  (string): Smallest archaeologically definable unit. All objects within the context were deposited in one stratigraphic event. Provides the exact location of the find as well as stratigraphic information.
- `date`  (object): Date of the earliest and latest dated or datable artifacts found within the same level.
    - `start`  (object): Earliest artifact.
        - `year`  (number)
        - `month`  (number, optional)
        - `day`  (number, optional)
    - `end`  (object, optional): Latest artifact.
        - `year`  (number)
        - `month`  (number, optional)
        - `day`  (number, optional)
    - `notes`  (string, optional)
- `levelLayerPhase`  (string): Stratigraphic information. Denomination of the layer as given by the excavator/authoritative publication.
- `room`  (string): Room or locus identifier, as given by the excavator. A room should be clearly demarcated from its surroundings.
- `primaryContext`  (boolean|null): Defines whether the tablets were found in their original location.
- `site`  (string): Archaeological site name (see above).
 

 [﻿View on Eraser](https://app.eraser.io/workspace/4xF5j4k6DI6Iwp1QR32g?elements=IIIlNtmdwav4FFHyH61N2A) 

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



<!-- eraser-additional-content -->
## Diagrams
<!-- eraser-additional-files -->
<a href="/guides/Archaeology-entity-relationship-1.eraserdiagram" data-element-id="-Z_KCqk6SM7wrTeicEb-a"><img src="/.eraser/4xF5j4k6DI6Iwp1QR32g___8rEEI9hk1jV4GniI7pAK1HIhMOW2___---diagram----565035375609f343049d6c3b3addd117.png" alt="" data-element-id="-Z_KCqk6SM7wrTeicEb-a" /></a>
<!-- end-eraser-additional-files -->
<!-- end-eraser-additional-content -->
<!--- Eraser file: https://app.eraser.io/workspace/4xF5j4k6DI6Iwp1QR32g --->