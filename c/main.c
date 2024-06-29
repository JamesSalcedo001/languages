#include <stdio.h>
#include <string.h>

// Greet function for general use
char* greet(char name[]) {
    static char result[50];
    sprintf(result, "Hello, %s", name);
    return result;
}

// Define the Person struct once
struct Person {
    char firstName[50];
    char lastName[50];
    int age;
    char* (*greet)(struct Person);
};

// Greet function for Person struct
char* personGreet(struct Person p) {
    static char result[100];
    sprintf(result, "Hello, my name is %s %s", p.firstName, p.lastName);
    return result;
}

// Define the Car struct for OOP example
struct Car {
    char make[50];
    char model[50];
    int year;
    void (*printDetails)(struct Car);
};

// Print details function for Car struct
void printCarDetails(struct Car c) {
    printf("Car: %s %s, Year: %d\n", c.make, c.model, c.year);
}

int main() {
    // Data types
    int integer = 10; // integer
    float floatNum = 10.5; // float
    char string[] = "Hello"; // string
    int boolean = 1; // no native boolean type, 0 for false, non-zero for true

    // Variables
    int variable = 10;
    const int CONSTANT = 20; // constants are defined with const keyword

    // Operators
    int a = 10;
    int b = 20;

    // Arithmetic
    int sum = a + b; // add
    int diff = a - b; // subtract
    int prod = a * b; // multiply
    float quot = (float)a / b; // divide (casting to float)

    // Comparison
    int isEqual = (a == b); // equality
    int isNotEqual = (a != b); // inequality
    int isGreater = (a > b); // greater than

    // Logical
    int andOp = (a < b && b > 10); // AND
    int orOp = (a < b || b < 10); // OR

    // Control flow
    int number = 10;

    // if statement
    if (number > 5) {
        printf("Greater than 5\n");
    } else {
        printf("5 or less\n");
    }

    // ternary operator
    char *result = (number > 5) ? "Greater than 5" : "5 or less";

    // Loops
    // for loop
    for (int i = 0; i < 5; i++) {
        printf("%d\n", i);
    }

    // while loop
    int j = 0;
    while (j < 5) {
        printf("%d\n", j);
        j++;
    }

    // do while loop
    int k = 0;
    do {
        printf("%d\n", k);
        k++;
    } while (k < 5);

    // Arrays
    char *fruits[] = {"apple", "banana", "cherry"};

    // Initialize Person struct and assign values
    struct Person person;
    strcpy(person.firstName, "John");
    strcpy(person.lastName, "Doe");
    person.age = 30;
    person.greet = personGreet;



    // recursion

    int factorial(int n) {
        if (n== 0) {
            return 1;
        } else {
            return n * factorial(n-1);
        }
    }









    // Print statements to display the values
    printf("%d, %.1f, %s, %d\n", integer, floatNum, string, boolean);
    printf("%d, %d\n", variable, CONSTANT);
    printf("%d, %d, %d, %.2f, %d, %d, %d, %d, %d\n", sum, diff, prod, quot, isEqual, isNotEqual, isGreater, andOp, orOp);
    printf("%s\n", result);
    printf("%s\n", greet("John")); // output: Hello, John
    printf("%s\n", fruits[0]); // output: apple

    // Use the greet method of the Person struct
    printf("%s\n", person.greet(person)); // output: Hello, my name is John Doe

    // Initialize Car struct and assign values
    struct Car car;
    strcpy(car.make, "Toyota");
    strcpy(car.model, "Corolla");
    car.year = 2020;
    car.printDetails = printCarDetails;

    // Use the printDetails method of the Car struct
    car.printDetails(car); // output: Car: Toyota Corolla, Year: 2020

    printf("%d\n", factorial(5));
    return 0;
}
