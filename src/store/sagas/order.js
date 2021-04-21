import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axiosInstance from "../../axios-orders";

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const res = yield axiosInstance.post(
      "/orders.json?auth=" + action.token,
      action.orderData
    );
    yield put(actions.purchaseBurgerSuccess(res.data.name, action.orderData));
  } catch (err) {
    yield put(actions.purchaseBurgerFail(err));
  }
}
