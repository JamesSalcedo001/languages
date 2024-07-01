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


public class Main {

    // main method 
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}