import React from "react";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: 1,
          name: "shushi",
          description: "Helthy",
          price: "25.36",
          amount: "35.5",
        },
      ].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>35.96</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>cancle</button>
        <button className={classes.button}>order</button>
      </div>
    </div>
  );
};
export default Cart;
