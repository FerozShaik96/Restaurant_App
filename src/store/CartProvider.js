import React, { useCallback, useState } from "react";
import CartContext from "./Cart-context";
const CartProvider = (props) => {
  const [enterdItem, updateItems] = useState([]);
  const addItemHandler = (item) => {
    // cartContext.items.push(item);
    updateItems((prev) => {
      return [...prev, item];
    });
  };
  const removeItemHandler = (id) => {};
  const cartContext = {
    totalAmount: 0,
    items: enterdItem,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
