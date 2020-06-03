DROP DATABASE IF EXISTS sqlChallenges;
CREATE DATABASE sqlChallenges;
USE sqlChallenges;

CREATE TABLE cars (
	make VARCHAR (50),
    model VARCHAR (50),
    year INT
    );
    
    INSERT INTO cars (model, make, year)
    VALUES ("Veloster", "hyundai", 2016),
    ("Altima", "Nissan", 2013),
    ("CL type s", "Acura", 2001),
    ("Civic", "Honda", 2005),
    ("WRX", "Subaru", 2020);
    
    INSERT INTO cars(model, make, year)
    VALUES ("Supra", "Toyota", 2020),
    ("230", "BMW", 2010),
    ("Lancer", "Mitsubishi", 2010);

ALTER TABLE Cars 
ADD (carPrice DECIMAL(10,2),
	carColor VARCHAR(255));
  
UPDATE cars 
SET carPrice = 13000.00 , carColor = "red"
WHERE model = "Veloster";

UPDATE cars 
SET carPrice = 17000.00 , carColor = "red"
WHERE model = "Altima";

UPDATE cars 
SET carPrice = 3000.00, carColor = "black"
WHERE model = "CL type s";

UPDATE cars 
SET carPrice = 2000.00, carColor = "grey"
WHERE model = "Civic";

UPDATE cars 
SET carPrice = 27000.00, carColor = "blue"
WHERE model = "WRX";

UPDATE cars 
SET carPrice = 50000.00, carColor = "orange"
WHERE model = "Supra";

UPDATE cars 
SET carPrice = 3000.00, carColor = "grey"
WHERE model = "230";

UPDATE cars 
SET carPrice = 5000.00, carColor = "white"
WHERE model = "Lancer";

SELECT CONCAT(make, " ", model) AS carMakeAndModel FROM cars;

SELECT 
    make, 
    COUNT(make)
FROM
    cars
GROUP BY make
HAVING COUNT(make) > 1;

SELECT * FROM cars;