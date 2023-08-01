const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");

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

// Middleware for handling file upload
exports.uploadImage = upload.single("file");

// Controller for creating a product
exports.createProduct = (req, res) => {
  const { StripeKey, Name, Price, Description, CountInStock, Category } =
    req.body;
  const image = req.file ? req.file.filename : req.body.image; // Check if image exists in req.body

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
exports.getAllProducts = (req, res) => {
  Product.find()
    .then((foundProducts) => res.json(foundProducts))
    .catch((err) => res.json(err));
};

//Controller for deleting a product

exports.deleteProduct = (req,res) => {
  Product.findByIdAndDelete({_id:req.params.id})
  .then(doc => console.log(doc))
  .catch((err) => console.log(err))
}

exports.getSingleProduct = (req, res) => {
  Product.find({_id:req.params._id})
    .then((foundProducts) => res.json(foundProducts))
    .catch((err) => res.json(err));
};