use std::collections::HashMap;



    // classes and Objects (OOP)


    struct Person {
        first_name: String,
        last_name: String,
        age: i32,
    }
    
    impl Person {
        fn new(first_name: &str, last_name: &str, age: i32) -> Person {
            Person {
                first_name: first_name.to_string(),
                last_name: last_name.to_string(),
                age,
            }
        }
    
        fn greet(&self) -> String {
            format!("Hello, my name is {} {} and I am {} years old", self.first_name, self.last_name, self.age)
        }
    }



fn main() {

    // data types
    let integer: i32 = 10;  // integer, notice the use of the i32 data type, which seems to be used for integers + similar to java or typescript in structure, also important note, Rust does not like unused variables so one must use the variable to get rid of error or add two underscores before the name
    let float_num: f64 = 10.5; //float, note the usage of the f64 data type, it seems like it is used for floats
    let string: &str = "Hello"; // string, note the usage of the &str, also do not forget semicolons!
    let boolean: bool = true; // note the usage of bool 

    // variables

    let variable: i32 = 10;
    const CONSTANT: i32 = 20; // defined with const keyword



    // the println macro requires the first argument to be a format string, specifiying how to display the information given in the second argument
    println!("integer: {}, float_num: {}, string: {}, boolean: {}, variable: {}, CONSTANT: {}" , integer, float_num, string, boolean, variable, CONSTANT);



    // as you can see, if one is directly typing a string it does need syntax like above, perhaps for variables only
    println!("Hello, World!");



    // it seems one can print strings without prefacing with a format, but for other values, one must at least show some value, like this {} to show formatting 
    println!("{}, {}, {}", 5, 6, 7);




    // operators



    let a: i32 = 10;
    let b: i32 = 20;


    // arithmetic
    let __sum = a + b; // add
    let __diff = a - b; //subtract
    let __prod = a * b; //mult
    let __quot = a / b; // divide


    // comparison
    let __is_equal = a == b; // equality, notice how snake case is used as convention instead of camelcase like JS, also the parentheses aren't used here
    let __is_not_equal = a != b; // inequality
    let __is_greater_than = a > b; // greater than



    // logical 
    let _and_op = a < b && b > 10; // AND
    let _or_op = a < b || b < 10; // OR notice how parentheses aren't used even for longer operations



    // control flow

    let _number: i32 = 10;

    // if statement

    if _number > 5 {
        println!("Greater than 5");
    } else {
        println!("5 or less");
    }


    // ternary
    let result = if _number > 5 { "Greater than 5" } else { "5 or less" };
    println!("{}", result);






    // loops


    // for loop 

    for i in 0..5 {
        println!("{}", i);
    }



    // while loop

    // mut allows value to become mutable, as rust values are by standard immutable 

    let mut j = 0;
    while j < 5 {
        println!("{}", j);
        j += 1;
    }



    // loop similar to do while
    let mut k = 0;

    loop {
        println!("{}", k);
        k += 1;
        if k >= 5 {
            break;
        }
    }





    // functions/methods


    fn greet(name: &str) -> String {
        format!("Hello, {}", name)
    }

    println!("{}", greet("John"));



    // arrays/lists


    let fruits = ["apple", "banana", "cherry"];
    println!("{}", fruits[0]); // output: apple




    // objects / dictionaries


    let mut person = HashMap::new();
    person.insert("first_name", "John");
    person.insert("last_name", "Doe");
    person.insert("age", "30");

    println!("{}", person.get("first_name").unwrap()); // output: John 



    
        let person1 = Person::new("John", "Doe", 30);
        println!("{}", person1.greet());  // Output: Hello, my name is John Doe






    

    // inheritance (OOP) rust does not support inheritance directly, but one can use traits for similar behavior


    struct Animal {
        name: String,
    }


    impl Animal {
        fn new(name: &str) -> Animal {
            Animal { name: name.to_string() }
        }

        fn speak(&self) {
            println!("{} makes a noise.", self.name);
        }
    }


    struct Dog {
        animal: Animal,
    }

    impl Dog {
        fn new(name: &str) -> Dog {
            Dog { animal: Animal::new(name) }
        }

        fn speak(&self) {
            println!("{} barks.", self.animal.name);
        }
    }


    let animal = Animal::new("Generic animal");
    animal.speak(); // output: Generic animal makes noise
    let dog = Dog::new("Rex");
    dog.speak(); // output: Rex barks.





    // encapsulation (OOP)





    struct Employee {
        name: String,
        salary: i32,
    }


    impl Employee {
        fn new(name: &str, salary: i32) -> Employee {
            Employee {
                name: name.to_string(),
                salary,
            }
        }

        fn get_salary(&self) -> i32 {
            self.salary
        }
    }


    let emp = Employee::new("Alice", 50000);

    println!("{}, {}", emp.get_salary(), emp.name); // output: 50000







    // Polymorphism (OOP)



    trait Shape {
        fn area(&self) -> f64;
    }


    struct Circle {
        radius: f64,
    }


    impl Circle {
        fn new(radius: f64) -> Circle {
            Circle { radius }
        }
    }

    impl Shape for Circle {
        fn area(&self) -> f64 {
            std::f64::consts::PI * self.radius * self.radius
        }
    }

    struct Rectangle {
        width: f64,
        height: f64,
    }

    impl Rectangle {
        fn new(width: f64, height: f64) -> Rectangle {
            Rectangle { width, height }
        }
    }


    impl Shape for Rectangle {
        fn area(&self) -> f64 {
            self.width * self.height
        }
    }


    let shapes: Vec<Box<dyn Shape>> = vec![
        Box::new(Circle::new(10.0)),
        Box::new(Rectangle::new(5.0, 10.0)),
    ];

    for shape in shapes {
        println!("{}", shape.area());
    }





    // error handling/exceptions

    fn risky_operation() -> Result<(), &'static str> {
        Err("Something went wrong")
    }


    match risky_operation() {
        Ok(_) => println!("Op succeeded"),
        Err(e) => println!("error occurred: {}", e),
    }




    fn factorial(n: u32) -> u32 {
        if n == 0 {
            1
        } else {
            n * factorial(n-1)
        }
    }


    println!("{}", factorial(5)); // output: 120







    // libraries modules


    // using built in library

    // use chrono::prelude::*;


    // let local: DateTime<Local> = Local::now();
    // println!("{}", local.format("%Y-%m-%d")); // output: current date in year month day format


    // // using external library like reqwest for HTTP
    // use reqwest;

    // #[tokio::main]
    // async fn main() -> Result<(), request::Error> {
    //     let response = reqwest::get("http://example.com").await?;
    //     println!("{}", response.status()); // output: 200 if successful
    //     Ok(());
    // }


    // commented out to remove errors for now



}
