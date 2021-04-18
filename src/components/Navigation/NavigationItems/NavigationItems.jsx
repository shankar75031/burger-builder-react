import React from "react";
import NavigationItem from "../NavigationItem.jsx/NavigationItem";
import classes from "./NavigationItems.module.css";

export default function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>
  );
}
