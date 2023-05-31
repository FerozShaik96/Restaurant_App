import React, { useContext } from "react";
import MealForm from "./MealForm/MealForm";
import classes from "./Mealtem.module.css";
import CartContext from "../../../store/Cart-context";
const MealItem = (props) => {
  const cartCntxt = useContext(CartContext);
  const Price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCntxt.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.Description}</div>
        <div className={classes.price}>{Price}</div>
      </div>
      <div>
        <MealForm id={props.id} item={props} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
