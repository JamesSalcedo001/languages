-- create a table

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT
);


-- read a table's records


-- this displays all records in users table
SELECT * FROM users;

-- this displays the name and age of all records in users table with the condition that the age is greater than 28
--
SELECT name, age FROM users WHERE age > 28;


-- this updates an existing record, setting the record with the name 'John' to have an age attribute with the value of 30
UPDATE users SET age = 30 WHERE name = 'John';


