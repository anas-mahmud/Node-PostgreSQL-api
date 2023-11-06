const express = require("express");
const { UserController } = require("./user.controller");

const router = express.Router();

// create a user
router.post("/create-user", UserController.createUser);
router.get("/", UserController.getAllUsers);

module.exports.UserRoute = router;