(function(window, undefined) {
var dictionary = {
"45bd4d9e-4a67-4f09-aa35-f17e146ee1a7": "Coles_Store",
"1d493b96-2048-487e-8f59-400f43f1cf0d": "Screen_ZoomLevel2",
"d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen_ZoomLevel1",
"f39803f7-df02-4169-93eb-7547fb8c961a": "MapTemplate"
};

var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);