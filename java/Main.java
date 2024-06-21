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

