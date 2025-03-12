main();
function main(){

app.preferences.rulerUnits = Units.PIXELS

var layer = activeDocument.layers.getByName("Line 1"); //Grab the currently selected layer

    // Calculate length and width based on the rectangular bounds of the selected layer
    var length = layer.bounds[2]-layer.bounds[0]; //Grab the length
    var width = layer.bounds[3]-layer.bounds[1]; //Grab the width

    // Remove pixels from the length/width "200 px" => "200"
    length = length.toString().replace(' px', '');
    width = width.toString().replace(' px', '');

var newSizeOfRuler = length * 2;
var percentageOfNewSizeOfRuler = newSizeOfRuler * 100 / 236;
activeDocument.activeLayer = activeDocument.layers.getByName("BM_2cm_scale");
activeDocument.activeLayer.resize(percentageOfNewSizeOfRuler, percentageOfNewSizeOfRuler, AnchorPosition.MIDDLECENTER);
}
