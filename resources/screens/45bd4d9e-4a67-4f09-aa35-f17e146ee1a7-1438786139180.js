jQuery("#simulation")
.on("click", ".s-45bd4d9e-4a67-4f09-aa35-f17e146ee1a7 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Rectangle_Item1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-45bd4d9e-4a67-4f09-aa35-f17e146ee1a7 #s-Rectangle_Item1": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-45bd4d9e-4a67-4f09-aa35-f17e146ee1a7 #s-Rectangle_Item1": {
"attributes-ie": {
"-pie-background": "#666666",
"-pie-poll": "false"
}
}
} ],
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
.on("pageload", ".s-45bd4d9e-4a67-4f09-aa35-f17e146ee1a7 .pageload", function(event, data) {
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
});