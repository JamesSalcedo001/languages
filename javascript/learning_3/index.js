// String methods

// charAt()

let exampleString = "Hello World";
console.log("Hello World charAt(2) ->: ", exampleString.charAt(2)); // => "l" third character index 2

console.log("\n*****\n")

// slice()

let exString = "JavaScript";
console.log("JavaScript slice(1, 4) ->: ", exString.slice(1, 4)); // => output "ava" slice from index 1 - 3, 4 is exclusive
console.log("JavaScript slice(4, 7) ->: ", exString.slice(4, 7)); // => output "Scr" slice from index 4 - 7 exclusive

console.log("\n*****\n")

// toUpperCase() and toLowerCase()


let exString2 = "HELlo";
console.log("HELlo toUpperCase ->: ", exString2.toUpperCase()); // output: "HELLO"
console.log("HELlo toLowerCase ->: ", exString2.toLowerCase()); // output: "hello"

console.log("\n*****\n")


// includes()

let exString3 = "Learning JavaScript is fun!";
console.log("Learning JavaScript is fun! includes('JavaScript') ? ->: ", exString3.includes("JavaScript")) // output: true
console.log("Learning JavaScript is fun! includes('Python') ? ->: ", exString3.includes("Python")) // output: false

console.log("\n*****\n")



// split()

let exString4 = "Split this sentence into words";

console.log("split string by a certain character(in this case a space) and put each split item into an array ->: ", exString4.split(" ")); // output" ["Split", "this", "sentence", "into", "words"]


let exString5 = "cats are cool";
console.log("Split string cats are cool by the letter c ->: ", exString5.split("c"))



console.log("\n*****\n")



// String challenges

// Number methods

// Number Challenges

// Array methods

// Array Challenges

// Object Methods

// Object Challenges

// Loops Methods

// Loops Challenges

// Intermediate Challenges

// Advanced challenges