import React, { useContext, useRef, useState } from "react";
// import CartContext from "../../../../store/Cart-context";
import Input from "../../../UI/Input/Input";
import classes from "./MealForm.module.css";
const MealForm = (props) => {
  // const Cartcntxt = useContext(CartContext);
  // const ContextChangeHandler = (event) => {
  //   event.preventDefault();
  //   const quantity = document.getElementById("amount_" + props.id).value;
  //   Cartcntxt.addItem({ ...props.item, quantity: quantity });
  // };
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {/* <button onClick={ContextChangeHandler}>+ Add</button> */}
      <button>+ Add</button>
    </form>
  );
};
export default MealForm;
