import React, { Component, useState } from "react";
import { connect } from "react-redux";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const [sideDrawerIsVisible, setshowSideDrawer] = useState(false);

  const sideDrawerCloseHandler = () => {
    setshowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setshowSideDrawer(!sideDrawerIsVisible);
  };

  return (
    <React.Fragment>
      <div>
        <SideDrawer
          isAuth={props.isAuthenticated}
          closed={sideDrawerCloseHandler}
          open={sideDrawerIsVisible}
        />
        <Toolbar
          isAuth={props.isAuthenticated}
          drawerToggleClicked={sideDrawerToggleHandler}
        />
        <main className={classes.Content}>{props.children}</main>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
