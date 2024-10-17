// calculationModel.js

let history = []; // simulating database with array
let nextId = 1; // simple id counter for calc

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
    // create (add) new calculation
    static create(firstOperand, operator, secondOperand, result) {
        const newCalculation = new Calculation(firstOperand, operator, secondOperand, result);
        history.push(newCalculation);
        return newCalculation;
    }

    // read (get) all calculations
    static getAll() {
        return history;
    }

    // update a calculation by id
    static update(id, firstOperand, operator, secondOperand, result) {
        const calculation = history.find(calc => calc.id === parseInt(id));
        
        if (!calculation) return null;

        calculation.firstOperand = firstOperand;
        calculation.operator = operator;
        calculation.secondOperand = secondOperand;
        calculation.result = result;
        return calculation;
    }

    // delete calculation by id
    static delete(id) {
        const index = history.findIndex(calc => calc.id === parseInt(id));
        if (index === -1) return null;

        return history.splice(index, 1)[0]; // remove calculation and return it
    }
}


module.exports = CalculationModel;
