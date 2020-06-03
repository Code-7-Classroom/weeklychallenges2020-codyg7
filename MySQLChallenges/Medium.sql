DROP DATABASE IF EXISTS sqlChallenges;
CREATE DATABASE sqlChallenges;
USE sqlChallenges;

CREATE TABLE favMovies (Title VARCHAR (255),
releaseDate YEAR,
rating INT,
movieID INT AUTO_INCREMENT,
PRIMARY KEY (movieID));

INSERT INTO favMovies (title, releaseDate, rating)
VALUES ("End Game", 2019, 94),
("Thor: Ragnorok", 2017, 93),
("Rogue One: A Star Wars Story", 2016, 84),
("Terminator: Dark Fate", 2019, 70),
("WDeadpool", 2016, 85),
("The Martian", 2015, 91),
("The Cloverfield Paradox", 2018, 20),
("Independence Day", 1996, 65),
("El Camino: A Breaking Bad Movie", 2019, 91),
("The Lord of the Rings: The Fellowship of the Ring", 2001, 91);

-- -- Create a query that pulls all movies, in order of release date, where the title includes the letter “s”.
SELECT title, releaseDate FROM favMovies WHERE title LIKE "%s%" ORDER BY releaseDate ASC;

SELECT * FROM favMovies;