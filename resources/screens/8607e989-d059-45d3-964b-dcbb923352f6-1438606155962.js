jQuery("#simulation")
.on("click", ".s-8607e989-d059-45d3-964b-dcbb923352f6 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Image_Map_ZoomLevel2")) {
cases = [
{
"blocks": [
{
"condition": {
"datatype": "property",
"target": "#s-Group_DropDownMenu",
"property": "jimIsVisible"
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Group_DropDownMenu",
"effect": {
"type": "slide",
"duration": 300,
"direction": "up"
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"condition": {
"datatype": "property",
"target": "#s-Group_search_bar",
"property": "jimIsVisible"
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Group_search_bar",
"effect": {
"type": "slide",
"duration": 300,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"condition": {
"datatype": "property",
"target": "#s-Group_Filters",
"property": "jimIsVisible"
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Group_Filters",
"effect": {
"type": "slide",
"duration": 500,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Rectangle_Filter")) {
cases = [
{
"blocks": [
{
"condition": {
"datatype": "property",
"target": "#s-Group_search_bar",
"property": "jimIsVisible"
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Group_search_bar",
"effect": {
"type": "slide",
"duration": 300,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"condition": {
"action": "jimNot",
"parameter": [ {
"datatype": "property",
"target": "#s-Group_Filters",
"property": "jimIsVisible"
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_Filters",
"effect": {
"type": "slide",
"duration": 300,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Group_Filters",
"effect": {
"type": "slide",
"duration": 300,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_Food_Icon_BW")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Image_Food_Icon_Color"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Image_Food_Icon_BW"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_Food_Icon_Color")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Image_Food_Icon_BW"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Image_Food_Icon_Color"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_Coffee_BW")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Image_Coffee_Color"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Image_Coffee_BW"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_Coffee_Color")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Image_Coffee_BW"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Image_Coffee_Color"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("pageload", ".s-8607e989-d059-45d3-964b-dcbb923352f6 .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_40")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Label_40",
"value": {
"action": "jimConcat",
"parameter": [ {
"action": "jimSubstring",
"parameter": [ {
"action": "jimSystemTime"
},"0","5" ]
}," PM" ]
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("change", ".s-8607e989-d059-45d3-964b-dcbb923352f6 .change", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Edit_Search")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Group_Woolworth"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Group_Personal_Producer"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("pinchclose", ".s-8607e989-d059-45d3-964b-dcbb923352f6 .pinchclose", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Image_Map_ZoomLevel2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
"transition": "fade"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
});