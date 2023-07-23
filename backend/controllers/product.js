const Product = require("../models/Product");

exports.createProduct = (req, res) => {
  const { StripeKey, Name, Price, Description, CountInStock, Category } =
    req.body;
  const newProduct = new Product({
    StripeKey,
    Name,
    Price,
    Description,
    CountInStock,
    Category,
  });
  newProduct
    .save()
    .then(() => res.json({ status: "OK" }))
    .catch((err) => res.json(err));
};

exports.getAllProducts = (req, res) => {
  Product.find()
    .then((foundProducts) => res.json(foundProducts))
    .catch((err) => res.json(err));
};
