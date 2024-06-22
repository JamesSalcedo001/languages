fn main() {

    // data types
    let __integer: i32 = 10;  // integer, notice the use of the i32 data type, which seems to be used for integers + similar to java or typescript in structure, also important note, Rust does not like unused variables so one must use the variable to get rid of error or add two underscores before the name
    let __float_num: f64 = 10.5; //float, note the usage of the f64 data type, it seems like it is used for floats
    let __string: &str = "Hello"; // string, note the usage of the &str, also do not forget semicolons!
    let __boolean: bool = true; // note the usage of bool 

    // variables

    let __variable: i32 = 10;
    const __CONSTANT: i32 = 20; // defined with const keyword



    // the println macro requires the first argument to be a format string, specifiying how to display the information given in the second argument
    println!("__integer: {}, __float_num: {}, __string: {}, __boolean: {}, __variable: {}, __CONSTANT: {}" , __integer, __float_num, __string, __boolean, __variable, __CONSTANT);



    // as you can see, if one is directly typing a string it does need syntax like above, perhaps for variables only
    println!("Hello, World!");



    // it seems one can print strings without prefacing with a format, but for other values, one must at least show some value, like this {} to show formatting 
    println!("{}, {}, {}", 5, 6, 7);


    
}
