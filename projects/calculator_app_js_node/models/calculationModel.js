let history = [];
let nextId = 1;

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
    static create(firstOperand, operator, secondOperand, result) {
        const newCalculation = new Calculation(firstOperand, operator, secondOperand, result);
        history.push(newCalculation);
        return newCalculation;
    }

    static getAll() {
        return history;
    }

    static getById(id) {
        return history.find(calc => calc.id === parseInt(id));
    }

    static update(id, firstOperand, operator, secondOperand, result) {
        const calculation = history.find(calc => calc.id === parseInt(id));
        if (!calculation) return null;

        calculation.firstOperand = firstOperand;
        calculation.operator = operator;
        calculation.secondOperand = secondOperand;
        calculation.result = result;
        return calculation;
    }

    static delete(id) {
        const index = history.findIndex(calc => calc.id === parseInt(id));
        if (index === -1) return null;
        return history.splice(index, 1)[0];
    }
}

module.exports = CalculationModel;
