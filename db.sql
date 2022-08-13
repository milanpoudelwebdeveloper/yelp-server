--for help \?
--list database \l
--Create database CREATE DATABASE database_name;

--CREATING A TABLE OF PRODUCTS
CREATE TABLE products(
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale boolean
)


--To add new column in the table
ALTER TABLE products ADD COLUMN featured boolean;

--To delete/drop a column from the table
ALTER TABLE products DROP COLUMN featured;

--To delete a table from the database
DROP TABLE table_name;

--To delete the database
DROP DATABASE practice;



--Creating table for yelp database:
CREATE TABLE restaurants (
    id INT,
    name VARCHAR(50),
    location VARCHAR(50),
    price_range INT
);

--Inserting data into the table restaurants:
INSERT INTO restaurants (id, name, location, price_range)  VALUES (123, 'macdonalds', 'newyork', 3);

--To see all the data of a table:
SELECT * FROM restaurants;

--To see specific columns from the table:
SELECT name, price_range FROM restaurants; 

--CREATING TABLE with rules:

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >=1 and price_range <=5)
);

--BIGSERIAL is a big integer type, each time we add to the table, it increases by 1 so it is used to create id.
--HERE check(...) is a check constraint that checks if the price_range is between 1 and 5.
--PRIMARY_KEY is unique and used to identify the element in the table. We can use id, email anything unique as primary key.


--We have to associate the reviews table with the restaurants table: Here the restaurant id of the table
--will act as the foreign key, We will use unqiue id that is stored as bigint to associate them

--here restaurant(id) means we need or use id column of the restaurants table.
CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT  NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <=5)
);

