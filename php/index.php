<?php

$integer = 10; // integer 
$floatNum = 10.5; // float
$string = "Hello"; // string
$boolean = true; // boolean
// notice how PHP REQUIRES semicolons, do not forget them!
// also remember to wrap php code in <?php tags !


// variables

$variable = 10;
// declare variables using the $


define("CONSTANT", 20); // constants are defined with the define function




// operators



$a = 10;
$b = 20;


// arithmetic

$sum = $a + $b; // add
$diff = $a - $b; // sub
$prod = $a * $b; // mult
$quot = $a / $b; // divide


// comparison

$isEqual = ($a == $b); // equality
$isNotEqual = ($a != $b); // inequality
$isGreater = ($a > $b); // greater than
$isLess = ($a < $b); // less than


// logical
$andOp = ($a < $b && $b > 10); // AND 
$orOp = ($a < $b || $b < 10); // OR






// control flow

$number = 10;

// if statement 

if ($number > 5) {
    echo "Greater than 5";
} else {
    echo "5 or less";
}


// ternary 

$result = ($number > 5) ? "Greater than 5" : "5 or less";
echo $result;







// loops 



// for loop 

for ($i = 0; $i < 5; $i++) {
    echo $i;
}



// while loop
$j = 0;
while ($j < 5) {
    echo $j;
    $j++;
}





// do while loop
$k = 0;
do {
    echo $k;
    $k++;
} while ($k <5);








// functions



function greet($name) {
    return "Hello, " . $name;
    // notice how concatenation is written with the . instead of the usual +
}


echo greet("John"); // output: Hello, John







//arrays



$fruits = ["apple", "banana", "cherry"];
echo $fruits[0]; // output: apple






// objects/dictionaries



$person = [
    "first_name" => "John",
    "last_name" => "Doe",
    "age" => 30
];


// notice how this is using different syntax from the usual {} and key:value pairs 


echo $person["first_name"]; // output: John







// classes/objects(OOP)



class Person {
    public $first_name;
    public $last_name;
    public $age;


    public function __construct($first_name, $last_name, $age) {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->age = $age;
    }

    // notice how the -> is used similar to how the dot operator in ruby is used to call methods 

    public function greet() {
        return "Hello, my name is " . $this->first_name . " " . $this->last_name;
    }
}



$person1 = new Person("John", "Doe", 30);
echo $person1->greet(); // output: Hello, my name is John Doe









// inheritance (OOP)



class Animal {
    protected $name;

    public function __construct($name) {
        $this->name = $name;
    }


    public function speak() {
        echo $this->name . " makes a noise";
    }
}


class Dog extends Animal {
    public function speak() {
        echo $this->name . " barks";
    }
}



$dog = new Dog("Rex");
$dog->speak(); // output: Rex barks







// encapsulation (OOP)



class Employee {
    private $name;
    private $salary;


    public function __construct($name, $salary) {
        $this->name = $name;
        $this->salary = $salary;
    }


    public function getSalary() {
        return $this->salary;
    }
}


$emp = new Employee("Alice", 50000);
echo $emp->getSalary(); //output: 50000





// polymorphism (OOP)



abstract class Shape {
    abstract public function area();
}


class Circle extends Shape {
    private $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function area() {
        return pi() * $this->radius * $this->radius;
    }
}



class Rectangle extends Shape {
    private $width;
    private $height;

    public function __construct($width, $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function area() {
        return $this->width * $this->height;
    }
}


$shapes = [new Circle(10), new Rectangle(5, 10)];

foreach ($shapes as $shape) {
    echo $shape->area() . "\n";
}







// exceptions/error handling



try {
    $result = 10 / 0;
} catch (DivisionByZeroError $e) {
    echo "An error occurred: " . $e->getMessage();
} finally {
    echo "Cleanup actions if needed";
}





// recursion





function factorial($n) {
    if ($n == 0) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}

echo factorial(5); //output: 120









?>