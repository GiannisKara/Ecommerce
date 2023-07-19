import { CartContext } from "../CartConstext";
import { useContext } from "react";
import { getProdactData } from "../ProductStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProdactData(id);
  return (
    <div className="mx-auto text-center border-2 bg-violet-600 bg-opacity-50 mb-3 border-violet-600 rounded w-[100%] p-2 lg:text-[20px] lg:w-[45%]">
      <>
        <h3>{productData.title}</h3>
        <p>Quantity: {quantity}</p>
        <p>Price: ${(quantity * productData.price).toFixed(2)}</p>
        <button className="p-1 border-2 border-red-900 lg:text-[18px] text-[13px] rounded text-red-50 m-5 mx-auto bg-red-600 transition ease-in-out delay-0 hover:text-red-600 hover:bg-red-50 hover:border-red-600 duration-700" onClick={() => cart.deleteFromCart(id)}>
          Remove
        </button>
        <hr></hr>
      </>
    </div>
  );
}

export default CartProduct;
