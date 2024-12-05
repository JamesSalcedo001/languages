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







////////////////////////////////////








// ex 3 add a card


// function createCard(title, content) {
//     // initialize variable, storing a created div element
//     const card = document.createElement("div");

//     // add a className to the card element of 'card'
//     card.className = "card";

//     // create new elements for cardTitle and cardContent
//     const cardTitle = document.createElement("h3");
//     const cardContent = document.createElement("p");

//     // assign the textcontent of the card's title and content to the arguments passed into the function
//     cardTitle.textContent = title;
//     cardContent.textContent = content;


//     // append the newly created h3 and p elements to the card element
//     card.appendChild(cardTitle);
//     card.appendChild(cardContent);

//     return card
// }


// // adding card

// const card = createCard("Card Title", "This is the card content.");

// // append the card element as a child to app
// document.getElementById("app").appendChild(card);








////////////////////////////////////









// ex 4 add a modal


// function createModal(contentText, onClose) {
//     // create container element
//     const modal = document.createElement("div");

//     // assign a class of modal and the display property to none
//     modal.className = "modal";
//     modal.style.display = "none";

//     // create another div to store the content in the modal
//     const modalContent = document.createElement("div");
    
//     // aassign this div the class of modal-content
//     modalContent.className = "modal-content";

//     // create a paragraph element inside the content div to display words
//     const content = document.createElement("p");

//     // assign the textContent of the paragraph to be whatever is passed as the first argument of the createModal function
//     content.textContent = contentText;


//     // create a button to close the modal
//     const closeButton = document.createElement("button");

//     // Set the textContent property to a value of "Close"
//     closeButton.textContent = "Close";

//     // attach click event listener to the button which sets the modal display property back to none, which makes it invisible
//     closeButton.addEventListener("click", () => {
//         modal.style.display = "none";
//         if (onClose) onClose();
//     });

//     // appending content as a child of modalContent, closeButton as a child of modalContent, and appending modalContent as a child of modal
//     modalContent.appendChild(content);
//     modalContent.appendChild(closeButton);
//     modal.appendChild(modalContent);

//     return modal;
// }



// function createButton(text, onClick) {
//     const button = document.createElement("button");

//     button.textContent = text;

//     button.addEventListener("click", onClick);

//     return button;
// }




// // invoke function to create modal and store it as variable

// const modal = createModal("This is modal content", () => console.log("Modal Closed."));

// // append created modal to the dom
// document.body.appendChild(modal);


// // button to show modal
// const showModalButton = createButton("Show Modal", () => {
//     modal.style.display = "flex";
// });

// document.getElementById("app").appendChild(showModalButton);









////////////////////////////////////








// ex 5 add a navbar



// function createNavbar(links) {

//     // create nav and ul elements

//     const nav = document.createElement("nav");
//     const ul = document.createElement("ul");

//     // iterate through links passed into function as arguments

//     links.forEach(link => {

//         // create li and a elements

//         const li = document.createElement("li");
//         const a = document.createElement("a");


//         // assign an href and textContent attribute to each a tag using each link object's text property and href property values

//         a.href = link.href;
//         a.textContent = link.text;

//         // take each new li formed and append the newly formed a tags as children of the li elements
//         li.appendChild(a);

//         // take each li element and append to the newly created ul as children
//         ul.appendChild(li);
//     });

//     // append the ul to the nav as a child element

//     nav.appendChild(ul);

//     return nav;
// }


// // create navbar and store results as variable
// const navbar = createNavbar([
//     { text: "Home", href: "#home" },
//     { text: "About", href: "#about" },
//     { text: "Contact", href: "#contact" },
// ]);

// // query the div with class name 'app' and append the created navbar as a child element
// document.getElementById("app").appendChild(navbar);








////////////////////////////////////




// ex 6 add a list


function createList(items, ordered = false ) {

    // create function creatList, which takes an array as first arg and an ordered argument with a default of false, with option to set as true

    // create element ol or ul conditionally using ternary operator based on whether ordered is set to false or true
    const list = document.createElement(ordered ? "ol" : "ul");


    // iterate through items array 
    items.forEach(item => {

        // for each item, create an li
        const li = document.createElement("li");

        // assign the li a textContent attribute with the value of the item name
        li.textContent = item;

        // append newly created li to the ol/ul element as a child
        list.appendChild(li);
    });

    return list;
}



