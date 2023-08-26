const Order = require("../models/Order");
const Product = require("../models/Product");

exports.createOrder = async (req, res) => {
  const {
    FullName,
    HomeAddress,
    City,
    Area,
    ZIPcode,
    Description,
    Payment,
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
    // Create the order
    const newOrder = new Order({
      FullName,
      HomeAddress,
      City,
      Area,
      ZIPcode,
      Description,
      Payment,
      userEmail,
      items: items.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        size: item.size,
        quantity: item.quantity,
      })),
    });

    const savedOrder = await newOrder.save();

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        console.log(`Product with ID ${item.productId} not found`);
        return res
          .status(404)
          .json({ error: `Product with ID ${item.productId} not found` });
      }

      // Check if there's enough stock to fulfill the order
      if (product.CountInStock < item.quantity) {
        return res.status(400).json({ error: "Insufficient stock" });
      }

      product.CountInStock -= item.quantity;
      try {
        await product.save();
      } catch (error) {
        console.error("Error while updating product stock:", error);
        return res
          .status(500)
          .json({ error: "An error occurred while processing the order" });
      }
    }

    res.json({ status: "OK", savedOrder });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while saving the order" });
  }
};
