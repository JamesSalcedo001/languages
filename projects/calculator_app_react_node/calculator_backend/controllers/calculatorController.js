// controllers/calculatorController.js

const Calculation = require("../models/Calculation");

// helper function to perform calculations

export function computeResult(num1, operator, num2) {
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

// export computeresult function for testing

exports.computeResult = computeResult;

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



// get all calculations
exports.getAllCalculations = async (req, res) => {
    try {
        const calculations = await Calculation.findAll({ order: [["createdAt", "DESC"]] });
        res.status(200).json(calculations);
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
};



// get a calculation by ID
exports.getCalculationById = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const calculation = await Calculation.findByPk(id);
        if (!calculation) {
            return res.status(404).json({ error: "Calculation not found" });
        }
        res.status(200).json(calculation);
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
};

// update a calculation

exports.updateCalculation = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    let { firstOperand, operator, secondOperand } = req.body;

    if (firstOperand === undefined || operator === undefined || secondOperand === undefined) {
        return res.status(400).json({ error: "Missing or invalid input" });
    }

    try {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);

        if (isNaN(firstOperand) || isNaN(secondOperand)) {
            throw new Error("Invalid number input");
        }

        const result = computeResult(firstOperand, operator, secondOperand);

        const [updatedRowsCount, updatedRows] = await Calculation.update(
            {
                firstOperand,
                operator,
                secondOperand,
                result,
            },
            {
                where: { id },
                returning: true,
            }
        );

        if (updatedRowsCount === 0) {
            return res.status(404).json({ error: "Calculation not found" });
        }

        res.status(200).json(updatedRows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};





// delete a calculation

exports.deleteCalculation = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    try {
        const calculation = await Calculation.findByPk(id);
        if (!calculation) {
            return res.status(404).json({ error: "Calculation not found" });
        }

        await calculation.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
};