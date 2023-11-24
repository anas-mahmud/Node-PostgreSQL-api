const express = require("express");
const { BookController } = require("./book.controller");

const router = express.Router();

// Create / add a book
router.post("/create-book", BookController.createBook);

// get all books
router.get("/", BookController.getAllBooks);

// get book by id
router.get("/:id", BookController.getBookById);

// update book by id
router.put("/update-book/:id", BookController.updateBookById);

// delete book by id
router.delete("/delete-book/:id", BookController.deleteBookById);

module.exports.BookRoute = router;
