import React, { Component } from "react";
import Order from "../../components/Order/Order/Order";

export default class Orders extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}
