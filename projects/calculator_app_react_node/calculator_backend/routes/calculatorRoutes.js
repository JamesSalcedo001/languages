// routes/calculatorRoutes.js

import express from 'express';
import { body } from 'express-validator';
import CalculationController from '../controllers/calculationController.js';

const router = express.Router();

/**
 * @route POST /api/calculations
 * @group Calculations - Operations about calculations
 * @param {Calculation.model} body.body - Calculation object
 * @returns {Calculation.model} 201 - Created calculation
 * @returns {Error} 400 - Invalid input
 */
router.post(
  '/calculations',
  [
    body('firstOperand')
      .notEmpty()
      .withMessage('First operand is required')
      .isNumeric()
      .withMessage('First operand must be a number'),
    body('operator')
      .notEmpty()
      .withMessage('Operator is required')
      .isIn(['+', '-', '*', '/'])
      .withMessage('Invalid operator'),
    body('secondOperand')
      .notEmpty()
      .withMessage('Second operand is required')
      .isNumeric()
      .withMessage('Second operand must be a number'),
  ],
  CalculationController.createCalculation
);

/**
 * @route GET /api/calculations
 * @group Calculations - Operations about calculations
 * @returns {Array.<Calculation>} 200 - List of calculations
 * @returns {Error} 500 - Server error
 */
router.get('/calculations', CalculationController.getAllCalculations);

/**
 * @route GET /api/calculations/{id}
 * @group Calculations - Operations about calculations
 * @param {integer} id.path.required - Calculation ID
 * @returns {Calculation.model} 200 - Calculation object
 * @returns {Error} 404 - Calculation not found
 */
router.get('/calculations/:id', CalculationController.getCalculationById);

/**
 * @route PUT /api/calculations/{id}
 * @group Calculations - Operations about calculations
 * @param {integer} id.path.required - Calculation ID
 * @param {Calculation.model} body.body - Calculation object
 * @returns {Calculation.model} 200 - Updated calculation
 * @returns {Error} 400 - Invalid input
 * @returns {Error} 404 - Calculation not found
 */
router.put(
  '/calculations/:id',
  [
    body('firstOperand')
      .notEmpty()
      .withMessage('First operand is required')
      .isNumeric()
      .withMessage('First operand must be a number'),
    body('operator')
      .notEmpty()
      .withMessage('Operator is required')
      .isIn(['+', '-', '*', '/'])
      .withMessage('Invalid operator'),
    body('secondOperand')
      .notEmpty()
      .withMessage('Second operand is required')
      .isNumeric()
      .withMessage('Second operand must be a number'),
  ],
  CalculationController.updateCalculation
);

/**
 * @route DELETE /api/calculations/{id}
 * @group Calculations - Operations about calculations
 * @param {integer} id.path.required - Calculation ID
 * @returns {null} 204 - Calculation deleted successfully
 * @returns {Error} 404 - Calculation not found
 */
router.delete('/calculations/:id', CalculationController.deleteCalculation);

export default router;
