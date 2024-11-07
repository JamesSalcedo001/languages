// arrays - collection of elements stored in a contiguous block of memory. elems are accessible by index

// simple use

let myArray = [1, 2, 3, 4, 5];
console.log("accessing array elem with index: ", myArray[0]); // access first element

myArray.push(6); // add an element to the end: [1, 2, 3, 4, 5, 6]

myArray.pop(); // remove the last element: [1, 2, 3, 4, 5]




// stacks: last in, first out LIFO data structure, you can only remove or add a plate to a stack, you can only take off the top in order

let myStack = [];

myStack.push(1); // add 1: [1]
myStack.push(2); // add 2: [1, 2]
console.log("demonstrating stack pop / element removal: ", myStack.pop()); // remove last-added item, which would be 2, result: [1] 




// queues: first in, first out - FIFO ds - line at a store, when the first person gets in line, they are helped first, and after is the second to get in line etc

let myQueue = [];

myQueue.push(1); // add 1: [1]
myQueue.push(2); // add 2: [1, 2]

console.log("remove first item of queue following FIFO: ", myQueue.shift()); // remove the first item 1, result: [2]




// hashmaps: collection of key-pairs that allows for fast retrieval based on keys. useful for storing and accessing data by unique identifiers


let myHashMap = {
    "name": "James",
    "age": 29
};

console.log("hashmap value access by key: ", myHashMap["name"]); // access value by key: "James"

myHashMap["city"] = "Houston"; // add a new key-value pair

console.log("add a new k/v and access it: ", myHashMap["city"]);



