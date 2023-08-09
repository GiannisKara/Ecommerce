const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// User Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const token = jwt.sign(
          { email: user.email, role: user.role },
          "secret-key",
          { expiresIn: "2d" }
        );
        res.cookie("token", token);

        return res.json({
          status: "OK",
          role: user.role,
          name: user.name,
          email: user.email,
        });
      } else {
        return res.status(401).json({ error: "Incorrect password" });
      }
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// User Signup
const signup = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.json({ status: "USER ALREADY EXISTS" });
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
