const mongoose = require("mongoose");
require("dotenv").config();
//const connectParams = {
// useNewUrlPasrer: true,
// useCreateIndex: true,
// useUnifiedTopology: true,
//};

//const uri = process.env.MONGO_URI;
const connection = mongoose
  .connect(process.env.MONGO_URI) //connectParams)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

module.exports = connection;
