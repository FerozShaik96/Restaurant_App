import React from "react";
import MealForm from "./MealForm/MealForm";
import classes from "./Mealtem.module.css";
const MealItem = (props) => {
  const Price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.Description}</div>
        <div className={classes.price}>{Price}</div>
      </div>
      <div>
        <MealForm id={props.id} item={props} />
      </div>
    </li>
  );
};
export default MealItem;
