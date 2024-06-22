// data types


let integer:  number = 10; //integer
let floatNum: number = 10.5 // float -> optional semicolons like js
let string: string = "Hello"; // string
let boolean: boolean = true;  //boolean

// right off the bat, syntax is definitely different


// variables


let variable: number = 10;
const CONSTANT: number = 20; // constants defined by const keyword, and convention is to type it in all caps



// operators



let a: number = 10;
let b: number = 20;


// arithmetic
let sum: number = a + b; //add
let diff: number = a - b; //subt
let prod: number = a * b; // mult
let quot: number = a / b; // divide


// comparison
let isEqual: boolean = (a === b); // strict equality
let isNotEqual: boolean = (a !== b); // strict inequality
let isGreater: boolean = (a > b); // greater than


// logical
let andOp: boolean = (a < b && b > 10); // AND
let orOp: boolean = (a < b || b < 10); // OR




// control flow



let number: number = 10;

// if statement 

if (number > 5) {
    console.log("Greater than 5");
} else {
    console.log("5 or less");
}


// ternary operator
let result: string = (number > 5) ? "Greater than 5" : "5 or less";
console.log(result);






// loops



// for loop 


for (let i: number = 0; i < 5; i++) {
    console.log(i);
}




// while loop
let j: number = 0;
while(j < 5) {
    console.log(j);
    j++;
}




// do while loop
let k: number = 0;

do {
    console.log(k);
    k++;
} while (k < 5);







//functions

function greet(name: string) {
    return `Hello, ${name}`;
}

console.log(greet("John")); // output: Hello, John










// arrays


let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits[0]); // output: apple








// objects



interface Person1 {
    firstName: string;
    lastName: string;
    age: number; 
}

// differs from javascript, use interface keyword look into this

let person_01: Person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}


console.log(person_01.firstName); // output: John








// classes and objects(OOP)




class Person {
    firstName: string;
    lastName: string;
    age: number;


    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    greet(): string {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
}


let person1 = new Person("John", "Doe", 30);
console.log(person1.greet()); // output: Hello, my name is John Doe