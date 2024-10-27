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

// create new calculation

exports.createCalculation = async (req, res) => {
    let {firstOperand, operator, secondOperand } = req.body;

    if (firstOperand === undefined || operator === undefined || secondOperand === undefined) {
        return res.status(400).json({ error: "Missing or invalid input" });
    }

    try {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);

        if (isNaN(firstOperand) || isNaN(secondOperand)) {
            throw new Error("Invalid numer input");
        }

        const result = computeResult(firstOperand, operator, secondOperand);

        const calculation = await Calculation.create({
            firstOperand,
            operator,
            secondOperand,
            result,
        });

        res.status(201).json(calculation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};