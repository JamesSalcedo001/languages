let history = []; // Simulated database with an array
let nextId = 1; // Simple ID counter for calculations

class Calculation {
    constructor(firstOperand, operator, secondOperand, result) {
        this.id = nextId++;
        this.firstOperand = firstOperand;
        this.operator = operator;
        this.secondOperand = secondOperand;
        this.result = result;
    }
}

class CalculationModel {
    // Create a new calculation (C)
    static create(firstOperand, operator, secondOperand, result) {
        const newCalculation = new Calculation(firstOperand, operator, secondOperand, result);
        history.push(newCalculation);
        return newCalculation;
    }

    // Retrieve all calculations (R)
    static getAll() {
        return history;
    }

    // Retrieve a specific calculation by id (for Edit functionality)
    static getById(id) {
        return history.find(calc => calc.id === parseInt(id));
    }

    // Update an existing calculation by id (U)
    static update(id, firstOperand, operator, secondOperand, result) {
        const calculation = history.find(calc => calc.id === parseInt(id));
        if (!calculation) return null;

        calculation.firstOperand = firstOperand;
        calculation.operator = operator;
        calculation.secondOperand = secondOperand;
        calculation.result = result;
        return calculation;
    }

    // Delete a calculation by id (D)
    static delete(id) {
        const index = history.findIndex(calc => calc.id === parseInt(id));
        if (index === -1) return null;

        return history.splice(index, 1)[0]; // Remove the calculation and return it
    }
}

module.exports = CalculationModel;
