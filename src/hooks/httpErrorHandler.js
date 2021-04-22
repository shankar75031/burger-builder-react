import { useEffect, useState } from "react";

export default (axiosInstance) => {
  const [error, setError] = useState(null);

  const reqInterceptor = axiosInstance.interceptors.request.use((req) => {
    setError(null);
    return req;
  });

  const resInterceptor = axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      console.log("MESSAGE", err.message);
      setError(err);
    }
  );

  useEffect(() => {
    return () => {
      console.log("USE EFFECT CLEANUP");
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
