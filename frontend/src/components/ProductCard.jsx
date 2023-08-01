import { useContext } from "react";
import { CartContext } from "../CartConstext";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductsQuantity(product._id);
  console.log(cart.items);
  return (
    <div className="border border-gray-300 rounded p-4">
      
      {productQuantity > 0 ? (
        <>
          <div className="flex items-center mt-4">
            <label className="w-1/2">In Cart: {productQuantity}</label>
            <div className="w-1/2 flex">
              <button
                className="px-2 py-1 mx-2 bg-blue-500 text-white rounded"
                onClick={() => cart.addOneToCart(product._id)}
              >
                +
              </button>
              <button
                className="px-2 py-1 mx-2 bg-blue-500 text-white rounded"
                onClick={() => cart.RemoveOneFromCart(product._id)}
              >
                -
              </button>
            </div>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => cart.deleteFromCart(product._id)}
          >
            Remove from Cart
          </button>
        </>
      ) : (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => cart.addOneToCart(product._id)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
