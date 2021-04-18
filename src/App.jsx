import React, { Component, Suspense } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Redirect, Route, Switch, withRouter } from "react-router";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

// lazy loading in react from version >16.6
const Auth = React.lazy(() => import("./containers/Auth/Auth"));
const Checkout = React.lazy(() => import("./containers/Checkout/Checkout"));
const Orders = React.lazy(() => import("./containers/Orders/Orders"));

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route
          path="/auth"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Auth />
            </Suspense>
          )}
        />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route
            path="/orders"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Orders />
              </Suspense>
            )}
          />
          <Route
            path="/checkout"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Checkout />
              </Suspense>
            )}
          />
          <Route
            path="/auth"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Auth />
              </Suspense>
            )}
          />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
