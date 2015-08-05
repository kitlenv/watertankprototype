jQuery("#simulation")
.on("click", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#t-Rectangle_Filter")) {
cases = [
{
"blocks": [
{
"condition": {
"datatype": "property",
"target": "#t-Group_search_bar",
"property": "jimIsVisible"
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#t-Group_search_bar",
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
"target": "#t-Group_Filters",
"property": "jimIsVisible"
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#t-Group_Filters",
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
"target": "#t-Group_Filters",
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
} else if(jFirer.is("#t-Rectangle_Menu")) {
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
"target": "#t-Group_search_bar",
"property": "jimIsVisible"
},{
"datatype": "property",
"target": "#t-Group_DropDownMenu",
"property": "jimIsVisible"
} ]
},{
"datatype": "property",
"target": "#t-Group_Filters",
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
"target": "#t-Group_search_bar",
"property": "jimIsVisible"
} ]
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#t-Group_search_bar",
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
"target": "#t-Group_search_bar",
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
"target": "#t-Group_DropDownMenu",
"property": "jimIsVisible"
} ]
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#t-Group_DropDownMenu",
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
"target": "#t-Group_DropDownMenu",
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
"target": "#t-Group_Filters",
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
"target": "#t-Group_Filters",
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
} else if(jFirer.is("#t-Image_Food_Icon_BW")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#t-Image_Food_Icon_Color"
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
"target": "#t-Image_Food_Icon_BW"
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
} else if(jFirer.is("#t-Image_Food_Icon_Color")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#t-Image_Food_Icon_BW"
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
"target": "#t-Image_Food_Icon_Color"
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
} else if(jFirer.is("#t-Image_Coffee_BW")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#t-Image_Coffee_Color"
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
"target": "#t-Image_Coffee_BW"
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
} else if(jFirer.is("#t-Image_Coffee_Color")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#t-Image_Coffee_BW"
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
"target": "#t-Image_Coffee_Color"
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
.on("pageload", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#t-Label_40")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#t-Label_40",
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
.on("change", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .change", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#t-Edit_Search")) {
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
"target": "#t-Edit_Search",
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
}
];
event.data = data;
jEvent.launchCases(cases);
}
});