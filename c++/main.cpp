// to run code: compile with: g++11 main.cpp -o main, and then ./main


#include <iostream>
#include <cmath>
using namespace std;



// functions/methods

string greet(string name) {
    return "Hello, " + name;
}

// see rest on line 136



// objects/dictionaries

struct Person {
    string firstName;
    string lastName;
    int age;
};

// see rest on lines 158-159



// classes and objects (OOP)


class Persona {
    public:
        string firstName;
        string lastName;
        int age;

        Persona(string fn, string ln, int a) {
            firstName = fn;
            lastName = ln;
            age = a;
        }

        string greet() {
            return "Hello, my name is " + firstName + " " + lastName;
        }
};


// see rest on lines 186 and 187



// inheritance (OOP)


class Animal {
    public:
        string name;

        Animal(string n) {
            name = n;
        }

        virtual void speak() {
            cout << name << " makes a noise" << endl;
        }
};


class Dog : public Animal {
    public:
        Dog(string n) : Animal(n) {}

        void speak() override {
            cout << name << " barks" << endl;
        }
};


// see rest on lines 220 - 221





// Encapsulation (OOP)


class Employee {
    private:
        string name;
        int salary;

    public:
        Employee(string n, int s) {
            name = n;
            salary = s;
        }

        int getSalary() {
            return salary;
        }
};


// see the rest on lines 251 and 252




// polymorphism (OOP)

// added cmath library above


class Shape {
    public:
        virtual double area() = 0;
};


class Circle : public Shape {
    private:
        double radius;

    public: 
        Circle(double r) {
            radius = r;
        }

        double area() override {
            return M_PI * radius * radius;
        }
};


class Rectangle : public Shape {
private:
    double width, height;

public:
    Rectangle(double w, double h) {
        width = w;
        height = h;
    }

    double area() override {
        return width * height;
    }
};


// see rest on lines 303ish





int main() {

    // data types

    int integer = 10;
    float floatNum = 10.5f;
    string str = "Hello";
    bool boolean = true;






    // variables

    int variable = 10;
    const int CONSTANT = 20;





    // operators

    int a = 10;
    int b = 20;

    // arithmetic
    int sum = a + b;
    int diff = a - b;
    int prod = a * b;
    float quot = (float)a / b;


    // comparison
    bool isEqual = (a == b);
    bool isNotEqual = (a != b);
    bool isGreater = (a > b);


    // logical
    bool andOp = (a < b && b < 10); // AND
    bool orOp = (a < b || b < 10); // OR






    // control flow

    int number = 10;

    // if statement

    if (number > 5) {
        cout << "Greater than 5" << endl;
    } else {
        cout << "5 or less" << endl;
    }


    // ternary

    string result = (number > 5) ? "Greater than 5" : "5 or less";
    




    // loops



    // for loop
    for (int i = 0; i < 5; i++) {
        cout << i << endl;
    }



    //while loop
    int j = 0;
    while (j < 5) {
        cout << j << endl;
        j++;
    }


    //do while loop
    int k = 0;
    do {
        cout << k << endl;
        k++;
    } while (k < 5);



    // arrays

    string fruits[] = {"apple", "banana", "cherry"};





    // exceptions/error handling

    try {
        int divisor = 0;
        int divisionResult = 10 / divisor;
    } catch (const exception& e) {
        cout << "Error occurred: " << e.what() << endl;
    }






    cout <<  integer << ", " << floatNum << ", " << str << ", " << boolean << endl;

    cout << variable << ", " << CONSTANT << endl;

    cout << sum << ", " << diff << ", " << prod << ", " << quot << ", " << isEqual << ", " << isNotEqual << ", " << isGreater << ", " << ", " << andOp << ", " << orOp << endl;

    cout << result << endl;

    cout << greet("John") << endl; // output: Hello, John

    cout << fruits[0] << endl; // output: apple

    Person person = {"John", "Doe", 30};
    cout << person.firstName << endl; //output: John


    Persona persona1("John", "Doe", 30);
    cout << persona1.greet() << endl; // output: Hello my name is John Doe

    Dog dog("Rex");
    dog.speak(); // output: Rex barks

    Employee emp("Alice", 50000);
    cout << emp.getSalary() << endl; // output: 50000



    Shape* shapes[] = {new Circle(10), new Rectangle(5, 10)};

    for (Shape* shape : shapes) {
        cout << shape->area() << endl;
    }



    return 0;
}