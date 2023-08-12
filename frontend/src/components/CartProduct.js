import React from "react";

function CartProduct(props) {
  const { id, quantity, onRemove, productData } = props;

  const size = localStorage.getItem(`SIZE_${id}`); // Use 'productId' to get the correct size
  if (!productData) {
    return null; // or a loading state, error message, etc.
  }

  return (
    <div className="mx-auto text-center border-2 bg-violet-600 bg-opacity-50 mb-3 border-violet-600 rounded w-[100%] p-2 lg:text-[20px] lg:w-[45%]">
      <>
        <h3>{productData.name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Size: {size}</p>
        <p>Price: ${(quantity * productData.price).toFixed(2)}</p>
        <button
          className="p-1 border-2 border-red-900 lg:text-[18px] text-[13px] rounded text-red-50 m-5 mx-auto bg-red-600 transition ease-in-out delay-0 hover:text-red-600 hover:bg-red-50 hover:border-red-600 duration-700"
          onClick={() => onRemove(id)}
        >
          Remove
        </button>
        <hr />
      </>
    </div>
  );
}

export default CartProduct;
