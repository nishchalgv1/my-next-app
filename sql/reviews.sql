CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);