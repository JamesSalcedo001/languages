/* 

    ** features of JS

        -lightweight, interpreted, or just-in-time compiled language with first class functions. well know for being the scripting language of the web

        -use cases: web dev client and server side with Node.js, game dev, mobile app dev. and desktop apps.

    ** JS Engines 

        -definition: JS engines are programs that execute JS code, examples include Google's V8 for chrome and Node.js, SpiderMonkey used in Firefox, and JavaScriptCore used in Safari


        -how they work: 

        -JS Engines interpret JS code into executable machine code, optimizing performance through techniques like Just-In-Time JIT compilation

    ** JS in the browser 

        -client side scripting: JS can manipulate HTML and CSS to create dynamic web pages

        - browser compatibility: modern JS ES6+ is supported by all major browsers but it's essential to be aware of differences in previous versions

        -popular IDE's include: VSCode, Sublime Text, and Atom, which support syntax highlighting, code completion, and debugging for JS.

        -Dev tools: all major browsers have built in dev tools that allow JS debugging, inspect elements, and analyze network activity. 




    **NODE.js includes NPM or Node Package Manager, which is    essential for managing JS packages

        -check versions with node -v and npm -v in terminal



        -creating proj directory 


        mkdir name-of-project
        cd name-of-project




        -initialize a node.js project with npm


        npm init -y


        this command creates a package.json file, which manages project's dependencies and scripts





    ** install essential packages



        -live server: a dev server with live reload capability(already have extension so not currently necessary)

        npm install -g live-server 



        - ESLint: popular JS linter that helps write consistent and error free code

    
        npm install eslint --save-dev
        npx eslint --init




    ** statements in JS

        -definition: instructions executed by the browser or Node.js. Statements are often followed by a semicolon, though it is optional for JS

        ex: 

        let x = 5;
        let y = 6;
        let z = x + y;
        console.log(z); prints 11


    ** whitespace and line breaks, JS ignores both, but of course they are crucial for readability

    

    ** case sensitivity
        - JS is case sensitive, variable and function names must be written with consistent casing

        let myVariable = 10;
        let myvariable = 20;

        console.log(myVariable) => 10
        console.log(myvariable) => 20

    ** keywords and identifiers

        - keywords: reserved words in JS that have special meaning
            examples: var, let, const, if, else, function etc.


        - identifiers: names given to variables, functions and objects. must begin with letter, underscore, or dollar sign, followed by letters, digits, underscores, or dollar signs

        ex: let name = "Alice";
            let _age = 30;
            let $salary = 5000; PHP what are you doing here?



    ** variables

        - declaration: variables can be declared using var, let, or const

            - var: function scoped or globally scoped variable

            - let: block-scoped variable

            - const: block scoped constant, must be initialized at the time of declaration

                ex: 
                
                var name = "Alice";
                let age = 25;
                const country = "USA";


    ** data types"

        - primitive:
            - number: numeric values, both integer and floating point nums

                let count = 10;
                let price = 19.99;

            - string: sequence of characters
                    
                    let message = "Hello, World!";

            - boolean: true or false

                    let isAvailable = true;
            
            - null: represents intentional absence of any object value

                    let emptyValue = null;
            
            - undefined: indicates a variable that has been declared but not assigned a value 

                    let notAssigned;

            - symbol: unique and immutable value used as an identifier introduced in ES6

                    let symbol = Symbol("description");


    
        - non-primitive:
            - object: collection of properties, each of which has a name and a value


                ex: 
                    let person = {
                        firstName: "Alice",
                        lastName: "Smith",
                        age: 25 
                    }


    ** variable scope


        - global scope: variables declared outside any function, available throughout the code

        - function scope: variables declared inside a function, accessible only within that function

        - block scope: variables declared with let or const inside a block {}, accessible only within that block


            ex: 
                var globalVar "I am global";

                function exampleFunction() {
                    var functionVar = "I am in a function";
                    console.log(globalVar); // accessible
                    console.log(functionVar)
                }
                
                exampleFunction();
                console.log(globalVar); // accessible
                console.log(functionVar); // error: functionVar is not defined



    ** hoisting

        - javascript hoists var declarations to the top of their scope, but not the initialization. let and const declarations are not hoisted.


            ex: 
                console.log(hoistedVar); // undefined, notice how this variable is still accessible, but the whole I am hoisted part is not accessible in this manner

                var hoistedVar = "I am hoisted";


                console.log(hoistedLet); // error: cannot access 'hoistedLet', notice how this will produce an error because the declaration is not hoisted therefore it will not be read.

                let hoistedLet = "I am not hoisted";


    


    ** control flow: operators and conditional statements

        - operators

            - arithmetic
                +, -, *, /, %, ** (ES6)

                ex: 
                    let sum = 5 + 3;
                    let diff = 5 - 3;
                    let product = 5 * 3;
                    let quot = 5 / 3;
                    let remainder = 5 % 3;
                    let power = 5 ** 3;

            - assignment: assigning values to variables
                =, +=, -=, *=, /=, %=, **=

                ex: 
                    let a = 5;

                    all of these below are shorthand for this syntax: a = a (operation) b. for example: the first one is equal to:
                    
                    a = a + 3;  < == >  a += 3;

                    a += 3; => 8
                    a -= 2; => 6
                    a *= 4; => 24
                    a /= 6; => 4
                    a %= 3; => 1
                    a **= 2; => 25


            - comparison
                ==, ===, !=, !==, >, <, >=, <=

                ex: 
                    let isEqual = (5 == "5"); true (loose equality)
                    let isStrictEqual = (5 === "5"); false ( strict equality ) 
                    let isNotEqual = (5 != 3); true
                    let isStrictNotEqual = (5 !== "5"); true
                    let isGreater = (5 > 3); true
                    let isLess = ( 5 < 3); true
                    let isGreaterOrEqual = (5 >= 3); true
                    let isLessThanOrEqual = (5 <= 5); true


            - logical: used for combining boolean expressions
                && (logical AND ), || (logical OR ), ! (logical NOT)

                ex:
                    let result = (5 > 3) && ( 5 < 10); true 5 is greater than 3? yes AND 5 is less than 10? yes, both are true therefore the return value is true
                    
                    result = (5 > 3) || ( 5 > 10); true 5 is greater than 3? yes OR 5 is greater than 10 no, one of these is true therefore the return value is true

                    result = !(5 > 3); false, the bang operator or not operator reverses the truth value of whatever it's placed in front of, so this reads NOT (5 is greater than 3), where (5 > 3) normally returns true, it is set to the opposite truth value which is false in this case
                    
        - conditional statements
           
            - if statement: executes block of code if a specified condition is true

                let number = 10;
                if (number > 0) {
                    console.log("Positive");
                }

            if else statement: Executes one block of code is condition is true, and another if it is false

                let number = -10;
                if (number > 0) {
                    console.log("Positive number");
                } else {
                    console.log("Non positive num");
                }

            if else if ladder: used to test multiple conditions

                let number = 0;
                if (number > 0) {
                    console.log("Positive");
                } else if (number < 0) {
                    console.log("Negative"); 
                } else {
                    console.log("Zero");
                }


            - switch statement: tests a variable against a list of values, executing the corresponding block of code

                ex:
                    let day = 3;

                    switch (day) {
                        case 1:
                            console.log("Monday");
                            break;
                        case 2:
                            console.log("tuesday");
                            break;
                        case 3:
                            console.log("wednesday");
                            break;
                        // add more cases
                        default:
                            console.log("Invalid day");
                            break;
                    }



    ** loops

        - for loop: used to iterate a block of code a specific number of times

        syntax: for (initialization; condition; update) {
                    // code to be executed
                }

        ex:    
            for (let i = 0; i < 5; i++) {
                console.log("i is " + i);
            }


        - enhanced for loop (for..of loop): used to iterate through elements in an array

        syntax: for (variable of iterable) {
                    // code to be executed
                }

        ex: 
            const numbers = [1, 2, 3, 4, 5];

            for (let num of numbers) {
                console.log("Number: " + num);
            }

        - while loop: repeats block of code as a specified condition is true

        syntax: while (condition) {
                    // code to be executed
                }

        ex:
            let i = 0;

            while (i < 5) {
                console.log("i is " + i);
                i++;
            }

        - do while loop: similar to while loop, but executes block of code at least once before checking the condition

        syntax: do {
            // code to be executed
        } while (condition);


        ex: 
            let i = 0;
            do {
                console.log("i is " + i);
                i++;
            } while (i < 5);

        

        - break and continue: 

            - break: exits loop immediately

            ex:
                for (let i = 0; i < 10; i++) {
                    if (i === 5) {
                        break;
                    }
                    console.log("i is " + i);
                }

            
            - continue: skips current iteration and proceeds to next iteration

            ex: 
                for (let i = 0; i < 10; i++) {
                    if (i === 5) {
                        continue;
                    }
                    console.log("i is " + i);
                }

        - forEach method: executes provided function once for each array element

        syntax: array.forEach(function(currentValue, index, array) {
            // code to be executed
        })




    ** functions and error handling

    ** function declaration: functions are defined using function   keyword, followed by name of function and parentheses ()

            syntax: function functionName(parameters) {
                // code
            }

            ex:
                function greet(name) {
                    console.log("Hello, " + name + "!");
                }

                greet("Alice");

    ** function expression: can be defined using function expressions, where a function is assigned to a variable

            - syntax: const functionName = function(parameters) {
                // code to be executed
            }


            ex:
                const greet = function(name) {
                    console.log("Hello, " + name + "!");
                };

                greet("Bob"); prints "Hello, Bob!"


    ** arrow functions: created in ES6, provide a shorter syntax for writing function expressions

            - syntax: const functionName = (parameters) => {
                        // code 
                      }

            ex:
                const greet = (name) => {
                    console.log("Hello, " + name + "!");
                };

                greet("Charlie"); prints Hello, Charlie!


    ** parameters and default values: functions can have parameters, which are variables listed as part of the function definition. default parameter values can also be specified

            - syntax: function greet(name = "Guest") {
                        console.log("Hello, " + name + "!");
                      } 

                      greet(); prints "Hello, Guest!"
                      greet("David") prints "Hello, David!"

    ** return statement: stops the execution of a function, and returns a value from that function

            - syntax: function add(a, b) {
                        return a + b;
                      }

                      let sum = add(3, 4); sum is 7
                      console.log(sum); 7



    ** arrow functions p2: provide more concise syntax for writing functions and have lexical 'this' binding

            - syntax: const add = (a, b) => a + b; 
                      console.log(add(3, 4));


    ** callbacks: a function passed as an argument to another function, to be 'called back' at a later time

            - example: 
                    function fetchData(callback) {
                        // simulate async operation
                        setTimeout(() => {
                            let data = "Hello, World!";
                            callback(data);
                        }, 1000);
                    }

                    function displayData(data) {
                        console.log(data);
                    }

                    fetchData(displayData); prints "Hello, World!" after 1 second


    ** error handling with try-catch

        - try statement allows you to define a block of code to be tested for errors while it is being executed

        - catch statement allows you to define a block of code to be executed if an error occurs in the try block

        - syntax: try {
                    // code to try
                    let result = riskyOp();
                  } catch (error) {
                    // handle errors
                    console.error("An error occurred:", error);
                  } finally {
                    // code to be executed regardless of result
                    console.log("Cleanup or finalization code");
                  }

    ** throwing errors: throw statement allows you to create a custom error

        ex:
            function riskyOp() {
                if (somethingWrong) {
                    throw new Error("Something went wrong!");
                }
                return "Success!";
            }

            try {
                let result = riskyOp();
                console.log(result);
            } catch {
                console.error(error.message); // prints something went wrong!
            }


    ** data structures

    ** intro to data structures

        - arrays: list like object used to store multiple values in a single variable

        ex: 
            let fruits = ["Apple", "Orange", "Cherry"];

        - accessing elements: use index numbers starting from 0 to access array elements(bracket notation)

        ex: 
            console.log(fruits[0]); prints apple
            console.log(fruits[2]); prints cherry


    ** objects: a collection of key-value pairs

        ex:
            let person = {
                firstName: "John",
                lastName: "Doe",
                age: 30,
                greet: function() {
                    console.log("Hello, " + this.firstName);
                }
            }

        - accessing properties: use dot notation or bracket notation to access properties

        ex:
            console.log(person.firstName); prints "John"
            console.log(person[lastName]); prints "Doe"
            person.greet(); prints "Hello, John"


    ** sets and maps

    ** sets: a collection of unique data

        ex:
            let mySet = new Set([1, 2, 3, 4, 4])
            console.log(mySet); prints Set { 1, 2, 3, 4 } leaving out repeats 

        - common set methods:
            - add(value): adds new elem to set
            - delete(value): removes elem from set
            - has(value): checks if elem exists in set
            - clear(): removes all elems from set

        ex:
            mySet.add(5);
            console.log(mySet.has(5)); prints true
            mySet.delete(5);
            mySet.clear();

    ** maps: collection of key-value pairs

        ex:
            let myMap = new Map([
                ["name", "Alice"],
                ["age", 25]
            ]);

        - common map methods:
            - set(key, value): adds new key value pair to map
            - get(key): returns value associated with the key,
            - delete(key): removes the key value pair from map
            - has(key): checks if key exists in map
            - clear(): removes all key value pairs from map

        ex:
            myMap.set("city", "New York");
            console.log(myMap.get("name")); prints "Alice"
            myMap.delete("age");
            console.log(myMap.has("age")) prints false
            myMap.clear();

    ** destructuring and spread operator

    ** destructuring
        - arrays: extract values from arrays into variables

        ex:
            let [a, b, c] = [1, 2, 3];
            console.log(a) prints 1
            console.log(b) prints 2
            console.log(c) prints 3

        - objects: extract values from objects into variables

        ex:
            let person = { name: "Alice", age: 25 };
            let {name, age} = person;
            console.log(name) prints Alice
            console.log(age) prints 25


    ** spread operator
        - arrays: spread elements of an array into another array

        ex: 
            let arr1 = [1, 2, 3];
            let arr2 = [...arr1, 4, 5];
            console.log(arr2); prints [1, 2, 3, 4, 5]


        - objects: spread properties of an object into another object

        ex: 
            let obj1 = { a: 1, b: 2 };
            let obj2 = { ...obj1, c: 3 };
            console.log(obj2); prints { a: 1, b: 2, c: 3 };




    ** asynchronous JS

    ** promises and async await

        - promise: an object representing the eventual completion or failure of an asynchronous operation
        
        ex:
            let promise = new Promise((resolve, reject) => {
                // async operation
                if (success) {
                    resolve("op succeeded");
                } else {
                    reject("op failed");
                }
            });

            promise
            .then(result => {
                console.log(result); // op succeeded
            })
            .catch(error => {
                console.error(error); // op failed
            });


        - chaining promises: multiple .then methods can be chained for sequential asynchronous ops

        ex:
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(1), 1000); // resolve 1 after 1 second
            });

            promise
                .then(result => {
                    console.log(result); // 1
                    return result * 2;
                })
                .then(result => {
                    console.log(result); // 2
                    return result * 2; 
                })
                .then(result => {
                    console.log(result); // 4
                })



        - async/await: provide a way to write asynchronous code in a synchronous like manner

        ex: 
            async function fetchData() {
                try {
                    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
                    let data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error('Error: ', error);
                }
            }

            fetchData();


    ** fetching data from API's

        - fetch API: provides an interface for fetching resources (including across the network)

        ex:
            fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(respones => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Problem with your fetch op: ", error);
            });


        - using axios: axios is a promise based HTTP client for the browser and Node.js


        -installation: intall using NPM or via CDN

        npm install axios


        ex: 
            const axios = require('axios');

            axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            .then(res => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('problem with axios op: ', error);
            });





    ** OOP: a programming paradigm based on the concept of "objects" which can contain data and code: data in the form of fields (often known as properties or attributes) and code, in the form of procedures (often known as methods)


    ** key concepts of OOP

    ** classes and prototypes: 
        
            - prototypes: JS objects have a prototype. a prototype is also an object. all JS objects inherit their properties and methods from their prototype

            - classes: ES6 added new syntax to create objects and deal with inheritance, called classes. classes are syntactical sugar over JavaScript's existing prototype-based inheritance


    ** inheritance: a way to create a new class from an existing class. the new class (child class) inherits the properties and methods of the existing class (parent class)


    ** encapsulation: means bundling the data (variables) and code (methods) that work on the data into a single unit called an object


    ** abstraction: means hiding the complex reality while exposing only the necessary parts. helps reducing programming complexity and effort

    ** polymorphism: means the ability to present the same interface for different underlying forms (data types)


    ** prototypes: 
    
        - definition: in JS, every object has a prototype. a prototype is also an object from which other objects inherit properites and methods.

        - prototype chain: JS objects have special property called __proto__, which points to the prototype object. this chain continues until it reaches Object.prototype, the root of all objects


    ** creating objects with prototypes

        - function constructors: before ES6, function constructors were used to create objects and their prototypes

        ex:
            function Person(name, age) {
                this.name = name;
                this.age = age;
            }

            Person.prototype.greet = function() {
                console.log("Hello my name is " + this.name);
            };

            let person1 = new Person("Alice", 30);
            person1.greet(); // prints hello my name is alice


    ** prototype methods: methods can be added to the prototype object, allowing all instances to share the same method.

        ex:
            Person.prototype.sayAge = function() {
                console.log("I am " + this.age + " years old");
            };

            person1.sayAge(); prints I am 30 years old

    ** inheritance with prototypes
    
        - inheritance: objects can inherit properties and methods from their prototypes


        ex: 
            function Employee(name, age, jobTitle) {
                Person.call(this, name, age); // call parent constructor
                this.jobTitle = jobTitle;
            }


            Employee.prototype = Object.create(Person.prototype);
            Employee.prototype.constructor = Employee;


            Employee.prototype.work = function() {
                console.log(this.name + " is working as a " + this.jobTitle);
            };


            let employee1 = new Employee("Bob", 25, "Developer");
            employee1,greet(); prints hello my name is Bob
            e,ployee1.work(); prints bob is working as a developer


    ** classes

    ** intro to classes

        - ES6 classes: ES6 introduced a new class syntax to create objects, which is syntactic sugar over JS's existing prototype based inheritance

        - class declaration: classes are declared using the class keyword

        ex:
            class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }

                greet() {
                    console.log("Hello my name is " + this.name);
                }
            }


            let person2 = new Person("Charlie", 35);
            person2.greet(); prints hello my name is charlie


    ** class methods

        - instance methods: methods defined inside a class

            ex:            
                class Person {
                    constructor(name, age) {
                        this.name = name;
                        this.age = age;
                    }

                    greet() {
                        console.log("Hello my name is " + this.name);
                    }

                    saying() {
                        console.log("I am " + this.age + " years old");
                    }
                }


                let person3 = new Person("Dave", 40);
                person3.sayAge(); prints I am 40 years old

            


        - static methods: methods defined on the class itself, not on instances of the class

        ex:
            class MathUtil {
                static add(a, b) {
                    return a + b;
                }
            }

            console.log(MathUtil.add(5, 3)); prints 8


        - inheritance with classes: classes can extend other classes, inheriting their properties and methods

        ex: 
            class Employee extends Person {
                constructor(name, age, jobTitle) {
                    super(name, age); // call parent constructor
                    this.jobTitle = jobTitle;
                }

                work() {
                    console.log(this.name + " is working as a " + this.jobTitle);
                }
            }


            let employee2 = new Empkoyee("Eve", 28, "Manager");
            employee2.greet(); // prints hello, my name is Eve
            employee2.work








    ** inheritance and encapsulation

    ** inheritance

    ** with prototypes: allows one object to aquire the properties and methods of another object

        - function constructors and prototypes

        ex:

            function Person(name, age) {
                this.name = name;
                this.age = age;
            }

            Person.prototype.greet = function() {
                console.log("Hello my name is " + this.name);
            }

            function Employee(name, age, jobTitle) {
                Person.call(this, name, age); // call parent constructor
                this.jobTitle = jobTitle;
            }

            Employee.prototype = Object.create(Person.prototype)
            Employee.prototype.constructor = Employee;

            Employee.prototype.work = function() {
                console.log(this.name + " is working as a " + this.jobTitle);
            }


            let employee1 = new Employee("Alice", 30, "Dev");
            employee1.greet(); // prints Hello my name is Alice
            employee1.work(); // prints Alice is working as a Dev



    ** with classes: provides a more intuitive syntax for inheritance
    
        - using extends keyword

        ex: 

            class Person {

                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }


                greet() {
                    console.log("Hello my name is " + this.name);
                }

            }



            class Employee extends Person {

                constructor(name, age, jobTitle) {
                    super(name, age); call parent constructor
                    this.jobTitle = jobTitle;
                }

                work() {
                    console.log(this.name + " is working as a " + this.jobTitle);
                }
            }


            let employee2 = new Employee("Bob", 25, "Manager");
            employee2.greet(); // prints Hello my name is Bob
            employee2.work(); // prints Bob is working as a manager


        - method overriding: allows a child class to provide a specific implementation of a method that is already defined in its parent class
        
        ex: 
            class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }

                greet() {
                    console.log("Hello my name is " + this.name); 
                }
            }


            class Employee extends Person {
                constructor(name, age, jobTitle) {
                    super(name, age);
                    this.jobTitle = jobTitle;
                }

                greet() {
                    console.log("Hello my name is " + this.name + " and I work as a(n) " + this.jobTitle);
                }
            }


            let employee3 = new Employee("Charlie", 28, "Engineer");
            employee3.greet(); // prints Hello my name is Charlie and I work as a(n) Engineer



    ** encapsulation: bundling of data and methods that operate on that data within a single unit, or class. restricts direct access to some of the object's components

    ** private fields and methods: ES2022+ private fields and methods are denoted by # prefix

        ex:

            class Person {
                #ssn // private field

                constructor(name, age, ssn) {
                    this.name = name;
                    this.age = age;
                    this.#ssn = ssn;
                }

                #showSSN() { // private method
                    console.log("SSN: " + this.#ssn);
                }

                greet() {
                    console.log("Hello, my name is " + this.name);
                    this.#showSSN();
                }
            }


            let person3 = new Person("Dave", 40, "123-45-6789");
            person3.greet(); prints "Hello my name is Dave" and "SSN: 123-45-6789"

            person2.#showSSN(); // error: Private method cannot be accessed outside the class




    ** getters and setters: special methods that provide controlled access to the properties of an object

        ex:
            class Person {

                constructor(name, age) {
                    this._name = name; // convention to indicate private-like field
                    this.age = age;
                }

                get name() {
                    return this._name;
                }

                set name(newName) {
                    if (newName.length > 0) {
                        this._name = newName;
                    } else {
                        console.log("Name cannot be empty");
                    }
                }
            }


            let person4 = new Person("Eve", 22);
            console.log(person4.name); // prints Eve
            person4.name = "Eva"; sets new name
            console.log(person4.name); prints Eva
            person4.name = ""; prints name cannot be empty


        - benefits of encapsulation

            - improved code maintenance: keeps data safe from outside interference and misuse

            - enhanced security: provides a way to protect the internal state of an object from unintended modification





    ** Modules and imports/exports

    ** modules are reusable pieces of code that can be exported from one program and imported for use in another program. they help in organizing code, avoiding global scope pollution, and reusing code across different parts of an app.

    - benefits: help maintain a clean and maintainable codebase by dividing the code into logical, self contained units

    - types: 
        - CommonJS Modules used in Node.js
        - ES6 Modules: standardized in ECMAScript 2015(ES6), and widely used in modern JS apps

    ** CommonJS Modules(Node.js)

    - exporting:

        ex: 

            // file mathUtil.js
            
            function add(a, b) {
                return a + b;
            }

            module.exports = {
                add
            }

    - importing:

        ex:

            // file main.js
            const mathUtil = require('./mathUtil');

            console.log(mathUTil.add(5, 3)); prints 8


    ** ES6 modules

    - exporting: 
    
    - named exports: export multiple values by name

        ex:

            file:mathUtil.js

            export function add(a, b) {
                return a + b;
            }

            export function subtract(a, b) {
                return a - b;
            }




    - default exports: export single value as default export

        ex:

            file: mathUtil.js

            export default function multiple(a, b) {
                return a * b;
            } 


    ** importing modules:

    - named imports: import specific named exports

        ex:

            file: main.js

            import { add, subtract } from "./mathUtil.js";

            console.log(add(5, 3)); prints 8
            console.log(subtract(5, 3)); prints 2

    - default imports: import default export

        ex:
            file: main.js

            import multiply from "./mathUtil.js";

            console.log(multiply(5, 3)); prints 15


    ** combining named and default imports

    file: mathUtil.js

    export function add(a, b) {
        return a + b;
    }

    export function subtract(a, b) {
        return a - b;
    }

    export default function multiply(a, b) {
        return a * b;
    }


    // file: main.js

    import multiply, { add, subtract } from "./mathUtil.js";

    console.log(add(5, 3)); prints 8
    console.log(subtract(5, 3)); prints 2
    console.log(multiply(5, 3)); prints 15


    ** reexporting modules

        ex:

            file: anotherUtil.js
            export { add, subtract } from "./mathUtil.js";
            export { default as multiply } from "./mathUtil.js";

            file: main.js
            import { add, subtract, multiply } from "./anotherUtil,js";


            
            console.log(add(5, 3)); prints 8
            console.log(subtract(5, 3)); prints 2
            console.log(multiply(5, 3)); prints 15


    ** create simple module system

        - file structure:

        myApp/
        ├── index.html
        ├── main.js
        ├── utils/
        │   ├── math.js
        │   └── string.js


        - math.js

            / file: utils/math.js

            export function add(a, b) {
                return a + b;
            }

            export function subtract(a, b) {
                return a - b;
            }

            export default function multiply(a, b) {
                return a * b;
            }


            / file: utils/string.js

            export function uppercase(str) {
                return str.toUpperCase();
            }

            export function lowercase(str) {
                return str.toLowerCase();
            }



            / file: main.js


            import multiply, { add, subtract } from "./utils/math.js";
            import  { uppercase, lowercase } from "./utils/string.js";

            console.log(add(5, 3)); prints 8
            console.log(subtract(5, 3)); prints 2
            console.log(multiply(5, 3)); prints 15

            console.log(uppercase("hello")); prints HELLO
            console.log(lowercase("WORLD")); prints world



    ** common pitfalls and best practices: 

        - avoid circular dependencies: occur when two or more modules depend on each other, either directly or indirectly. refactor the code to remove the circular dependency or use lazy loading

        - default vs named exports

            use default when module only exports single item

            use named exports when module exports multiple items

        - consistent naming for files for maintainability

    ** conclusion to OOP in JS

    ** summary of OOP in JS

        - overview of concepts:

            classes and prototypes: JS uses prototypes for inheritance and ES6 classes which provide a more familiar syntax for OOP

            inheritance: creating new classes that inherit properties and methods from existing classes

            encapsulation: building data and methods that operate on the data wihin a single unit and controlling access to them

            abstraction: simplifying complex systems by modeling classes appropriate to the problem

            polymorphism: ability to present same interface for diff underlying forms (data types)

    ** detailed review

    ** classes and prototypes: 

        - prototypes are objects from which other objects inherit properties and methods

        - ES6 classes are syntactic sugar over JS prototype based inheritance, providing clearer and more ocncise way to create and manage objects

        - creating class and adding methods to prototype:

        ex:
                class Person {
                    
                    constructor(name, age) {
                        this.name = name;
                        this.age = age;
                    }


                    greet() {
                        console.log(`Hello my name is ${this.name});
                    }
                }


                let person1 = new Person('Alice', 30);
                person1.greet(); prints hello my name is alice
                
                
    ** Inheritance: allows a class to inherit properties and methods from another class, enabling code reuse


    ex:
        class Employee extends Person {
            constructor(name, age, jobTitle) {
                super(name, age);
                this.jobTitle = jobTitle;
            }

            work() {
                console.log(`${this.name} is working as a ${this.jobTitle}`);
            }
        }


        let emp1 = new Employee("Bob", 25, 'Dev');
        emp1.greet(); prints Hello my name is Bob
        emp1.work(); prints Bob is working as a Dev



    ** Encapsulation

        - involves bundling data and methods within a class and restricting access to some of the objects components

        - use of private fields and methods with the # prefix in ES2022+

        ex:

            class Person {
                #ssn;

                constructor(name, age, ssn) {
                    this.name = name;
                    this.age = age;
                    this.#ssn = ssn;
                }

                #showSSN() {
                    console.log(`SSN: ${this.#ssn}`);
                }

                greet() {
                    console.log(`Hello my name is ${this.name}`);
                    this.#showSSN();
                }
            }


            let person2 = new Person("Dave", 40, '123-45-6789');
            person2.greet(); prints "Hello my name is Dave" and "SSN: 123-45-6789"
            person2.#showSSN(); error: private method cannot be accessed outside class



    ** Abstraction: hides complex implementation details and shows only necessary features of object

    ex:

        class Car {
            startEngine() {
               console.log("Engine started"); 
            }

            drive() {
                console.log("Car is driving")
            }
        }

        let myCar = new Car();
        myCar.startEngine(); prints engine started
        myCar.drive(); prints car is driving



    ** Polymorphism: allows objects of different classes to be treated as objects of a common super class

    ex:

        class Animal {
            speak() {
                console.log("Animal makes noise");
            }
        }


        class Dog extends Animal {
            speak() {
                console.log("Dog barks")
            }
        }

        class Cat extends Animal {
            speak() {
                console.log("Cat meows");
            }
        }


        let animals = [new Dog(), new Cat()];
        animals.forEach(animal => animal.speak()); prints Dog barks and Cat meows



    ** common pitfalls and best practices

    - avoiding overuse of inheritance: only use when there is a clear "is-a" relationship. overuse can lead to complex and hard to maintain code

    - favor composition over inheritance: involves building complex objects by combining simpler ones, which can lead to more flexible and maintainable code

    - encapsulate internal state: ensure that internal state of object is not accessible directly from outside object to prevent unintended side effects

    - use meaningful names

    Applications of OOP: Design patterns such as singleton, Factory, Observer, and Strategy




    ** intro to web dev

    ** client server architecture: web dev involves a client server architecture where the client (browser) requests resources, and the server responds with the requested resources

    ** components:

        - client: the front end part of the app that interacts with user. it includes web pages built with H, C, and JS

        - server: back end part of the app that processes requests, performs computations, and interacts with the database. it can be built using server side langs like Node.js, python, ruby etc

        - database: stores data used by app. common dbs include SQL (MySQL, PostgreSQL, and SQL Server), and NoSQL(MongoDB)

    ** HTTP and HTTPS: Hypertext Transfer Protocol and the same but with Secure. used for transmitting data over the web, defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. the Secure one is an extension that uses SSL/TLS to encrypt the data being transferred, ensuring secure communication between client and server


    ** web servers: a software that serves web pages to client. popular web servers include Apache, NGinx, and Microsoft IIS

        - function: receives HTTP requests from clients, processses those requests, (potentially interacting with a database ) and sends back HTTP responses with the requested resources


    ** Tools and setup

    ** version control with Git

        git: distributed version control system to track changes in source code during software development

        basic commands:

            - git init: initialize new repo
            - git clone: clone existing repo
            - git add: add files to staging area
            - git commit -m "" commit changes to repo
            - git push: push local changes to remote repo
            - git pull: fetch and merge changes from remote repo


    ** package managers: 

        - npm: package manager for JS, included with Node.js, allows one to install, share, and manage dependencies for projects

        basic commands: 

            - npm init: initialize new project
            npm install <package> install package
            npm uninstall <package> uninstall


    ** dev servers

        - live server: VSCode extension that provides local dev server with live reload feature for static and dynamic pages


    ** workflow

        - set up project
            - create new project folder
            - init git repo and set up version control
            - create basic HTML, CSS, and JS files

        - build and commit changes

        - deploy: to web server or cloud service like GHPages, Netlify, or Vercel


*/


