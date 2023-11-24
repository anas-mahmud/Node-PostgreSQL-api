const pool = require("../../db");
const { BookService } = require("./book.service");

const createBook = async (req, res) => {
  const {
    title,
    author,
    genre,
    isbn,
    pages,
    publication_date,
    publisher,
    price,
    photo,
  } = req.body;
  const data = [
    title,
    author,
    genre,
    isbn,
    pages,
    publication_date,
    publisher,
    price,
    photo,
  ];
  try {
    // check if book isbn is exist
    pool.query(BookService.checkBookIsbn, [isbn], (error, results) => {
      if (results?.rows?.length) {
        res.send("Book isbn already exists");
      } else {
        // insert a new book
        pool.query(BookService.createBook, data, (error, results) => {
          if (error) {
            res.status(400).json({
              status: "error",
              message: "Failed to insert book information",
              error,
            });
          } else {
            res.status(200).json({
              status: "success",
              message: "Book Information inserted successfully",
              data: results?.rows,
            });
          }
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: "Query Operation is Failed",
      error,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    pool.query(BookService.getAllBooks, (error, results) => {
      if (error) {
        res.status(400).json({
          status: "error",
          message: "Failed to get all book information",
          error,
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Get all books information successful",
          data: results?.rows,
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: "Query Operation is Failed",
      error,
    });
  }
};

const getBookById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    pool.query(BookService.getBookById, [id], (error, results) => {
      if (error) {
        res.status(400).json({
          status: "error",
          message: "Failed to get book information by id",
          error,
        });
      } else if (!results?.rows?.length) {
        res.send("Book ID does not exist in database");
      } else {
        res.status(200).json({
          status: "success",
          message: "Get book information by id successful",
          data: results?.rows,
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: "Query Operation is Failed",
      error,
    });
  }
};

const updateBookById = async (req, res) => {
  const id = parseInt(req.params.id);
  const price = req.body.price;
  try {
    // check if book_id is exist
    pool.query(BookService.checkBookId, [id], (error, results) => {
      if (error) {
        res.status(400).json({
          status: "error",
          message: "Failed to find book id",
          error,
        });
      } else if (!results.rows.length) {
        res.send("Book ID does not exist in database");
      } else {
        // update book price by id
        pool.query(
          BookService.updateBookById,
          [price, id],
          (error, results) => {
            if (error) {
              res.status(400).json({
                status: "error",
                message: "Failed to update book info by id",
                error,
              });
            } else {
              res.status(200).json({
                status: "success",
                message: "Update book info by id successful",
                data: results?.rows,
              });
            }
          }
        );
      }
    });
  } catch (error) {
    res.status(400).json({
      message: "Query Operation is Failed",
      error,
    });
  }
};

const deleteBookById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    // check if book_id is exist
    pool.query(BookService.checkBookId, [id], (error, results) => {
      if (error) {
        res.status(400).json({
          status: "error",
          message: "Failed to find book id",
          error,
        });
      } else if (!results.rows.length) {
        res.send("Book ID does not exist in database");
      } else {
        // delete book by id from database
        pool.query(BookService.deleteBookById, [id], (error, results) => {
          if (error) {
            res.status(400).json({
              status: "error",
              message: "Failed to delete book by id",
              error,
            });
          } else {
            res.status(200).json({
              status: "success",
              message: "Delete book by id successful",
              data: results?.rows,
            });
          }
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: "Query Operation is Failed",
      error,
    });
  }
};

module.exports.BookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
