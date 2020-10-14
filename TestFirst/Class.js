"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    // private employeeName: string;
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Felipe');
console.log(emp1.employeeName);
emp1.greet();
var Maneger = /** @class */ (function (_super) {
    __extends(Maneger, _super);
    function Maneger(managerName) {
        return _super.call(this, managerName) || this;
    }
    Maneger.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Maneger;
}(Employee));
var m1 = new Maneger('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
