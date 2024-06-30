// to run code: compile with: g++ main.cpp -o main, and then ./main


#include <iostream>
using namespace std;


int main() {

    // data types

    int integer = 10;
    float floatNum = 10.5f;
    string str = "Hello";
    bool boolean = true;






    // variables

    int variable = 10;
    const int CONSTANT = 20;





    // operators

    int a = 10;
    int b = 20;

    // arithmetic
    int sum = a + b;
    int diff = a - b;
    int prod = a * b;
    float quot = (float)a / b;


    // comparison
    bool isEqual = (a == b);
    bool isNotEqual = (a != b);
    bool isGreater = (a > b);


    // logical
    bool andOp = (a < b && b < 10); // AND
    bool orOp = (a < b || b < 10); // OR





    cout <<  integer << ", " << floatNum << ", " << str << ", " << boolean << endl;

    cout << variable << ", " << CONSTANT << endl;

    cout << sum << ", " << diff << ", " << prod << ", " << quot << ", " << isEqual << ", " << isNotEqual << ", " << isGreater << ", " << ", " << andOp << ", " << orOp << endl;

    return 0;
}