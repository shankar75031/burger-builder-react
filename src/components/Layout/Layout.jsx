import React from "react";
import classes from "./Layout.module.css";

export default function Layout(props) {
  return (
    <React.Fragment>
      <div>
        Toolbar, Sidedrawer, Backdrop
        <main className={classes.Content}>{props.children}</main>
      </div>
    </React.Fragment>
  );
}
