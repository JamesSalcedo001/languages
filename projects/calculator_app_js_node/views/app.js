// // Main display variables
// const display = document.getElementById("display");
// const buttons = document.querySelectorAll("button");
// let currentInput = "";
// let operator = "";
// let firstOperand = "";

// // Handle button click events
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const value = button.textContent;

//         if (value >= "0" && value <= "9" || value === ".") {
//             // Handle number input
//             currentInput += value;
//             display.value = currentInput;
//             console.log("Display updated:", display.value);
//         } else if (value === "C") {
//             // Clear the display
//             clearCalculator();
//         } else if (value === "=") {
//             // Send the calculation to the backend
//             calculateResult();
//         } else {
//             // Handle operator input
//             if (currentInput) {
//                 firstOperand = currentInput;
//                 currentInput = "";
//                 operator = value;
//             }
//         }
//     });
// });

// // Clear calculator function
// function clearCalculator() {
//     currentInput = "";
//     firstOperand = "";
//     operator = "";
//     display.value = "";
// }

// // Send calculation to the backend
// function calculateResult() {
//     const secondOperand = currentInput;
//     const data = { firstOperand, operator, secondOperand };

//     fetch("http://localhost:3000/api/calculate", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
//     .then(res => res.json())
//     .then(res => {
//         display.value = res.result;
//         currentInput = res.result;
//         firstOperand = "";
//         operator = "";
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         display.value = `Error: ${error.message}`;
//     });
// }

// // Fetch and display calculation history
// function fetchHistory() {
//     fetch("http://localhost:3000/api/history")
//     .then(res => res.json())
//     .then(history => {
//         const historyDiv = document.getElementById("history");
//         historyDiv.innerHTML = ""; // Clear previous history

//         history.forEach(calc => {
//             const calcItem = document.createElement("div");
//             calcItem.innerHTML = `${calc.firstOperand} ${calc.operator} ${calc.secondOperand} = ${calc.result}
//             <button onclick="deleteCalculation(${calc.id})">Delete</button>
//             <button onclick="editCalculation(${calc.id})">Edit</button>`;
//             historyDiv.appendChild(calcItem);
//         });
//     })
//     .catch(error => console.error("Error fetching history:", error));
// }

// document.body.innerHTML += '<div id="history"></div>';
// fetchHistory();


const display = document.getElementById("display"); // Ensure display element is found
const buttons = document.querySelectorAll("button");
let currentInput = "";
let operator = "";
let firstOperand = "";

// Handle button click events
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if ((value >= "0" && value <= "9") || value === ".") {
            // Handle number input
            currentInput += value;
            display.value = currentInput; // Update the display with the current input
        } else if (value === "C") {
            // Clear the display
            clearCalculator();
        } else if (value === "=") {
            // Only send the calculation if there's an operator and firstOperand
            if (operator && firstOperand !== "") {
                calculateResult();
            } else {
                display.value = "Invalid operation";
            }
        } else {
            // Handle operator input
            if (currentInput !== "" && !operator) {
                firstOperand = currentInput;
                currentInput = ""; // Reset the input field for the next number
                operator = value; // Store the operator for calculation
            }
        }
    });
});

// Clear calculator function
function clearCalculator() {
    currentInput = "";
    firstOperand = "";
    operator = "";
    display.value = ""; // Clear the display as well
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
    .then(res => {
        if (!res.ok) {
            return res.json().then(errorData => {
                throw new Error(errorData.error || "Unknown error");
            });
        }
        return res.json();
    })
    .then(res => {
        display.value = res.result; // Display the result of the calculation
        currentInput = res.result.toString(); // Set the result as the next input
        firstOperand = ""; // Reset firstOperand
        operator = ""; // Reset operator

        // Fetch history after each calculation
        fetchHistory();
    })
    .catch(error => {
        console.error("Error:", error.message);
        display.value = `Error: ${error.message}`; // Show error on display
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
            <button onclick="editCalculation(${calc.id})">Edit</button>
            <button onclick="deleteCalculation(${calc.id})">Delete</button>`;
            historyDiv.appendChild(calcItem);
        });
    })
    .catch(error => console.error("Error fetching history:", error));
}

// Edit a calculation from history
function editCalculation(id) {
    fetch(`http://localhost:3000/api/history/${id}`)
        .then(res => res.json())
        .then(calc => {
            // Populate the calculator input fields with the selected calculation
            firstOperand = calc.firstOperand;
            operator = calc.operator;
            currentInput = calc.secondOperand;
            display.value = `${firstOperand} ${operator} ${currentInput}`;

            // Set up a listener for the next "=" press to update the calculation
            const equalsButton = document.querySelector('button:contains("=")');
            equalsButton.addEventListener("click", () => updateCalculation(id));
        })
        .catch(error => console.error("Error editing calculation:", error));
}

// Update a calculation
function updateCalculation(id) {
    const secondOperand = currentInput;
    const data = { firstOperand, operator, secondOperand };

    fetch(`http://localhost:3000/api/history/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(updatedCalc => {
        display.value = updatedCalc.result; // Display the updated result
        currentInput = updatedCalc.result.toString(); // Set the result as the next input
        firstOperand = ""; // Reset firstOperand
        operator = ""; // Reset operator

        // Refresh the history to show the updated calculation
        fetchHistory();
    })
    .catch(error => {
        console.error("Error:", error.message);
        display.value = `Error: ${error.message}`; // Show error on display
    });
}

// Delete a calculation from history
function deleteCalculation(id) {
    fetch(`http://localhost:3000/api/history/${id}`, {
        method: "DELETE",
    })
    .then(() => fetchHistory()) // Refresh history after deletion
    .catch(error => console.error("Error deleting calculation:", error));
}

// Initialize and fetch history on page load
document.body.innerHTML += '<div id="history"></div>';
fetchHistory();
