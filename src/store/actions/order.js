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
