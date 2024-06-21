// data types

int integer = 10; // integer

float floatNum = 10.5f; // float

String string = "Hello"; // string

boolean bool = true; // boolean





// variables 

int variable = 10;

final int CONSTANT = 20; // constants are defined with the final keyword






// operators 

int a = 10;
int b = 20;

// arithmetic

int sum = a + b; // addition
int diff = a - b; // subtraction
int prod = a * b; // mult
float quot = (float) a / b; // division type-casting to float

// comparison operators

boolean isEqual = (a == b); // equality
boolean isNotEqual = (a != b); // inequality
boolean isGreater = (a > b); // greater than
boolean isLessThan = (a < b); // less than


// logical ops

boolean andOp = (a < b && b > 10); // AND
boolean orOp = (a < b || b > 10); // OR




// control flow


// if statement

int number = 10;

if (number > 5) {
    System.out.println("Greater than 5");
} else {
    System.out.println("5 or less")
}




// ternary operator

String result = (number > 5) ? "Greater than 5" : "5 or less";
System.out.println(result);








// loops



// for loop 



for (int i = 0; i < 5; i++) {
    System.out.println(i);
}


// while loop

int j = 0;
while (j < 5) {
    System.out.println(j);
    j++;
}



// do while loop


int k = 0;
do {
    System.out.println(k);
    k++;
} while (k < 5);






// functions/methods



public class Main {
    public static void main(String[] args) {
        System.out.println(greet("John")); // output: hello john
    }

    public static String greet(String name) {
        return "Hello, " + name;
    }
}







// arrays/lists


public class Main {
    public static void main(String[] args) {
        String[] fruits = {"apple", "banana", "cherry"};
        System.out.println(fruits[0]); // output: apple 
    }
}

// notice how arrays are not the typical [] form they are in an {} form, but similar manner of accessing them. write String[] as the data type, then the name, and then the elements inside an {}





// objects/ dictionaries


public class Main {
    public static void main(String[] args) {
        Person person = new Person("John", "Doe", 30);
        System.out.println(person.getFirstName()); // output: John
    }
}


class Person {
    private String firstName;
    private String lastName;
    private int age;


    public Person(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public String getFirstName() {
        return firstName;
    }
}


// look into arrays/ objects/ what the private and public keywords are used for




// classes and objects (OOP)



public class Main {
    public static void main(String[] args) {
        Person person1 = new Person("John", "Doe", 30);
        System.out.println(person1.greet()); // output: Hello my name is John Doe
    }
}


class Person {
    private String firstName;
    private String lastName;
    private int age;


    public Person(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    public String greet() {
        return "Hello, my name is " + firstName + " " + lastName;
    }
}





// inheritance (OOP)


public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Rex");
        dog.speak(); // Rex barks
    }
}


class Animal {
    protected String name;
    // ask what protected does

    public Animal(String name) {
        this.name = name;
    }

    public void speak() {
        System.out.println(name + " makes a noise");
    }
}


class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    public void speak() {
        System.out.println(name + " barks.")
    } 

}






// encapsulation (OOP)



public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee("Alice", 50000);
        System.out.println(emp.getSalary()); // output: 50000
    }
}


class Employee {
    private String name;
    private int salary;

    public Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }

    public int getSalary() {
        return salary;
    }
}





// polymorphism


public class Main {
    public static void main(String[] args) {
        Shape[] shapes = {new Circle(10), new Rectangle(5, 10)};
        for (Shape shapes : shapes) {
            // learn about this syntax
            System.out.println(shape.area());
        }
    } 
}

abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}



class Rectangle extends Shape {
   private double width;
   private double height;

   public Rectangle(double width, double height) {
    this.width = width;
    this.height = height;
   } 

   @Override
   double area() {
    return width * height;
   }
}






// error handling



public class Main  {
    public static void main(String[] args) {
        try {
            int result = riskyOp();
        } catch (ArithmeticExcetption e) {
            System.out.println("Error: ", e.getMessage());
        } finally {
            System.out.println("Cleanup actions needed");
        }
    }


    public static int riskyOp() {
        return 10 / 0; // cause ArithmeticException
    }
}




// recursion 



public class Main {
    public static void main (String[] args) {
        System.out.println(factorial(5)); // output: 120
    }


    public static int factorial(int n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
}




// libraries/ modules


import java.util.Date; // importing built in library


public class Main {
    public static void main(String[] args) {
        Date date = new Date();
        System.out.println(date); // output: current date and time
    }
}


// using external library 

import org.apache.commons.lang3.StringUtils;


public class Main {
    public static void main(String[] args) {
        String str = " Hello World ";
        System.out.println(StringUtils.trim(str)); // output: Hello World
    }   
}