DROP DATABASE IF EXISTS quintonMovies;
CREATE DATABASE quintonMovies;
USE quintonMovies;

CREATE TABLE favMovies (Title VARCHAR (255),
releaseDate YEAR,
rating INT,
movieID INT AUTO_INCREMENT,
PRIMARY KEY (movieID));

INSERT INTO favMovies (title, releaseDate, rating)
VALUES ("Uncut Gems", 2019, 92),
("Bad Boys for Life", 2020, 77),
("Coco", 2017, 97),
("The Wolf of Wall Street", 2013, 79),
("What We Do in the Shadows", 2014, 96),
("Grown Ups", 2010, 10),
("Minions", 2015, 55),
("Hacksaw Ridge", 2016, 85),
("Contagion", 2011, 84),
("Hidden Figures", 2016, 93);

-- Write out the queries that would add the director’s First Name and Last Name into two separate columns.
ALTER TABLE favMovies 
ADD (directorFirst VARCHAR(255),
	directorLast VARCHAR(255));

UPDATE favMovies
SET directorFirst = 'Josh', directorLast = 'Safdie'
WHERE movieID = 1;
UPDATE favMovies
SET directorFirst = 'Bilall', directorLast = 'Fallah'
WHERE movieID = 2;
UPDATE favMovies
SET directorFirst = 'Adrian', directorLast = 'Molina'
WHERE movieID = 3;
UPDATE favMovies
SET directorFirst = 'Martin', directorLast = 'Scorsese'
WHERE movieID = 4;
UPDATE favMovies
SET directorFirst = 'Jemaine', directorLast = 'Clement'
WHERE movieID = 5;
UPDATE favMovies
SET directorFirst = 'Dennis', directorLast = 'Dugan'
WHERE movieID = 6;
UPDATE favMovies
SET directorFirst = 'Pierre', directorLast = 'Coffin'
WHERE movieID = 7;
UPDATE favMovies
SET directorFirst = 'Mel', directorLast = 'Gibson'
WHERE movieID = 8;
UPDATE favMovies
SET directorFirst = 'Steven', directorLast = 'Soderbergh'
WHERE movieID = 9;
UPDATE favMovies
SET directorFirst = 'Theodore', directorLast = 'Melfi'
WHERE movieID = 10;
-- Create a query that puts the names together.
SELECT CONCAT(directorFirst, ' ', directorLast) AS director FROM favMovies;

-- Create a query to put the list in alphabetical order by the last name from A-Z
SELECT * FROM favMovies ORDER BY directorLast ASC;

-- After you order the list, remove the Movies where the Last Name ends with ”R-Z”
SELECT directorLast
FROM favMovies
WHERE directorLast 
REGEXP '^[.*[abcdefghijklmnopqABCDEFGHIJKLMNOPQ].*$]' 
AND directorLast 
NOT REGEXP '^[.*[rstuvwxyzRSTUVWXYZ].*$]'
-- Write a query where the first three appear
LIMIT 3;

SELECT * FROM favMovies;