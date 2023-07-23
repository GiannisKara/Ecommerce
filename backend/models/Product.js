const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  StripeKey: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    require: true,
  },
  Description: {
    type: String,
    required: true,
  },
  CountInStock: {
    type: Number,
    required: true,
  },
  Category: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
