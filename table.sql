-- psql postgres;
--
-- CREATE ROLE gaoutcomes_user WITH LOGIN PASSWORD 'password';
-- ALTER ROLE gaoutcomes_user CREATEDB;
--
-- exit
-- psql -d postgres -U gaoutcomes_user
--
-- CREATE DATABASE gaoutcomes;
--
-- \c gaoutcomes;
--
-- DROP TABLE students;

-- heroku pg:psql postgresql-animate-01864 --app gaoutcomes-backend


CREATE TABLE students (id SERIAL, name VARCHAR(32), dateoffer timestamp, course_id INT);

-- ALTER TABLE students ADD COLUMN interviews INT DEFAULT 0;
-- ALTER TABLE students ADD COLUMN notes TEXT;

INSERT INTO students (name, course_id) VALUES
('Meredith', 1),
('Justin', 2),
('Richard', 2),
('Wincy', 1);



CREATE TABLE courses (id SERIAL, course VARCHAR(32), cohort VARCHAR(32), dategraduated timestamp);

INSERT INTO courses (course, cohort) VALUES
('Software Engineering Immersive', 'Avocado Toast'),
('Software Engineering Immersive', 'Peanut Butter');
