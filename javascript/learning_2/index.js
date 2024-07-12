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


*/