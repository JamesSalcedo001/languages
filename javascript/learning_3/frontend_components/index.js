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


// function createList(items, ordered = false ) {

//     // create function creatList, which takes an array as first arg and an ordered argument with a default of false, with option to set as true

//     // create element ol or ul conditionally using ternary operator based on whether ordered is set to false or true
//     const list = document.createElement(ordered ? "ol" : "ul");


//     // iterate through items array 
//     items.forEach(item => {

//         // for each item, create an li
//         const li = document.createElement("li");

//         // assign the li a textContent attribute with the value of the item name
//         li.textContent = item;

//         // append newly created li to the ol/ul element as a child
//         list.appendChild(li);
//     });

//     return list;
// }




// // create the (ordered) list

// const list = createList(["Tomo", "Binx", "Dhalia", "Barbie", "Peanut"], true);


// // create the unordered list

// // const list = createList(["Tomo", "Binx", "Dhalia", "Barbie", "Peanut"]);


// // query the div with class app and append newly created list as a child element

// document.getElementById("app").appendChild(list);








////////////////////////////////////





// ex 7 add a dropdown menu


// function createDropdown(options, onChange) {

//     // create function createDropdown, which takes in two args, the first is the array of options, the second is what is to be done when the change event occurs

//     // create select element

//     const select = document.createElement("select");

//     // iterate through the list of options

//     options.forEach(option => {
//         // create an option element

//         const opt = document.createElement("option");

//         // set the value attribute for the newly created option element to equal the 'value' property's value in each object 

//         opt.value = option.value;

//         // set the textContent attribute to equal the option object's 'label' property's value 

//         opt.textContent = option.label;

//         // append each opt element as a child to the select element
//         select.appendChild(opt);
//     });


//     // attach an event listener to the select element and have the onChange function which is passed in as an argument apply to the event.target.value 

//     select.addEventListener("change", (e) => onChange(e.target.value));

//     return select;
// }



// // create dropdown

// const dropdown = createDropdown(
//     [
//         { value: "apple", label: "Apple" },
//         { value: "banana", label: "Banana" },
//         { value: "cherry", label: "Cherry" },
//     ],
//     (selectedValue) => console.log("Selected: ", selectedValue)
// );

// // when a value is selected, the change event occurs and the value is logged to the console

// // append the dropdown to the body element of the DOM as a child

// document.body.appendChild(dropdown);






////////////////////////////////////






// ex 8 add a tabs component


// function createTabs(tabData) {

//     // createTabs function takes in a single argument, an array of objects

//     // create div elements 

//     const container = document.createElement("div");
//     const tabs = document.createElement("div");
//     const content = document.createElement("div");


//     // style tabs with CSS

//     tabs.style.display = "flex";
//     tabs.style.cursor = "pointer";
//     tabs.style.gap = "10px";
//     tabs.style.marginBottom = "10px";

//     // iterates through the tabdata array, uses destructuring to extract label and contentText properties of each object, use index to track current position of array starting from 0

//     tabData.forEach(({ label, contentText }, index) => {

//         // create button element named tab

//         const tab = document.createElement("button");

//         // assign the textContent to equal the label value in the object

//         tab.textContent = label;

//         // attach click event listener

//         tab.addEventListener("click", () => {

//             // converts children of the content container into an array and loops through each one, hiding all content sections by setting display to none

//             Array.from(content.children).forEach(c => (c.style.display = "none"));
            
//             // makes the content section corresponding to the clicked tab visible by setting its display back to block

//             content.children[index].style.display = "block";
//         });

//         // appends the tab button as a child of tabs container

//         tabs.appendChild(tab);


//         // create div for content associated with tab

//         const tabContent = document.createElement("div");

//         // sets textContent to equal contentText, which is a property value of each object

//         tabContent.textContent = contentText;


//         // displays the content for first tab and hides others

//         tabContent.style.display = index === 0 ? "block" : "none";

//         // appends content section to the content container

//         content.appendChild(tabContent);
//     });

//     // append 'tabs' container as child of 'container' container

//     container.appendChild(tabs);

//     // append 'content' container to the 'container' container 

//     container.appendChild(content);

//     return container;
// }



// // create tabs function 

// const tabs = createTabs([
//     { label: "Tab 1", contentText: "This is content for Tab 1" },
//     { label: "Tab 2", contentText: "This is content for Tab 2" },
//     { label: "Tab 3", contentText: "This is content for Tab 3" }
// ]);


// // append tabs to the body of document

// document.body.appendChild(tabs);












////////////////////////////////////






// ex 9 add an accordion component



// function createAccordion(items) {

//     // createAccordion takes in an items param expecting an array

//     // create container div

//     const container = document.createElement("div");

//     // iterate through items, destructure to extract title and content properties of objects
//     items.forEach(({ title, content }) => {

//         // create div, button, and another div element

//         const accordionItem = document.createElement("div");
//         const header = document.createElement("button");
//         const body = document.createElement("div");

//         // set textContents of header and body elements to equal the corresponding property values title and content

//         header.textContent = title;
//         body.textContent = content;

//         // set display property of body div to 'none'

//         body.style.display = "none";


//         // attach click event listener to header button

//         header.addEventListener("click", () => {
//             // set variable isVisible

//             const isVisible = body.style.display === "block";

//             // use ternary to conditionally render either display of block or none

//             body.style.display = isVisible ? "none" : "block";
//         })

//         // append header as a child of accordionItem

//         accordionItem.appendChild(header);

//         // append body as child of accordionItem

//         accordionItem.appendChild(body);

//         // append accordionItem as child of container

//         container.appendChild(accordionItem);
//     })

//     return container;
// }





// // create accordion

// const accordion = createAccordion([
//     { title: "Section 1", content: "Content for section 1" },
//     { title: "Section 2", content: "Content for section 2" },
//     { title: "Section 3", content: "Content for section 3" }
// ])


// // append accordion to DOM

// document.body.appendChild(accordion);
















////////////////////////////////////






// ex 10 add a tooltip component


// createTooltip takes two args, the DOM element to which the tooltip will be attached, and the text that will appear in the tooltip

// function createTooltip(targetElement, tooltipText) {


//     // create div element serving as tooltip


//     // style tooltip with CSS

//     const tooltip = document.createElement("div");
//     tooltip.textContent = tooltipText;
//     tooltip.style.position = "absolute";
//     tooltip.style.background = "black";
//     tooltip.style.color = "white";
//     tooltip.style.padding = "5px";
//     tooltip.style.borderRadius = "3px";
//     tooltip.style.display = "none";

//     // append tooltip to the body of DOM 

//     document.body.appendChild(tooltip);


//     // add even listener for mouseenter event on targetElement

//     targetElement.addEventListener("mouseenter", (e) => {

//         // get X and Y coordinates of mouse pointer relative to the DOM
    
//         // sets the horizontal position of the tooltip to the X coordinate of the mouse pointer

//         tooltip.style.left = `${e.pageX}px`;

//         // sets the vertical position of the tooltip to slightly below the Y coordinate of the mouse pointer

//         tooltip.style.top = `${e.pageY + 10}px`;

//         // make tooltip visible

//         tooltip.style.display = "block";
//     });


//     // on mouse leave, hide tooltip

//     targetElement.addEventListener("mouseleave", () => {
//         tooltip.style.display = "none";
//     });

//     return tooltip;
// }



// // create and append button

// const buttonWithToolTip = document.createElement("button");
// buttonWithToolTip.textContent = "Hover over me";
// document.body.appendChild(buttonWithToolTip);


// // invoke createTooltip function, attaching tooltip to buttonWithTooltip

// createTooltip(buttonWithToolTip, "This is a tooltip!");












////////////////////////////////////






// ex 11 add a tooltip component



// createToast function with two params, first is message, second is the amount of time it should go on for in ms, with a default of 3000 (or 3 seconds)

function createToast(message, duration = 3000) {

    // create and style div

    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.padding = "10px";
    toast.style.backgroundColor = "#333";
    toast.style.color = "white";
    toast.style.borderRadius = "5px";
    toast.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";

    // append toast div to the body of DOM

    document.body.appendChild(toast);

    // use setTimeout to remove the toast element from dom after the duration set

    setTimeout(() => {
        toast.remove();
    }, duration);
}


createToast("This is a toast message!");