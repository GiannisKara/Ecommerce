const Product = require("../models/Product");

module.exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send({ error: err, msg: "Something went wrong!" });
  }
};

module.exports.saveProduct = (req, res) => {
  const { productData } = req.body;

  Product.create(productData)
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { productData } = req.body;

  Product.findByIdAndUpdate(id, productData)
    .then(() => res.send("Updated successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  Product.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
