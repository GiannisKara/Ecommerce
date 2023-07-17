const express = require("express");
const router = express.Router();
{/* const {
  getProduct,
  saveProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product"); */}

const Product = require ("../models/Product");

router.route("/create").post((req,res) => {
  const stripe = req.body.stripe;
  const title = req.body.title;
  const price = req.body.price;
  const categorie = req.body.categorie;
  const image = req.body.image;
  const newProduct = new Product({
    stripe,
    title,
    price,
    categorie,
    image
  })
  newProduct.save();
})


//router.get("/get", getProduct);
//router.post("/save", saveProduct);
//router.delete("/delete/:id", deleteProduct);
//router.put("/update/:id", updateProduct);

module.exports = router;
