const mongoose = require("mongoose");
require("dotenv").config();
//const connectParams = {
// useNewUrlPasrer: true,
// useCreateIndex: true,
// useUnifiedTopology: true,
//};

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.zwmxlzq.mongodb.net/Ecommerce?retryWrites=true&w=majority`;
const connection = mongoose
  .connect(uri) //connectParams)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

module.exports = connection;
