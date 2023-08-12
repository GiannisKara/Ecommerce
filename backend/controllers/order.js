const Order = require("../models/Order");
const mongoose = require("mongoose");

exports.createOrder = async (req, res) => {
  const {
    FullName,
    HomeAddress,
    City,
    Area,
    ZIPcode,
    Description,
    Category,
    userEmail,
    items,
  } = req.body;

  // Basic validation to check required fields
  if (!FullName || !HomeAddress || !City || !Area || !ZIPcode) {
    return res
      .status(400)
      .json({ error: "All required fields must be filled" });
  }

  try {
    const newOrder = new Order({
      FullName,
      HomeAddress,
      City,
      Area,
      ZIPcode,
      Description,
      Category,
      userEmail,
      items: items.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        size: item.size,
        quantity: item.quantity,
      })),
    });

    const savedOrder = await newOrder.save();
    res.json({ status: "OK ", savedOrder });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while saving the order" });
  }
};
