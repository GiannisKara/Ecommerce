const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./connect");
const Product = require("./models/Product");
const User = require("./models/User");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
app.post("/singin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("not exist");
  }
});
//User Sing Up
app.post("/singup", async (req, res) => {
  const { email, password } = req.body;
  const Userdata = {
    email: email,
    password: password,
  };
  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await User.insertMany([Userdata]);
    }
  } catch (e) {
    res.json("not exist");
  }
});
// Stripe Connect
const stripe = require("stripe")(
  "sk_test_51NSON6L5vCUgJ7hdzHo7QE751lFfVqzKY9vu0It4yyYkuxPQSZq3ijz1geV6rH66f4vKeUf8Q3mfQ0SIRi8ggwBf00vFAM33hS"
);

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
