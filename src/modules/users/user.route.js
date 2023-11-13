const express = require("express");
const { UserController } = require("./user.controller");

const router = express.Router();

// create a user
router.post("/create-user", UserController.createUser);

// get all users
router.get("/", UserController.getAllUsers);

// get user by id
router.get("/:id", UserController.getUserById);

// update user
router.put("/update-user/:id", UserController.updateUserById);

// delete user
router.delete("/delete-user/:id", UserController.deleteUserById);

module.exports.UserRoute = router;