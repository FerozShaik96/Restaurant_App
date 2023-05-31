import React, { useState, useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};
const CartProvider = (props) => {
  const [cartState, dispatchCardAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // const [enterdItem, updateItems] = useState([]);
  const addItemHandler = (item) => {
    // cartContext.items.push(item);
    // updateItems((prev) => {
    //   return [...prev, item];
    // });
    dispatchCardAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemHandler = (id) => {};
  const cartContext = {
    items: cartState.items,
    // items:enterdItem ,
    totalAmount: cartState.totalAmount,
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
