const mongoose = require("mongoose");
const Product = require("../models/Product");
const orderSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  HomeAddress: { type: String, required: true },
  City: { type: String, required: true },
  Area: { type: String, required: true },
  ZIPcode: { type: Number, required: true },
  Description: { type: String, required: false },
  Payment: { type: String, required: true },
  userEmail: { type: String, required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      productName: { type: String, required: true },
      size: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
