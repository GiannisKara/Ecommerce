import { useContext } from "react";
import { CartContext } from "../CartConstext";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductsQuantity(product.id);
  console.log(cart.items);
  return (
    <div className="border border-gray-300 rounded p-4">
      <img src={product.image} alt="t" />
      <h3 className="text-xl font-bold">{product.title}</h3>
      <p>{product.price}</p>
      {productQuantity > 0 ? (
        <>
          <div className="flex items-center mt-4">
            <label className="w-1/2">In Cart: {productQuantity}</label>
            <div className="w-1/2 flex">
              <button
                className="px-2 py-1 mx-2 bg-blue-500 text-white rounded"
                onClick={() => cart.addOneToCart(product.id)}
              >
                +
              </button>
              <button
                className="px-2 py-1 mx-2 bg-blue-500 text-white rounded"
                onClick={() => cart.RemoveOneFromCart(product.id)}
              >
                -
              </button>
            </div>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => cart.deleteFromCart(product.id)}
          >
            Remove from Cart
          </button>
        </>
      ) : (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => cart.addOneToCart(product.id)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
