create table students_table(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL
);

insert into students_table(first_name, last_name)
VALUES ('Amit', 'Kumar'),
('Mohit', 'Sharma');

insert into students_table(id, first_name, last_name)
VALUES (1, 'Rohit', 'Kumar');

select * from students_table;

-- Foreign key

CREATE TABLE products_table(
    p_id SERIAL PRIMARY KEY,
    p_name VARCHAR(50),
    description TEXT
);

INSERT INTO products_table(p_name, description)
VALUES ('laptop', 'High Performing Gaming Laptop'),
('smartphone', 'High Resolution Camera'),
('ipad', 'best for reading books and digital teaching');

SELECT * FROM products_table;

CREATE TABLE customers_table(
    c_id SERIAL PRIMARY KEY,
    c_name VARCHAR(50),
    p_id INT NOT NULL,

    FOREIGN KEY (p_id)
    REFERENCES products_table(p_id)
);

INSERT INTO customers_table(c_name, p_id)
VALUES ('Rohan', 1);

SELECT * FROM customers_table;