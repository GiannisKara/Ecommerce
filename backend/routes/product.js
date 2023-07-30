const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const Product = require("../models/Product");

// Route for creating a product
router.post(
  "/create",
  productController.uploadImage,
  productController.createProduct
);

// Route for getting all products
router.get("/allproducts", productController.getAllProducts);

router.route("/allproducts/:id", productController.deleteProduct);


module.exports = router;
