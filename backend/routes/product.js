const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.route("/create").post(productController.createProduct);
router.route("/allproducts").get(productController.getAllProducts);

module.exports = router;
