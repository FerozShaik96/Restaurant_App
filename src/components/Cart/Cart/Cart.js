import React from "react";
import Modal from "../../UI/Modal/Modal";
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
        <li key={items.id}>{items.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>35.96</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>cancle</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};
export default Cart;
