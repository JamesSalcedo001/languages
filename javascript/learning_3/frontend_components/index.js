// ex 1 create button

function createButton(text, onClick) {
    // create an element of type button and assign a variable name
    const button = document.createElement("button");

    // assign the content of the button's text to equal whatever is input as the first argument of the createButton function
    button.textContent = text;

    // attach a click event listener to the newly created button element
    button.addEventListener("click", onClick);

    return button;
    
}


// add the button to the dom

// button variable calls the createButton function, which takes in Click Me as the text for the first argument, and an anonymous function call to use the alert Button Clicked when the function is invoked
const button = createButton("Click Me", () => alert("Button Clicked!"));

// append the button element as a child element of the div with an id of 'app' 
document.getElementById("app").appendChild(button);