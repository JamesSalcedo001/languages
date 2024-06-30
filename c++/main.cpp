// To run code: compile with: g++11 main.cpp -o main, and then ./main

#include <iostream>
#include <cmath>
#include <stdexcept>
#include <ctime> // library for time functions
using namespace std;

// Functions/methods
std::string greet(std::string name) {
    return "Hello, " + name;
}

// Objects/dictionaries
struct Person {
    std::string firstName;
    std::string lastName;
    int age;
};

// Classes and objects (OOP)
class Persona {
public:
    std::string firstName;
    std::string lastName;
    int age;

    Persona(std::string fn, std::string ln, int a) : firstName(fn), lastName(ln), age(a) {}

    std::string greet() {
        return "Hello, my name is " + firstName + " " + lastName;
    }
};

// Inheritance (OOP)
class Animal {
public:
    std::string name;

    Animal(std::string n) : name(n) {}

    virtual void speak() {
        std::cout << name << " makes a noise" << std::endl;
    }
};

class Dog : public Animal {
public:
    Dog(std::string n) : Animal(n) {}

    void speak() override {
        std::cout << name << " barks" << std::endl;
    }
};

// Encapsulation (OOP)
class Employee {
private:
    std::string name;
    int salary;

public:
    Employee(std::string n, int s) : name(n), salary(s) {}

    int getSalary() {
        return salary;
    }
};

// Polymorphism (OOP)
class Shape {
public:
    virtual double area() = 0;
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}

    double area() override {
        return M_PI * radius * radius;
    }
};

class Rectangle : public Shape {
private:
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double area() override {
        return width * height;
    }
};

// Recursion
int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int main() {
    // Data types
    int integer = 10;
    float floatNum = 10.5f;
    std::string str = "Hello";
    bool boolean = true;

    // Variables
    int variable = 10;
    const int CONSTANT = 20;

    // Operators
    int a = 10;
    int b = 20;

    // Arithmetic
    int sum = a + b;
    int diff = a - b;
    int prod = a * b;
    float quot = static_cast<float>(a) / b;

    // Comparison
    bool isEqual = (a == b);
    bool isNotEqual = (a != b);
    bool isGreater = (a > b);

    // Logical
    bool andOp = (a < b && b < 10); // AND
    bool orOp = (a < b || b < 10); // OR

    // Control flow
    int number = 10;

    // If statement
    if (number > 5) {
        std::cout << "Greater than 5" << std::endl;
    } else {
        std::cout << "5 or less" << std::endl;
    }

    // Ternary
    std::string result = (number > 5) ? "Greater than 5" : "5 or less";

    // Loops
    // For loop
    for (int i = 0; i < 5; i++) {
        std::cout << i << std::endl;
    }

    // While loop
    int j = 0;
    while (j < 5) {
        std::cout << j << std::endl;
        j++;
    }

    // Do while loop
    int k = 0;
    do {
        std::cout << k << std::endl;
        k++;
    } while (k < 5);

    // Arrays
    std::string fruits[] = {"apple", "banana", "cherry"};

    // Exceptions/error handling
    try {
        int divisor = 0;
        int divisionResult = 10 / divisor;
    } catch (const std::exception& e) {
        std::cout << "Error occurred: " << e.what() << std::endl;
    }

    std::cout << integer << ", " << floatNum << ", " << str << ", " << boolean << std::endl;
    std::cout << variable << ", " << CONSTANT << std::endl;
    std::cout << sum << ", " << diff << ", " << prod << ", " << quot << ", " << isEqual << ", " << isNotEqual << ", " << isGreater << ", " << andOp << ", " << orOp << std::endl;
    std::cout << result << std::endl;
    std::cout << greet("John") << std::endl; // output: Hello, John
    std::cout << fruits[0] << std::endl; // output: apple

    Person person = {"John", "Doe", 30};
    std::cout << person.firstName << std::endl; // output: John

    Persona persona1("John", "Doe", 30);
    std::cout << persona1.greet() << std::endl; // output: Hello, my name is John Doe

    Dog dog("Rex");
    dog.speak(); // output: Rex barks

    Employee emp("Alice", 50000);
    std::cout << emp.getSalary() << std::endl; // output: 50000

    Shape* shapes[] = {new Circle(10), new Rectangle(5, 10)};
    for (Shape* shape : shapes) {
        std::cout << shape->area() << std::endl;
    }

    std::cout << factorial(5) << std::endl;

    time_t now = time(0);
    tm* ltm = localtime(&now);
    cout << 1900 + ltm->tm_year << "-" << 1 + ltm->tm_mon << "-" << ltm->tm_mday << endl;

    return 0;
}
