const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";
let operator = "";
let firstOperand = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value >= "0" && value <= "9" || value === ".") {
            // handle number input
            currentInput += value;
            display.value = currentInput;
        } else if (value === "C") {
            // clear display
            currentInput = "";
            firstOperand = "";
            operator = "";
            display.value = "";
        } else if (value === "=") {
            // send the calculation to the backend
            calculateResult();
        } else {
            // operator is clicked
            if (currentInput) {
                firstOperand = currentInput;
                currentInput = "";
                operator = value;
            }
        }
    });
});

function calculateResult() {
    const secondOperand = currentInput;
    const data = { firstOperand, operator, secondOperand };

    fetch("http://localhost:3000/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
        display.value = res;
        currentInput = res;
        firstOperand = "";
        operator = "";
    })
    .catch(error => console.error("Error: ", error))
}