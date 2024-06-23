package main

import "fmt"
// note, cannot import using single quotes


func main() {

	// data types



	var integer int = 10 //integer, notice the usage of data types
	var floatNum float64 = 10.5 // float, notice the datatype float64, as well as the usage of camelCase
	var string string = "Hello"; // string, also note the optional ;
	var boolean bool = true // boolean is just bool in go


	fmt.Println(integer, floatNum, string, boolean)






	// variables

	var variable int = 10
	// notice how variables are highlighted until they are used, it actually causes errors as well when running
	const CONSTANT int = 20

	fmt.Println(variable, CONSTANT)
	






}