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






?>