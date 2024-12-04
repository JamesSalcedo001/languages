// ex 1 create button

// function createButton(text, onClick) {
//     // create an element of type button and assign a variable name
//     const button = document.createElement("button");

//     // assign the content of the button's text to equal whatever is input as the first argument of the createButton function
//     button.textContent = text;

//     // attach a click event listener to the newly created button element
//     button.addEventListener("click", onClick);

//     return button;
    
// }


// // add the button to the dom

// // button variable calls the createButton function, which takes in Click Me as the text for the first argument, and an anonymous function call to use the alert Button Clicked when the function is invoked
// const button = createButton("Click Me", () => alert("Button Clicked!"));

// // append the button element as a child element of the div with an id of 'app' 
// document.getElementById("app").appendChild(button);











////////////////////////////////////







// ex 2 add input field with label


// function createInputWithLabel(labelText, inputType = "text") {
//     // first create the main container element, label and input elements
//     const container = document.createElement('div');
//     const label = document.createElement("label");
//     const input = document.createElement("input")


//     // set the text content of the label to the first argument given in the function
//     label.textContent = labelText;

//     // above, input type default is set to text unless specified in the second argyment passed to the function

//     // setting the type of the input element
//     input.type = inputType;


//     // append label and input as children of the container element
//     container.appendChild(label);
//     container.appendChild(input);

//     return container;

// }


// // adding the input field

// // invoke function and set to a variable
// const inputWithLabel = createInputWithLabel("Enter your name: ");

// // append the newly created input as a child of the app div
// document.getElementById("app").appendChild(inputWithLabel);




// ex 2 add a card


function createCard(title, content) {
    // initialize variable, storing a created div element
    const card = document.createElement("div");

    // add a className to the card element of 'card'
    card.className = "card";

    // create new elements for cardTitle and cardContent
    const cardTitle = document.createElement("h3");
    const cardContent = document.createElement("p");


    // append the newly created h3 and p elements to the card element
    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card
}


// adding card

const card = createCard("Card Title", "This is the card content.");

// append the card element as a child to app
document.getElementById("app").appendChild(card);