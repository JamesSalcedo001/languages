package main

// import "fmt"
// note, cannot import using single quotes

import (
	"fmt"
	"math"
	"errors"
)

func greet(name string) string {
	return "Hello, " + name
}


type Person struct {
	firstName string
	lastName string 
	age int
}

// cannot put functions or classes inside of other functions like main



func (p Person) greet_2() string {
	return "Hello, my name is " + p.firstName + " " + p.lastName
}



type Animal struct {
	name string
}


func (a Animal) speak() {
	fmt.Println(a.name + " makes a noise")
}


type Dog struct {
	Animal
}


func (d Dog) speak() {
	fmt.Println((d.name + " barks"))
}

// see inheritance section lines  240ish




type Employee struct {
	name string
	salary int
}


func (e Employee) getSalary() int {
	return e.salary
}

// see encapsulation lines 270ish





type Shape interface {
	area() float64
}


type Circle struct {
	radius float64
}

func (c Circle) area() float64 {
	return math.Pi * c.radius * c.radius
}


type Rectangle struct {
	width, height float64
}


func (r Rectangle) area() float64 {
	return r.width * r.height
}




func riskyOp() error {
	return errors.New("something wrong")
}

// see lines 343ish for rest
 
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
	// note the difference in how arrays are structured is shown, there's the declaration and then the amount of items, the data type, and the array is with {} instead

	fmt.Println((fruits[0])) //output: apple 





	// objects/dictionaries




	person := map[string]string{
		"first_name": "John",
		"last_name": "Doe",
		"age": "30",
	}

	fmt.Println(person["first_name"]) //output: John





	// classes and objects(OOP)






	// see top of page for function



	person1 := Person{"John", "Doe", 30}
	fmt.Println(person1.greet_2()) // output: Hello, my name is John Doe









	// go does not support inheritance but one can use embedding for similar behavior

	// see top 





	dog := Dog{Animal{name: "Rex"}}
	dog.speak() // output: Rex barks





	// encapsulation (OOP)


	// see top 








	emp := Employee{"Alice", 50000}
	fmt.Println(emp.getSalary()) //output 50000






	// polymorphism (OOP)

	// see top 


	shapes := []Shape{Circle{10}, Rectangle{5, 10}}


	for _, shape := range shapes {
		fmt.Println(shape.area())
	}



	// see top for error handling

	if err := riskyOp(); err != nil {
		fmt.Println("An error occurred: ", err)
	} else {
		fmt.Println("Operation succeeded")
	}



	//recursion 

}