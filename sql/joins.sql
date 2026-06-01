-- customers
-- customer_id PRIMARY KEY
-- first_name
-- last_name
-- address_id (FOREIGN KEY)

-- address
-- address_id 
-- address
-- phone
-- city_id
-- postal_code

-- country
-- city_id
-- city
-- country_name

-- payment
-- payment_id
-- customer_id
-- mode
-- payment_date
-- customer_id FOREIGN KEY


CREATE TABLE city(
    city_id SERIAL PRIMARY KEY,
    city_name VARCHAR(20) NOT NULL
);

INSERT INTO city(city_name)
VALUES ('Delhi'),
('Coimbatore'),
('Chennai'),
('Chennai');

SELECT * FROM city;
---------------------------------------------------------
CREATE TABLE address(
    address_id SERIAL PRIMARY KEY,
    address VARCHAR(50) NOT NULL,
    city_id INT NOT NULL,
    postal_code INT NOT NULL,
    phone VARCHAR(20),

    FOREIGN KEY (city_id)
    REFERENCES city(city_id)
);
INSERT INTO address(address, postal_code, city_id, phone)
VALUES ('Sri Eshwar College', 641202, 1, '9415223356'),
 ('KPR', 641203, 2, '9415223376'),
 ('SRM', 641205, 3, '9415223389'),
 ('AnnaUniversity', 641208, 4, '9415783356');


DELETE FROM address
WHERE address_id = 10;

SELECT * FROM address;
-------------------------------------------------------------------
---------------------------------------------------------------
CREATE TABLE customers(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    address_id INT NOT NULL,

    FOREIGN KEY (address_id)
    REFERENCES address(address_id)
);
-- insert into customers
INSERT INTO customers(first_name, last_name, address_id)
VALUES ('Rupesh', 'Kumar', 5),
('Nikita', 'Sharma', 11),
('Shruti', 'Kumari', 12),
('Sahil', 'Ali', 13);

SELECT * FROM customers;
--------------------------------------------------------------------

CREATE TABLE payment(
    payment_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    amount INT NOT NULL,
    payment_mode VARCHAR(20),
    payment_date TIMESTAMP,

    FOREIGN KEY (customer_id)
    REFERENCES customers(customer_id)
);

INSERT INTO payment(customer_id, amount, payment_mode, payment_date)
VALUES (1, 1500.00, 'UPI', NOW()),
 (2, 2500.00, 'Debit Card', NOW()),

INSERT INTO payment(customer_id, amount, payment_mode, payment_date)
VALUES 
(3, 3500.00, 'Credit Card', NOW()),
   (4, 4500.00, 'Cash', NOW()),
   (5, 1000.00, 'UPI', NOW()),
   (6, 6000.00, 'Cash', NOW());


   DELETE FROM payment 
   WHERE customer_id IN(3, 4);
      SELECT * FROM payment;

-- INNER JOIN  customer and payment

-- SELECT c.customer_id, p.payment_id 
-- FROM customers as c
-- INNER JOIN payment as p 
-- on c.customer_id = p.customer_id;

SELECT * FROM 
customers as c 
INNER JOIN payment as p 
ON p.customer_id = c.customer_id;

-- LEFT JOIN 
-- SELECT * 
-- FROM customers as c 
-- LEFT JOIN payment as p 
-- on p.customer_id = c.customer_id;

SELECT * 
FROM payment as p 
LEFT JOIN customers as c
ON p.customer_id = c.customer_id;

SELECT c.first_name, p.amount, p.payment_mode, p.payment_date
FROM customers as c 
LEFT JOIN payment as p 
ON c.customer_id = p.customer_id;

-- RIGHT JOIN 

SELECT *
FROM customers as c 
RIGHT JOIN payment as p 
ON c.customer_id = p.customer_id;


-- SELECT col_name (*) 
-- FROM first table name 
-- JOIN second table name 
-- ON (condition)

--- OUTER JOIN 
SELECT * 
FROM customers as c 
FULL OUTER JOIN payment as p
ON c.customer_id = p.customer_id;




