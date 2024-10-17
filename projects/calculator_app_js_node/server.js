const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// middleware to parse JSON
app.use(express.json());

// allow CORS for front end to communicate with back end
app.use(cors());


// route to handle calculation requests
app.post("/calculate", (req, res) => {
    const { firstOperand, operator, secondOperand } = req.body;
    let result;

    // convert the operands to numbers
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

    // return result as a JSON response
    res.json(result.toString());
});

// start the server
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})