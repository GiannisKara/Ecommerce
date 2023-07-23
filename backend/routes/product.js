const express = require("express");
const router = express.Router();
const Product = require ("../models/Product");


router.route("/create").post((req,res) => {
  const StripeKey = req.body.StripeKey;
  const Name = req.body.Name;
  const Price = req.body.Price;
  const Description = req.body.Description;
  const CountInStock = req.body.CountInStock;
  const Category = req.body.Category;
  const newProduct = new Product({
    StripeKey,
    Name,
    Price,
    Description,
    CountInStock,
    Category,
  })
  newProduct.save();
})

router.route("/allproducts").get((req,res)=>{
    Product.find()
    .then(foundProducts => res.json(foundProducts))
})

module.exports = router;

