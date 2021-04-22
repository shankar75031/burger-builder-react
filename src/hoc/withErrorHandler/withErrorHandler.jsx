import React, { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return function Test(props) {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });

    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (e) => {
        console.log("MESSAGE", e.message);
        setError(e);
      }
    );

    useEffect(() => {
      console.log("USE EFFECT");
      return () => {
        console.log("USE EFFECT CLEANUP");
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, []);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <React.Fragment>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>

        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};

export default withErrorHandler;
