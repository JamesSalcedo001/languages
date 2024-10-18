// Main display variables
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";
let operator = "";
let firstOperand = "";

// Handle button click events
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value >= "0" && value <= "9" || value === ".") {
            // Handle number input
            currentInput += value;
            display.value = currentInput;
        } else if (value === "C") {
            // Clear the display
            clearCalculator();
        } else if (value === "=") {
            // Send the calculation to the backend
            calculateResult();
        } else {
            // Handle operator input
            if (currentInput) {
                firstOperand = currentInput;
                currentInput = "";
                operator = value;
            }
        }
    });
});

// Clear calculator function
function clearCalculator() {
    currentInput = "";
    firstOperand = "";
    operator = "";
    display.value = "";
}

// Send calculation to the backend
function calculateResult() {
    const secondOperand = currentInput;
    const data = { firstOperand, operator, secondOperand };

    fetch("http://localhost:3000/api/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
        display.value = res.result;
        currentInput = res.result;
        firstOperand = "";
        operator = "";
    })
    .catch(error => {
        console.error("Error:", error);
        display.value = `Error: ${error.message}`;
    });
}

// Fetch and display calculation history
function fetchHistory() {
    fetch("http://localhost:3000/api/history")
    .then(res => res.json())
    .then(history => {
        const historyDiv = document.getElementById("history");
        historyDiv.innerHTML = ""; // Clear previous history

        history.forEach(calc => {
            const calcItem = document.createElement("div");
            calcItem.innerHTML = `${calc.firstOperand} ${calc.operator} ${calc.secondOperand} = ${calc.result}
            <button onclick="deleteCalculation(${calc.id})">Delete</button>
            <button onclick="editCalculation(${calc.id})">Edit</button>`;
            historyDiv.appendChild(calcItem);
        });
    })
    .catch(error => console.error("Error fetching history:", error));
}

document.body.innerHTML += '<div id="history"></div>';
fetchHistory();
