CREATE TABLE Ratings(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    review TEXT,
    ratings INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Ratings(username, email, review, ratings)
VALUES('kathirvel', 'kathirvel@gmail.com', 'I am annoyed', 1);

SELECT * FROM Ratings;