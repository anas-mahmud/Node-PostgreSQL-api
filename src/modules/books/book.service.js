const checkBookIsbn = "SELECT isbn FROM books b WHERE b.isbn = $1";

const createBook = "INSERT INTO books (title, author, genre, isbn, pages, publication_date, publisher, price, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

const getAllBooks = "SELECT * FROM books";

const getBookById = "SELECT * FROM books WHERE book_id = $1";

module.exports.BookService = {
   checkBookIsbn,
   createBook,
   getAllBooks,
   getBookById
};