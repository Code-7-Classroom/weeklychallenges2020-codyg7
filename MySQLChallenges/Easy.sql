DROP DATABASE IF EXISTS sqlChallenges;
CREATE DATABASE sqlChallenges;
USE sqlChallenges;
CREATE TABLE favBooks (Title VARCHAR (255),
publishDate YEAR,
authorFirst VARCHAR (255),
authorLast VARCHAR (255),
bookID INT AUTO_INCREMENT,
PRIMARY KEY (bookID));

INSERT INTO favBooks (Title, publishDate, authorFirst, authorLast)
VALUES ("Lord of the Flies", 1954-09-17, "William", "Golding"),
    ("Lord of the Rings", 1954-07-29, "J.R.R", "Tolkien"),
    ("The Hobbit", 1937-07-21, "J.R.R", "Tolkien"),
    ("To Kill a Mockingbird", 1960-07-11, "Harper", "Lee"),
    ("Game of Thrones", 1996-08-01, "George R. R.", "Martin");

INSERT INTO favBooks (Title, publishDate, authorFirst, authorLast)
VALUES ("The Giver", 1993-02-01, "Lois", "Lowry"),
("The war of worlds", 1898-01-20, "H.G.", "Wells");
DELETE FROM favBooks ORDER BY publishDate ASC LIMIT 1;
SELECT COUNT(*) FROM favBooks;

SELECT * FROM favBooks;