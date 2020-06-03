DROP DATABASE IF EXISTS sqlChallenges;
CREATE DATABASE sqlChallenges;
USE sqlChallenges;

CREATE TABLE cars (
	make VARCHAR (50),
    model VARCHAR (50),
    year INT
    );
    
    INSERT INTO cars (make, model, year)
    VALUES ("Veloster", "hyundai", 2016),
    ("Altima", "Nissan", 2013),
    ("CL type s", "Acura", 2001);
    
    INSERT INTO cars(make, model, year)
    VALUES ("Civic", "Honda", 2005),
    ("WRX", "Subaru", 2020);
    
    SELECT * FROM cars;
    