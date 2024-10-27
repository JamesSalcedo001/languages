// app.js

// Global variables
let currentInput = "";
let operator = "";
let firstOperand = "";
let display;
let isEditing = false; // Indicates if we're in edit mode
let editId = null; // Stores the ID of the calculation being edited

document.addEventListener("DOMContentLoaded", function () {
  // Ensure the display element and buttons are properly selected
  display = document.getElementById("display");
  const buttons = document.querySelectorAll(".buttons button");

  // Handle button click events
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      console.log(`Button pressed: ${value}, isEditing: ${isEditing}`);

      if ((value >= "0" && value <= "9") || value === ".") {
        if (!operator) {
          // Building the first operand
          firstOperand += value;
          display.value = firstOperand;
        } else {
          // Building the second operand
          currentInput += value;
          display.value = `${firstOperand} ${operator} ${currentInput}`;
        }
      } else if (value === "C") {
        if (isEditing) {
          clearCurrentInput();
        } else {
          clearCalculator();
        }
      } else if (value === "=") {
        console.log("Equals button pressed, isEditing:", isEditing);
        if (operator && firstOperand !== "" && currentInput !== "") {
          if (isEditing) {
            console.log("Calling updateCalculation");
            updateCalculation(editId);
          } else {
            console.log("Calling calculateResult");
            calculateResult();
          }
        } else {
          display.value = "Invalid operation";
          console.log("Invalid operation: missing operands or operator");
        }
      } else if (["+", "-", "*", "/"].includes(value)) {
        if (firstOperand !== "") {
          operator = value;
          display.value = `${firstOperand} ${operator}`;
        } else {
          console.log("Operator entered without a first operand");
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
  isEditing = false;
  editId = null;
  console.log("Calculator cleared, isEditing set to", isEditing);
}

// New function to clear the entire calculation during editing
function clearCurrentInput() {
  currentInput = "";
  firstOperand = "";
  operator = "";
  display.value = "";
  console.log("Current input cleared, isEditing remains", isEditing);
}

// Send calculation to the backend
function calculateResult() {
  console.log("calculateResult called");
  const secondOperand = currentInput;
  const data = { firstOperand, operator, secondOperand };

  fetch("http://localhost:3000/api/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((errorData) => {
          throw new Error(errorData.error || "Unknown error");
        });
      }
      return res.json();
    })
    .then((res) => {
      display.value = res.result;
      currentInput = res.result.toString();
      firstOperand = "";
      operator = "";
      isEditing = false; // Reset edit mode variables after calculation
      editId = null;
      console.log("Calculation result:", res.result);
      fetchHistory(); // Update history after calculation
    })
    .catch((error) => {
      console.error("Error:", error.message);
      display.value = `Error: ${error.message}`;
    });
}

// Fetch and display calculation history
function fetchHistory() {
  console.log("Fetching calculation history...");
  fetch("http://localhost:3000/api/history")
    .then((res) => res.json())
    .then((history) => {
      const historyDiv = document.getElementById("history");
      historyDiv.innerHTML = ""; // Clear previous history

      history.forEach((calc) => {
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
    .catch((error) => console.error("Error fetching history:", error));
}

// Edit a calculation from history
function editCalculation(id) {
  console.log("Editing calculation:", id);
  fetch(`http://localhost:3000/api/history/${id}`)
    .then((res) => res.json())
    .then((calc) => {
      firstOperand = calc.firstOperand.toString();
      operator = calc.operator;
      currentInput = calc.secondOperand.toString();
      display.value = `${firstOperand} ${operator} ${currentInput}`;
      console.log("Populated edit fields:", calc);

      // Set edit mode
      isEditing = true;
      editId = parseInt(id, 10); // Ensure editId is an integer
    })
    .catch((error) => console.error("Error editing calculation:", error));
}

// Update a calculation
function updateCalculation(id) {
  console.log("updateCalculation called with id:", id);
  const secondOperand = currentInput;
  const data = { firstOperand, operator, secondOperand };

  fetch(`http://localhost:3000/api/history/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((errorData) => {
          throw new Error(errorData.error || "Unknown error");
        });
      }
      return res.json();
    })
    .then((updatedCalc) => {
      display.value = updatedCalc.result;
      currentInput = updatedCalc.result.toString();
      firstOperand = "";
      operator = "";
      isEditing = false; // Reset edit mode variables after update
      editId = null;
      console.log("Calculation updated:", updatedCalc);
      fetchHistory();
    })
    .catch((error) => {
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
    .catch((error) => console.error("Error deleting calculation:", error));
}
