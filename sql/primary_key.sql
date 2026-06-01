-- They uniquely identify each record in a table.
-- THey ensure no duplicate records exist. 
-- They provide a reference point for relationships between tables 
-- They optimize database performance for record retrieval

CREATE TABLE students(
    student_id INT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(50)
);

-- Inserting records
INSERT INTO 
students(student_id, first_name, last_name, email)
VALUES 
(1, 'Rahul', 'Gupta', 'rahul@gmail.com'),
(2, 'Sonu', 'Kumar', 'sonu@gmail.com'),
(3, 'Mohan', 'Kumar', 'mohan@gmail.com');

select * from students;

-- Try to insert duplicate values 
INSERT INTO 
students
VALUES (1, 'Animesh', 'Sharma', 'animay@gmail.com');

-- Creating a table with an auto-increment primary key
CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL, 
    price DECIMAL(10, 2) NOT NULL,
    description TEXT 
);

INSERT INTO products(product_name, price, description)
VALUES 
('Laptop', 1299.99, 'High-Performance Laptop'),
('Smartphone', 799.99, 'Latest model smartphone'),
('Headphones', 199.99, 'Noise-cancelling headphones');

select * from products;

-- ----------------------------------
CREATE TABLE orders(
    order_id, 
    customer
)

