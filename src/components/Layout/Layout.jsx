import React from "react";

export default function Layout(props) {
  return (
    <React.Fragment>
      <div>
        Toolbar, Sidedrawer, Backdrop
        <main>{props.children}</main>
      </div>
    </React.Fragment>
  );
}
