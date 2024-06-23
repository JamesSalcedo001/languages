package main

import "fmt"
// note, cannot import using single quotes

// data types

func main() {
	var integer int = 10 //integer, notice the usage of data types
	var floatNum float64 = 10.5 // float, notice the datatype float64, as well as the usage of camelCase
	var string string = "Hello"; // string, also note the optional ;
	var boolean bool = true // boolean is just bool in go


	fmt.Println(integer, floatNum, string, boolean)
}