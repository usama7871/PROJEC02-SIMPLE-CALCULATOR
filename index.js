"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.history = [];
    }
    Calculator.prototype.add = function (a, b) {
        var result = a + b;
        this.history.push("".concat(a, " + ").concat(b, " = ").concat(result));
        return result;
    };
    Calculator.prototype.subtract = function (a, b) {
        var result = a - b;
        this.history.push("".concat(a, " - ").concat(b, " = ").concat(result));
        return result;
    };
    Calculator.prototype.multiply = function (a, b) {
        var result = a * b;
        this.history.push("".concat(a, " * ").concat(b, " = ").concat(result));
        return result;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            console.log("Error: Cannot divide by zero.");
            return NaN;
        }
        var result = a / b;
        this.history.push("".concat(a, " / ").concat(b, " = ").concat(result));
        return result;
    };
    Calculator.prototype.displayHistory = function () {
        console.log("Calculation History:");
        this.history.forEach(function (entry) { return console.log(entry); });
    };
    return Calculator;
}());
var calculator = new Calculator();
function showMenu() {
    console.log("\n1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. View Calculation History");
    console.log("6. Exit");
}
function getUserInput() {
    return parseInt(readlineSync.question("Enter your choice: "));
}
while (true) {
    showMenu();
    var choice = getUserInput();
    switch (choice) {
        case 1:
            var addA = parseFloat(readlineSync.question("Enter first number: "));
            var addB = parseFloat(readlineSync.question("Enter second number: "));
            console.log("Result: ".concat(calculator.add(addA, addB)));
            break;
        case 2:
            var subA = parseFloat(readlineSync.question("Enter first number: "));
            var subB = parseFloat(readlineSync.question("Enter second number: "));
            console.log("Result: ".concat(calculator.subtract(subA, subB)));
            break;
        case 3:
            var mulA = parseFloat(readlineSync.question("Enter first number: "));
            var mulB = parseFloat(readlineSync.question("Enter second number: "));
            console.log("Result: ".concat(calculator.multiply(mulA, mulB)));
            break;
        case 4:
            var divA = parseFloat(readlineSync.question("Enter first number: "));
            var divB = parseFloat(readlineSync.question("Enter second number: "));
            console.log("Result: ".concat(calculator.divide(divA, divB)));
            break;
        case 5:
            calculator.displayHistory();
            break;
        case 6:
            console.log("Exiting...");
            process.exit(0);
        default:
            console.log("Invalid choice. Please enter a number between 1 and 6.");
    }
}
