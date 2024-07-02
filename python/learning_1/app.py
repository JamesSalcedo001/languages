# data types

integer = 10 #integer
float_num = 10.5 #float
string = "Hello" #string
boolean = True #Boolean



#variables 

variable = 10
CONSTANT = 20 # constants are usually defined with uppercase variables


#operators

a = 10
b = 20


# arithmetic

sum_result = a + b # addition
diff = a - b # subtraction
prod = a * b # mult
quot = a / b # division

# comparison 
is_equal = (a == b) # equality
is_not_equal = (a != b) #inequality
is_greater = (a > b) #greater than
is_less_than = (a < b) #less than


# logical

and_op = (a < b and b > 10) #AND notice how the operator is the word and instead of the &&

or_op = (a < b or b < 10) #OR notice how the operator is the word or instead of the ||




# control flow

number = 10

# if statement
if number > 5:
    print("Greater than 5")
else:
    print("5 or less")

# notice the usage of the colon instead of the usual curly braces and parentheses you are used to





# loops 


# for loop
for i in range(5):
    print(i)

# notice how this is entirely different syntax from other languages like javascript etc


# while loop
j = 0
while j < 5:
    print(j)
    j += 1


# do while loop
# python does not have this, but can simulate it with a while loop

k = 0
while True:
    print(k)
    k += 1
    if k >= 5:
        break




# functions/methods


def greet(name):
    return f"Hello, {name}"

print(greet("John")) # output: Hello, John





# lists

fruits = ["apple", "banana", "cherry"]
print(fruits[0]) # output: apple




# dictionaries

person = {
    "first_name": "John",
    "last_name": "Doe",
    "age": 30
}


print(person["first_name"]) # output: John




# classes/objects (OOP) 



class Person:
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age


    def greet(self):
        return f"Hello, my name is {self.first_name} {self.last_name}"
    

person1 = Person("John", "Doe", 30)
print(person1.greet()) # output: Hello, my name is John Doe







# inheritance (OOP)


class Animal:
    def __init__(self, name):
        self.name = name


    def speak(self):
        print(f"{self.name} makes a noise")


class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks")


dog = Dog("Rex")
dog.speak() #output: Rex barks







# encapsulation (OOP)

class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.__salary = salary #private attribute
    
    def get_salary(self):
        return self.__salary
    

emp = Employee("Alice", 50000)
print(emp.get_salary()) # output: 50000







# polymorphism (OOP)


class Shape:
    def area(self):
        return 0
    


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius


    def area(self):
        return 3.14 * self.radius ** 2
    

class Rectangle(Shape):
    def __init__(self, height, width):
        self.height = height
        self.width = width

    def area(self):
        return self.height * self.width
    


shapes = [Circle(10), Rectangle(5, 10)]

for shape in shapes:
    print(shape.area())






# exceptions/error handling


try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"an error occurred: {e}")
finally:
    print("cleanup actions if needed")







# recursion 


def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5)) # output: 120







# libraries/modules



# using built in library
import datetime


print(datetime.date.today()) # output: current date



# using external library (eg requests for HTTP requests)
# import requests

# response = requests.get('http://example.com')
# print(response.status_code) # output: 200 if successful