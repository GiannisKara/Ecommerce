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
const ITEMS_PER_PAGE = 1;

router.get("/allproducts", productController.getAllProducts);

router.get("/products/:_id", productController.getSingleProduct);

router.delete("/allproducts/:_id", productController.deleteProduct);

module.exports = router;
