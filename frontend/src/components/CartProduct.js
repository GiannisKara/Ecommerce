import { CartContext } from "../CartConstext";
import { useContext } from "react";
import { getProdactData } from "../ProductStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProdactData(id);
  return (
    <div>
      <>
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2)}</p>
        <button size="sm" onClick={() => cart.deleteFromCart(id)}>
          remove
        </button>
        <hr></hr>
      </>
    </div>
  );
}

export default CartProduct;
