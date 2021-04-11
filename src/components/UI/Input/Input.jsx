import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          className={classes.InputElement}
        />
      );
      break;

    case "select":
      inputElement = (
        <select value={props.value} className={classes.InputElement}>
          {props.elementConfig.options.map((option) => {
            return <option value={option.value}>{option.displayValue}</option>;
          })}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          className={classes.InputElement}
        />
      );
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
