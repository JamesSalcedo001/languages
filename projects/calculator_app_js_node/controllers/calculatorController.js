const CalculationModel = require("../models/calculationModel");

// Helper function to perform calculation
function computeResult(firstOperand, operator, secondOperand) {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid number input");
    }

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
            throw new Error("Invalid operator");
    }

    return result;
}

// Perform calculation (Create)
exports.performCalculation = async (req, res) => {
    const { firstOperand, operator, secondOperand } = req.body;
  
    if (!firstOperand || !operator || !secondOperand) {
      return res.status(400).json({ error: 'Missing or invalid input' });
    }
  
    try {
      const result = computeResult(firstOperand, operator, secondOperand);
      const newCalculation = await Calculation.create({
        firstOperand,
        operator,
        secondOperand,
        result,
      });
      res.status(201).json(newCalculation);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

// Retrieve all calculations (Read)
exports.getAllCalculations = async (req, res) => {
    try {
        const calculations = await Calculation.findAll({
            order: ['createdAt', 'DESC'],
        });
        res.status(200).json(calculations);
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
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

    if (!firstOperand || !operator || !secondOperand) {
        return res.status(400).json({ error: "Missing or invalid input" });
    }

    try {
        const result = computeResult(firstOperand, operator, secondOperand);
        const updatedCalculation = CalculationModel.update(id, firstOperand, operator, secondOperand, result);
        if (!updatedCalculation) return res.status(404).json({ error: "Calculation not found" });
        res.status(200).json(updatedCalculation);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Delete a calculation (Delete)
exports.deleteCalculation = (req, res) => {
    const { id } = req.params;
    const deletedCalculation = CalculationModel.delete(id);

    if (!deletedCalculation) return res.status(404).json({ error: "Calculation not found" });
    res.status(204).send();
};
