// notes on Java 

// platform independent- code runs anywhere with jvm

// features: portability, robust, security, supports OOP

// use: web apps, enterprise software, mobile apps (android) large scale systems

// Write Once, Run Anywhere (WORA): Java programs are compiled into bytecode, which can be executed on any platform with a JVM.

// components of Java Program: 

// class declaration

// Main method

// Statements


// public: an access modifier indicating that the class is accessible from other classes


// static: indicates method belongs to the class, not instances of the class. it can be called without creating object of the class 


// void: return type, indicating the method does not return any value

// main: the name of the method, the entry point to any Java app

// String[] args: array of strings passed as arguments to the program. used to handle command line input

// System: final class in JAva's java.lang package that provides access to system level resources

// out: static member of System class representing standard output stream

// println: method of PrintStream, the type of System.out, that prints a message to the console with a newline at the end

// variables: containers for storing data values

// declaration: specify data type and variable name 



// Primitive Data Types


    // -byte

    // 8-bit signed integer.
    // Range: -128 to 127.
    // Example: byte smallNumber = 100;

    // -short

    // 16-bit signed integer.
    // Range: -32,768 to 32,767.
    // Example: short mediumNumber = 10000;

    // -int

    // 32-bit signed integer.
    // Range: -2^31 to 2^31-1.
    // Example: int number = 100000;

    // -long

    // 64-bit signed integer.
    // Range: -2^63 to 2^63-1.
    // Example: long largeNumber = 100000L;

    // -float

    // Single-precision 32-bit floating-point.
    // Example: float price = 19.99f;

    // -double

    // Double-precision 64-bit floating-point.
    // Example: double price = 19.99;

    // -char

    // Single 16-bit Unicode character.
    // Example: char grade = 'A';

    // -boolean

    // Has only two possible values: true and false.
    // Example: boolean isJavaFun = true;

    // Non-Primitive (Reference) Data Types

    // String

    // Sequence of characters.
    // Example: String name = "Alice";

    // -Arrays

    // Container that holds a fixed number of values of a single type.
    // Example: int[] numbers = {1, 2, 3, 4, 5};

    // -Classes, Interfaces, and Enums

    // User-defined types.
    // Example:

    // class Dog {
    //     String breed;
    //     int age;
    // }


// variable initialization

// assigning value to variable at time of declaration 

// int age = 25




// break: exits loop immediately

// continue: skips current iteration and proceeds to next













// OOP - programming paradigm uses objects and classes to structure software in a way that models real world entities and relationships


    // key concepts

        // encapsulation: bundling data (attributes) and methods (functions) that operate on the data into a single unit, or class


        // abstraction: hiding the complex implmentation details and showing only the necessary features of an object

        // inheritance: creating new classes from existing ones, allowing for code reuse and creation of class hierarchy


        // polymorphism: ability for different classes to be treated as instances of the same class through a common interface, typically achieved through method overriding and overloading


// classes and objects 

    // class: blueprint for creating objects, defining attributes and methods 

    // object: an instance of a class 

    




























public class Main {

    // main method 
    public static void main(String[] args) {
        System.out.println("Hello, World!");




        // conditional statements

        // if else if ladder
        int number = 0;
        if (number > 0) {
            System.out.println("Positive num");
        } else if (number < 0) {
            System.out.println("Negative num");
        } else {
            System.out.println("Zero");
        }


        // switch statement - test var against list of values executing the corresponding code block 

        int day = 2;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            default:
                System.out.println("Another day");
                break;

        }


        // loops


        // for each loop 

        // iterate through elems in array or collection 

        int[] numbers = {1, 2, 3, 4, 5};

        for (int num : numbers) {
            System.out.println("Number: " + num);
        }


        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                continue;
            }
            System.out.println("i is: " + i);
        }


        // creating object of Car class
        Car myCar = new Car();
        myCar.color = "Red";
        myCar.model = "Toyota";
        myCar.year = 2020;
        myCar.displayDetails();
    }
}