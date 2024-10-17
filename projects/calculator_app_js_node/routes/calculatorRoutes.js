// calculatorRoutes.js

const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

// route to handle calculations
router.post("/calculate", calculatorController.performCalculation);

module.exports = router;