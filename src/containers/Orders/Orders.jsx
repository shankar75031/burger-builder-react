import React, { Component } from "react";
import axiosInstance from "../../axios-orders";
import Order from "../../components/Order/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axiosInstance
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ orders: fetchedOrders, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  }

  render() {
    console.log(this.state.orders);
    return (
      <div>
        {this.state.orders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          );
        })}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axiosInstance);
