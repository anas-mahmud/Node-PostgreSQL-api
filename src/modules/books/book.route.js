const express = require("express");
const { BookController } = require("./book.controller");

const router = express.Router();

// Create / add a book
router.post('/create-book', BookController.createBook);

// get all books
router.get('/', BookController.getAllBooks);

// get book by id
router.get('/:id', BookController.getBookById);

module.exports.BookRoute = router;