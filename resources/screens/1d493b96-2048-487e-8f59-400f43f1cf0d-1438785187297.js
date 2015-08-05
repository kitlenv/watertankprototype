jQuery("#simulation")
.on("click", ".s-1d493b96-2048-487e-8f59-400f43f1cf0d .click", function(event, data) {
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
"exectype": "serial",
"delay": 0
},
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
"duration": 500,
"direction": "up"
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
} else if(jFirer.is("#s-Image_Coles")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/45bd4d9e-4a67-4f09-aa35-f17e146ee1a7"
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
} else if(jFirer.is("#s-Rectangle_Menu")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "menu_visible",
"value": {
"action": "jimOr",
"parameter": [ {
"action": "jimOr",
"parameter": [ {
"datatype": "property",
"target": "#s-Group_search_bar",
"property": "jimIsVisible"
},{
"datatype": "property",
"target": "#s-Group_DropDownMenu",
"property": "jimIsVisible"
} ]
},{
"datatype": "property",
"target": "#s-Group_Filters",
"property": "jimIsVisible"
} ]
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
"action": "jimAnd",
"parameter": [ {
"datatype": "variable",
"element": "menu_visible"
},{
"datatype": "property",
"target": "#s-Group_search_bar",
"property": "jimIsVisible"
} ]
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
},
{
"condition": {
"action": "jimNot",
"parameter": [ {
"datatype": "variable",
"element": "menu_visible"
} ]
},
"actions": [
{
"action": "jimShow",
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
"action": "jimAnd",
"parameter": [ {
"datatype": "variable",
"element": "menu_visible"
},{
"datatype": "property",
"target": "#s-Group_DropDownMenu",
"property": "jimIsVisible"
} ]
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
},
{
"condition": {
"action": "jimNot",
"parameter": [ {
"datatype": "variable",
"element": "menu_visible"
} ]
},
"actions": [
{
"action": "jimShow",
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
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"condition": {
"action": "jimAnd",
"parameter": [ {
"datatype": "property",
"target": "#s-Group_Filters",
"property": "jimIsVisible"
},{
"datatype": "variable",
"element": "menu_visible"
} ]
},
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_Personal_Consumer_Food"
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Group_Personal_Consumer_Food"
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_Personal_Consumer_Coffee"
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Group_Personal_Consumer_Coffee"
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
.on("pageload", ".s-1d493b96-2048-487e-8f59-400f43f1cf0d .pageload", function(event, data) {
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
.on("change", ".s-1d493b96-2048-487e-8f59-400f43f1cf0d .change", function(event, data) {
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
"action": "jimSetValue",
"parameter": {
"variable": "filter_text",
"value": {
"action": "jimLower",
"parameter": [ {
"datatype": "property",
"target": "#s-Edit_Search",
"property": "jimGetValue"
} ]
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
"action": "jimOr",
"parameter": [ {
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "filter_text"
},"coles" ]
},{
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "filter_text"
},"" ]
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_Coles"
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
"target": "#s-Group_Coles"
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
"action": "jimOr",
"parameter": [ {
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "filter_text"
},"woolworth" ]
},{
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "filter_text"
},"" ]
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_Woolworth"
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
"target": "#s-Group_Woolworth"
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
"action": "jimOr",
"parameter": [ {
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "filter_text"
},"coffee" ]
},{
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "filter_text"
},"" ]
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_Personal_Consumer_Coffee"
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
"target": "#s-Group_Personal_Consumer_Coffee"
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
"action": "jimOr",
"parameter": [ {
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "filter_text"
},"food" ]
},{
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "filter_text"
},"" ]
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_Personal_Consumer_Food"
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
"target": "#s-Group_Personal_Consumer_Food"
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
.on("pinchclose", ".s-1d493b96-2048-487e-8f59-400f43f1cf0d .pinchclose", function(event, data) {
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
"target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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