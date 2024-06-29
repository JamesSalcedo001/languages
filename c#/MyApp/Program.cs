using System;

class Program
{
    static void Main()
    {
          // data types
        
        int integer = 10;
        double floatNum = 10.5;
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
        double quot = (double)a / b;

        // comparison
        bool isEqual = (a == b);
        bool isNotEqual = (a != b);
        bool isGreater = (a > b);


        // logical
        bool andOp = (a < b && b > 10); //AND
        bool orOp = (a < b || b < 10); // OR



        Console.WriteLine($"{integer}, {floatNum}, {str}, {boolean}");

        Console.WriteLine($"{variable}, {CONSTANT}");

        Console.WriteLine($"{sum}, {diff}, {prod}, {quot}, {isEqual}, {isNotEqual}, {isGreater}, {andOp}, {orOp}");
    }
}