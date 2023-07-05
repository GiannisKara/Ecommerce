const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    title: "String",
    description: "String",
    //category: String,
    //price: Number,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", schema);
module.exports = Post;
