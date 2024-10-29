// routes/calculatorRoutes.js

import express from "express";
import * as calculatorController from "../controllers/calculatorController.js";
const router = express.Router();

router.post("/calculations", calculatorController.createCalculation);
router.get("/calculations", calculatorController.getAllCalculations);
router.get("/calculations/:id", calculatorController.getCalculationById);
router.put("/calculations/:id", calculatorController.updateCalculation);
router.delete("/calculations/:id", calculatorController.deleteCalculation);

export default router;
