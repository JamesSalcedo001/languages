import java.util.Date;
// import org.apache.commons.lang3.StringUtils;

public class Main {
    public static void main(String[] args) {
        // Data types
        int integer = 10; // integer
        float floatNum = 10.5f; // float
        String string = "Hello"; // string
        boolean bool = true; // boolean

        // Variables
        int variable = 10;
        final int CONSTANT = 20; // constants are defined with the final keyword

        // Using variables to avoid warnings
        System.out.println("Integer: " + integer);
        System.out.println("Float: " + floatNum);
        System.out.println("String: " + string);
        System.out.println("Boolean: " + bool);
        System.out.println("Variable: " + variable);
        System.out.println("Constant: " + CONSTANT);

        // Operators
        int a = 10;
        int b = 20;

        // Arithmetic
        int sum = a + b; // addition
        int diff = a - b; // subtraction
        int prod = a * b; // multiplication
        float quot = (float) a / b; // division type-casting to float
        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + diff);
        System.out.println("Product: " + prod);
        System.out.println("Quotient: " + quot);

        // Comparison operators
        boolean isEqual = (a == b); // equality
        boolean isNotEqual = (a != b); // inequality
        boolean isGreater = (a > b); // greater than
        boolean isLessThan = (a < b); // less than
        System.out.println("isEqual: " + isEqual);
        System.out.println("isNotEqual: " + isNotEqual);
        System.out.println("isGreater: " + isGreater);
        System.out.println("isLessThan: " + isLessThan);

        // Logical operators
        boolean andOp = (a < b && b > 10); // AND
        boolean orOp = (a < b || b > 10); // OR
        System.out.println("AND Operation: " + andOp);
        System.out.println("OR Operation: " + orOp);

        // Control flow
        int number = 10;
        if (number > 5) {
            System.out.println("Greater than 5");
        } else {
            System.out.println("5 or less");
        }

        // Ternary operator
        String result = (number > 5) ? "Greater than 5" : "5 or less";
        System.out.println(result);

        // Loops
        // For loop
        for (int i = 0; i < 5; i++) {
            System.out.println("For loop: " + i);
        }

        // While loop
        int j = 0;
        while (j < 5) {
            System.out.println("While loop: " + j);
            j++;
        }

        // Do while loop
        int k = 0;
        do {
            System.out.println("Do while loop: " + k);
            k++;
        } while (k < 5);

        // Arrays
        String[] fruits = {"apple", "banana", "cherry"};
        System.out.println("First fruit: " + fruits[0]); // output: apple

        // Objects/dictionaries
        Person person = new Person("John", "Doe", 30);
        System.out.println(person.getFirstName()); // output: John

        // Classes and objects (OOP)
        Person person1 = new Person("John", "Doe", 30);
        System.out.println(person1.greet()); // output: Hello, my name is John Doe

        // Inheritance (OOP)
        Dog dog = new Dog("Rex");
        dog.speak(); // Rex barks

        // Encapsulation (OOP)
        Employee emp = new Employee("Alice", 50000);
        System.out.println(emp.getSalary()); // output: 50000

        // Polymorphism
        Shape[] shapes = {new Circle(10), new Rectangle(5, 10)};
        for (Shape shape : shapes) {
            System.out.println(shape.area());
        }

        // Error handling
        try {
            int riskyResult = riskyOp();
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Cleanup actions needed");
        }

        // Recursion
        System.out.println(factorial(5)); // output: 120

        // Libraries/modules
        Date date = new Date();
        System.out.println("Current date and time: " + date); // output: current date and time

        // Using external library
        // String str = " Hello World ";
        // System.out.println(StringUtils.trim(str)); // output: Hello World
    }

    public static String greet(String name) {
        return "Hello, " + name;
    }

    public static int riskyOp() {
        return 10 / 0; // cause ArithmeticException
    }

    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
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

    public String greet() {
        return "Hello, my name is " + firstName + " " + lastName;
    }
}

class Animal {
    protected String name;

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
        System.out.println(name + " barks.");
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
