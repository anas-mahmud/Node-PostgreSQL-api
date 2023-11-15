const { UserService } = require("./user.service");
const pool = require('../../db');

const createUser = async (req, res) => {
   const { user_name, email, password, number, photo, role } = req.body;
   const data = [user_name, email, password, number, photo, role];
   try {
      // check if email is exist 
      pool.query(UserService.checkEmailExist, [email], (error, results) => {
         if (results?.rows?.length) {
            res.send("Email already exists");
         } else {
            // insert a new user
            pool.query(UserService.createUser, data, (error, results) => {
               if (error) {
                  res.status(400).json({
                     status: "error",
                     message: "Failed to insert user",
                     error
                  })
               } else {
                  res.status(200).json({
                     status: "success",
                     message: "User inserted successfully",
                     data: results?.rows
                  })
               }
            })
         }
      });

   } catch (error) {
      res.status(400).json({
         message: "Query Operation is Failed",
         error
      })
   }
};

const getAllUsers = async (req, res) => {
   try {
      pool.query(UserService.getAllUsers, (error, results) => {
         if (error) {
            res.status(400).json({
               status: "error",
               message: "Failed to get all users",
               error
            })
         } else {
            res.status(200).json({
               status: "success",
               message: "Get all users successful",
               data: results?.rows
            })
         }
      })
   } catch (error) {
      res.status(400).json({
         message: "Query Operation is Failed",
         error
      })
   }
};

const getUserById = async (req, res) => {
   const id = parseInt(req.params.id);
   try {
      pool.query(UserService.getUserById, [id], (error, results) => {
         if (error) {
            res.status(400).json({
               status: "error",
               message: "Failed to get user by id",
               error
            })
         } else {
            res.status(200).json({
               status: "success",
               message: "Get user by id successful",
               data: results?.rows
            })
         }
      })
   } catch (error) {
      res.status(400).json({
         message: "Query Operation is Failed",
         error
      })
   }
};

const deleteUserById = async (req, res) => {
   const id = parseInt(req.params.id);
   try {
      pool.query(UserService.getUserById, [id], (error, results) => {
         if (error) {
            res.status(400).json({
               status: "error",
               message: "Failed to user by id",
               error
            })
         } else if (!results.rows.length) {
            res.send("User ID does not exist in database")
         } else {
            pool.query(UserService.deleteUserById, [id], (error, results) => {
               if (error) {
                  res.status(400).json({
                     status: "error",
                     message: "Failed to delete user by id",
                     error
                  });
               } else {
                  res.status(200).json({
                     status: "success",
                     message: "Delete user by id successful",
                     data: results?.rows
                  });
               }
            });
         }
      });
   } catch (error) {
      res.status(400).json({
         message: "Query Operation is Failed",
         error
      });
   };
};

const updateUserById = async (req, res) => {
   const id = parseInt(req.params.id);
   const { password } = req.body;
   try {
      pool.query(UserService.getUserById, [id], (error, results) => {
         if (error) {
            res.status(400).json({
               status: "error",
               message: "Failed to user by id",
               error
            })
         } else if (!results.rows.length) {
            res.send("User ID does not exist in database")
         } else {
            pool.query(UserService.updateUserById, [password, id], (error, results) => {
               if (error) {
                  res.status(400).json({
                     status: "error",
                     message: "Failed to update user by id",
                     error
                  });
               } else {
                  res.status(200).json({
                     status: "success",
                     message: "Update user by id successful",
                     data: results?.rows
                  });
               }
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

module.exports.UserController = {
   createUser,
   getAllUsers,
   getUserById,
   updateUserById,
   deleteUserById
};