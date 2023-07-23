//REQUIRES
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./connect");
const cookieParser = require("cookie-parser");
const Product = require("./models/Product");
const User = require("./models/User");
require("dotenv").config();
//APP DEPENTENCES
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//CRUD  applications
//Product
app.post("/", async (req, res) => {
  const { StripeKey, Name, Price, Description, CountInStock, Category } =
    req.body;
  const Productdata = {
    StripeKey: StripeKey,
    Name: Name,
    Price: Price,
    Description: Description,
    CountInStock: CountInStock,
    Category: Category,
  };
  await Product.insertMany([Productdata]);
});
//CRUD  applications
//User Log In
app.post("/login", (req, res) => {
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
});
//User Sing Up
app.post("/singup", (req, res) => {
  const { email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      User.create({ email, password: hash })
        .then((user) => res.json({ status: "OK" }))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

//DASHBOARD
const verifyUser = (res, req, next) => {
  const token = req.cookie.token;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, "secret-key", (err, decoded) => {
      if (err) {
        return res.json("Error with token");
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          return res.json("No admin access");
        }
      }
    });
  }
};
app.get("/dashboard", verifyUser, (res, req) => {
  res.json("Success");
});

// Stripe Connect
const stripe = require("stripe")(process.env.STRIPE_URI);

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

// start the Express server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
