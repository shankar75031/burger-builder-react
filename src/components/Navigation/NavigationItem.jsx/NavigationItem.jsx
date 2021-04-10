import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

export default function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.link} exact activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
}
