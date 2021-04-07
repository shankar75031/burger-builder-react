import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

export default function Layout(props) {
  return (
    <React.Fragment>
      <div>
        <Toolbar />
        <main className={classes.Content}>{props.children}</main>
      </div>
    </React.Fragment>
  );
}
