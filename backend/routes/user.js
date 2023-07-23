const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

// User Login
router.post("/login", userController.login);
// User Signup
router.post("/singup", userController.signup);

module.exports = router;
