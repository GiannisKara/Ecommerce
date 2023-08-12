import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CartConstext";

import axios from "axios";
const ShippingInfo = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("NAME");
  if (!name) {
    navigate("/pages/login");
  }
  const cart = useContext(CartContext);

  const [Category, setCategory] = useState("Credit Card-Stripe");
  const [input, setInput] = useState({
    FullName: "",
    HomeAddress: "",
    City: "",
    Area: "",
    ZIPcode: "",
    Description: "",
    Category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const payment = (e) => {
    e.preventDefault();
    if (
      !input.FullName ||
      !input.HomeAddress ||
      !input.City ||
      !input.Area ||
      !input.ZIPcode
    ) {
      alert("All required fields must be filled");
      console.log("All required fields must be filled");
      return;
    }

    const userEmail = localStorage.getItem("EMAIL");
    const orderData = {
      FullName: input.FullName,
      HomeAddress: input.HomeAddress,
      City: input.City,
      Area: input.Area,
      ZIPcode: input.ZIPcode,
      Description: input.Description,
      Category: Category,
      userEmail: userEmail,
      items: cart.items.map((item) => ({
        productId: item.productData._id,
        productName: item.productData.name,
        size: item.size,
        quantity: item.quantity,
      })),
    };

    axios
      .post("http://localhost:5050/shipping", orderData)
      .then((response) => {
        console.log(response.data);

        if (Category === "Credit Card-Stripe") {
          // Proceed to Stripe checkout
          fetch("http://localhost:5050/checkout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ items: cart.items }),
          })
            .then((checkoutResponse) => checkoutResponse.json())
            .then((checkoutResponse) => {
              if (checkoutResponse.url) {
                window.location.assign(checkoutResponse.url); // Forwarding user to Stripe
              } else {
                console.error(
                  "Invalid response URL from server:",
                  checkoutResponse
                );
              }
            })
            .catch((error) => {
              console.error("Error during checkout fetch:", error);
            });
        } else {
          navigate("/pages/Success");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Hello, {name}!</h3>
        <p className="text-gray-600">
          Please review your shipping information:
        </p>
        <form action="POST">
          <div>
            <textarea
              name="FullName"
              value={input.FullName}
              onChange={handleChange}
              className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 h-10 overflow-hidden align-top"
              type="Fullname"
              placeholder="Full name"
              required
            ></textarea>
            <textarea
              name="HomeAddress"
              value={input.HomeAddress}
              onChange={handleChange}
              className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 h-10 overflow-hidden align-top"
              type="HomeAddress"
              placeholder="Home Address"
              required
            ></textarea>
            <textarea
              name="City"
              value={input.City}
              onChange={handleChange}
              className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 h-10 overflow-hidden align-top"
              type="City "
              placeholder="City"
              required
            ></textarea>
            <textarea
              name="Area"
              value={input.Area}
              onChange={handleChange}
              className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 h-10 overflow-hidden align-top"
              type="Area "
              placeholder="Area"
              required
            ></textarea>
            <textarea
              name="ZIPcode"
              value={input.ZIPcode}
              onChange={handleChange}
              className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 h-10 overflow-hidden align-top"
              type="ZIPcode"
              placeholder="ZIP code"
              required
            ></textarea>
            <div className="flex flex-col">
              <textarea
                name="Description"
                value={input.Description}
                onChange={handleChange}
                className="resize-none m-3 border-2 border-violet-700 rounded-xl focus:outline-violet-50 focus:border-violet-50 overflow-x-hidden align-top w-[70%] h-[10rem] mx-auto"
                type="Description"
                placeholder="Specify unique shipping details if they exisit"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <select
                value={Category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="m-3 text-center w-[30%] mx-auto"
              >
                <option value="Credit Card-Sripe">Credit Card-Sripe</option>
                <option value="Pay on delivery">Pay on delivery</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Products in Your Cart:</h3>
        {cart.items.map((item) => (
          <div key={item.id} className="flex items-center mt-2">
            <div className="mr-2">
              <img
                src={`http://localhost:5050/images/${item.productData.image}`}
                alt={item.productData.name}
                className="w-16 h-16 object-cover"
              />
            </div>

            <div>
              <p className="font-medium">{item.productData.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Size : {item.size}</p>
              <p>
                Price: ${(item.quantity * item.productData.price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link
          onClick={payment}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
};

export default ShippingInfo;
