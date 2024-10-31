// routes/calculatorRoutes.js

import express from 'express';
import * as calculatorController from '../controllers/calculatorController.js';
const router = express.Router();

/**
 * @route POST /api/calculations
 * @group Calculations - Operations about calculations
 * @param {Calculation.model} body.body - Calculation object
 * @returns {Calculation.model} 201 - Created calculation
 * @returns {Error} 400 - Invalid input
 */
router.post('/calculations', (req, res) => {
  // #swagger.tags = ['Calculations']
  // #swagger.description = 'Create a new calculation'
  /* #swagger.parameters['body'] = {
          in: 'body',
          description: 'Calculation details',
          required: true,
          schema: {
              $firstOperand: 10,
              $operator: '+',
              $secondOperand: 5
          }
      } */
  /* #swagger.responses[201] = {
          description: 'Calculation created successfully',
          schema: {
              id: 1,
              firstOperand: 10.00,
              operator: '+',
              secondOperand: 5.00,
              result: 15.00,
              createdAt: '2023-10-20T12:00:00Z',
              updatedAt: '2023-10-20T12:00:00Z'
          }
      } */
  calculatorController.createCalculation(req, res);
});

/**
 * @route GET /api/calculations
 * @group Calculations - Operations about calculations
 * @returns {Array.<Calculation>} 200 - List of calculations
 * @returns {Error} 500 - Server error
 */
router.get('/calculations', (req, res) => {
  // #swagger.tags = ['Calculations']
  // #swagger.description = 'Get all calculations'
  /* #swagger.responses[200] = {
          description: 'List of calculations',
          schema: [
              {
                  id: 1,
                  firstOperand: 10.00,
                  operator: '+',
                  secondOperand: 5.00,
                  result: 15.00,
                  createdAt: '2023-10-20T12:00:00Z',
                  updatedAt: '2023-10-20T12:00:00Z'
              }
          ]
      } */
  calculatorController.getAllCalculations(req, res);
});

/**
 * @route GET /api/calculations/{id}
 * @group Calculations - Operations about calculations
 * @param {integer} id.path.required - Calculation ID
 * @returns {Calculation.model} 200 - Calculation object
 * @returns {Error} 404 - Calculation not found
 */
router.get('/calculations/:id', (req, res) => {
  // #swagger.tags = ['Calculations']
  // #swagger.description = 'Get a calculation by ID'
  // #swagger.parameters['id'] = { description: 'Calculation ID' }
  /* #swagger.responses[200] = {
          description: 'Calculation found',
          schema: {
              id: 1,
              firstOperand: 10.00,
              operator: '+',
              secondOperand: 5.00,
              result: 15.00,
              createdAt: '2023-10-20T12:00:00Z',
              updatedAt: '2023-10-20T12:00:00Z'
          }
      } */
  calculatorController.getCalculationById(req, res);
});

/**
 * @route PUT /api/calculations/{id}
 * @group Calculations - Operations about calculations
 * @param {integer} id.path.required - Calculation ID
 * @param {Calculation.model} body.body - Calculation object
 * @returns {Calculation.model} 200 - Updated calculation
 * @returns {Error} 400 - Invalid input
 * @returns {Error} 404 - Calculation not found
 */
router.put('/calculations/:id', (req, res) => {
  // #swagger.tags = ['Calculations']
  // #swagger.description = 'Update a calculation'
  // #swagger.parameters['id'] = { description: 'Calculation ID' }
  /* #swagger.parameters['body'] = {
          in: 'body',
          description: 'Updated calculation details',
          required: true,
          schema: {
              $firstOperand: 20,
              $operator: '-',
              $secondOperand: 5
          }
      } */
  /* #swagger.responses[200] = {
          description: 'Calculation updated successfully',
          schema: {
              id: 1,
              firstOperand: 20.00,
              operator: '-',
              secondOperand: 5.00,
              result: 15.00,
              createdAt: '2023-10-20T12:00:00Z',
              updatedAt: '2023-10-20T12:05:00Z'
          }
      } */
  calculatorController.updateCalculation(req, res);
});

/**
 * @route DELETE /api/calculations/{id}
 * @group Calculations - Operations about calculations
 * @param {integer} id.path.required - Calculation ID
 * @returns {null} 204 - Calculation deleted successfully
 * @returns {Error} 404 - Calculation not found
 */
router.delete('/calculations/:id', (req, res) => {
  // #swagger.tags = ['Calculations']
  // #swagger.description = 'Delete a calculation'
  // #swagger.parameters['id'] = { description: 'Calculation ID' }
  /* #swagger.responses[204] = {
          description: 'Calculation deleted successfully'
      } */
  calculatorController.deleteCalculation(req, res);
});

export default router;
