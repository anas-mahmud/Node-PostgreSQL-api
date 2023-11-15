const express = require("express");
const { BookController } = require("./book.controller");

const router = express.Router();

// Create / add a book
router.post('/create-book', BookController.createBook);

// get all books
router.get('/', BookController.getAllBooks);

module.exports.BookRoute = router;