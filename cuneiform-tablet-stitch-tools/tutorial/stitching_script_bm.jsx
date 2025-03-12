////////////// ABOUT THIS SCRIPT /////////////////

// This script automates the processing of cuneiform tablet photographs for digital publication.
// Originally developed by M. Touillon-Ricci based on J.J. Taylor's Compositor and Finaliser scripts.
// Designed for cross-platform compatibility (MacOS and Windows).
//
// Development History:
// - E. Jiménez: Added rotated views of left/right sides for comprehensive tablet documentation
// - L. Happel: Implemented flexible processing for varying numbers of fragment images
// - L. Sáenz: Enhanced functionality with:
//   * User interface dialog for settings configuration
//   * Organized settings interface
//   * Institutional logo integration
//   * Multiple output format options
//   * Separate TIFF/JPEG output folders
//   * Metadata management

////////////// SCRIPT'S STEPS /////////////////

// 1. Input Processing:
//    - Organizes input images into sub-folders by tablet number
//    - Validates and prepares images for processing
//
// 2. Image Composition:
//    - Stitches multiple views of each tablet into a single composition
//    - Arranges views in standardized layout (obverse, reverse, sides)
//    - Creates rotated copies of left/right sides for complete visualization
//
// 3. Image Calibration:
//    - Automatically detects and uses color scale for accurate sizing
//    - Rescales image to maintain consistent dimensions across tablets
//
// 4. Metadata Integration:
//    - Embeds comprehensive IPTC metadata
//    - Adds copyright information and usage terms
//    - Includes photographer and institutional credits
//
// 5. Final Processing:
//    - Optionally adds institutional logo
//    - Creates high-quality TIFF master file
//        * Configurable resolution (300/600 DPI)
//        * Optional compression (None/LZW/ZIP)
//    - Optionally generates JPEG copy for web/sharing
//        * Configurable quality settings
//
// 6. Output Organization:
//    - Saves TIFF files in dedicated TIFF folder
//    - Saves JPEG files in separate JPEG folder (when enabled)
//    - Maintains consistent naming convention across formats

////////////// PREREQUISITES /////////////////

// The digital color scale has to be added at preprocessing stage. The script indeed uses the blue bottom left square of the scale to rescale the whole image.
// If the scale is larger than the object, make sure to crop the scale sensibly, i.e. preserving the original proportions in the cropped version and the blue bottom left square.
// This script uses calculations based on both color and grey scales dimensions. The 5 cm color scale should be 1346 x 462 px. The 5 cm grey scale should be 1346 x 308 px.

// Install the script in your version of Photoshop to access it directly via the application.

////////////// RUN PHOTOSHOP AND LAUNCH SCRIPT /////////////////

// For Photoshop CS2 and higher only.
// Enable double-clicking from Mac Finder or Windows Explorer and bring application forward.

var folderinlocalcomputer; // Declare globally but don't assign yet


// Define the color setting function
function setColorFromSettings(settings) {
    var color = new SolidColor();
    // Always black
    color.rgb.red = 0;
    color.rgb.green = 0;
    color.rgb.blue = 0;
    return color;
}

//target photoshop
app.bringToFront();

// Move the color initialization to the main function where we have settings
function main() {
    // Show settings dialog first
    var settingsResult = showSettingsDialog();
    if (!settingsResult) return; // Exit if cancelled
    
    // Now we can safely set the colors based on settings
    var backgroundColor = setColorFromSettings(settingsResult.settings);
    app.foregroundColor = backgroundColor;
    app.backgroundColor = backgroundColor;
    
    var topFolder = settingsResult.topFolder;
    
    if (!topFolder.exists) {
        alert("Source folder no longer exists. Please check settings.");
        return;
    }}

function getSettingsFilePath() {
    var userData = Folder.userData;
    var settingsFolder = new Folder(userData + "/TabletScript");
    if (!settingsFolder.exists) {
        settingsFolder.create();
    }
    return settingsFolder + "/tablet_script_settings.txt";
}

// Function to read settings from a file
function readSettings() {
    var settingsFile = new File(getSettingsFilePath());
    if (settingsFile.exists) {
        settingsFile.open('r');
        var content = settingsFile.read();
        settingsFile.close();
        
        var parts = content.split("|||");
        if (parts.length >= 11) {  // Updated to expect at least 11 parts
            return {
                photographer: parts[0],
                institution: parts[1],
                copyrightnotice: parts[2],
                xmpUsageTerms: parts[3],
                sourcePath: parts[4],
                outputPath: parts[5],
                addLogo: parts[6] === "true",
                logoPath: parts[7] || "",
                dpi: parseInt(parts[8]) || 600,
                compression: parts[9] || "none",
                creditLine: parts[10] || "Funding for photography...",
                backgroundColor: parts[11] || "black" // Add this line
            };
        }
    }
    return null;
}

// Function to get all settings
function getAllSettings() {
    var settings = readSettings() || {};
    return {
        photographer: settings.photographer || "",
        institution: settings.institution || "",
        copyrightnotice: settings.copyrightnotice || "",
        xmpUsageTerms: settings.xmpUsageTerms || "",
        sourcePath: settings.sourcePath || "",
        outputPath: settings.outputPath || "",
        addLogo: settings.addLogo || false,
        logoPath: settings.logoPath || "",
        dpi: settings.dpi || 600,
    };
}

// Function to save all settings
function saveAllSettings(settings) {
    var settingsFile = new File(getSettingsFilePath());
    settingsFile.open('w');
    settingsFile.write([
        settings.photographer,
        settings.institution,
        settings.copyrightnotice,
        settings.xmpUsageTerms,
        settings.sourcePath,
        settings.outputPath,
        settings.addLogo,
        settings.logoPath,
        settings.dpi,
        settings.compression,
        settings.creditLine,
        settings.backgroundColor  // Add this line
    ].join("|||"));
    settingsFile.close();
}

// Function to show settings dialog
function showSettingsDialog() {
    var settings = getAllSettings();
    
    var dialog = new Window("dialog", "Script Settings");
    dialog.orientation = "column";
    dialog.alignChildren = "fill";
    
    // Create tab panel
    var tpanel = dialog.add("tabbedpanel");
    var technicalTab = tpanel.add("tab", undefined, "Processing Options");
    var metadataTab = tpanel.add("tab", undefined, "Metadata");

    // Processing Options Tab
    technicalTab.alignChildren = "fill";

    // Folders Panel
    var foldersPanel = technicalTab.add("panel", undefined, "Source and Destination");
    foldersPanel.orientation = "column";
    foldersPanel.alignChildren = "left";
    foldersPanel.margins = [10, 15, 10, 10];

    // Source Folder
    var sourceGroup = foldersPanel.add("group");
    sourceGroup.add("statictext", undefined, "Source Folder:");
    var sourceInput = sourceGroup.add("edittext", undefined, settings.sourcePath);
    sourceInput.preferredSize.width = 250;
    var sourceBrowse = sourceGroup.add("button", undefined, "Browse");

    // Output Folder
    var outputGroup = foldersPanel.add("group");
    outputGroup.add("statictext", undefined, "Output Folder:");
    var outputInput = outputGroup.add("edittext", undefined, settings.outputPath);
    outputInput.preferredSize.width = 250;
    var outputBrowse = outputGroup.add("button", undefined, "Browse");

    // Logo Panel
    var logoPanel = technicalTab.add("panel", undefined, "Logo Options");
    logoPanel.orientation = "column";
    logoPanel.alignChildren = "left";
    logoPanel.margins = [10, 15, 10, 10];

    var logoGroup = logoPanel.add("group");
    var addLogoCheckbox = logoGroup.add("checkbox", undefined, "Add Logo to Images");
    addLogoCheckbox.value = settings.addLogo;

    var logoPathGroup = logoPanel.add("group");
    logoPathGroup.add("statictext", undefined, "Logo File:");
    var logoPathInput = logoPathGroup.add("edittext", undefined, settings.logoPath);
    logoPathInput.preferredSize.width = 250;
    var logoPathBrowse = logoPathGroup.add("button", undefined, "Browse");

    // Enable/disable logo path controls based on checkbox
    logoPathInput.enabled = addLogoCheckbox.value;
    logoPathBrowse.enabled = addLogoCheckbox.value;

    // TIFF Options Panel
    var tiffPanel = technicalTab.add("panel", undefined, "TIFF Options");
    tiffPanel.orientation = "column";
    tiffPanel.alignChildren = "left";
    tiffPanel.margins = [10, 15, 10, 10];

    // DPI Selection Group
    var dpiGroup = tiffPanel.add("group");
    dpiGroup.add("statictext", undefined, "Final Resolution:");
    var dpiRadioGroup = dpiGroup.add("group");
    var dpi300Radio = dpiRadioGroup.add("radiobutton", undefined, "300 DPI");
    var dpi600Radio = dpiRadioGroup.add("radiobutton", undefined, "600 DPI");

    // Set initial DPI radio selection based on saved settings
    if (settings.dpi === 300) {
        dpi300Radio.value = true;
    } else {
        dpi600Radio.value = true;
    }

    // TIFF Compression
    var compressionGroup = tiffPanel.add("group");
    compressionGroup.add("statictext", undefined, "Compression:");
    var compressionDropdown = compressionGroup.add("dropdownlist", undefined, ["None", "LZW", "ZIP"]);
    compressionDropdown.selection = 0;

    // Set initial compression selection based on saved settings
    switch(settings.compression) {
        case "lzw":
            compressionDropdown.selection = 1;
            break;
        case "zip":
            compressionDropdown.selection = 2;
            break;
        default:
            compressionDropdown.selection = 0;
    }

    // JPEG Options Panel
    var jpegPanel = technicalTab.add("panel", undefined, "JPEG Options");
    jpegPanel.orientation = "column";
    jpegPanel.alignChildren = "left";
    jpegPanel.margins = [10, 15, 10, 10];

    var jpegGroup = jpegPanel.add("group");
    var saveJpegCheckbox = jpegGroup.add("checkbox", undefined, "Save JPEG Copy");
    saveJpegCheckbox.value = settings.saveJpeg || false;

    // JPEG Quality controls (only shown when checkbox is checked)
    var jpegQualityGroup = jpegPanel.add("group");
    jpegQualityGroup.orientation = "column";
    jpegQualityGroup.alignChildren = "left";
    jpegQualityGroup.spacing = 5;

    // Add header group
    var jpegHeaderGroup = jpegQualityGroup.add("group");
    jpegHeaderGroup.add("statictext", undefined, "JPEG Quality:");
    var qualityLevelText = jpegHeaderGroup.add("statictext", undefined, "");
    qualityLevelText.preferredSize.width = 100;

    // Add dropdown and slider group
    var controlsGroup = jpegQualityGroup.add("group");
    controlsGroup.spacing = 10;

    // Create dropdown with numbers 1-12
    var qualityNumbers = [];
    for (var i = 1; i <= 12; i++) {
        qualityNumbers.push(i.toString());
    }
    var qualityDropdown = controlsGroup.add("dropdownlist", undefined, qualityNumbers);

    // Create slider
    var qualitySlider = controlsGroup.add("slider", undefined, 8, 1, 12);
    qualitySlider.preferredSize.width = 150;

    // Add value display
    var qualityValue = controlsGroup.add("statictext", undefined, "8");
    qualityValue.preferredSize.width = 20;

    // Function to update quality level text
    function updateQualityLevelText(value) {
        if (value <= 4) {
            qualityLevelText.text = "(Minimum)";
        } else if (value <= 7) {
            qualityLevelText.text = "(Low)";
        } else if (value <= 9) {
            qualityLevelText.text = "(Medium)";
        } else {
            qualityLevelText.text = "(Maximum)";
        }
    }

    // Set initial values
    var initialQuality = settings.jpegQuality || 8;
    qualityDropdown.selection = initialQuality - 1;
    qualitySlider.value = initialQuality;
    qualityValue.text = initialQuality.toString();
    updateQualityLevelText(initialQuality);

    // Synchronize controls
    qualitySlider.onChanging = function() {
        var value = Math.round(this.value);
        qualityValue.text = value.toString();
        qualityDropdown.selection = value - 1;
        updateQualityLevelText(value);
    };

    qualitySlider.onChange = function() {
        // Ensure we snap to integer values
        var value = Math.round(this.value);
        this.value = value;
        qualityValue.text = value.toString();
        qualityDropdown.selection = value - 1;
        updateQualityLevelText(value);
    };

    qualityDropdown.onChange = function() {
        var value = this.selection.index + 1;
        qualitySlider.value = value;
        qualityValue.text = value.toString();
        updateQualityLevelText(value);
    };

    // Enable/disable quality controls based on checkbox
    function updateControlsState() {
        qualityDropdown.enabled = saveJpegCheckbox.value;
        qualitySlider.enabled = saveJpegCheckbox.value;
        qualityValue.enabled = saveJpegCheckbox.value;
        qualityLevelText.enabled = saveJpegCheckbox.value;
    }
    
    saveJpegCheckbox.onClick = function() {
        updateControlsState();
    };

    // Set initial state
    updateControlsState();
      
    
    // Metadata Tab
    metadataTab.alignChildren = "fill";

    // General Metadata Section
    var generalMetadataPanel = metadataTab.add("panel", undefined, "General Metadata");
    generalMetadataPanel.orientation = "column";
    generalMetadataPanel.alignChildren = "left";
    generalMetadataPanel.margins = [10, 15, 10, 10];

    // Photographer
    var photographerGroup = generalMetadataPanel.add("group");
    photographerGroup.add("statictext", undefined, "Photographer:");
    var photographerInput = photographerGroup.add("edittext", undefined, settings.photographer);
    photographerInput.preferredSize.width = 300;

    // Institution
    var institutionGroup = generalMetadataPanel.add("group");
    institutionGroup.add("statictext", undefined, "Institution:");
    var institutionInput = institutionGroup.add("edittext", undefined, settings.institution);
    institutionInput.preferredSize.width = 300;

    // Copyright Notice
    var copyrightGroup = generalMetadataPanel.add("group");
    copyrightGroup.add("statictext", undefined, "Copyright Notice:");
    var copyrightInput = copyrightGroup.add("edittext", undefined, settings.copyrightnotice);
    copyrightInput.preferredSize.width = 300;

    // Copyright Usage Terms
    var usageTermsGroup = generalMetadataPanel.add("group");
    usageTermsGroup.add("statictext", undefined, "Copyright (Usage Terms):");
    var usageTermsInput = usageTermsGroup.add("edittext", undefined, settings.xmpUsageTerms);
    usageTermsInput.preferredSize.width = 300;

    // IPTC Metadata Section
    var iptcPanel = metadataTab.add("panel", undefined, "IPTC Metadata");
    iptcPanel.orientation = "column";
    iptcPanel.alignChildren = "left";
    iptcPanel.margins = [10, 15, 10, 10];

    // Title
    var titleGroup = iptcPanel.add("group");
    titleGroup.add("statictext", undefined, "Title:");
    var titleDisplay = titleGroup.add("statictext", undefined, "(Will be set to Tablet Number)");
    titleDisplay.preferredSize.width = 300;

    // Headline
    var headlineGroup = iptcPanel.add("group");
    headlineGroup.add("statictext", undefined, "Headline:");
    var headlineDisplay = headlineGroup.add("statictext", undefined, "(Will be set to Tablet Number)");
    headlineDisplay.preferredSize.width = 300;

    // Author/Creator
    var authorGroup = iptcPanel.add("group");
    authorGroup.add("statictext", undefined, "Author/Creator:");
    var authorDisplay = authorGroup.add("statictext", undefined, settings.photographer);
    authorDisplay.preferredSize.width = 300;

    // Credit Line
    var creditGroup = iptcPanel.add("group");
    creditGroup.add("statictext", undefined, "Credit Line:");
    var creditInput = creditGroup.add("edittext", undefined, 
        "Funding for photography and post-processing provided by a Sofja Kovalevskaja Award " +
        "(Alexander von Humboldt Foundation, German Federal Ministry for Education and Research) " +
        "as part of the Electronic Babylonian Literature-Projekt of the Ludwig-Maximilians-Universität München", 
        {multiline: true});
    creditInput.preferredSize.width = 300;
    creditInput.preferredSize.height = 100;
    
    // Buttons at the bottom of the dialog
    var buttonGroup = dialog.add("group");
    buttonGroup.alignment = "center";
    var okButton = buttonGroup.add("button", undefined, "OK");
    var cancelButton = buttonGroup.add("button", undefined, "Cancel");
    
    // Browse button handlers
    sourceBrowse.onClick = function() {
        var folder = Folder.selectDialog("Select source folder");
        if (folder) sourceInput.text = folder.fsName;
    }
    
    outputBrowse.onClick = function() {
        var folder = Folder.selectDialog("Select output folder");
        if (folder) outputInput.text = folder.fsName;
    }
    
    logoPathBrowse.onClick = function() {
        var file = File.openDialog("Select logo file", "*.png;*.jpg;*.tif;*.psd");
        if (file) logoPathInput.text = file.fsName;
    }
    
    okButton.onClick = function() {
        settings = {
            photographer: photographerInput.text,
            institution: institutionInput.text,
            copyrightnotice: copyrightInput.text,
            xmpUsageTerms: usageTermsInput.text,
            sourcePath: sourceInput.text,
            outputPath: outputInput.text,
            addLogo: addLogoCheckbox.value,
            logoPath: logoPathInput.text,
            dpi: dpi300Radio.value ? 300 : 600,
            compression: compressionDropdown.selection ? 
                        compressionDropdown.selection.text.toLowerCase() : "none",
            creditLine: creditInput.text,
            saveJpeg: saveJpegCheckbox.value,
            jpegQuality: Math.round(qualitySlider.value)
        };
        saveAllSettings(settings);
        dialog.close(1);
    }
    
    cancelButton.onClick = function() {
        dialog.close(0);
    }
    
    // Force the initial tab to be "Main Settings"
    tpanel.selection = technicalTab;

    var result = dialog.show();
    
    if (result == 1) {
        // Update global variables
        photographer = settings.photographer;
        institution = settings.institution;
        copyrightnotice = settings.copyrightnotice;
        folderinlocalcomputer = settings.outputPath + "/";
        return {
            settings: settings,
            topFolder: new Folder(settings.sourcePath)
        };
    }
    return null;
}

// Modified main function start
function main() {
    // Show settings dialog first
    var settingsResult = showSettingsDialog();
    if (!settingsResult) return; // Exit if cancelled
    
    var topFolder = settingsResult.topFolder;
    
    if (!topFolder.exists) {
        alert("Source folder no longer exists. Please check settings.");
        return;
    }
    
    // Continue with the rest of your main function...
    var images = topFolder.getFiles();

// gives each BM filename
	for (var i = 0; i < images.length; i++) {
        var image = images[i];
// the point of the if clause is to deal with top level folders that contain a mix of just files dumped in together plus sub-folders containing their images. When the script goes on to stitch images in folders, it will do this both to the folders created here and to those that already exist
      if (image instanceof File) {
         var newFolderLongName = image.name.toString();
            // this line cuts off the file extension .tif and the _NN
        var newFolderName = newFolderLongName.slice(0, -7);
        var newFolder = Folder(topFolder + "/" + newFolderName);
// Check if it exists already; if not create it.
            if(!newFolder.exists) newFolder.create();

// JS has no move for file. Thus copy, and delete original. 
 var myFile = File(topFolder + "/" + newFolderLongName);
 myFile.copy(newFolder + "/" + newFolderLongName);
  myFile.remove();
    }
}
// get a list of files
	var subFolder = topFolder.getFiles();

	var images = []
// loop through each to grab the 6 files and stitch them
for (var i = 0; i < subFolder.length; i++) {
    images.push(subFolder[i].getFiles());
}

for (var i = 0; i < images.length; i++) {
    importFolderAsLayers(images[i], settingsResult);  // Pass settingsResult here
}
}

///////////////////////////////////////////////////////////////////////////////
// getFiles - get all files in the target folder
///////////////////////////////////////////////////////////////////////////////
function getFiles(topFolder) {
	// declare local variables
	var fileArray = new Array();
	var extRE = /\.(?:png|gif|jpg|bmp|tif|psd|dng)$/i;

	// get all files in source folder
	var docs = topFolder.getFiles();
	var len = docs.length;
	for (var i = 0; i < len; i++) {
		var doc = docs[i];

		// only match files (not folders)
		if (doc instanceof File) {
			// store all recognized files into an array
			var docName = doc.name;
			if (docName.match(extRE)) {
				fileArray.push(doc);
			}
	}
	// return file array
	return fileArray;
}
}

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// COMPOSITING ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// importFolderAsLayers - imports all files within target folder as layers named according to their filename
function importFolderAsLayers(fileArray, settingsResult) {
    // Get DPI from settings
    var n = settingsResult.settings.dpi;

    // Set Adobe Photoshop CS6 to use pixels and display no dialogs
    app.preferences.rulerUnits = Units.PIXELS;
    app.preferences.typeUnits = TypeUnits.PIXELS;

    // Set background color based on settings
    var backgroundColor = setColorFromSettings(settingsResult.settings);
    app.foregroundColor = backgroundColor;
    app.backgroundColor = backgroundColor;

    // Create a blank canvas using the selected DPI
    var newDoc = documents.add(8000, 8000, n, 'A new final in the making', NewDocumentMode.RGB, DocumentFill.BACKGROUNDCOLOR);
    var newLayer = newDoc.activeLayer;

	// loop through all files in the source folder
	for (var i = 0; i < fileArray.length; i++) {
		// open document
        var doc = open(fileArray[i]);
        
		// get document name (and remove file extension)
		var name = doc.name.replace(/(?:\.[^.]*$|$)/, '');

		// convert to RGB; convert to 8-bpc; merge visible
		doc.changeMode(ChangeMode.RGB);
		doc.bitsPerChannel = BitsPerChannelType.EIGHT;
		doc.artLayers.add();
		doc.mergeVisibleLayers();

		// rename layer; duplicate to new document
		var layer = doc.activeLayer;
		layer.name = name;
		layer.duplicate(newDoc, ElementPlacement.PLACEATBEGINNING);

		// close imported document
		doc.close(SaveOptions.DONOTSAVECHANGES);
	}

// remove unwanted material from names ready for naming of layers and final file
var layerName = app.activeDocument.layers[1].name;
var trimmed = layerName.replace("BMND", "ND");
var tabletNumber = trimmed.slice(0, -3);
var layerPrefix = trimmed.slice(0, -2);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//add layers if missing
var exist = app.activeDocument.layers.length;
var goal = 7;
var diff = goal - exist;
placeHolderName = "EMPTY"

//add a 10x10 pixel placeholder for every missing side
if (diff > 0){
    for (i = 0; i < diff; i++){
        var newLayer = app.activeDocument.artLayers.add();
        newLayer.name = placeHolderName
        app.activeDocument.selection.select([[0,0], [10, 0], [10,10], [0,10]]);
        var fillColor = setColorFromSettings(settingsResult.settings);
        app.activeDocument.selection.fill(fillColor);
        app.activeDocument.selection.deselect();
    }
}

//fix layer order

//disable background layer
var backgroundL = app.activeDocument.backgroundLayer;
backgroundL.isBackgroundLayer = false;

//Search every side view
for (i = 1; i <= 7; i++){	
	//create list of layers by name, redo every loop, in case order changes
	var layers = app.activeDocument.layers
	var layersByNames = []
	for (j = 0; j < layers.length; j++){
		layersByNames.push((layers[j].name))
	};

	//search list for numbered suffix
	var pattern = new RegExp(i + '$');
	var containsPattern = false
	for (k = 0; k < layersByNames.length; k++){
		//searches for i in layername of k
		if (pattern.test(layersByNames[k])){
			containsPattern = true;
			//move side to right index
			switch(i){
				case 1:
					//Obverse to 5
					swapLayers(k, 5);
					break;
				case 2:
					//Reverse to 4
					swapLayers(k, 4);
					break;
				case 3:
					//Bottom to 3
					swapLayers(k, 3);
					break;
				case 4:
					//Upper to 2
					swapLayers(k, 2);
					break;
				case 5:
					//Right to 1
					swapLayers(k, 1);
					break;
				case 6:
					//Left to 0
					swapLayers(k, 0);
					break;
			}
			break;
		}
	}
	
}

//enable background layer?
backgroundL.isBackgroundLayer = true;
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//this moves the obv to centre
//old: var obvLayerBounds = app.activeDocument.layers[1].bounds
var obvLayerBounds = app.activeDocument.layers[5].bounds;

// get top left position
var obvLayerX = (obvLayerBounds[2].value - obvLayerBounds[0].value);
var obvLayerY = (obvLayerBounds[3].value - obvLayerBounds[1].value);

// the difference between where layer needs to be and is now
var obvDeltaX = (8000-obvLayerX)/2;
// move the layer into position
app.activeDocument.layers[5].translate (obvDeltaX);

//this positions left to left of obv 
var leftLayerBounds = app.activeDocument.layers[1].bounds;
var leftLayerX = (leftLayerBounds[2].value - leftLayerBounds[0].value);
var leftLayerY = (leftLayerBounds[3].value - leftLayerBounds[1].value);
var leftDeltaX = obvDeltaX-leftLayerX;
app.activeDocument.layers[1].translate (leftDeltaX);

// resize the left to match obv
//Grab the width
var masterWidth = app.activeDocument.layers[5].bounds[2]-app.activeDocument.layers[5].bounds[0]; 
//Grab the height
var masterHeight = app.activeDocument.layers[5].bounds[3]-app.activeDocument.layers[5].bounds[1]; 

//Grab the width
var originalLeftWidth = app.activeDocument.layers[1].bounds[2]-app.activeDocument.layers[1].bounds[0]; 
//Grab the height
var originalLeftHeight = app.activeDocument.layers[1].bounds[3]-app.activeDocument.layers[1].bounds[1]; 

// Get % of desired dimension compared to original then apply to both H and W
var newLeftHeight= (masterHeight/originalLeftHeight)*100;

if (app.activeDocument.layers[1].name != placeHolderName){
	app.activeDocument.layers[1].resize(newLeftHeight,newLeftHeight,AnchorPosition.TOPRIGHT);
}
//app.activeDocument.layers[1].resize(newLeftHeight,newLeftHeight,AnchorPosition.TOPRIGHT);

//this positions right to right of obv 
var rightLayerBounds = app.activeDocument.layers[0].bounds;
var rightLayerX = (rightLayerBounds[2].value - rightLayerBounds[0].value);
var rightDeltaX = obvDeltaX+obvLayerX;
app.activeDocument.layers[0].translate (rightDeltaX);

// resize the right to match obv. See above sub left for comments on stages
if (app.activeDocument.layers[0].name != placeHolderName){
    var originalRightWidth = app.activeDocument.layers[0].bounds[2]-app.activeDocument.layers[0].bounds[0]; 
    var originalRightHeight = app.activeDocument.layers[0].bounds[3]-app.activeDocument.layers[0].bounds[1]; 
    var newRightHeight= (masterHeight/originalRightHeight)*100;
    app.activeDocument.layers[0].resize(newRightHeight,newRightHeight,AnchorPosition.TOPLEFT);
}

//this positions base to below obv 
var baseLayerBounds = app.activeDocument.layers[2].bounds;
var baseLayerX = (baseLayerBounds[2].value - baseLayerBounds[0].value);
var baseLayerY = (baseLayerBounds[3].value - baseLayerBounds[1].value);
var baseDeltaX = (8000-obvLayerX)/2;
var baseDeltaY = (obvLayerY);
app.activeDocument.layers[2].translate (baseDeltaX, baseDeltaY);

// resize the base to match obv. See above sub left for comments on stages
if (app.activeDocument.layers[2].name != placeHolderName){
    var originalBaseWidth = app.activeDocument.layers[2].bounds[2]-app.activeDocument.layers[2].bounds[0]; 
    var originalBaseHeight = app.activeDocument.layers[2].bounds[3]-app.activeDocument.layers[2].bounds[1]; 
    var newBaseWidth= (masterWidth/originalBaseWidth)*100;
    app.activeDocument.layers[2].resize(newBaseWidth,newBaseWidth,AnchorPosition.TOPLEFT);
}

//this positions rev to below base
var revLayerBounds = app.activeDocument.layers[4].bounds;
var revLayerX = (revLayerBounds[2].value - revLayerBounds[0].value);
var revLayerY = (revLayerBounds[3].value - revLayerBounds[1].value);
var revDeltaX = (8000-obvLayerX)/2;
var newBaseLayerBounds = app.activeDocument.layers[2].bounds;
var newBaseLayerY = (newBaseLayerBounds[3].value - newBaseLayerBounds[1].value);
var revDeltaY = (obvLayerY+newBaseLayerY);
app.activeDocument.layers[4].translate (revDeltaX, revDeltaY);

// resize rev to match obv
if (app.activeDocument.layers[4].name != placeHolderName){
    var originalRevWidth = app.activeDocument.layers[4].bounds[2]-app.activeDocument.layers[4].bounds[0]; 
    var originalRevHeight = app.activeDocument.layers[4].bounds[3]-app.activeDocument.layers[4].bounds[1]; 
    var newRevWidth= (masterWidth/originalRevWidth)*100;
    app.activeDocument.layers[4].resize(newRevWidth,newRevWidth,AnchorPosition.TOPLEFT);
}

//this positions top to below rev
var topLayerBounds = app.activeDocument.layers[3].bounds;
var topLayerX = (topLayerBounds[2].value - topLayerBounds[0].value);
var topLayerY = (topLayerBounds[3].value - topLayerBounds[1].value);
var newRevLayerBounds = app.activeDocument.layers[4].bounds;
var newRevLayerY = (newRevLayerBounds[3].value - newRevLayerBounds[1].value);
var topDeltaX = (8000-obvLayerX)/2;
var topDeltaY = (obvLayerY+newBaseLayerY+newRevLayerY);
app.activeDocument.layers[3].translate (topDeltaX, topDeltaY);

// resize the top to match obv. See above sub left for comments on stages
if (app.activeDocument.layers[3].name != placeHolderName){
    var originalTopWidth = app.activeDocument.layers[3].bounds[2]-app.activeDocument.layers[3].bounds[0]; 
    var originalTopHeight = app.activeDocument.layers[3].bounds[3]-app.activeDocument.layers[3].bounds[1]; 
    var newTopWidth= (masterWidth/originalTopWidth)*100;
    app.activeDocument.layers[3].resize(newTopWidth,newTopWidth,AnchorPosition.TOPLEFT);
}

// duplicate, rotate, and position new left layer (new step)
app.activeDocument.layers[1].duplicate();
app.activeDocument.layers[1].rotate(180, AnchorPosition.MIDDLECENTER);
var leftNewLayerBounds = app.activeDocument.layers[1].bounds;
var newRevLayerBounds = app.activeDocument.layers[5].bounds;
var leftNewLayerY = (newRevLayerBounds[3].value - leftNewLayerBounds[3].value);
app.activeDocument.layers[1].translate (0, leftNewLayerY);

// duplicate, rotate, and position new right layer (new step)
app.activeDocument.layers[0].duplicate();
app.activeDocument.layers[0].rotate(180, AnchorPosition.MIDDLECENTER);
var rightNewLayerBounds = app.activeDocument.layers[0].bounds;
var newRevLayerBounds = app.activeDocument.layers[6].bounds;
var rightNewLayerY = (newRevLayerBounds[3].value - rightNewLayerBounds[3].value);
app.activeDocument.layers[0].translate (0, rightNewLayerY);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// trim excess from image
    newDoc.resizeCanvas(app.activeDocument.width + 2000, app.activeDocument.height + 5000, AnchorPosition.TOPCENTER);

// Set the background color to black (explicitly)
var backgroundColor = setColorFromSettings(settingsResult.settings);
app.backgroundColor = backgroundColor;

// Resize the canvas
var newCanvasHeight = app.activeDocument.height + 5000; // Adjust height as needed
var newCanvasWidth = app.activeDocument.width;
app.activeDocument.resizeCanvas(newCanvasWidth, newCanvasHeight, AnchorPosition.TOPCENTER);

// Ensure the newly added area is filled with black
var newAreaStartY = app.activeDocument.height - 5000; // Calculate starting point of the new area
app.activeDocument.selection.select([
    [0, newAreaStartY],
    [newCanvasWidth, newAreaStartY],
    [newCanvasWidth, app.activeDocument.height],
    [0, app.activeDocument.height]
]);

var fillColor = setColorFromSettings(settingsResult.settings);
app.activeDocument.selection.fill(fillColor);
app.activeDocument.selection.deselect();

    
    newDoc.revealAll(DocumentFill.BACKGROUNDCOLOR);
    newDoc.trim(TrimType.TOPLEFT, true, true, true, true);

// flatten layers
app.activeDocument.flatten()

// reset ruler to cm
app.preferences.rulerUnits = Units.CM

// save final file
function SaveTIFF(saveFile){
tiffSaveOptions = new TiffSaveOptions(); 
tiffSaveOptions.embedColorProfile = true; 
tiffSaveOptions.layers = true;
//tiffSaveOptions.imageCompression = TIFFEncodingLZW
activeDocument.saveAs(saveFile, tiffSaveOptions, true, Extension.LOWERCASE); 

// If JPEG saving is enabled, save a JPEG copy
    if (settingsResult.settings.saveJpeg) {
        // Create JPEG save options
        var jpegSaveOptions = new JPEGSaveOptions();
        jpegSaveOptions.embedColorProfile = true;
        jpegSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegSaveOptions.matte = MatteType.NONE;
        jpegSaveOptions.quality = settingsResult.settings.jpegQuality;
        
        // Create JPEG filename by replacing .tif extension
        var jpegFile = new File(saveFile.toString().replace(/\.tif$/i, '.jpg'));
        
        // Save JPEG copy
        activeDocument.saveAs(jpegFile, jpegSaveOptions, true, Extension.LOWERCASE);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// RESCALING /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

function selectBlue(){ //using eyedropper in Color Range selector. Get this using the Script Listener
    var id2382 = charIDToTypeID( "ClrR" );
    var desc488 = new ActionDescriptor();
    var id2383 = charIDToTypeID( "Fzns" );
    desc488.putInteger( id2383, 40 );
    var id2384 = charIDToTypeID( "Mnm " );
    var desc489 = new ActionDescriptor();
    var id2385 = charIDToTypeID( "Lmnc" );
    desc489.putDouble( id2385, 13.910000 );
    var id2386 = charIDToTypeID( "A   " );
    desc489.putDouble( id2386, 44.920000 );
    var id2387 = charIDToTypeID( "B   " );
    desc489.putDouble( id2387, -73.620000 );
    var id2388 = charIDToTypeID( "LbCl" );
    desc488.putObject( id2384, id2388, desc489 );
    var id2389 = charIDToTypeID( "Mxm " );
    var desc490 = new ActionDescriptor();
    var id2390 = charIDToTypeID( "Lmnc" );
    desc490.putDouble( id2390, 13.910000 );
    var id2391 = charIDToTypeID( "A   " );
    desc490.putDouble( id2391, 44.920000 );
    var id2392 = charIDToTypeID( "B   " );
    desc490.putDouble( id2392, -73.620000 );
    var id2393 = charIDToTypeID( "LbCl" );
    desc488.putObject( id2389, id2393, desc490 );
executeAction( id2382, desc488, DialogModes.NO );
}

function getSelectionBounds (doc) { //alternative to using bounds function
var l = srcDoc.artLayers.add(); 
srcDoc.selection.fill(app.foregroundColor); 
var bnds = l.bounds; 
var hs = srcDoc.historyStates; 
	if (hs[hs.length-2].name == "Layer Order") { 
	srcDoc.activeHistoryState = hs[hs.length-4]; 
	} else { 
	srcDoc.activeHistoryState = hs[hs.length-3]; 
	} 
	for (var i = 0; i < bnds.length; i++) { 
	bnds[i] = bnds[i].value; 
	} 
return bnds; 
}; 

//script work starts
var strtRulerUnits = app.preferences.rulerUnits;
if (strtRulerUnits != Units.CM)
{
  app.preferences.rulerUnits = Units.CM;
}

//source document
var srcDoc = activeDocument;

//Use the same DPI value for rescaling
selectBlue();
var BlueSquare = getSelectionBounds();
var horizBlue = BlueSquare[2] - BlueSquare[0];
var vertBlue = BlueSquare[3] - BlueSquare[1];

if ((horizBlue / vertBlue) > 1)  // it really is around 1.33; then 5cm scale
{ 
    var c = (0.77/horizBlue); // For 5cm scale - target size of 0.77cm
}
else // ((horizBlue / vertBlue) < 1) // it really is around 1; then 2cm scale
{
    var c = (0.3/horizBlue);  // For 2cm scale - target size of 0.3cm
}

//resize image using proper DPI conversion
srcDoc.resizeImage(null,null,n,ResampleMethod.BICUBIC);
var scale = (c * srcDoc.width*n/2.54);//new size of image in pixels - 2.54 to convert dpi into pixels/cm
srcDoc.resizeImage(UnitValue(scale,"px"),null,null,ResampleMethod.BICUBIC);



// flatten layers
app.activeDocument.flatten();

// add wrap around margin of 100 px
	app.preferences.rulerUnits = Units.PIXELS;
    app.activeDocument.trim(TrimType.TOPLEFT, true, true, true, true);
	srcDoc.resizeCanvas(app.activeDocument.width+200, app.activeDocument.height+200, AnchorPosition.MIDDLECENTER);
    
	app.preferences.rulerUnits = Units.CM;

//delete all guides if there are guides
function deleteAllGuides() {
	var idDlt = charIDToTypeID( "Dlt " );
    var desc1129 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref268 = new ActionReference();
    var idGd = charIDToTypeID( "Gd  " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idAl = charIDToTypeID( "Al  " );
    ref268.putEnumerated( idGd, idOrdn, idAl );
    desc1129.putReference( idnull, ref268 );
executeAction( idDlt, desc1129, DialogModes.NO );
}

// Access the active document
var docRef = app.activeDocument;

// Access the document info object
var info = docRef.info;

// Set IPTC Core metadata
info.title = tabletNumber; // Title (Überschrift)
info.credit = settingsResult.settings.creditLine;
info.copyrightNotice = settingsResult.settings.copyrightnotice; // Copyright Notice
info.copyrighted = CopyrightedType.COPYRIGHTEDWORK; // Copyright Status
info.headline = tabletNumber; // Headline or Title
info.author = photographer; // Author/Creator

// Save changes to metadata
docRef.info = info;

if (ExternalObject.AdobeXMPScript == null) {
    ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
}

var xmpMetadata = new XMPMeta(docRef.xmpMetadata.rawData);

xmpMetadata.setLocalizedText(
    XMPConst.NS_XMP_RIGHTS,
    "xmpRights:UsageTerms",
    null,       // Default language
    "x-default", // Language code
    settingsResult.settings.xmpUsageTerms  // The text from the main tab
);

// Save the updated metadata back to the document
docRef.xmpMetadata.rawData = xmpMetadata.serialize();

//run function
deleteAllGuides()


// function to swap layer with placeholder layer in hierarchy
function swapLayers(index1, index2){
	var doc = app.activeDocument;

	var layer1 = doc.layers[index1];
	var layer2 = doc.layers[index2];

	if (index1 < index2) {
		layer1.move(layer2, ElementPlacement.PLACEBEFORE);
		layer2.move(doc.layers[index1], ElementPlacement.PLACEBEFORE);
	} else {
		layer2.move(layer1, ElementPlacement.PLACEBEFORE);
		layer1.move(doc.layers[index2], ElementPlacement.PLACEBEFORE);
	}
}

// Ask user if they want to add a logo
// Add logo if it was selected in settings
if (settingsResult.settings.addLogo && settingsResult.settings.logoPath) {
    var logoFile = new File(settingsResult.settings.logoPath);
    
    if (logoFile.exists) {
        // Open the active document (base image)
        var baseDoc = app.activeDocument;

        // Open the logo
        var logoDoc = app.open(logoFile);

        // Get the logo's original dimensions before duplicating
        var originalLogoWidth = logoDoc.width;

        // Duplicate the logo into the base image
        var logoLayer = logoDoc.artLayers[0].duplicate(baseDoc, ElementPlacement.PLACEATEND);

        // Close the logo document
        logoDoc.close(SaveOptions.DONOTSAVECHANGES);

        // Back to the base image document
        app.activeDocument = baseDoc;

        // Get dimensions
        var baseWidth = baseDoc.width;
        var baseHeight = baseDoc.height;
        app.activeDocument.activeLayer = logoLayer; // Ensure the correct layer is active
        var logoBounds = logoLayer.bounds;
        var logoWidth = logoBounds[2] - logoBounds[0]; // Right - Left
        var logoHeight = logoBounds[3] - logoBounds[1]; // Bottom - Top

        // Check if logo needs resizing
        if (logoWidth > baseWidth) {
            // Calculate resize percentage (70% of original if wider than base image)
            var resizePercentage = 70;
            logoLayer.resize(resizePercentage, resizePercentage, AnchorPosition.MIDDLECENTER);
            
            // Update logo dimensions after resize
            logoBounds = logoLayer.bounds;
            logoWidth = logoBounds[2] - logoBounds[0];
            logoHeight = logoBounds[3] - logoBounds[1];
        }

        // Calculate new canvas height
        var newCanvasHeight = baseHeight + logoHeight;

        // Expand the canvas
        baseDoc.resizeCanvas(baseWidth, newCanvasHeight, AnchorPosition.TOPCENTER);

        // Create a temporary layer for black fill
        var fillLayer = baseDoc.artLayers.add();
        fillLayer.name = "Black Fill";
        fillLayer.move(baseDoc, ElementPlacement.PLACEATEND);

        // Select the new canvas area
        baseDoc.selection.select([
            [0, baseHeight], 
            [baseWidth, baseHeight], 
            [baseWidth, newCanvasHeight], 
            [0, newCanvasHeight]
        ]);

        // Fill the selected area with black
        var fillColor = setColorFromSettings(settingsResult.settings);
        baseDoc.selection.fill(fillColor);
        baseDoc.selection.deselect();

        // Merge the fill layer down
        fillLayer.merge();

        // Move the logo to the very bottom and center it horizontally
        var xOffset = (baseWidth - (logoBounds[2] - logoBounds[0])) / 2 - logoBounds[0]; // Center horizontally
        var yOffset = baseHeight - logoBounds[1]; // Distance to move the logo vertically
        logoLayer.translate(xOffset, yOffset);

        // Merge all layers to finalize
        baseDoc.flatten();
    }
}

// Create TIFF and JPEG folders
var tiffFolder = new Folder(folderinlocalcomputer + "/TIFF");
if (!tiffFolder.exists) {
    tiffFolder.create();
}

// Create JPEG folder only if JPEG saving is enabled
var jpegFolder;
if (settingsResult.settings.saveJpeg) {
    jpegFolder = new Folder(folderinlocalcomputer + "/JPEG");
    if (!jpegFolder.exists) {
        jpegFolder.create();
    }
}

// Save TIFF in TIFF folder
saveFinal = new File(tiffFolder + "/" + tabletNumber + ".tif");
var tiffSaveOptions = new TiffSaveOptions();
tiffSaveOptions.embedColorProfile = true;
tiffSaveOptions.layers = true;

// Set compression based on settings
switch(settingsResult.settings.compression) {
    case "lzw":
        tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        break;
    case "zip":
        tiffSaveOptions.imageCompression = TIFFEncoding.TIFFZIP;
        break;
    default:
        tiffSaveOptions.imageCompression = TIFFEncoding.NONE;
}

// Save TIFF
srcDoc.saveAs(saveFinal, tiffSaveOptions, false, Extension.LOWERCASE);

// Save JPEG if enabled
if (settingsResult.settings.saveJpeg) {
    var jpegSaveOptions = new JPEGSaveOptions();
    jpegSaveOptions.embedColorProfile = true;
    jpegSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    jpegSaveOptions.matte = MatteType.NONE;
    jpegSaveOptions.quality = settingsResult.settings.jpegQuality;
    
    var jpegFile = new File(jpegFolder + "/" + tabletNumber + ".jpg");
    srcDoc.saveAs(jpegFile, jpegSaveOptions, true, Extension.LOWERCASE);
}

srcDoc.close(SaveOptions.DONOTSAVECHANGES);

}

///////////////////////////////////////////////////////////////////////////////
// showError - display error message if something goes wrong
///////////////////////////////////////////////////////////////////////////////
function showError(err) {
    alert(err.description + "\r\rError on line " + err.line + ".\r", "Script Error", true);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)
}

try {
	main();
}

catch(e) {
	// don't report error on user cancel
	if (e.number != 8007) {
		showError(e);
	}
}