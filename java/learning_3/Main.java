// ex 1: Basic Arithmetic Operations: 
// write java program that prompts user to input two integers and then displays the sum, difference, product, quotient, of two numbers

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {

//         Scanner scanner = new Scanner(System.in);

//         System.out.print("Enter first number: ");
//         double num1 = scanner.nextDouble();

//         System.out.print("Enter the second number: ");
//         double num2 = scanner.nextDouble();

//         double sum = num1 + num2;
//         double difference = num1 - num2;
//         double product = num1 * num2;
//         double quotient = num1 / num2;

//         System.out.println("Sum: " + sum);
//         System.out.println("Difference: " + difference);
//         System.out.println("Product: " + product);
//         System.out.println("Quotient: " + quotient);
         
       
//     }
// }



// Ex 2: Odd or Even
// checks whether a given integer is odd or even

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);

//         System.out.print("Enter an integer: ");
//         int number = scanner.nextInt();

       

//         if (number % 2 == 0) {
//             System.out.println(number + " is even");
//         } else {
//             System.out.println(number + " is odd");
//         }
//     }
// }


// Ex 3: PRint numbers from 1 - 10 using a for loop

// public class Main {
//     public static void main(String[] args) {
//         // for (int i = 1; i < 11; i++) {
//         //     System.out.println(i);
//         // }
//         for (int i = 1; i <= 10; i++) {
//             System.out.println(i);
//         }
//     }
// }




// Ex 4: Factorial Calculation - calculate factorial of given number using a while loop

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);

//         System.out.print("Enter a number: ");
//         int number = scanner.nextInt();

//         int factorial = 1;
//         int i = 1;

//         while (i <= number) {
//             factorial *= i;
//             i++;
//         }

//         System.out.println("Factorial of " + number + " is: " + factorial);
//     }
    
// }




// Ex 5: Simple Calculator - should be able to take in two numbers and an operator from the user and perform corresponding operations

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);

//         System.out.print("Enter first number: ");
//         double num1 = scanner.nextDouble();

//         System.out.print("Enter second number: ");
//         double num2 = scanner.nextDouble();

//         System.out.print("Enter an operator(+, -, *, /): ");
//         char operator = scanner.next().charAt(0);

//         double result;

//         switch (operator) {
//             case '+':
//                 result = num1 + num2;
//                 break;
//             case '-':
//                 result = num1 - num2;
//                 break;
//             case '*':
//                 result = num1 * num2;
//                 break;
//             case '/':
//                 result = num1 / num2;
//                 break;
//             default:
//                 System.out.println("invalid operator: ");
//                 return;
//         }
//         System.out.println("Result of: \n" + num1 + " " + operator + " " + num2 + " is: " + result);

//     }
    
// }




// Ex 6: Reverse a String - take a string from user and print it in reverse order using a for loop

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);

//         System.out.println("Enter a string: ");
//         String input = scanner.nextLine();

//         String reversed = "";

//         for (int i = input.length() - 1; i >= 0; i--) {
//             reversed += input.charAt(i);
//         }

//         System.out.println("Reversed String: " + reversed);
//     }
    
// }



// Ex 7: Find the largest number - take in three numbers from user and print the largest using if-else statements

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);

//         System.out.print("Enter first number: ");
//         int num1 = scanner.nextInt();

//         System.out.print("Enter second number: ");
//         int num2 = scanner.nextInt();

//         System.out.print("Enter third number: ");
//         int num3 = scanner.nextInt();

//         int largest;

//         if (num1 >= num2 && num1 >= num3) {
//             largest = num1;
//         } else if (num2 >= num1 && num2 >= num3) {
//             largest = num2;
//         } else {
//             largest = num3;
//         }

//         System.out.println("Largest num is: " + largest);
//     }
// }


// Ex 8: Count vowels in a string - count num of vowels in given string using a for loop

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);

//         System.out.print("Enter a string: ");
//         String input = scanner.nextLine();

//         int count = 0;

//         for (int i = 0; i < input.length(); i++) {
//             char ch = input.charAt(i);
//             if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ) {
//                 count++;
//             }
//         }
//         System.out.println("Number of vowels: " + count);
//     }
// }


/*

** sec 3 functions


- in Java, functions are called methods. methods are blocks of code that perform a specific task and can be called to execute that task when needed


key concepts

1. method declaration

syntax: 

    returnType methodName(params) {
        // body 
        return value; if returnType is not void
    }

ex:
    public int add(int a, int b) {
        return a + b;
    }


2. method invocation

- to call a method, use method name followed by parens and pass arguments if required

ex:
    int result = add(5, 3);
    System.out.println(result); // output: 8

3. return type

- specifies what type of value the method will return. if method doesn't return value use void

ex:

    public void printMessage(String message) {
        System.out.println(message)
    }





4. params and args

- params are variables listed in the method definition and arguments are the actual values passed to the method

ex:
    public int multiply(int a, int b) {
        return a * b;
    }

5. overloading methods

- you can define multiple methods with the same name but diff parameter lists

ex:

    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }






** Sec 4 OOP Basics

- java is an OOP programming language, which relies on the concept of objects and classes


key concepts: 

1. classes and objects: 

    - class: a blueprint for creating objs. defines datatype by bujndling data and methods that work on data.

    - object: an instance of a class. obj have states (attributes) and behaviors(methods)

    ex:

        class Car {
            // Attributes
            String model;
            int year;


            // constructor
            Car(String model, int year) {
                this.model = model;
                this.year = year;
            }

            // method
            void displayInfo() {
                System.out.println("Model: " + model + ", Year: " + year);
            }
        }



        public class Main {
               public static void main(String[] args) {

               // creating an object
               Car car1 = new Car("Toyota", 2021);


               // accessing object methods
               car1.displayInfo(); // output: Model: Toyota, Year: 2021

               }


        }




2. Encapsulation

- the concept of wrapping data (variables) and code (methods) together as a single unit

- access to data is restricted using access modifiers like private and access is provided through public methods

ex:

    class Employee {

        private int id;
        private String name;

        public void setId(int id) {
            this.id = id;
        }

        public int getId() {
            return id;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }


    }



3. inheritance

- allows a new class to inherit the props and methods of an existing class

- class that is inherited is called the superclass and class that inherits is called subclass

ex:

    class Animal {
        void sound() {
            System.out.println("Animal makes noise");
        }
    }

    class Dog extends Animal {
        void sound() {
            System.out.println("Dog barks");
        }
    }

    public class Main {
        public static void main(String[] args) {

            Dog dog = new Dog();
            dog.sound(); // output: Dog barks

        }
    }


4. Polymorphism

- allows methods to do different things based on object it is acting upon

- method overloading and method overriding are two types of plymrphsm in Java

ex:

    class Animal {
        void sound() {
            System.out.println("animal makes noise");
        }
    }

    class Cat extends Animal {
        void sound() {
            System.out.println("Cat meows");
        }
    }

    public class Main {
        public static void main(String[] args) {
            
            Animal myAnimal = new Cat();
            myAnimal.sound(); // output cat meows


        }
    }


5. abstraction

- abstraction is concept of hiding complex implementation details and showing only essential features

- achieved using abstract classes and interfaces

ex abstract class:

    abstract class Shape {
        abstract void draw();
    }

    class Circle extends Shape {
        void draw() {
            System.out.println("Drawing a circle");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Shape shape = new Circle();
            shape.draw(); // output: drawing a circle
        }
    }


5. psuedocode

    ex: 
        find the maximum of three numbers

        START
        - input three numbers: num1, num2, num3
        - IF num1 is greater than num2 AND num1 is greater than num3
            - print "num1 is the largest"
        - ELSE IF num2 is greater than num1 AND num2 is greater than num3
            - print "num2 is the largest"
        - ELSE
            - print "num3 is the largest"
        END


practice exercises: 

ex1: calculate the area of a circle - takes the radius of circle as input and returns area of circle

START
- define method called calculateArea that takes a single param(radius)

- inside the method:
    - calculate area using the formula: area = pi * radius * radius
    - return the calculated area
- in main method:
    - set value for radius
    - call the calculateArea method with the radius as an argument and store result in variable called area
    - print value of area
END


code solution:

    public class Main {
        public static void main (String[] args) {
            double radius = 5.0;
            double area = calculateArea(radius);
            System.out.println("Area of circle: " + area);
        }

        public static double calculateArea(double radius) {
            return Math.PI * radius * radius;
        }
    }




ex: 2: create class called Book with properties like title, author, and price, include a method to display the book details


START
- define class called Book
    - inside class:
        - declare three props: title, author, and price
        - define a constructor that takes title, author and price as params and initializes the props
        - define method called displayDetails;
            - inside the method:
                - print title, author, and price of book

- in main method:
    - create instance of Book class by passing title, author and price to the constructor
    - call displayDetails method on book instance to print book's details
END



class Book {
    String title;
    String author;
    double price;

    Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    void displayDetails() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: $" + price);
    }
}

public class Main {
    public static void main(String[] args) {

    Book book = new Book("Java Programming", "John Doe", 29.99);
    book.displayDetails();

    }
}







ex 3: find the sum of all even numbers in an array psuedocode




 */
























/*




Java variables - container which holds the value while the Java program is executed. a variable is assigned with a data type

variable is a name of memory location. there are three types in Java: 

- local: variable declared inside the body of the mthod is called a local variable. you can use only within that method and other methods in class don't have access to it.

a local variable cannot be defined with static keyword

- instance: variable declared inside the class but outside the body of the method. not declared as static. called instance variable because it is instance specific and is not shared among instances

- static: variable that is declared as static is called static variable. cannot be local. you can create a single copy of the static variable and share it among all the instances of the class. memory allocation for static variables happens only once when the class is loaded in the memory

two types of data types: primitive non-primitive

variable is a name of a reserved area allocated in memory/ a name of the memory location. 



 */