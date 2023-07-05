const express = require("express");
const router = express.Router();
const ProductPostModel = require("../models/Product");

router.use(express.json()); // Add this line

router.route("/").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const newPost = new ProductPostModel({
    title,
    description,
  });

  newPost
    .save()
    .then((savedPost) => {
      res.status(200).json(savedPost);
    })
    .catch((error) => {
      console.error("Error saving post", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
