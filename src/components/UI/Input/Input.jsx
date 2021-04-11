import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = <input className={classes.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea {...props} className={classes.InputElement} />;
    default:
      inputElement = <input {...props} className={classes.InputElement} />;
      break;
  }
  return (
    <div className={classes.Input}>
      <label htmlFor="" className={classes.Label}>
        {props.label}
      </label>
      {inputElement}
    </div>
  );
}
