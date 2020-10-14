"use strict";
exports.__esModule = true;
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
// add(5, '10');
function add2(num1, num2) {
    return num2 != undefined ? num1 + num2 : num1;
}
console.log(add2(5));
// add(5, '10');
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add3(5));
// add(5, '10');
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p2 = {
    firstName: 'Bruce',
    lastName: 'Wayne Clone'
};
fullName2(p2);
function fullName3(person) {
    person.lastName !== undefined ? console.log(person.firstName + " " + person.lastName) : console.log("" + person.firstName);
}
var p3 = {
    firstName: 'Batman'
};
fullName3(p3);
