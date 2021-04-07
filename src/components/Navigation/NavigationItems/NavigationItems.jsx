import React from "react";
import NavigationItem from "../NavigationItem.jsx/NavigationItem";
import classes from "./NavigationItems.module.css";

export default function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
}
