const { UserService } = require("./user.service");
const pool = require('../../db');

const createUser = async (req, res) => {
   const { user_name, email, password, number, photo, role } = req.body;
   console.log(user_name, email, password, number, photo, role);
   try {
      await pool.query(UserService.createUser, [user_name, email, password, number, photo, role], (error, results) => {
         if (error) console.log(error);;
         res.status(200).json({
            status: "success",
            message: "User inserted successfully",
            data: results
         })
      })
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: "Failed to insert user",
         error: error.message
      })
   }
};

const getAllUsers = async (req, res) => {
   try {
      await pool.query(UserService.getAllUsers, (error, results) => {
         if (error) console.log(error);;
         res.status(200).json({
            status: "success",
            message: "User inserted successfully",
            data: results.rows
         })
      })
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: "Failed to insert user",
         error: error.message
      })
   }
};

module.exports.UserController = {
   createUser,
   getAllUsers
};