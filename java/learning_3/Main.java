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

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        int count = 0;

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ) {
                count++;
            }
        }
        System.out.println("Number of vowels: " + count);
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