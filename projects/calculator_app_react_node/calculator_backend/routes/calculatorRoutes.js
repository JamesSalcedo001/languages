// routes/calculatorRoutes.js

const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.post("/calculations", calculatorController.createCalculation);
router.get("/calculations", calculatorController.getAllCalculations);
router.get("/calculations/:id", calculatorController.getCalculationById);
router.put("/calculations/:id", calculatorController.updateCalculation);
router.get("/calculations/:id", calculatorController.deleteCalculation);

module.exports = router;
