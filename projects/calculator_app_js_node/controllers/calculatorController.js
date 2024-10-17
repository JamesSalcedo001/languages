// calculatorController.js
const CalculationModel = require("../models/calculationModel");


// perform calculation(create)
exports.performCalculation = (req, res) => {
    const { firstOperand, operator, secondOperand } = req.body;
    let result;

    console.log(`Received request: ${firstOperand} ${operator} ${secondOperand}`);

    // convert operands to numbers
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    // perform calculation based on operator
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return res.status(400).json("Cannot divide by zero");
            }
            break;
        default:
            return res.status(400).json("Invalid operator");
    }

    const newCalculation = CalculationModel.create(firstOperand, operator, secondOperand, result);

    console.log(`Calculation successful: Result = ${result}`);

    res.status(201).json(newCalculation); // send back new calculation
};



// retrieve all calculations (Read)

exports.getAllCalculations = (req, res) => {
    const calculations = CalculationModel.getAll();
    res.status(200).json(calculations);
};

// update existing calculation (Update)
exports.updateCalculation = (re, res) => {
    const { id } = req.params;
    const { firstOperand, operator, secondOperand } = req.body;
    let result;

    // perform calculation with updated data
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return res.status(400).json({ error: "Cannot divide by zero" });
            }
            break;
        default:
            return res.status(400).json({ error: "Invalid operator" });
    }

    const updatedCalculation = CalculationModel.update(id, firstOperand, operator, secondOperand, result);

    if (!updatedCalculation) {
        return res.status(404).json({ error: "Calculation not found" });
    }

    res.status(200).json(updatedCalculation);
};


// delete a calculation (Delete)
exports.deleteCalculation = (req, res) => {
    const { id } = req.params;
    const deletedCalculation = CalculationModel.delete(id);

    if (!deletedCalculation) {
        return res.status(404).json({ error: "Calculation not found" });
    }

    res.status(204).send(); // successful delete no content
}