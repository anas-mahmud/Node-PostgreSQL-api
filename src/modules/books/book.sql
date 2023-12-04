CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  isbn VARCHAR(255) UNIQUE NOT NULL,
  pages VARCHAR(255) NOT NULL,
  publication_date DATE NOT NULL,
  publisher VARCHAR(255) NOT NULL,
  price VARCHAR(255) NOT NULL,
  photo VARCHAR(255)
);

SELECT * FROM books;

INSERT INTO books (title, author, genre, isbn, pages, publication_date, publisher, price, photo)
VALUES ('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 'fantasy', '9780747532740', 223, '1997-06-26', 'Bloomsbury', 24.95, 'https://ibb.co/tL84VCB');


SELECT isbn FROM books b WHERE b.isbn = $1;