CREATE TABLE students_1(
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK(age >= 18),
    is_active BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_students_email
ON students(email);

-- indexes on multiple columns