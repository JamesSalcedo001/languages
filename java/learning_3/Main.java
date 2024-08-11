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

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter an integer: ");
        int number = scanner.nextInt();

       

        if (number % 2 == 0) {
            System.out.println(number + " is even");
        } else {
            System.out.println(number + " is odd");
        }
    }
}




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