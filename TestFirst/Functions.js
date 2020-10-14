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
