import { createContext, useState } from "react";
import { getProdactData } from "./ProductStore";

export const CartContext = createContext({
  items: [],
  getProductsQuantity: () => {},
  addOneToCart: () => {},
  RemoveOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setcardProducts] = useState([]);

  //Quantity Function
  function getProductsQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }
  //add product to cart funcrion
  function addOneToCart(id) {
    const quantity = getProductsQuantity(id);
    if (quantity === 0) {
      //if product is not in the cart
      setcardProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      //product is in the cart
      setcardProducts(
        cartProducts.map((product) =>
          product.id === id ? { ...product, quantity: quantity + 1 } : product
        )
      );
    }
  }
  // remove one item from cart function
  function RemoveOneFromCart(id) {
    const quantity = getProductsQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setcardProducts(
        cartProducts.map((product) =>
          product.id === id ? { ...product, quantity: quantity - 1 } : product
        )
      );
    }
  }
  // delete product from cart function
  function deleteFromCart(id) {
    //<logic>
    //[array] if an boject meets a condition , add the object to the array
    //[product id:1] [product id:2] [product id:3]
    //[product id:1] [product id:3]
    //</logic>
    setcardProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  //SUM the total of cart funcrion
  function getTotalCost() {
    let totalcost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProdactData(cartItem.id);
      totalcost += productData.price * cartItem.quantity;
    });
    return totalcost;
  }

  const contextValue = {
    items: cartProducts,
    getProductsQuantity,
    addOneToCart,
    RemoveOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
