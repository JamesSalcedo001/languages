#include <stdio.h>

int main() {

    // data types 


    int integer = 10; // integer
    float floatNum = 10.5; // float
    char string[] = "Hello"; // string
    int boolean = 1; // no native boolean type, 0 for false, non-zero for true

    // note that C requires semicolons



    // variables




    int variable = 10;

    const int CONSTANT = 20; // constants are defined with const keyword




    //operators

    int a = 10;
    int b = 20;


    // arithmetic 
    int sum = a + b; //add
    int diff = a - b; //subt
    int prod = a * b; // mult
    float quot = (float)a / b; //divide (casting to float)



    // comparison
    int isEqual = (a == b); // equality
    int isNotEqual = (a != b); // inequality
    int isGreater = (a > b); // greater than



    // logical
    int andOp = (a < b && b > 10); // AND
    int orOp = (a < b || b < 10); //OR







    // control flow


    int number = 10;

    // if statement

    if (number > 5) {
        printf("Greater than 5\n");
    } else {
        printf("5 or less \n");
    }


    // ternary operator

    char *result = (number > 5) ? "Greater than 5" : "5 or less";
    





    // loops
    

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










    
    printf("%d, %.1f, %s, %d\n", integer, floatNum, string, boolean);
    printf("%d, %d\n", variable, CONSTANT);
    printf("%d, %d, %d, %.2f, %d, %d, %d, %d, %d\n", sum, diff, prod, quot, isEqual, isNotEqual, isGreater, andOp, orOp);

    printf("%s\n", result);
    return 0;




}