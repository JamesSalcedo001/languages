// arrays - collection of elements stored in a contiguous block of memory. elems are accessible by index

// simple use

let myArray = [1, 2, 3, 4, 5];
console.log("accessing array elem with index: ", myArray[0]); // access first element

myArray.push(6); // add an element to the end: [1, 2, 3, 4, 5, 6]

myArray.pop(); // remove the last element: [1, 2, 3, 4, 5]



// simple problem example for arrays

// find the sum of all numbers in an array

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // add each number to sum
}

console.log(sum);

// use case: arrays are perfect for situations where you need quick access by index or need to iterate over all elements























// stacks: last in, first out LIFO data structure, you can only remove or add a plate to a stack, you can only take off the top in order

let myStack = [];

myStack.push(1); // add 1: [1]
myStack.push(2); // add 2: [1, 2]
console.log("demonstrating stack pop / element removal: ", myStack.pop()); // remove last-added item, which would be 2, result: [1] 





// simple problem for stacks

// check if string has balanced parentheses (()))

function isBalanced(str) {
    let stack = [];
    for (let char of str) {
        if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            if (stack.length === 0) return false; // no matching "("
            stack.pop(); // remove the last "("
        }
    }
    return stack.length === 0; // true if all "(" have been matched
}

console.log("(()()) is balanced?: ", isBalanced("(()())"));  // output: true
console.log("()()()() is balanced?: ", isBalanced("()()()()")); // output: true?
console.log("(())) is balanced?: ", isBalanced("(()))")); // output: false


// use case: stacks are useful for problems involving nested structures or backtracking





// queues: first in, first out - FIFO ds - line at a store, when the first person gets in line, they are helped first, and after is the second to get in line etc

let myQueue = [];

myQueue.push(1); // add 1: [1]
myQueue.push(2); // add 2: [1, 2]

console.log("remove first item of queue following FIFO: ", myQueue.shift()); // remove the first item 1, result: [2]







// simple problem for stacks

// simulate a queue of people waiting in line

let queue = [];

queue.push("Person 1"); // enqueue person 1: ["Person 1"]
queue.push("Person2"); // enqueue person 2; ["Person 1", "Person 2"]; adding each new element to the end of the line
console.log(queue.shift()); // Dequeue Person 1: output: Person 1, queue becomes ["Person 2"];

// queues are used for tasks that need first in first out approach, like handling requests in an order








// hashmaps: collection of key-pairs that allows for fast retrieval based on keys. useful for storing and accessing data by unique identifiers


let myHashMap = {
    "name": "James",
    "age": 29
};

console.log("hashmap value access by key: ", myHashMap["name"]); // access value by key: "James"

myHashMap["city"] = "Houston"; // add a new key-value pair

console.log("add a new k/v and access it: ", myHashMap["city"]);



// linked lists: collection of nodes where each node contains a value and a reference to the next node. unlike arrays, elements are not stored in contiguous memory locations

let node1 = { value: 1, next: null };
let node2 = { value: 2, next: null };

node1.next = node2; // link node1 to node2

console.log("node1 value: ", node1.value);
console.log("node1.next value, link between node1 and node2: ", node1.next.value);