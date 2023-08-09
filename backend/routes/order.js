const express = require("express");
const router = express.Router(); // Create a router instance

const orderController = require("../controllers/order");

// Define a POST route for creating orders
router.post("/shipping", orderController.createOrder);

// Export the router
module.exports = router;
