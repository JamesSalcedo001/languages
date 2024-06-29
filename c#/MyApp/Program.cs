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
        bool andOp = (a < b && b > 10); // AND
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





        // arrays
        string[] fruits = { "apple", "banana", "cherry" };
        Console.WriteLine(fruits[0]); // output: apple





        // objects/dictionaries
        Dictionary<string, string> person = new Dictionary<string, string>
        {
            { "first_name", "John" },
            { "last_name", "Doe" },
            { "age", "30" }
        };




        // classes and objects (OOP)
        Person person1 = new Person("John", "Doe", 30);
        



        // Output examples
        Console.WriteLine($"{integer}, {floatNum}, {str}, {boolean}");
        Console.WriteLine($"{variable}, {CONSTANT}");
        Console.WriteLine($"{sum}, {diff}, {prod}, {quot}, {isEqual}, {isNotEqual}, {isGreater}, {andOp}, {orOp}");
        Console.WriteLine(result);
        Console.WriteLine(person["first_name"]); // output: John
        Console.WriteLine(person1.Greet_2()); // output: Hello, my name is John Doe

        Dog dog = new Dog("Rex");
        dog.Speak(); // output: Rex barks

        Employee emp = new Employee("Alice", 50000);
        Console.WriteLine(emp.GetSalary());
    }

    static string Greet(string name)
    {
        return $"Hello, {name}";
    }
}



class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }

    public Person(string firstName, string lastName, int age)
    {
        FirstName = firstName;
        LastName = lastName;
        Age = age;
    }

    public string Greet_2()
    {
        return $"Hello, my name is {FirstName} {LastName}";
    }
}


// inheritance (OOP)



class Animal
{
    public string Name { get; set; }

    public Animal(string name)
    {
        Name = name;
    }

    public virtual void Speak()
    {
        Console.WriteLine($"{Name} makes a noise");
    }
}

class Dog : Animal
{
    public Dog(string name) : base(name) { }

    public override void Speak()
    {
        Console.WriteLine($"{Name} barks");
    }
}


// encapsulation (OOP)

class Employee
{
    private string name;
    private int salary;

    public Employee(string name, int salary)
    {
        this.name = name;
        this.salary = salary;
    }

    public int GetSalary()
    {
        return salary;
    }
}