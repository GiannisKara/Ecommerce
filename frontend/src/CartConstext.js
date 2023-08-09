import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext({
  items: [],
  getProductsQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  productData: {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5050/allproducts")
      .then((res) => {
        setCartProducts([]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function getProductsQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(_id) {
    const existingItemIndex = cartProducts.findIndex(
      (product) => product.id === _id
    );
    if (existingItemIndex !== -1) {
      setCartProducts((prevCartProducts) =>
        prevCartProducts.map((product, index) =>
          index === existingItemIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      axios
        .get(`http://localhost:5050/products/${_id}`)
        .then((res) => {
          const stripe = res.data.stripe;
          const productData = res.data;
          setCartProducts((prevCartProducts) => [
            ...prevCartProducts,
            { stripe: stripe, id: _id, quantity: 1, productData },
          ]);
        })
        .catch((err) => console.log(err));
    }
  }

  function removeOneFromCart(id) {
    const existingItemIndex = cartProducts.findIndex(
      (product) => product.id === id
    );
    if (existingItemIndex !== -1) {
      setCartProducts((prevCartProducts) =>
        prevCartProducts.map((product, index) =>
          index === existingItemIndex
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((currentProduct) => currentProduct.id !== id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;

    if (!loading) {
      cartProducts.forEach((cartItem) => {
        const product = cartItem.productData;
        if (product) {
          totalCost += product.price * cartItem.quantity;
        }
      });
    }

    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductsQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
