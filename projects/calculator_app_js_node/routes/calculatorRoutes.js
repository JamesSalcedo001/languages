const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

// Create a calculation
router.post("/calculate", calculatorController.performCalculation);

// Read all calculations
router.get("/history", calculatorController.getAllCalculations);

// Read a specific calculation (for Edit functionality)
router.get("/history/:id", calculatorController.getCalculationById);

// Update a calculation by id
router.put("/history/:id", calculatorController.updateCalculation);

// Delete a calculation by id
router.delete("/history/:id", calculatorController.deleteCalculation);

module.exports = router;
