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
      (err) => {
        console.log("MESSAGE", err.message);
        setError(err);
      }
    );

    useEffect(() => {
      if (error) {
        console.log("BLAH BLAH ERROR", error.message);
      } else {
        console.log("NO ERROR SET");
      }
    }, [error]);

    useEffect(() => {
      return () => {
        console.log("USE EFF");
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

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
