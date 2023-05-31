import React, { useContext } from "react";
import CartContext from "../../../store/Cart-context";
import CartItems from "../CartItems/CartItem";
import Modal from "../../UI/Modal/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          // <li key={items.id}>
          //   <span>
          //     item:-{items.name} price:-{items.price} quantity {items.amount}
          //   </span>
          // </li>
          <CartItems
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onclose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclose}>
          cancle
        </button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
