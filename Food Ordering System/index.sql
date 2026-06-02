-- Create customers table
create table customers(
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(30) NOT NULL 
);

--  Insert data in customers
insert into customers (customer_name, phone, address)
values ('Ram', '1234567890', 'Mumbai'),
('Mohan', '0987654321', 'Delhi'),
('Sita', '9987654326', 'Bengaluru'),
('Rita', '8765456789', 'Chennai');

-- Print all customers
select * from customers


create table restaurants(
    restaurant_id SERIAL PRIMARY KEY,
    restaurant_name VARCHAR(20) NOT NULL,
    location VARCHAR(20) NOT NULL,
    opening_hours TIME NOT NULL, 
    closing_hours TIME NOT NULL
);

insert into restaurants(restaurant_name, location, opening_hours, closing_hours)
values('Vignesh', 'Coimbatore', '9:00:00', '17:00:00'),
('Annapoorna', 'Coimbatore', '10:00:00', '20:00:00'),
('Vaishnavi', 'Malumichampatti', '10:00:00', '21:00:00');


create table menu_items(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(20),
    price INT NOT NULL,
    restaurant_id INT NOT NULL, 

    FOREIGN KEY restaurant_id
    REFERENCES restaurants(restaurant_id)
)

create table delivery_partners(
    partner_id SERIAL PRIMARY KEY,
    partner_name VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    vehicle VARCHAR(20) NOT NULL
);

create table orders(
    order_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    partner_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    total_price INT NOT NULL,
    status VARCHAR(20),

    FOREIGN KEY 
    customer_id, restaurant_id, partner_id
    REFERENCES 
    customers(customer_id), 
    restaurants(restaurant_id),
    delivery_partners(partner_id)
);

create table order_items(
    order_id INT NOT NULL ,
    item_id INT NOT NULL,
    restaurant_id NOT NULL,
    quantity INT NOT NULL,

    FOREIGN KEY 
    order_id, restaurant_id, item_id
    REFERENCES 
    orders(order_id), 
    restaurants(restaurant_id), 
    menu_items(item_id)

);

create table payments(
    payment_id SERIAL PRIMARY KEY 
    customer_id INT NOT NULL,
    mode VARCHAR(20) NOT NULL,
    order_id INT NOT NULL
    amount INT NOT NULL,
    current_date TIMESTAMP 
    DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY customer_id, order_id
    REFERENCES customers(customer_id),
    orders(order_id)
);