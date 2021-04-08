import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      };
    }

    UNSAFE_componentWillMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (err) => {
          console.log(err);
          this.setState({ error: err });
        }
      );
    }

    errorConfirmedHandler = () => {
      console.log("INSIDE errorconfirmedHandler");
      this.setState({ error: null });
    };

    render() {
      console.log("RENDERING ERROR HANDLER");
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            Hello
            {this.state.error ? this.state.error.message : null}
          </Modal>

          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
