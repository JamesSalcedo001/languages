// controllers/calculationController.js

import { validationResult } from 'express-validator';
import Calculation from '../models/Calculation.js';

class CalculationController {
  // Helper function to perform calculations
  static computeResult(num1, operator, num2) {
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          throw new Error('Cannot divide by zero');
        }
        result = num1 / num2;
        break;
      default:
        throw new Error('Invalid operator');
    }

    return result;
  }

  // Create new calculation
  static async createCalculation(req, res, next) {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let { firstOperand, operator, secondOperand } = req.body;

      firstOperand = parseFloat(firstOperand);
      secondOperand = parseFloat(secondOperand);

      const result = CalculationController.computeResult(
        firstOperand,
        operator,
        secondOperand
      );

      const calculation = await Calculation.create({
        firstOperand,
        operator,
        secondOperand,
        result,
      });

      res.status(201).json(calculation);
    } catch (error) {
      next(error);
    }
  }

  // Get all calculations
  static async getAllCalculations(req, res, next) {
    try {
      const calculations = await Calculation.findAll({
        order: [['createdAt', 'DESC']],
      });
      res.status(200).json(calculations);
    } catch (error) {
      next(error);
    }
  }

  // Get a calculation by ID
  static async getCalculationById(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      const calculation = await Calculation.findByPk(id);
      if (!calculation) {
        return res.status(404).json({ error: 'Calculation not found' });
      }
      res.status(200).json(calculation);
    } catch (error) {
      next(error);
    }
  }

  // Update a calculation
  static async updateCalculation(req, res, next) {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const id = parseInt(req.params.id, 10);
      let { firstOperand, operator, secondOperand } = req.body;

      firstOperand = parseFloat(firstOperand);
      secondOperand = parseFloat(secondOperand);

      const result = CalculationController.computeResult(
        firstOperand,
        operator,
        secondOperand
      );

      const [updatedRowsCount, [updatedCalculation]] = await Calculation.update(
        {
          firstOperand,
          operator,
          secondOperand,
          result,
        },
        {
          where: { id },
          returning: true,
        }
      );

      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: 'Calculation not found' });
      }

      res.status(200).json(updatedCalculation);
    } catch (error) {
      next(error);
    }
  }

  // Delete a calculation
  static async deleteCalculation(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      const calculation = await Calculation.findByPk(id);
      if (!calculation) {
        return res.status(404).json({ error: 'Calculation not found' });
      }

      await calculation.destroy();
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default CalculationController;
