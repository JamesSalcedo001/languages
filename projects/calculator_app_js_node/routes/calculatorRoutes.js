const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.post("/calculate", calculatorController.performCalculation);
router.get("/history", calculatorController.getAllCalculations);
router.get("/history/:id", calculatorController.getCalculationById);
router.put("/history/:id", calculatorController.updateCalculation);
router.delete("/history/:id", calculatorController.deleteCalculation);

module.exports = router;
