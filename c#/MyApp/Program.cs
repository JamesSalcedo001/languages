using System;
using System.Collections.Generic;

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





        // control flow


        int number = 10;


        if (number > 5)
        {
            Console.WriteLine("Greater than 5");
        }
        else
        {
            Console.WriteLine("5 or less");
        }




        // ternary 
        string result = number > 5 ? "Greater than 5" : "5 or less";




        // loops


        // for loop 

        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine(i);
        }


        // while loop
        int j = 0;
        while (j < 5)
        {
            Console.WriteLine(j);
            j++;
        }


        // do while loop
        int k = 0;
        do
        {
            Console.WriteLine(k);
            k++;
        } while (k < 5);




        // functions / methods 


        static string Greet(string name)
        {
            return $"Hello, {name}";
        }



        // arrays

        string[] fruits = { "apple", "banana", "cherry" };
        Console.WriteLine(fruits[0]); // output: apple



        // objects/dictionaries
        // see above using library line 2

        Dictionary<string, string> person = new Dictionary<string, string>
        {
            { "first_name", "John" },
            { "last_name", "Doe" },
            { "age", "30" }
        };





        Console.WriteLine($"{integer}, {floatNum}, {str}, {boolean}");

        Console.WriteLine($"{variable}, {CONSTANT}");

        Console.WriteLine($"{sum}, {diff}, {prod}, {quot}, {isEqual}, {isNotEqual}, {isGreater}, {andOp}, {orOp}");

        Console.WriteLine(result);

        Console.WriteLine(person["first_name"]); // output: John
    }
}