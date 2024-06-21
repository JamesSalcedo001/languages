// data types 


let integer = 0;
let float = 10.5;
let string = "hello"
let boolean = true;


// variables


let variable = "I can change";

const constant = "I cannot change";


// operators


let a = 10;
let b = 20;


// arithmetic

let sum = a + b;
let diff = a - b;
let prod = a * b;
let quot = a / b;

// comparison 

let isEqual = ( a === b) // strict equality
let isEqual2 = ( a == b) // equality

let isNotEqual = ( a !== b) // strict inequality
let isNotEqual2 = ( a != b) // inequality

// logical

let and = (a < b && b > 10); // AND

let or = (a < b || b < 10); // OR



// control flow


// if else statement

let number = 10;

if (number > 5) {
    console.log("Greater than 5");
} else {
    console.log("5 or less");
}


// ternary operator

let result = (number > 5) ? "Greater than 5" : "5 or less";
console.log(result);



// loops


// for loop 

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// while loop

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}


// do while loop

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);




// functions/methods


function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet("John")); // output: Hello, John.



// arrays/lists

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // output: apple




// objects/dictionaries

let person = {
    firstName: "James",
    lastName: "Salcedo",
    age: 28 
};


console.log(person.firstName); // output: James
console.log(person["lastName"]); // output: Salcedo





// classes and objects (OOP)



class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
}


let person1 = new Person("John", "Doe", 30);
console.log(person1.greet()); // output: Hello, my name is John Doe



