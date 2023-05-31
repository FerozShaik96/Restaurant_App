import React, { useContext } from "react";
import CartContext from "../../../../store/Cart-context";
import Input from "../../../UI/Input/Input";
import classes from "./MealForm.module.css";
const MealForm = (props) => {
  const Cartcntxt = useContext(CartContext);
  const ContextChangeHandler = (event) => {
    event.preventDefault();
    Cartcntxt.addItem(props.item);
  };
  return (
    <form className={classes.form}>
      {console.log("inside ", Cartcntxt.items)}
      <Input
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
      <button onClick={ContextChangeHandler}>+ Add</button>
    </form>
  );
};
export default MealForm;
