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


