import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import classes from "./Auth.module.css";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };

  render() {
    const formElementsArray = [];
    for (const key in this.state.controls) {
      const element = this.state.controls[key];
      console.log(element);
      formElementsArray.push({
        id: key,
        config: element,
      });
    }
    console.log(formElementsArray);

    const form = formElementsArray.map((formElement) => {
      return (
        <Input
          key={formElement.id}
          shouldValidate={formElement.config.validation}
          invalid={!formElement.config.valid}
          inputtype={formElement.config.elementType}
          touched={formElement.config.touched}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
        />
      );
    });

    return (
      <div className={classes.Auth}>
        <form>
          {form}
          <Button buttonType="Success">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

export default Auth;
