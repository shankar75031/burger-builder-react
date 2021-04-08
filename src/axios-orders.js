import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://burger-builder-react-ab9b5-default-rtdb.firebaseio.com/",
});

export default axiosInstance;
