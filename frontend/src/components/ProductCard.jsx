import React, { useContext } from "react";
import { CartContext } from "../CartConstext";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductsQuantity(product.id);
  // const size = localStorage.getItem("SIZE");
  return (
    <div className="mt-10 mb-10 bg-violet-600 border-2 border-violet-800 text-violet-50 p-2 w-[50%] mx-auto rounded transition ease-in-out delay-0 hover:bg-violet-950 hover:border-violet-50 duration-700 ">
      {productQuantity > 0 ? (
        <>
          <div className="flex flex-col items-center mt-4">
            <label className="w-1/2">In Cart: {productQuantity}</label>
            <label className="mt-10 mx-auto ">Quantity:</label>
            <div className="w-1/2 flex mt-[-25px]">
              
              <button
                className="mt-10 mr-1 mb-10 bg-violet-600 border-2 border-violet-800 text-violet-50 p-2 w-[50%] mx-auto rounded transition ease-in-out delay-0 hover:bg-violet-950 hover:border-violet-50 duration-700 "
                onClick={() => cart.addOneToCart(product.id)}
              >
                +
              </button>
              <button
                className="mt-10 mb-10 bg-violet-600 border-2 border-violet-800 text-violet-50 p-2 w-[50%] mx-auto rounded transition ease-in-out delay-0 hover:bg-violet-950 hover:border-violet-50 duration-700"
                onClick={() => cart.removeOneFromCart(product.id)}
              >
                -
              </button>
            </div>
          </div>
          <button
            className="mt-4 px-4 lg:py-2 bg-red-500 text-white rounded"
            onClick={() => cart.deleteFromCart(product.id)}
          >
            Remove from Cart
          </button>
        </>
      ) : (
        <button
          className=""
          onClick={() => cart.addOneToCart(product.id)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
