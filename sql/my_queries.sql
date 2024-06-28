CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);


SELECT * FROM users;


INSERT INTO users (name) VALUES ('James');

SELECT * FROM users;

INSERT INTO users (name) VALUES ('John');

SELECT * FROM users;