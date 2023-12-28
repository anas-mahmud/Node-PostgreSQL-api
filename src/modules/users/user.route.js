const express = require("express");
const { UserController } = require("./user.controller");

const router = express.Router();

// create a user route
router.post("/create-user", UserController.createUser);

// get all users route
router.get("/", UserController.getAllUsers);

// get user by id route
router.get("/:id", UserController.getUserById);

// update user by id route
router.put("/update-user/:id", UserController.updateUserById);

// delete user by id route
router.delete("/delete-user/:id", UserController.deleteUserById);

module.exports.UserRoute = router;
