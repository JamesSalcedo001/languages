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

*/