//const express = require("express");
//const Product = require("../models/Product");
//const ProductStore = require("../ProductStore");
//
//const seedRouter = express.Router();
//
//seedRouter.get("/", async (req, res) => {
//  await Product.deleteMany({});
//  const createProducts = await Product.insertMany(ProductStore.ProductArray);
//  res.send({ createProducts });
//});
//
//// Register middleware functions in the router
//
//module.exports = seedRouter;
