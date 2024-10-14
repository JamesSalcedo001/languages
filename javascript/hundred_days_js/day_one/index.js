// Grabbing various elements from the DOM for interaction
let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

// Define mouse and touch event types for cross-device compatibility
let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = ""; // To detect whether using touch or mouse
let draw = false; // Flag to check if drawing is active
let erase = false; // Flag to check if erasing is active

// Function to check if the device is touch-enabled
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

// Initialize device type check
isTouchDevice();

// Create grid based on user input for width and height
gridButton.addEventListener("click", () => {
    container.innerHTML = ""; // Clear existing grid
    let count = 0; // Unique ID counter for grid cells

    // Create rows based on the selected height
    for (let i = 0; i < gridHeight.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        // Create columns (grid cells) based on the selected width
        for (let j = 0; j < gridWidth.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);

            // Start drawing on mouse/touch down
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                col.style.backgroundColor = erase ? "transparent" : colorButton.value;
            });

            // Continue drawing while moving over cells
            col.addEventListener(events[deviceType].move, (e) => {
                let elementId = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY,
                ).id;
                checker(elementId); // Check if drawing/erasing should apply to the current cell
            });

            // Stop drawing when mouse/touch is released
            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            });

            div.appendChild(col); // Add column to row
        }

        container.appendChild(div); // Add row to the container
    }
});

// Helper function to check which cell to modify
function checker(elementId) {
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            // Apply color or erase based on the flag
            element.style.backgroundColor = draw && erase ? "transparent" : colorButton.value;
        }
    });
}

// Clear the entire grid on button click
clearGridButton.addEventListener("click", () => {
    container.innerHTML = "";
});

// Toggle eraser on
eraseBtn.addEventListener("click", () => {
    erase = true;
});

// Toggle paint mode on
paintBtn.addEventListener("click", () => {
    erase = false;
});

// Display the current width value when the range slider changes
gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

// Display the current height value when the range slider changes
gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

// Reset grid inputs on page load
window.onload = () => {
    gridHeight.value = 0;
    gridWidth.value = 0;
};
