import React, { Component } from "react";
import axiosInstance from "../../../axios-orders";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Sangeetha",
        address: {
          street: "MG Road",
          pinCode: "12345",
          country: "India",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axiosInstance
      .post("/orders.json", order)
      .then((res) => {
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((err) =>
        this.setState({
          loading: false,
        })
      );
  };

  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
        />
        <Input
          inputtype="input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          id="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postal"
          id="postal"
          placeholder="Postal code"
        />
        <Button buttonType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}
