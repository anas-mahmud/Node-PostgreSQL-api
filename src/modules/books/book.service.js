const createBook = "INSERT INTO books (title, author, genre, isbn, pages, publication_date, publisher, price, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

module.exports.BookService = {
   createBook
}