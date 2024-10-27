// controllers/calculatorController.js

const Calculation = require("../models/Calculation");

// helper function to perform calculations

function computeResult(num1, operator, num2) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            result = num1 / num2;
            break;
        default:
            throw new Error("invalid operator");
    }

    return result;
}