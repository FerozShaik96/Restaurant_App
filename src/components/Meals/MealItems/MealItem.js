import React from "react";
import classes from "./Mealtem.module.css";
const MealItem = (props) => {
  const Price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{Price}</div>
      </div>
      <div></div>
    </li>
  );
};
export default MealItem;
