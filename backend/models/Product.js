const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  stipe: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
