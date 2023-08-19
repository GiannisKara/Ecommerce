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
  const page = parseInt(req.query.page) || 1;
  const category = req.query.category;
  const sort = req.query.sort; // Get the sorting parameter
  const direction = req.query.direction || "asc"; // Get the direction parameter

  const query = category ? { Category: category } : {};
  try {
    const count = await Product.countDocuments(query);
    const itemsPerPage = 3;

    let queryBuilder = Product.find(query)
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    if (sort) {
      queryBuilder = queryBuilder.sort({ [sort]: direction }); // Apply sorting and direction
    }

    const items = await queryBuilder.exec();
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
  const productId = req.params._id;
  Product.findByIdAndDelete(productId)
    .then((doc) => {
      if (!doc) {
        // Product not found
        return res.status(404).json({ error: "Product not found" });
      }
      // Product successfully deleted
      res.status(200).json({ message: "Product deleted successfully" });
    })
    .catch((err) => {
      // Handle any error that occurs during deletion
      res.status(500).json({ error: "An error occurred" });
    });
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
