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