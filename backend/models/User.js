const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    name: "String",
    description: "String",
    category: "String",
    price: "Number",
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", schema);
module.exports = Post;
