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






// inheritance (OOP)


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}



class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog("Rex");

dog.speak(); // output: Rex barks.





// encapsulation


class Employee {
    #salary; // private field

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }
}

let emp = new Employee("Alice", 50000);
console.log(emp.getSalary()); // output: 50000




// polymorphism (OOP)


class Shape {
    area() {
        return 0;
    }
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
        // formula for calculating area of circle or pi r squared
    }
}


class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
        // formula for calculating rectangle or width * height
    }
}


let shapes = [new Circle(10), new Rectangle(5, 10)];

shapes.forEach(shape => console.log(shape.area()));





// exceptions/ error handling

try {
    let result = riskyOp();
} catch (error) {
    console.error("Error occurred:", error.message);
} finally {
    console.log("Cleanup actions if needed");
}




// recursion


function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


console.log(factorial(5)); // output 120;






// libraries/ modules




// using built in module node.js for example


const fs = require('fs');

// or

import fs from 'fs';


fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
});



// using external library eg. lodash

const _ = require('lodash');

// or

import _ from 'lodash';


let numbers = [1, 2, 3, 4, 5];

let reversed = _.reverse(numbers);

console.log(reversed); // output: [5, 4, 3, 2, 1]