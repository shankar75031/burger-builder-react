import React, { Component } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

export default class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <SideDrawer
            closed={this.sideDrawerCloseHandler}
            open={this.state.showSideDrawer}
          />
          <Toolbar />
          <main className={classes.Content}>{this.props.children}</main>
        </div>
      </React.Fragment>
    );
  }
}
