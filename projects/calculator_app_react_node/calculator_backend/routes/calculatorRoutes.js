// routes/calculatorRoutes.js

const express = require("express");
const router = express.Router();
const calculatorController = require("../constorllers/calculatorController");

router.post("/calculations", calculatorController.createCalculation);
