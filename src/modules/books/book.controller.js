const pool = require('../../db');
const { BookService } = require('./book.service');

const createBook = async (req, res) => {
   const { title, author, genre, isbn, pages, publication_date, publisher, price, photo } = req.body;
   const data = [title, author, genre, isbn, pages, publication_date, publisher, price, photo];
   // console.log(data);
   try {
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
   } catch (error) {
      res.status(400).json({
         message: "Query Operation is Failed",
         error
      });
   };
};

module.exports.BookController = {
   createBook
}