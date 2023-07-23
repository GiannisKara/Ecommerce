const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// User Login
const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, role: user.role },
            "secret-key",
            { expiresIn: "2d" }
          );
          res.cookie("token", token);

          return res.json({ status: "OK", role: user.role });
        } else {
          return res.json("Incorrect password");
        }
      });
    } else {
      return res.json("User not exists");
    }
  });
};

// User Signup
const signup = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (email) {
      return res.json({ status: "USER ALREADY EXIST" });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          User.create({ name, email, password: hash })
            .then((user) => res.json({ status: "OK" }))
            .catch((err) => res.json(err));
        })
        .catch((err) => res.json(err));
    }
  });
};

module.exports = { login, signup };
