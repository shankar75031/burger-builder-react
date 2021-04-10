import React from "react";
import classes from "./Order.module.css";

export default function Order(props) {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad(1)</p>
      <p>
        Price: <strong>INR 500.45</strong>
      </p>
    </div>
  );
}
