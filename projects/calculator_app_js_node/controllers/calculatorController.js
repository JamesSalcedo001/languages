// calculatorController.js

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

    console.log(`Calculation successful: Result = ${result}`);

    // return result as a JSON response with 200 status
    res.status(200).json({ result: result.toString() });
}