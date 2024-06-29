-- create a table

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT
);


CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT,
    title TEXT,
    amount DECIMAL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);






-- this inserts information into an existing table users
INSERT INTO users (name, age) VALUES ('Binx', 3);

INSERT INTO users (name, age) VALUES ('Tomo', 5);

INSERT INTO users (name, age) VALUES ('Dhalia', 6);

INSERT INTO users (name, age) VALUES ('Dhalia', 7);





-- inserts data into another related table, orders
INSERT INTO orders (user_id, title, amount) VALUES (1, 'Mouse', 15.00);

INSERT INTO orders (user_id, title, amount) VALUES (2, 'Rat with Feathers', 20.00);


INSERT INTO orders (user_id, title, amount) VALUES (3, 'Bird on stick and String', 18.00);

INSERT INTO orders (user_id, title, amount) VALUES (null, 'Cool stuffed turtle', 25.00);


-- read a table's records


-- this displays all records in users table
SELECT * FROM users;

SELECT * FROM orders;

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






-- functions




-- aggregate functions: perform calculations on sets of rows

--count, sum, avg, min, max


-- Counts the number of rows that match a specified condition.
SELECT COUNT(*) FROM users;



-- calculates the total sum of numeric column

SELECT SUM(age) FROM users;



-- computes average value of numeric column

SELECT AVG(age) FROM users;



--  Returns the smallest value in a set

SELECT MIN(age) FROM users;




--  Returns the largest value in a set

SELECT MAX(age) FROM users;


-- string functions: manipulate text



-- returns all records in uppercase

SELECT UPPER(name) FROM users;





-- date functions: manipulate dates



-- returns current date in year-month-day format

SELECT CURRENT_DATE;





-- joins - combine rows from two or more tables based on a related column


-- inner join: returns records with matching values in both tables

SELECT name, title, amount FROM users INNER JOIN orders on users.id = orders.user_id;


-- left join: returns records with matching values in both tables as well as all records from the left table which in this case is users

SELECT name, title, amount FROM users LEFT JOIN orders ON users.id = orders.user_id;


-- right join: returns records with matching values in both tables as well as all records from the right table which in this case is orders

SELECT name, title, amount FROM users RIGHT JOIN orders ON users.id = orders.user_id;




-- full outer join: returns records with matching values in both tables as well as the other values that didn't match from both tables

SELECT name, title, amount FROM users FULL OUTER JOIN orders ON users.id = orders.user_id;