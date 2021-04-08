import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-react-ab9b5-default-rtdb.firebaseio.com/",
});

export default instance;
