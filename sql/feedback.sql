CREATE TABLE feedback(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL, 
    email VARCHAR(255) NOT NULL,
    feedback TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE feedback 
RENAME COLUMN feedback TO feedback_msg;

