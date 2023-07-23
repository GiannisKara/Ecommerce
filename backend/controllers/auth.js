const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json("Token is missing");
  } else {
    jwt.verify(token, "secret-key", (err, decoded) => {
      if (err) {
        return res.status(401).json("Error with token");
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          return res.status(403).json("No admin access");
        }
      }
    });
  }
};

module.exports = verifyUser;
