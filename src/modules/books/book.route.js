const express = require("express");
const { BookController } = require("./book.controller");

const router = express.Router();

// Create / add a book route
router.post("/create-book", BookController.createBook);

// get all books route
router.get("/", BookController.getAllBooks);

// get book by id route
router.get("/:id", BookController.getBookById);

// update book by id route
router.put("/update-book/:id", BookController.updateBookById);

// delete book by id route
router.delete("/delete-book/:id", BookController.deleteBookById);

module.exports.BookRoute = router;
