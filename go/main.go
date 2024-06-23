package main

import "fmt"
// note, cannot import using single quotes


func greet(name string) string {
	return "Hello, " + name
}




func main() {

	// data types



	var integer int = 10 //integer, notice the usage of data types
	var floatNum float64 = 10.5 // float, notice the datatype float64, as well as the usage of camelCase
	var str string = "Hello"; // string, also note the optional ;
	var boolean bool = true // boolean is just bool in go


	fmt.Println(integer, floatNum, str, boolean)






	// variables

	var variable int = 10
	// notice how variables are highlighted until they are used, it actually causes errors as well when running
	const CONSTANT int = 20

	fmt.Println(variable, CONSTANT)
	



	//operators

	var a int = 10
	var b int = 20


	// arithmetic

	sum := a + b // addition, this can also be written as below:
	// var sum int = a + b
	diff := a - b // subt
	prod := a * b // mult
	quot := a / b // divide


	// comparison


	isEqual := (a == b) // equality
	isNotEqual := (a != b) // inequality
	isGreater := (a > b) // greater than


	// logical 

	andOp := (a < b && b > 10) // AND
	orOp := (a < b || b < 10) // OR


	fmt.Println(sum, diff, prod, quot, isEqual, isNotEqual, isGreater, andOp, orOp)



	

	// control flow

	var number int = 10

	// if statement

	if number > 5 {
		fmt.Println("Greater than 5")
	} else {
		fmt.Println("5 or less")
	}



	// go does not have a ternary operator



	// loops



	// for loop
	
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}


	// while loop (use for in Go)

	j := 0
	for j < 5 {
		fmt.Println(j)
		j++
	}





	// do while loop (use for in Go)


	k := 0
	for {
		fmt.Println(k)
		k++
		if k >= 5 {
			break
		}
	}







	// functions/methods
// see top of page for function 


	fmt.Println(greet("John")) // output: Hello, John









	// arrays

	fruits := [3]string{"apple", "banana", "cherry"}

	fmt.Println((fruits[0])) //output: apple 





}