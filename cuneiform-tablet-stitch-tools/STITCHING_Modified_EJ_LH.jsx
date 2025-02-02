////////////// ABOUT THIS SCRIPT /////////////////

// This script has been put together by M. Touillon-Ricci based on J.J. Taylor's Compositor and Finaliser scripts.
// It has been developed to run on Mac OS X. To have it run on a Windows computer, just change the filepath, as Mac and PC directory structures do differ.
// It has been adapted by E. Jiménez to add rotated copies of the left and right hand sides of the photos.
// It has been adapted by L. Happel to also work with fewer images of the fragment.

////////////// SCRIPT'S STEPS /////////////////

// Sort and gather images into sub-folders named by tablet number.
// Go through each folder and stitch the images together.
// Rescale the image based on the digital color scale.
// Replace the color scale with a digital grey scale.
// Save As TIFF in //BLM-FIS-01/UR/TABLETS/images/2_image assembly area/d_finalised images
// Save As JPEG in //BLM-FIS-01/UR/TABLETS/images/2_image assembly area/d_finalised images/_c_final JPEG at check point


////////////// PREREQUISITES /////////////////

// The digital color scale has to be added at preprocessing stage. The script indeed uses the blue bottom left square of the scale to rescale the whole image.
// If the scale is larger than the object, make sure to crop the scale sensibly, i.e. preserving the original proportions in the cropped version and the blue bottom left square.
// This script uses calculations based on both color and grey scales dimensions. The 5 cm color scale should be 1346 x 462 px. The 5 cm grey scale should be 1346 x 308 px.

// Install the script in your version of Photoshop to access it directly via the application.
// Original location of preprocessed files: //BLM-FIS-01/UR/TABLETS/images/2_image assembly area/a_preprocessed images in need of stitching


////////////// RUN PHOTOSHOP AND LAUNCH SCRIPT /////////////////

// For Photoshop CS2 and higher only.
// Enable double-clicking from Mac Finder or Windows Explorer and bring application forward.

var photographer = "Ashurbanipal Library Project";
var folderinlocalcomputer = "E:/Jena/test"
var institution = "The British Museum";
var copyrightnotice = "Funding provided by Alexander von Humboldt Foundation, German Federal Ministry for Education and Research";

//target photoshop
app.bringToFront();

////////////// MAIN FUNCTION /////////////////

function main() {
// prompt for source folder
	var topFolder = Folder.selectDialog("Script 'Compositor Finaliser 6 Views':\rSelect the folder containing the images you want stitched together and finalised");

// get a list of files
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
	importFolderAsLayers(images[i]);
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
function importFolderAsLayers(fileArray) {

// Set Adobe Photoshop CS6 to use pixels and display no dialogs
app.preferences.rulerUnits = Units.PIXELS
app.preferences.typeUnits = TypeUnits.PIXELS

// create a blank canvas on which to place all the images to make the new composite [W,H,dpi,temp name]]
	var newDoc = documents.add(8000, 8000, 600, 'A new final in the making', NewDocumentMode.RGB, DocumentFill.BACKGROUNDCOLOR);
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

//add a 10x10 pixel placeholder for every missing side
if (diff > 0){
	for (i = 0; i < diff; i++){
		var newLayer = app.activeDocument.artLayers.add();
		newLayer.name = "EMPTY"
		app.activeDocument.selection.select([[0,0], [10, 0], [10,10], [0,10]]);
		app.activeDocument.selection.fill(app.foregroundColor);
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
app.activeDocument.layers[1].resize(newLeftHeight,newLeftHeight,AnchorPosition.TOPRIGHT);

//this positions right to right of obv 
var rightLayerBounds = app.activeDocument.layers[0].bounds;
var rightLayerX = (rightLayerBounds[2].value - rightLayerBounds[0].value);
var rightDeltaX = obvDeltaX+obvLayerX;
app.activeDocument.layers[0].translate (rightDeltaX);

// resize the right to match obv. See above sub left for comments on stages
var originalRightWidth = app.activeDocument.layers[0].bounds[2]-app.activeDocument.layers[0].bounds[0]; 
var originalRightHeight = app.activeDocument.layers[0].bounds[3]-app.activeDocument.layers[0].bounds[1]; 
var newRightHeight= (masterHeight/originalRightHeight)*100;
app.activeDocument.layers[0].resize(newRightHeight,newRightHeight,AnchorPosition.TOPLEFT);

//this positions base to below obv 
var baseLayerBounds = app.activeDocument.layers[2].bounds;
var baseLayerX = (baseLayerBounds[2].value - baseLayerBounds[0].value);
var baseLayerY = (baseLayerBounds[3].value - baseLayerBounds[1].value);
var baseDeltaX = (8000-obvLayerX)/2;
var baseDeltaY = (obvLayerY);
app.activeDocument.layers[2].translate (baseDeltaX, baseDeltaY);

// resize the base to match obv. See above sub left for comments on stages
var originalBaseWidth = app.activeDocument.layers[2].bounds[2]-app.activeDocument.layers[2].bounds[0]; 
var originalBaseHeight = app.activeDocument.layers[2].bounds[3]-app.activeDocument.layers[2].bounds[1]; 
var newBaseWidth= (masterWidth/originalBaseWidth)*100;
app.activeDocument.layers[2].resize(newBaseWidth,newBaseWidth,AnchorPosition.TOPLEFT);

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
var originalRevWidth = app.activeDocument.layers[4].bounds[2]-app.activeDocument.layers[4].bounds[0]; 
var originalRevHeight = app.activeDocument.layers[4].bounds[3]-app.activeDocument.layers[4].bounds[1]; 
var newRevWidth= (masterWidth/originalRevWidth)*100;
app.activeDocument.layers[4].resize(newRevWidth,newRevWidth,AnchorPosition.TOPLEFT);

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
var originalTopWidth = app.activeDocument.layers[3].bounds[2]-app.activeDocument.layers[3].bounds[0]; 
var originalTopHeight = app.activeDocument.layers[3].bounds[3]-app.activeDocument.layers[3].bounds[1]; 
var newTopWidth= (masterWidth/originalTopWidth)*100;
app.activeDocument.layers[3].resize(newTopWidth,newTopWidth,AnchorPosition.TOPLEFT);

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
tiffSaveOptions.imageCompression = TIFFEncodingLZW
activeDocument.saveAs(saveFile, tiffSaveOptions, true, Extension.LOWERCASE); 
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
	var srcDoc = activeDocument 

//define target resolution - this is a fixed quantity
var n = 600; //resolution in dpi

selectBlue()
var BlueSquare = getSelectionBounds()
var horizBlue = BlueSquare[2] - BlueSquare[0];//lower right corner x - upper left corner x value
var vertBlue = BlueSquare [3] - BlueSquare[1];//lower right corner y - upper right corner y value
if ((horizBlue / vertBlue) > 1)  // it really is around 1.33; then 5cm scale
{ 
var c =(0.77/horizBlue);//target size in cm / actual size
}
else //((horizBlue / vertBlue) < 1) // it really is around 1; then 2cm scale
{
var c = (0.3 / horizBlue);
}

//resize image into pixel count defined by "n" - required so that resize using pixels works properly
srcDoc.resizeImage(null,null,n,ResampleMethod.BICUBIC);
var scale = (c * srcDoc.width*n/2.54);//new size of image in pixels - 2.54 to convert dpi into pixels/cm
srcDoc.resizeImage(UnitValue(scale,"px"),null,null,ResampleMethod.BICUBIC);

// trim excess from image
//	srcDoc.trim(TrimType.TOPLEFT, true, true, true, true);


///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// REPLACE COLOR SCALE WITH GREY SCALE ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

/*app.preferences.rulerUnits = Units.PIXELS;
cropBounds = new Array (0, 0, app.activeDocument.width - 0, app.activeDocument.height - 490); //equals the Color Scale height (462 px) + safety margin
app.activeDocument.crop(cropBounds);
cropBounds = null;
app.activeDocument.trim(TrimType.TOPLEFT, true, true, true, true);
app.activeDocument.resizeCanvas(app.activeDocument.width + 1000, app.activeDocument.height + 1000, AnchorPosition.MIDDLECENTER);

var scaleGrey = open(File("/Users/mtr/Desktop/Data Images/Photo Process/BM_5cm_scale_grey.tif"));
app.activeDocument = scaleGrey
scaleGrey.changeMode(ChangeMode.RGB);
scaleGrey.bitsPerChannel = BitsPerChannelType.EIGHT;
scaleGrey.artLayers.add();
scaleGrey.mergeVisibleLayers();
var layerGrey = scaleGrey.activeLayer;
layerGrey.name = ("BM_5cm_scale_grey");
layerGrey.duplicate(srcDoc, ElementPlacement.PLACEATBEGINNING);
scaleGrey.close(SaveOptions.DONOTSAVECHANGES);

var scaleGreyX = (app.activeDocument.width - 1350) /2;
var scaleGreyY = (app.activeDocument.height - 308);

app.activeDocument.activeLayer.translate (scaleGreyX, scaleGreyY);
app.activeDocument.revealAll(DocumentFill.BACKGROUNDCOLOR);*/

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

//add metadata
var docRef = app.activeDocument;
docRef.info.author = photographer + " (" + institution + ")"
docRef.info.title = copyrightnotice
docRef.info.copyrighted = CopyrightedType.COPYRIGHTEDWORK
docRef.info.copyrightNotice = copyrightnotice

//run function
deleteAllGuides()

//saveAs(saveIn, options, asCopy, extensionType)
saveFinal = new File(folderinlocalcomputer + tabletNumber + ".tif");
{
	TiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW
}
srcDoc.saveAs(saveFinal,TiffSaveOptions,false,Extension.LOWERCASE);

//saveAs JPEG and hide extension from JPEG filename
//saveThumbnail = new File(folderinlocalcomputer + tabletNumber + ".jpg");
//{
//	JPEGSaveOptions.quality = 10
//	JPEGSaveOptions.embedColorProfile = true
// }
//srcDoc.saveAs(saveThumbnail,JPEGSaveOptions,true,Extension.NONE);

//close Image File
srcDoc.close(SaveOptions.DONOTSAVECHANGES)

}

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

//var outputFiles = Folder ("/Volumes/UR/TABLETS/images/2_image assembly area/d_finalised images/");
//var outputFilesJPEG = Folder ("/Volumes/UR/TABLETS/images/2_image assembly area/d_finalised images/_c_final JPEG at check point/"); 
    //alert("Script 'Compositor Finaliser 1 View' has successfully finalised images.\r�TIFF Finals saved in: " + outputFiles.fsName + "\r�JPEG Finals saved in: " + outputFilesJPEG.fsName);           
