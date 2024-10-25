// Global variables
let currentInput = "";
let operator = "";
let firstOperand = "";
let display;

document.addEventListener("DOMContentLoaded", function () {
    // Ensure the display element and buttons are properly selected
    display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    // Check if display and buttons elements are correctly found
    if (!display) {
        console.error("Display element not found");
    } else {
        console.log("Display element found");
    }

    if (buttons.length === 0) {
        console.error("Buttons not found");
    } else {
        console.log("Buttons found:", buttons.length, "buttons");
    }

    // Handle button click events
    buttons.forEach(button => {
        console.log("Attaching event listener to button:", button.textContent);
        button.addEventListener("click", () => {
            const value = button.textContent;
            console.log("Button clicked:", value);

            if ((value >= "0" && value <= "9") || value === ".") {
                currentInput += value;
                display.value = currentInput;
                console.log("Display updated:", display.value);
            } else if (value === "C") {
                clearCalculator();
            } else if (value === "=") {
                if (operator && firstOperand !== "") {
                    calculateResult();
                } else {
                    display.value = "Invalid operation";
                    console.log("Invalid operation: operator or firstOperand missing");
                }
            } else {
                if (currentInput !== "" && !operator) {
                    firstOperand = currentInput;
                    currentInput = "";
                    operator = value;
                    console.log("First operand and operator set:", firstOperand, operator);
                }
            }
        });
    });

    // Initialize and fetch history on page load
    fetchHistory();
});

// Clear calculator function
function clearCalculator() {
    currentInput = "";
    firstOperand = "";
    operator = "";
    display.value = "";
    console.log("Calculator cleared");
}

// Send calculation to the backend
function calculateResult() {
    const secondOperand = currentInput;
    const data = { firstOperand, operator, secondOperand };

    console.log("Sending calculation to server:", data);

    fetch("http://localhost:3000/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(errorData => {
                throw new Error(errorData.error || "Unknown error");
            });
        }
        return res.json();
    })
    .then(res => {
        display.value = res.result;
        currentInput = res.result.toString();
        firstOperand = "";
        operator = "";
        console.log("Calculation result:", res.result);
        fetchHistory(); // Update history after calculation
    })
    .catch(error => {
        console.error("Error:", error.message);
        display.value = `Error: ${error.message}`;
    });
}

// Fetch and display calculation history
function fetchHistory() {
    console.log("Fetching calculation history...");
    fetch("http://localhost:3000/api/history")
    .then(res => res.json())
    .then(history => {
        const historyDiv = document.getElementById("history");
        historyDiv.innerHTML = ""; // Clear previous history

        history.forEach(calc => {
            const calcItem = document.createElement("div");
            calcItem.innerHTML = `${calc.firstOperand} ${calc.operator} ${calc.secondOperand} = ${calc.result}`;

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", () => editCalculation(calc.id));

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => deleteCalculation(calc.id));

            calcItem.appendChild(editButton);
            calcItem.appendChild(deleteButton);

            historyDiv.appendChild(calcItem);
        });
        console.log("History displayed");
    })
    .catch(error => console.error("Error fetching history:", error));
}

// Edit a calculation from history
function editCalculation(id) {
    console.log("Editing calculation:", id);
    fetch(`http://localhost:3000/api/history/${id}`)
        .then(res => res.json())
        .then(calc => {
            firstOperand = calc.firstOperand.toString();
            operator = calc.operator;
            currentInput = calc.secondOperand.toString();
            display.value = `${firstOperand} ${operator} ${currentInput}`;
            console.log("Populated edit fields:", calc);

            const equalsButton = document.getElementById("equalsButton");
            // Remove existing event listener to prevent duplicates
            equalsButton.onclick = null;
            equalsButton.addEventListener("click", function handler() {
                updateCalculation(id);
                // Remove the event listener after it's used once
                equalsButton.removeEventListener("click", handler);
            });
        })
        .catch(error => console.error("Error editing calculation:", error));
}

// Update a calculation
function updateCalculation(id) {
    const secondOperand = currentInput;
    const data = { firstOperand, operator, secondOperand };

    console.log("Updating calculation:", id, data);

    fetch(`http://localhost:3000/api/history/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(errorData => {
                throw new Error(errorData.error || "Unknown error");
            });
        }
        return res.json();
    })
    .then(updatedCalc => {
        display.value = updatedCalc.result;
        currentInput = updatedCalc.result.toString();
        firstOperand = "";
        operator = "";
        console.log("Calculation updated:", updatedCalc);
        fetchHistory();
    })
    .catch(error => {
        console.error("Error:", error.message);
        display.value = `Error: ${error.message}`;
    });
}

// Delete a calculation from history
function deleteCalculation(id) {
    console.log("Deleting calculation:", id);
    fetch(`http://localhost:3000/api/history/${id}`, {
        method: "DELETE",
    })
    .then(() => {
        console.log("Calculation deleted");
        fetchHistory();
    })
    .catch(error => console.error("Error deleting calculation:", error));
}
