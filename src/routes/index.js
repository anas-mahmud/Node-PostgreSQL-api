const express = require("express");
const { UserRoute } = require("../modules/users/user.route");
const { BookRoute } = require("../modules/books/book.route");

const router = express.Router();

// user routes
router.use("/user", UserRoute);

// book routes
router.use("/book", BookRoute);

module.exports = router;