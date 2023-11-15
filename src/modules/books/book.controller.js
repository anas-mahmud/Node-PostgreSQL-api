const pool = require('../../db');
const { BookService } = require('./book.service');

const createBook = async (req, res) => {
   const { title, author, genre, isbn, pages, publication_date, publisher, price, photo } = req.body;
   const data = [title, author, genre, isbn, pages, publication_date, publisher, price, photo];
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
                     error
                  })
               } else {
                  res.status(200).json({
                     status: "success",
                     message: "Book Information inserted successfully",
                     data: results?.rows
                  })
               }
            });
         }
      })
   } catch (error) {
      res.status(400).json({
         message: "Query Operation is Failed",
         error
      });
   };
};

const getAllBooks = async (req, res) => {
   try {
      pool.query(BookService.getAllBooks, (error, results) => {
         if (error) {
            res.status(400).json({
               status: "error",
               message: "Failed to get all book information",
               error
            })
         } else {
            res.status(200).json({
               status: "success",
               message: "Get all books information successful",
               data: results?.rows
            })
         }
      })
   } catch (error) {
      res.status(400).json({
         message: "Query Operation is Failed",
         error
      });
   }
};

module.exports.BookController = {
   createBook,
   getAllBooks
}