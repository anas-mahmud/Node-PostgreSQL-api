const checkBookIsbn = "SELECT isbn FROM books b WHERE b.isbn = $1";

const checkBookId = "SELECT book_id FROM books b WHERE b.book_id = $1"

const createBook = "INSERT INTO books (title, author, genre, isbn, pages, publication_date, publisher, price, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

const getAllBooks = "SELECT * FROM books";

const getBookById = "SELECT * FROM books WHERE book_id = $1";

const updateBookById = "UPDATE books SET price = $1 WHERE book_id = $2";

module.exports.BookService = {
   checkBookIsbn,
   checkBookId,
   createBook,
   getAllBooks,
   getBookById,
   updateBookById
};