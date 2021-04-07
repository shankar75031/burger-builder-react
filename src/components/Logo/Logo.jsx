import React from "react";
import logo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";

export default function Logo(props) {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={logo} alt="FrozenBits Logo" />
    </div>
  );
}
