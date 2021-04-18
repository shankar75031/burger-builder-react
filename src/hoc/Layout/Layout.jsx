import React, { Component } from "react";
import { connect } from "react-redux";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <SideDrawer
            isAuth={this.props.isAuthenticated}
            closed={this.sideDrawerCloseHandler}
            open={this.state.showSideDrawer}
          />
          <Toolbar
            isAuth={this.props.isAuthenticated}
            drawerToggleClicked={this.sideDrawerToggleHandler}
          />
          <main className={classes.Content}>{this.props.children}</main>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
