# important notes on Python



# file name convention - app.py

# run files with - python filename.py 

# relevant use cases: 

    # - web dev: frameworks like Django and Flask
    # - game dev
    

# frameworks: Django, Flask, Numpy, Pandas, Matplotlib, Tensorflow




# syntax and structure






# variables/ datatypes

    # -strings: "Hello, World"
    # -numbers: int, float, double etc
    # -lists: ordered mubtable collections eg. [1, 2, 3]
    # -dictionaries: key value pairs eg. {"key", "value"}
    # -tuples: ordered immutable collections eg. (1, 2, 3)
    # -booleans: true or false


# operators

    # - arithmetic: + - * / // (floor division) % **
    # - relational == != > < >= <=
    # - logical and or not 
    # - assignment = += -= *= /=


# control flow

# if else statement - notice the use of elif and the colon instead of braces

    # if condition
    #     #code
    # elif another condition
    #     #code
    # else:
    #     #code



# loops


# for loop iterates over a sequence

    # for item in iterable:
    #     #code block

# while loop repeats while cond is true 

    # while condition: 
    #     #code


# list comprehensions: concise way to create lists

    # [expression for item in iterable if condition]


# functions

# creating functions

    # def func_name(params):
    #     code
    #     return value

# functions can accept params to operate on 

# default params 

    # setting default values

        # def greet(name="World"):
        #     print(f"Hello, {name}!")



# lambda functions
    
# using anonymous functions 
    # square = lambda x: x * x
    # print(squre(5)) output: 25







# advanced python concepts






# objects and clases


# creating objects and classes


# defining classes

    # class Dog:
    #     def __init__(self, name):
    #         self.name = name


# creating instance of a class


    # my_dog = Dog("Buddy")


# instance variables and methods


# using self refers to the instance of the class 


# defining methods


    # class Dog:
    #     def __init__(self, name):
    #         self.name = name


    
    # this is a method being defined inside of the class dog. it can be used on an instance of a class, ie: my_dog.bark

    # def bark(self):
    #     print(f"{self.name} says woof")



# class variables and methods


# class variables shared across all instance

    # class Dog:
    #     species = "Canis Familiaris"


# class methods: use @classmethod decorator

    # class Dog:
    #     species = "Canis Familiaris"

    #     @classmethod
    #     def common_species(cls):
    #         return cls.species



# creating and using modules

# importing code split code into separate files

## in separate file named module.py or whatever you want to name the module
    # def greet():
    #     print("Hello!")

# in another file
    # from module import greet
    # greet()


# common modules/ libraries include: os, sys, math, random, etc



# inheritance and polymophism


# single inheritance

# creating subclasses

    # class Animal:
    #     def speak(self):
    #         pass 

    # class Dog(Animal):
    #     def speak(self):
    #         return "Woof!"


# multiple inheritance

    # class Bird:
    #     def fly(self):
    #         return "Flying!"
        
    # class Fish:
    #     def swim(self):
    #         return "Swimming"
        
    # class FlyingFish(Bird, Fish):
    #     pass








# python core libraries



# strings and lists 



# string methods *have separate section for working with these*


    # common methods: upper(), lower(), strip(), replace(), find(), split(), join()

    # formatting:

    #name = "Alice"
    #greeting = f"Hello, {name}!" f-strings



# list methods *have separate section for these*

    #common methods: append(), remove(), pop(), sort(), reverse()

    #iterating over lists

    # numbers = [1, 2, 3, 4, 5]
    # for num in numbers:
    #     print(num)


    # map, filter reduce

    #map
        #squares = list(map(lambda x: x**2, numbers))

    #filter
        #evens = list(filter(lambda x: x % 2 == 0, numbers))

    #reduce
        #from functools import reduce
        #total = reduce(lambda x, y: x + y, numbers)






# dictionaries and sets


# creating and manipulating dictionaries

    
    # adding, updating deleting

        # my_dict = {"name": "Alice", "age": 30}

        # my_dict["age"] = 31
        # my_dict["city"] = "New York"
        # del my_dict["name"]



    # iterating over dictionaries


    # items(), keys(), values()


        # for key, value in my_dict.items():
        #     print(f"{key}: {value}")


# sets

    # creating and using sets

        # my_set = {1, 2, 3, 4, 5}

        # my_set.add(6)
        # my_set.remove(3)

    # set operations: union, intersection, difference

        # set1 = {1, 2, 3}
        # set2 = {3, 4, 5}

        # union = set | set2 # {1, 2, 3, 4, 5}
        # intersection = set1 & set2 # {3}



# File I/O


# reading and writing files


    # using open, read, write, and context managers

        # with open('file.txt', 'r') as file:
        #     content = file.read()

        
        # with open('file.txt', 'w') as file:
        #     file.write("Hello, World!")


# file operations

    # common operations: reading lines, writing data, using different file modes: (r, w, a)







# Advanced Python


# exception handling


    # try except blocks

        # try:
        #     result = 10 / 0
        # except ZeroDivisionError:
        #     print("Cannot divide by zero!")

    #finally block

        # try:
        #     file = open('file.txt', 'r')
        # except FileNotFoundError:
        #     print("File not found!")
        # finally:
        #     file.close()



    # custom exceptions

    # creating custom exception classes


    # class CustomError(Exception):
    #     pass

    # try:
    #     raise CustomError("This is a custom error!")
    # except CustomError as e:
    #     print(e)



# Decorators and Generators


# go into 

# Decorators

    # creating and using decorators

    # def decorator_function(func):
    #     def wrapper():
    #         print("Before function")
    #         func()
    #         print("After function")
    #     return wrapper

    # @decorator_function
    # def say_hello():
    #     print("Hello")