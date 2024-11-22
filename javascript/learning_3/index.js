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




// indexOf(): finds first occurrence of specified value in string

let exString6 = "Hello World!";
console.log("Hello world indexOf('world') ->: ". exString6.indexOf("world")); // output: 7
console.log("Hello world! indexOf('o') ->: ", exString6.indexOf("o")); // output -> 4 (first o)
console.log("Hello world! indexOf('Python') ->: ", exString6.indexOf("Python")) // output: -1 (not found)














// String challenges



// charAt() challenge: write function that takes string and num as args, and returns the character at given index. if index is out of bounds, return message saying index out of range

// ex output: getCharacterAt("JavaScript", 4);

// result: "S"

function getCharacterAt(str, num) {
    

    // first check if the num arg is less than 0 which is out of range, then check if the num arg is greater than or equal to the length of the string, which is also out of range, and then if these checks pass, return the result of using the charAt() method on the string passed into the function, using the num argument as the index at which to check the string

    return num < 0 || num >= str.length ? "Index out of range" : str.charAt(num);
}


console.log(getCharacterAt("Hello World!", 12)); // output: "Index out of range"
console.log(getCharacterAt("Hello World!", 0)) // output: "H"
console.log(getCharacterAt("Hello World!", -1)) // output; "Index out of range"


console.log("\n*****\n")




// slice() challenge: write function that takes a string and 2 numbers, start and end, and returns substring from start index to(but not including) the end index. if start or end are invalid, return message saying invalid indices


// ex output: getslice("JavaScript", 0, 4)

// result: "S"

function getSlice(str, start, end) {

    // function takes in three args, a string, a start index and an end index, and uses a ternary which first checks if the start index is less than 0 which would be invalid, or if the end index is greater than or equal to the length of the string, both of which would be invalid, returns error message if either are true, and if both pass, returns the subarray with the characters sliced from the original
    
    return start < 0 || end >= str.length ? "Invalid indices" : str.slice(start, end);
}

console.log(getSlice("Cats are cool!", 0, 6))
console.log(getSlice("Cats are cool!", -1, 6))
console.log(getSlice("Cats are cool!", 0, 14))



console.log("\n*****\n")



// toUpperCase and toLowerCase challenge: write function that takes string and returns object with two properties: 

/*
    1: string converted to all uppercase
    2: string converted to all lowercase

*/

// ex output: covertCase("JavaScript")

// result: { uppercase: "JAVASCRIPT", lowercase: "javascript"}


// function convertCase(str) {
//     // initialize empty object
//     let upperLower = {};
//     // store converted upper and lowercase strings as variables
//     let upper = str.toUpperCase();
//     let lower = str.toLowerCase();

//     // assign new key/value pairs using the upper and lower variables
//     upperLower["uppercase"] = upper;
//     upperLower["lowercase"] = lower;

//     // return the result
//     return upperLower;
// }


function convertCase(str) {
    return {
        uppercase: str.toUpperCase(),
        lowercase: str.toLowerCase()
    };
} 


console.log(convertCase("Cats are Cool"))



console.log("\n*****\n")





// includes challenge: write function that takes a string and word as arguments and checks if the word exists in the string. return true if it does, and false otherwise


// ex input: checkIncludes("Learning JavaScript is fun!", "JavaScript");

// ex output: true


function checkIncludes(str, word) {
    // function takes in string argument and word argument

    // first validate input to make sure both arguments are of string datatype
    if (typeof str !== "string" || typeof word !== "string") {
        throw new Error("Both arguments must be strings");
    }

    // first attempt to return the result of using includes method to check if word is part of string, and if needed converts to lowercase to format and compare
    return str.includes(word) || str.toLowerCase().includes(word.toLowerCase());
}

console.log(checkIncludes("Raspberry pi is NOT a food", "raspberry"))
console.log(checkIncludes("Raspberry pi is NOT a food", "not"))
console.log(checkIncludes("Raspberry pi is NOT a food", "cats"))



console.log("\n*****\n")




// split() challenge: write function thay takes string and delimiter( a character at which to separate) as arguments and splits the string into array of substrings based on delimiter. if no delimiter provided, split by spaces

// ex input: splitString("split this sentence into words");

// ex output: ["Split", "this", "sentence", "into", "words"];


// function splitString(str, delimiter) {
//     // function takes in two args a string, and optionally a character to split the string at

//     // return the result of using split method on the given string
//     return str.split(delimiter ? delimiter : " ");
// }


function splitString(str, delimiter = " ") {
    // set default parameter for delimiter, so if no delim is provided, it uses a space to separate by

    // check if the type of the string and if the delimiter if exists is also a string or throws an error
    if (typeof str !== "string" || (delimiter && typeof delimiter !== "string")) {
        throw new Error("Both args must be strings");
    }
    

    // returns an array as a result of using the split method on the given string, split either by a space by default or a specified delimiter
    return str.split(delimiter);
}

console.log(splitString("Dogs are cool"))

console.log(splitString("Dogs are cool", "o"))


// Array methods

// Array Challenges

// Object Methods

// Object Challenges

// Loops Methods

// Loops Challenges

// Number methods

// Number Challenges

// Intermediate Challenges

// Advanced challenges