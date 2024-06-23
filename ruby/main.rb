# data types


integer = 10 # integer
float = 10.5 #float
string = "Hello" #string
boolean = true #boolean


# variables


variable = "I can change"

CONSTANT = "I cannot change"



# operators



a = 10
b = 20


# arithmetic

sum = a + b # addition
diff = a - b # subt
prod = a * b #mult
quot = a / b # division


# comparison

is_equal = (a == b) #equality
is_not_equal = (a != b) #inequality
is_greater = ( a > b) #greater than


#logical

and_op = (a < b && b > 10) #AND
or_op = (a < b || b < 10) #OR





# control flow



number = 10

# if else statement

if number > 5
    puts "Greater than 5"
else
    puts "5 or less"
end



# ternary operator 

result = number > 5 ? "Greater than 5" : "5 or less"
puts result




# loops


# for loop 

for i in 0...5
    puts i
end



#while loop 

j = 0

while j < 5
    puts j
    j += 1
end



# do while loop 


k = 0

begin
    puts k
    k += 1
end while k < 5





# methods



def greet(name)
    "Hello, #{name}"
end

puts greet("John") # output: Hello, John



# arrays



fruits = ["apple", "banana", "cherry"]
puts fruits[0] #output: apple



# dictionaries



person = {
    first_name: "John",
    last_name: "Doe",
    age: 30
}


puts person[:first_name] #output: John





# classes and objects (OOP)



class Person
    attr_accessor :first_name, :last_name, :age

    def initialize(first_name, last_name, age)
        @first_name = first_name
        @first_name = last_name
        @age = age
    end

    def greet
        "Hello, my name is #{@first_name} #{@last_name}"
    end
end


person1 = Person.new("John", "Doe", 30)
puts person1.greet # output: Hello, my name is John Doe




# inheritance (OOP)


class Animal
    attr_accessor :name

    def initialize(name)
        @name = name
    end

    def speak
        "#{@name} makes noise"
    end

end


class Dog < Animal
    def speak
        "#{@name} barks"
    end
end

dog = Dog.new("Rex")
puts dog.speak #output: Rex barks.






# encapsulation (OOP)


class Employee 
    attr_reader :name

    def initialize(name, salary)
        @name = name
        @salary = salary # private instance variable
    end

    def get_salary
        @salary
    end

end


emp = Employee.new("Alice", 50000)
puts emp.get_salary #output: 50000




# polymorphism (OOP)



class Shape
    def area
        0
    end
end


class Circle < Shape
    def initialize(radius)
        @radius = radius
    end

    def area
        Math::PI * @radius ** 2
    end
end


class Rectangle < Shape
    def initialize(width, height)
        @width = width
        @height = height
    end


    def area
        @height * @width
    end
end


shapes = [Circle.new(10), Rectangle.new(5, 10)]
shapes.each { |shape| puts shape.area }