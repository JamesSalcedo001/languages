// controllers/calculatorController.js

const Calculation = require("../models/Calculation");

// Helper function to perform calculation
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
      throw new Error("Invalid operator");
  }

  return result;
}

// Perform calculation (Create)
exports.performCalculation = async (req, res) => {
  let { firstOperand, operator, secondOperand } = req.body;

  if (!firstOperand || !operator || !secondOperand) {
    return res.status(400).json({ error: "Missing or invalid input" });
  }

  try {
    // Parse operands to floats
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    if (isNaN(firstOperand) || isNaN(secondOperand)) {
      throw new Error("Invalid number input");
    }

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
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(calculations);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

// Retrieve a single calculation by id
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

// Update existing calculation (Update)
exports.updateCalculation = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  let { firstOperand, operator, secondOperand } = req.body;

  if (!firstOperand || !operator || !secondOperand) {
    return res.status(400).json({ error: "Missing or invalid input" });
  }

  try {
    // Parse operands to floats
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    if (isNaN(firstOperand) || isNaN(secondOperand)) {
      throw new Error("Invalid number input");
    }

    const result = computeResult(firstOperand, operator, secondOperand);

    // Update calculation using Calculation.update()
    const [updatedRowsCount, updatedRows] = await Calculation.update(
      {
        firstOperand,
        operator,
        secondOperand,
        result,
      },
      {
        where: { id: id },
        returning: true, // Needed to get the updated record(s)
      }
    );

    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: "Calculation not found" });
    }

    const updatedCalculation = updatedRows[0];

    res.status(200).json(updatedCalculation);
  } catch (error) {
    console.error("Error updating calculation:", error);
    return res.status(400).json({ error: error.message });
  }
};

// Delete a calculation (Delete)
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
