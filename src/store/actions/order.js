import axiosInstance from "../../axios-orders";
import * as actionTypes from "./actionTypes";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (err) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: err,
  };
};

export const purchaseBurgerStart = (orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axiosInstance
      .post("/orders.json", orderData)
      .then((res) => {
        dispatch(purchaseBurgerSuccess(res.data.name, orderData));
      })
      .catch((err) => dispatch(purchaseBurgerFail(err)));
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  console.log(orders);
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (err) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: err,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    axiosInstance
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        console.log("SUCCESS");
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchOrdersFail(err));
      });
  };
};
