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

    console.log("Sending request to server: ", data);

    fetch("http://localhost:3000/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        if (!res.ok) {
            // if response status not OK, throw error
            return res.json().then(errorData => {
                console.error("Error from server: ", errorData.error);
                throw new Error(errorData.error);
            });
        }
        return res.json();
    })
    .then(res => {
        console.log("Recieved result from server: ", res.result);
        display.value = res.result;
        currentInput = res.result;
        firstOperand = "";
        operator = "";
    })
    .catch(error => {
        // log and display error to user
        console.error("Request Failed: ", error.message);
        display.value = `Error: ${error.message}`;
    });
}