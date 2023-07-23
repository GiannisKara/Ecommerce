//REQUIRES
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./connect");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const users = require("./routes/user");
const auth = require("./routes/auth");
const product = require("./routes/product");
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
app.use(users);
app.use(auth);
app.use(product);

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
