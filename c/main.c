#include <stdio.h>

int main() {

    // data types 


    int integer = 10; // integer
    float floatNum = 10.5; // float
    char string[] = "Hello"; // string
    int boolean = 1; // no native boolean type, 0 for false, non-zero for true

    // note that C requires semicolons






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























    
    printf("%d, %.1f, %s, %d\n", integer, floatNum, string, boolean);
    printf("%d, %d\n", variable, CONSTANT);
    printf("%d, %d, %d, %.2f, %d, %d, %d, %d, %d\n", sum, diff, prod, quot, isEqual, isNotEqual, isGreater, andOp, orOp);
    return 0;




}