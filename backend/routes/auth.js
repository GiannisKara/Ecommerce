const express = require("express");
const verifyUser = require("../controllers/auth");

const router = express.Router();

router.get("/dashboard", verifyUser, (req, res) => {
  res.json("Success");
});

module.exports = router;
