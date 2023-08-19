const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

exports.uploadImage = upload.single("file");

// Controller for creating a product
exports.createProduct = (req, res) => {
  const { StripeKey, Name, Price, Description, CountInStock, Category } =
    req.body;
  const image = req.file ? req.file.filename : req.body.image;

  const newProduct = new Product({
    StripeKey,
    Name,
    Price,
    Description,
    CountInStock,
    Category,
    image,
  });

  newProduct
    .save()
    .then(() => res.json({ status: "OK" }))
    .catch((err) => res.json(err));
};

// Controller for getting all products
exports.getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Parse page as integer
    const itemsPerPage = 3; // Define items per page
    const category = req.query.category;
    const query = category ? { Category: category } : {};

    const count = await Product.countDocuments(query);
    const items = await Product.find(query)
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    const pageCount = Math.ceil(count / itemsPerPage);

    res.json({
      pagination: {
        count,
        pageCount,
      },
      items,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Server error" });
  }
};

//Controller for deleting a product

exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

exports.getSingleProduct = (req, res) => {
  const productId = req.params._id;
  console.log("Backend Product ID:", productId);
  if (!productId) {
    return res.status(400).json({ error: "Product ID not provided" });
  }

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  Product.findById(productId)
    .then((foundProduct) => {
      if (!foundProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json({
        status: "OK",
        id: foundProduct._id,
        description: foundProduct.Description,
        image: foundProduct.image,
        stripe: foundProduct.StripeKey,
        name: foundProduct.Name,
        price: foundProduct.Price,
      });
    })
    .catch((err) => {
      console.error("Error fetching product data:", err);
      res.status(500).json({ error: "Internal server error" });
    });
};
