# General and Technical Docs for eBL

## Technical Guides
- [eBL Coding Standards](guides/codingStandards.md)
- [Setting up Gitpod with Ona](gitpod-setup/setup.md)
- [How `withData` Works](guides/withData.md)
- Contribution guidelines
- How to run migrations

## General Guides
- [Adding References to eBL](guides/addingReferences.md)
- [Editorial conventions (Corpus)](guides/editorialConventionsCorpus.md)
- [Editorial conventions (Library)](guides/editorialConventionsLibrary.md)
- [TEI Export](guides/teiExport.md)
- [eBL ATF and other ATF Flavors](guides/atfFlavors.md)
- [Archaeology and Findspot Properties](guides/archaeology.md)
- [Manual for Mapping Cuneiform Tablets](guides/mappingCuneiformTablets.md)

## Photo Guides
- [How to Create Photo Montages of Tablets to Check Joins](guides/photoMontagesJoins.md)

## Database Management
- [Adding Folios and Photos with NoSQL Manager for MongoDB](guides/addingFoliosAndPhotos.md)
  
  -------------------------------------------------------------------------------------------------------
# General Introduction to the eBL Platform

The "Electronic Babylonian Library" (eBL) platform, based at Ludwig Maximilian University of Munich (LMU) and the Bavarian Academy of Sciences (BAdW), involves the digital compilation and analysis of Babylonian texts using AI and computer vision technologies. This project leverages several advanced techniques to identify and match manuscript fragments.

The algorithms and techniques used in this project include:

- Image Matching and Fragment Identification: The eBL project uses computer vision techniques to digitally reconstruct cuneiform tablets from scattered fragments. This involves capturing high-resolution images of the fragments and using pattern recognition algorithms to identify matching pieces based on the cuneiform signs and their arrangement. This process is enhanced by custom-built software applications specifically designed for Assyriological research.

- N-gram Matching for Text Overlap: The project employs n-gram matching algorithms to identify overlapping text segments within the corpus of transliterated texts. This method involves breaking down the text into n-grams (substrings of n characters or words) and comparing these across different fragments to find overlaps that indicate they are parts of the same original document.

- Optical Character Recognition (OCR) for Cuneiform: OCR technology adapted for cuneiform script is used to digitize and transliterate the texts from the high-resolution images of the tablets. This process involves training machine learning models to recognize and interpret the ancient script accurately.

- Machine Learning and AI: Advanced machine learning algorithms are utilized to analyze the patterns and features of the cuneiform signs, facilitating the identification and classification of fragments. This helps in piecing together the fragmented texts and improving the accuracy of the digital reconstructions.

The project leverages Optical Character Recognition (OCR) and Natural Language Processing (NLP) technologies to read and match the texts. Specifically, using OCR to convert the cuneiform signs from images into machine-readable text. Then apply algorithms to detect and match overlapping segments of different manuscripts, aiding in the reconstruction of fragmented texts.

For more detailed information, you can explore the project’s official website and the related publications from [LMU](https://www.lmu.de/en/newsroom/news-overview/news/playing-with-the-source-of-world-literature.html) and the International Association for Assyriology, which provide insights into the methodologies and technological innovations employed in the [eBL project](https://www.ebl.lmu.de/fragmentarium) and [IAAssyriology](https://iaassyriology.com/in-the-spotlight-the-electronic-babylonian-literature-project/).

# Primary data
To date, thousands of additional cuneiform fragments have been photographed in collaboration with the [British Museum](https://www.britishmuseum.org/collection) in London and the Iraq Museum in Baghdad and [CDLI](https://cdli.mpiwg-berlin.mpg.de/).



![british musem](https://github.com/Melanee-Melanee/eBL-generic-documentation/assets/74653444/470c76b2-5e1f-4134-9ce0-4ed2e3dc5808)



# Process

[eBL GitHub organisation](https://github.com/ElectronicBabylonianLiterature) includes various tools, such as:

- [ebl-api](https://github.com/ElectronicBabylonianLiterature/ebl-api): The API for accessing the Electronic Babylonian Literature database.
- [cuneiform-ocr](https://github.com/ElectronicBabylonianLiterature/cuneiform-ocr): Tools for performing OCR on cuneiform texts.
- [ngram-matcher](https://github.com/ElectronicBabylonianLiterature/ngram-matcher): Algorithms for matching n-grams to identify overlapping text segments.

These tools collectively enable the identification and matching of text fragments by comparing pixel patterns and character sequences, allowing researchers to piece together ancient manuscripts from scattered fragments like a text puzzle.




![Text Puzzle Gilgamesh](https://github.com/Melanee-Melanee/eBL-generic-documentation/assets/74653444/0080cdbe-ee4e-4b91-97b1-79bdef4136e6)

For more information about eBL project, read [this article](https://levelup.gitconnected.com/the-electronic-babylonian-library-ebl-gilgamesh-project-f883e0ff068f) on Medium and [Prof Enrique Jiménez](https://www.youtube.com/watch?v=4QS9oCNUcRY) YouTube speech. 
  
