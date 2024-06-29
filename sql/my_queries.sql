-- create a table

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT
);


-- this inserts information into an existing table
INSERT INTO users (name, age) VALUES ('Binx', 3);

INSERT INTO users (name, age) VALUES ('Tomo', 5);

INSERT INTO users (name, age) VALUES ('Dhalia', 6);

-- read a table's records


-- this displays all records in users table
SELECT * FROM users;

-- this displays the name and age of all records in users table with the condition that the age is greater than 3

SELECT name, age FROM users WHERE age > 3;


-- this updates an existing record, setting the record with the name 'Dhalia' to have an age attribute with the value of 4
UPDATE users SET age = 4 WHERE name = 'Dhalia';


-- this deletes the user named Dhalia from the table
DELETE FROM users WHERE name = 'Dhalia';


-- constraints
    -- primary key: uniquely identifies each row
    -- foreign key: references a primary key in another table
    -- unique: ensures all values in column are different
    -- not null: ensures a column cannot have null values


