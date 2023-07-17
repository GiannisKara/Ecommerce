const express = require("express");
const router = express.Router();
const {
  getProduct,
  saveProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");

router.get("/get", getProduct);
router.post("/save", saveProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);

module.exports = router;
