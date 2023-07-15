import lotus from "../images/lotus.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartConstext";
import CartProduct from "../components/CartProduct";

const Topnav = () => {
  const [logggedIn, setLoggedIn] = useState(false);

  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const checkout = async () => {
    await fetch("http://localhost:5050/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  return (
    <>
      <div className="w-screen height-[50%] md:text-[25px] lg:text-[30px] bg-gradient-to-r from-violet-200 to-violet-400 border border-none">
        <div className="flex flex-row items-center w-max mx-auto mb-3 ">
          <img className="m-1 h-8 w-auto lg:h-[50px] " src={lotus} />
          <h1 className="text-violet-50">LOTUS</h1>
        </div>
        <div className="flex flex-row justify-evenly">
          <Link
            className="text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700"
            to="/"
          >
            Home
          </Link>
          <div>
            {!logggedIn && (
              <Link
                className="text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700"
                to="./pages/Login"
              >
                LogIn
              </Link>
            )}
            {!logggedIn && <span className="ml-2 mr-2 text-violet-50 ">|</span>}
            {!logggedIn && (
              <Link
                className="text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700"
                to="./pages/Signup"
              >
                SignUp
              </Link>
            )}
            {logggedIn && (
              <h1 className=" text-violet-50 flex flex-row ">
                Logged-In{" "}
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="0.7em"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="lime"
                      d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
                    />
                  </svg>{" "}
                </span>
              </h1>
            )}
          </div>
          <button
            onClick={handleShow}
            className=" p-2 rounded-full transition ease-in-out delay-0 hover:bg-violet-600 duration-700"
          >
            Cart {productCount} items
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path
                fill="#f1f1f1"
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"
              />
            </svg>
          </button>
        </div>
      </div>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-1/2 p-4 rounded">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
            <div className="mb-4">
              {productCount > 0 ? (
                <>
                  <p>Items in your cart</p>
                  {cart.items.map((currentProduct, idx) => (
                    <CartProduct
                      key={idx}
                      id={currentProduct.id}
                      quantity={currentProduct.quantity}
                    ></CartProduct>
                  ))}
                  <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                </>
              ) : (
                <h1>Your cart is empty</h1>
              )}
            </div>
            <div className="flex justify-end">
              {productCount > 0 && (
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded"
                  onClick={checkout}
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topnav;
