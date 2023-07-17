const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  stripe: {
    type: String,
    required: true,
    
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
