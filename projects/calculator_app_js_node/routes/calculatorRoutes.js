// calculatorRoutes.js

const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

// route to handle calculations
router.post("/calculate", calculatorController.performCalculation);

// CRUD routes for calc history
router.get("/history", calculatorController.getAllCalculations);
router.put("/history/:id", calculatorController.updateCalculation);
router.delete("/history/:id", calculatorController.deleteCalculation);

module.exports = router;