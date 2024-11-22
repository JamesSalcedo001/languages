console.log("\n*** String methods ***\n")

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
console.log("Hello world indexOf('world') ->: ", exString6.indexOf("World")); // output: 7
console.log("Hello world! indexOf('o') ->: ", exString6.indexOf("o")); // output -> 4 (first o)
console.log("Hello world! indexOf('Python') ->: ", exString6.indexOf("Python")) // output: -1 (not found)



console.log("\n*****\n")



// lastIndexOf(): finds last occurrence of specified value in string


let exString7 = "Hello world!";

console.log("Hello world! lastIndexOf('o') ->: ", exString7.lastIndexOf("o")); // output: 8 (last o)
console.log("Hello world! lastIndexOf('Hello') ->: ", exString7.lastIndexOf("Hello")); // output: 0
console.log("Hello world lastIndexOf('Python') ->: ", exString7.lastIndexOf("Python")) // output: -1 (not found)



console.log("\n*****\n")





// trim(): removes whitespace from both ends of string

let exString8 = "   Hello, World!     ";
console.log("   Hello, World!     trimmed() ->: ", exString8.trim()); // output: Hello, World!


console.log("\n*****\n")




// replace(): replaces first occurrence of specified value with another value


let exString9 = "JavaScript is fun!";
console.log("replacing the word 'fun' with 'awesome' ->: ", exString9.replace("fun", "awesome")); // output: JavaScript is awesome!


console.log("\n*****\n")




// replaceAll(): replaces all occurrences of specified value with another value

let exString10 = "JavaScript is fun, and JavaAscript is powerful!";
console.log("replacing original words JavaScript with JS ->: ", exString10.replaceAll("JavaScript", "JS")); // output: JS is fun, and JS is powerful!


console.log("\n*****\n")


// concat(): joins two or more strings

let string1 = "Hello";
let string2 = "World";
console.log("concatenating 'Hello' and 'World' together along with punctuation ->: ", string1.concat(", ", string2, "!")); // output: Hello, World!




console.log("\n*****\n")



// substring(): extracts characters between two indices


let string3 = "JavaScript";
console.log("substring of 'JavaScript' between 0, 4 ->: ", string3.substring(0, 4)); // output: "Java"
console.log("substring of 'JavaScript' between 4 and the end, using only the one argument of 4 ->: ", string3.substring(4)); // output: script



console.log("\n*****\n")




// padStart(): pads current string from start with another string until reaches specified length


let string4 = "5";

console.log("padding -> before the 5, making 5 the 6th character padStart(6, '->') ->: ", string4.padStart(6, "->"));




console.log("\n*****\n")







// padEnd(): pads current string from the end with another string until it reaches specified length

let string5 = "5";
console.log("padding -> after the 5, totaling 6 character padEnd(6, '->') ->: ", string5.padEnd(6, "->"));



console.log("\n*****\n")




// repeat(): repeats string a specified num of times

let string6 = "Ha!";
console.log("repeats the string Ha! 3 times without spaces ->: ", string6.repeat(3)); // output: Ha!Ha!Ha!




console.log("\n*****\n")





// startsWith(): checks if string starts with specified value

let string7 = "JavaScript";

console.log("Does string start with 'Java'? ->: ", string7.startsWith("Java")); // output: true
console.log("Does string start with 'Script'? ->: ", string7.startsWith("Script")); // output: false


console.log("\n*****\n")





// endsWith(): checks if string ends with specified value

let string8 = "JavaScript";
console.log("Does string end with 'Script'? ->: ", string8.endsWith("Script")); // output: True

console.log("Does string end with 'Java'? ->: ", string8.endsWith("Java")); // output: false




















console.log("\n*****\n")



console.log("\n*** String Challenges ***\n")



// charAt() challenge: write function that takes string and num as args, and returns the character at given index. if index is out of bounds, return message saying index out of range

// ex output: getCharacterAt("JavaScript", 4);

// result: "S"

function getCharacterAt(str, num) {
    

    // first check if the num arg is less than 0 which is out of range, then check if the num arg is greater than or equal to the length of the string, which is also out of range, and then if these checks pass, return the result of using the charAt() method on the string passed into the function, using the num argument as the index at which to check the string

    return num < 0 || num >= str.length ? "Index out of range" : str.charAt(num);
}


console.log("Hello World! function takes in string and number and returns character at specified index 12 ->: ", getCharacterAt("Hello World!", 12)); // output: "Index out of range"
console.log("Hello World! function takes in string and number and returns character at specified index 0 ->: ", getCharacterAt("Hello World!", 0)) // output: "H"
console.log("Hello World! function takes in string and number and returns character at specified index -1 ->: ", getCharacterAt("Hello World!", -1)) // output; "Index out of range"


console.log("\n*****\n")




// slice() challenge: write function that takes a string and 2 numbers, start and end, and returns substring from start index to(but not including) the end index. if start or end are invalid, return message saying invalid indices


// ex output: getslice("JavaScript", 0, 4)

// result: "S"

function getSlice(str, start, end) {

    // function takes in three args, a string, a start index and an end index, and uses a ternary which first checks if the start index is less than 0 which would be invalid, or if the end index is greater than or equal to the length of the string, both of which would be invalid, returns error message if either are true, and if both pass, returns the subarray with the characters sliced from the original
    
    return start < 0 || end >= str.length ? "Invalid indices" : str.slice(start, end);
}

console.log("getSlice function takes in string, and starting and ending indexes, returns that substring between indexes 0, 6 ->: ", getSlice("Cats are cool!", 0, 6))
console.log("getSlice function takes in string, and starting and ending indexes, returns that substring between indexes -1, 6 ->: ", getSlice("Cats are cool!", -1, 6))
console.log("getSlice function takes in string, and starting and ending indexes, returns that substring between indexes 0, 14 ->: ", getSlice("Cats are cool!", 0, 14))



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


console.log("convertCase() takes in string and returns object with two properties one is lowercase version and one is uppercase ->: ", convertCase("Cats are Cool"))



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

console.log("checkIncludes() takes in a string, and a word, checks if the word is in the string, and returns whether it exists or not 'raspberry' ->: ", checkIncludes("Raspberry pi is NOT a food", "raspberry"))
console.log("checkIncludes() takes in a string, and a word, checks if the word is in the string, and returns whether it exists or not 'not' ->: ", checkIncludes("Raspberry pi is NOT a food", "not"))
console.log("checkIncludes() takes in a string, and a word, checks if the word is in the string, and returns whether it exists or not 'cats' ->: ", checkIncludes("Raspberry pi is NOT a food", "cats"))



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

console.log("splitString() takes in string and splits by specified character or by spaces(' ') ->: ", splitString("Dogs are cool"))

console.log("splitString() takes in string and splits by specified character or by spaces('o') ->: ", splitString("Dogs are cool", "o"))





// indexOf() challenge: write function that takes a string and a word, returns the first index of the word in the string, if not found, return "Not found"

// findIndex("Hello, world!", "world")

// ex output: 7



function findIndex(str, word) {
    // convert both string and word to lowercase for case-insensitive matching
    const lowerStr = str.toLowerCase();
    const lowerWord = word.toLowerCase();

    // use the indexOf method on the string to check for the presence of the word, store result in a variable index
    const index = lowerStr.indexOf(lowerWord);
    
    // use ternary to check if the result returns -1, if not it returns the index where the word is located in the string
    return index === -1 ? "Not found" : index;
}

console.log("check if/where 'world' is in 'Hello, World!' ->: ", findIndex("Hello, World!", "world")) // 7
console.log("check if/where 'hello' is in 'Hello, World!' ->: ",findIndex("Hello, World!", "hello" )) // 0
console.log("check if/where 'cat' is in 'Hello, World!' ->: ",findIndex("Hello, World!", "cat" )) // Not found



console.log("\n*****\n")








// lastIndexOf() challenge: write function that takes string and letter, and returns index of the last occurrence of the letter of string. if letter is not found, return not found

// input: findLastIndex("Hello, world!", "o")

// output: 8


function findLastIndex(str, char) {
    const lowerStr = str.toLowerCase();
    const lowerChar = char.toLowerCase();

    const index = lowerStr.lastIndexOf(lowerChar);
    
    return index === -1 ? "Not found" : index;
}


console.log("check if/where 'o' is in 'Hello, world!' ->: ", findLastIndex("Hello, world!", "o"));
console.log("check if/where 'a' is in 'Hello, world!' ->: ",findLastIndex("Hello, world!", "a"));




console.log("\n*****\n")





// trim() challenge: write function that takes string with extra spaces at the beginning and end and returns the trimmed string

function trimString(str) {
    return str.trim();
}

console.log("       Hello, World!!!            trimmed ->:", trimString("       Hello, World!!!            "))



console.log("\n*****\n")




// replace challenge: write function that takes string, word to replace, and replacement word, returns the string with first occurrence replaced

// input: replaceWord("I like JavaScript", "like", "love");

// output: I love JavaScript




function replaceWord(str, targetWord, replacementWord) {

    return str.replace(targetWord, replacementWord);
}


console.log("Replacing 'like' with 'love' ->: ", replaceWord("I like JavaScript", "like", "love"))


console.log("\n*****\n")












// replaceAll() challenge: write function that takes a string, word to replace, and replacement word, and returns the string with all occurrences replaced


// ex input: replaceAllWords("I like JavaScript because JavaScript is fun", "JavaScript", "JS")

// output: "I like JS because JS is fun"


function replaceAllWords(str, target, replacement) {
    return str.replaceAll(target, replacement)
}

console.log("Replace all instances of 'JavaScript' with 'JS' ->: ", replaceAllWords("I like JavaScript because JavaScript is fun", "JavaScript", "JS"))





console.log("\n*****\n")






// concat() challenge: write function that takes three strings and concats them together with spaces in between

// ex input: concatStrings("Hello", "JavaScript", "World")

// output: Hello JavaScript World

function concatStrings(str1, str2, str3) {
    return str1.concat(" ", str2, " ", str3)
}

console.log(concatStrings("Hello", "JavaScript", "World"))





console.log("\n*****\n")





// substring challenge: write function that takes string and two numbers (start and end) and returns sustring between those two indices

// ex input: getSubstring("JavaScript", 4, 10)

// output: "Script"


function getSubstring(str, start, end) {
    return str.substring(start, end)
}

console.log("get substring of 'JavaScript' between indices 4 and 10 ->: ", getSubstring("JavaScript", 4, 10))


console.log("\n*****\n")




// padStart challenge: write function that takes string and total length, pads the string from start with zeros until reaches total length

// input: padWithZeros("42", 5)

// output: "00042"

function padWithZeros(str, charPaddingNum) {
    return str.padStart(charPaddingNum, "0");
}


console.log("move 45 up to indices 4 and 5, and pad anything before them with zeros ->: ", padWithZeros("42", 5))


console.log("\n*****\n")




// padEnd challenge: write function that takes string and total length, pads string from end with asterisks until reaches total length

// input: padWithAsterisks("42", 5)

// output: "42***"


function padWithAsterisks(str, charPaddingNum) {
    return str.padEnd(charPaddingNum, "*")
}

console.log("padding with asterisks after 42 ->: ", padWithAsterisks("42", 5))



console.log("\n*****\n")






// repeat challenge(): write function that takes string and number, returns string repeated that many times

// input: repeatedString("Ha!", 3)

// output: "Ha!Ha!Ha!"

function repeatedString(str, num) {
    return str.repeat(num);
}

console.log("repeat string 'Ha!' 3 times ->: ", repeatedString("Ha!", 3))



console.log("\n*****\n")


// startsWith() challenge: write function that takes a string and a prefix, and checks if string starts with prefix return true or false


// input: checkStartsWith("JavaScript is awesome", "Java")
// output: true


function checkStartsWith(str, prefix) {
    return str.startsWith(prefix);
}

console.log("'JavaScript is awesome' starts with 'Java' ? ->: ", checkStartsWith("JavaScript is awesome", "Java"))

console.log("'JavaScript is awesome' starts with 'java' ? ->: ", checkStartsWith("JavaScript is awesome", "java"))



console.log("\n*****\n")





// console.log("\n*** Array methods ***\n")

// console.log("\n*** Array Challenges ***\n")


// console.log("\n*** Object methods ***\n")

// console.log("\n*** Object Challenges ***\n")


// console.log("\n*** Loops methods ***\n")

// console.log("\n*** Loops Challenges ***\n")



// console.log("\n*** Numbers methods ***\n")

// console.log("\n*** Numbers Challenges ***\n")

// Intermediate Challenges

// Advanced challenges