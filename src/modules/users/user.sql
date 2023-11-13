-- create user TABLE
CREATE TABLE users (
   user_id SERIAL PRIMARY KEY,
   user_name VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL UNIQUE,
   number VARCHAR(255) NOT NULL,
   photo VARCHAR(255),
   role VARCHAR(255)
);

SELECT * FROM users;

SELECT * FROM users WHERE user_id = 10;

INSERT INTO users (user_name, email, password, number, photo, role)
VALUES ('user_name', 'email', '******', '00000000000', 'https:**********', '*****');
