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
    let and_op = a < b && b > 10; // AND
    let or_op = a < b || b < 10; // OR notice how parentheses aren't used even for longer operations




}
