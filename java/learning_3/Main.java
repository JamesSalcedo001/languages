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


code solution:


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

START
- initialize a variable called sum to 0
- FOR each number in the array
    - IF the number is even
        - add the number to the sum
- END FOR
- Print value of sum

END



code solution:


    public class Main {
        public static void main(String[] args) {
           // define an array of integers
           int[] numbers = {1,2,3,4,5,6,7,8,9,10};

           // initialize sum to 0
           int sum = 0;

           // loop through each number in the array
           for (int number : numbers) {
                // check if number is even
                if (number % 2 == 0) {
                    // add even number to sum
                    sum += number;
                }
           }

           // print the sum of all numbers
           System.out.println("The sum of all even numbers in array is: " + sum);
        }
    }
    






Java variables - container which holds the value while the Java program is executed. a variable is assigned with a data type

variable is a name of memory location. there are three types in Java: 

- local: variable declared inside the body of the mthod is called a local variable. you can use only within that method and other methods in class don't have access to it.

a local variable cannot be defined with static keyword

- instance: variable declared inside the class but outside the body of the method. not declared as static. called instance variable because it is instance specific and is not shared among instances

- static: variable that is declared as static is called static variable. cannot be local. you can create a single copy of the static variable and share it among all the instances of the class. memory allocation for static variables happens only once when the class is loaded in the memory

two types of data types: primitive non-primitive

variable is a name of a reserved area allocated in memory/ a name of the memory location. 




// data structures usage

1. arrays
- used for storing fixed-size sequences of elements where direct access to elements by index is required

2. linked lists
- suitablle for dynamic data where frequent insertions and deletions occur

3. stacks and queues
- using when requiring LIFO(last in first out) or FIFO(First in first out) processing, such as undo operations in text editors or task scheduling

4. trees
- essential for representing hierarchical data, like folder structures in operating systems or decision making processes

5. graphs
- useful in representing networks such as social networks, road maps or communication systems

6. hash tables
- ideal for situations requiring fast lookup, insertion, deletion, like implementing dictionaries or caches






** sec 5 arrays

- collection of elements, all of the same data type, stored in contiguous memory locations, in other words all elements are stored in a single block of memory(contiguous means everything is connected in a sequence without interruption). allows you to store multiple items of the same type together. arrays are used when you need to manage collection of data in a structured way, where each elem can be accessed by its index

key characteristics

- fixed size: once array is created, its size cannot be changed
- homogeneous elements: all elems in array are of the same data type: eg. all int, all float, or all String

-indexed access: elems in array are accessed using their index, starting from 0

- contiguous memory allocation: elems are stored in contiguous memory locations, which allows for efficient access and manipulation


- array declaration and initialization

1. declaration

ex: 

    int[] numbers; // declaration of an array of integers

2. allocation

ex:

    numbers = new int[5]; // allocating memory for 5 integers

3. initialization

ex:

    int numbers = {10, 20, 30, 40, 50}; // declaration, allocation, and initialization in one step


4. accessing elems

- use their index

ex:

    int firstElem = numbers[0]; // accessing first elem (10)
    int thirdElem = numbers[2]; // accessing third (30)


- common ops on arrays

1. traversing array
    
- loop through the array to access each elem

ex:

    for (int i = 0; i < numbers.length; i++) {
        System.out.println(numbers[i]);
    }


2. inserting elems

- arrays have fixed size, you cannot directly insert elem into a full array. if you want to add a new elem, you create a new array with larger size.

ex:

    int[] newArray = new int[numbers.length + 1];
    for (int i = 0; i < numbers.length; i++) {
        newArray[i] = numbers[i];
    }

    newArray[newArray.length - 1] = 60;  // adding new elem 60 to the end


3. deleting elems

- involves shifting the remaining elems to fill the gap

ex:

    for (int i = 2; i < numbers.length - 1; i++) {
        numbers[i] = numbers[i + 1];
    } 

    // note the last elem is duplicated or remains unchanged

4. searching for an elem

- you can search by iterating through the array and comparing each elem

ex:

    int target = 30;
    boolean found = false;
    for (int i = 0; i < numbers.length; i++) {
        if (numbers[i] == target) {
            found = true;
            break;
        }
    }
    System.out.println("Elem found: " + found);

5. sorting an array

- use various algorithms or built in methods to sort an array

ex:

    import java.util.Arrays;

    Arrays.sort(numbers); // sort an array in ascending order

6. copying an array

- use the clone method or System.arraycopy

ex:

    int[] copy = numbers.clone(); // cloning array


- multidimensional arrays

- arrays can have more than one dimension like 2D arrays (arrays of arrays) in other words a matrix

1. declaration of 2d array

ex:

    int[][] matrix = new int[3][3]; // 3x3 matrix

2. initialization of 2d array

ex:

    int[][] matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

3. accessing elems in 2d array

- use 2 indices: one for row, one for column

ex:

    int elem = matrix[1][2]; // accessing the elem at row 1, column 2 (value is 6)


4. traversing a 2d array

- use nested loop to traverse a 2d array

ex:

    for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix[i].length; j++) {
            System.out.println(matrix[i][j] + " ");
        }
        System.out.println();
    }


ex: working with arrays in Java

- example demonstrating declaring, initializing, traversing, and manipulating a 1D array


    public class Main {
        public static void main(String[] args) {

            // declare & initialize

            int[] numbers = {10, 20, 30, 40, 50};

            // access elems

            System.out.println("Elem at index 2: " + numbers[2]); // output: 30

            // modify elems

            numbers[2] = 35;
            System.out.println("Modified elem at index 2: " + numbers[2]); //output: 35

            // traversing array

            System.out.println("Array elems: ");
            for (int i = 0; i < numbers.length; i++) {
                System.out.println(numbers[i] + " ");
            }
            System.out.println();


            // search for elem

            int target = 40;
            boolean found = false;
            for (int i = 0; i < numbers.length; i++) {
                if (numbers[i] == target) {
                    found = true;
                    break;
                }
            }
            System.out.println("Elem: " + target + " found" + found); // output: true


            

            // sorting array

            java.util.Arrays.sort(numbers);
            System.out.println("Sorted array:");
            for (int number : numbers) {
                System.out.print(number + " ");
            }
            System.out.println();




        }
    }



- advantages of arrays

    - fast access: O(1) time complexity for accessing elems by index

    - memory efficiency: arrays are stored in contiguous memory locations, which can be efficient in terms of space and cache usage

- disadvantages of arrays:

    - fixed size: size is fixed once declared, which can lead to either insufficient or wasted space

    - costly insertion/deletion: inserting or deleting elems( except at the end) requires shifting elems, which can be time consuming

- when to use arrays

    - when you need to store a fixed size collection of elements
    - when you need fast access to elems by index
    - when memory layout is crucial for performance, such as in systems programming or real-time applications











** sec 6 linked lists

- linear data structure in which elements, called nodes, are not stored in contiguous memory locations. instead, each node contains a data part and a reference (or link) to the next node in the sequence. linked lists are used for dynamic data storage and are ideal when you need frequent insertions and deletions

key characteristics

    - dynamic size: unlike arrays, size of linked list can grow or shrink dynamically as elems are added and removed

    - sequential access: elems in linked list must be accessed sequentially, starting from the first node(head)

    - nodes: each element in a linked list is stored in a node. a node contains two parts:
        - data: the value stored in the node
        - Next: a reference or pointer to the next node in the list





 */



























// public class Main {
//     public static void main(String[] args) {
        
//     }
// }