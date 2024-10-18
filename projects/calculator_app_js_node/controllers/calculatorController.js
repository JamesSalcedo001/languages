const CalculationModel = require("../models/calculationModel");

// Perform calculation (Create)
exports.performCalculation = (req, res) => {
    const { firstOperand, operator, secondOperand } = req.body;

    // Check if inputs are valid
    if (!firstOperand || !operator || !secondOperand) {
        return res.status(400).json({ error: "Missing or invalid input" });
    }

    let result;

    // Convert operands to numbers
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    // Ensure both operands are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid number input" });
    }

    // Perform calculation based on operator
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
                return res.status(400).json({ error: "Cannot divide by zero" });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: "Invalid operator" });
    }

    // Log and respond with the result
    const newCalculation = CalculationModel.create(firstOperand, operator, secondOperand, result);
    res.status(201).json(newCalculation);
};

// Retrieve all calculations (Read)
exports.getAllCalculations = (req, res) => {
    const calculations = CalculationModel.getAll();
    res.status(200).json(calculations);
};

// Retrieve a single calculation by id (for Edit functionality)
exports.getCalculationById = (req, res) => {
    const { id } = req.params;
    const calculation = CalculationModel.getById(id);
    if (!calculation) {
        return res.status(404).json({ error: "Calculation not found" });
    }
    res.status(200).json(calculation);
};

// Update existing calculation (Update)
exports.updateCalculation = (req, res) => {
    const { id } = req.params;
    const { firstOperand, operator, secondOperand } = req.body;
    let result;

    // Convert operands to numbers and perform calculation
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

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
            if (num2 === 0) return res.status(400).json({ error: "Cannot divide by zero" });
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: "Invalid operator" });
    }

    const updatedCalculation = CalculationModel.update(id, firstOperand, operator, secondOperand, result);
    if (!updatedCalculation) return res.status(404).json({ error: "Calculation not found" });

    res.status(200).json(updatedCalculation);
};

// Delete a calculation (Delete)
exports.deleteCalculation = (req, res) => {
    const { id } = req.params;
    const deletedCalculation = CalculationModel.delete(id);

    if (!deletedCalculation) return res.status(404).json({ error: "Calculation not found" });
    res.status(204).send(); // No content
};
