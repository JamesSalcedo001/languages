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




    


}
