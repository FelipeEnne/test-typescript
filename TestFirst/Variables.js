"use strict";
exports.__esModule = true;
var message = 'Helloo';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'code';
var isBeginner = true;
var total = 0;
var name = 'Fe';
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Ki', 12];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase;
var multiType;
multiType = 20;
multiType = true;
