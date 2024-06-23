#include <stdio.h>

int main() {

    // data types 

    
    int integer = 10; // integer
    float floatNum = 10.5; // float
    char string[] = "Hello"; // string
    int boolean = 1; // no native boolean type, 0 for false, non-zero for true


    printf("%d, %.1f, %s, %d\n", integer, floatNum, string, boolean);
    return 0;
}