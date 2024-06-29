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

INSERT INTO users (name, age) VALUES ('Dhalia', 7);


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







-- data retrieval






-- WHERE clause - filter results


-- returns records from users table which have values in age column less than 4
SELECT * FROM users where age < 4;




-- ORDER BY - sort results


-- returns records ordered alphabetically by name
SELECT * FROM users ORDER BY name ASC;

-- the same except descending order
SELECT * FROM users ORDER BY name DESC;



-- LIMIT - limit the number of results



-- returns only top 2 records
SELECT * FROM users LIMIT 2;



-- DISTINCT - remove duplicate rows


SELECT DISTINCT name FROM users;


