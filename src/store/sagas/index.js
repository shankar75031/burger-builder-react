import {
  authCheckStateSaga,
  authUserSaga,
  checkAuthTimeoutSaga,
  logoutSaga,
} from "./auth";
import * as actionTypes from "../actions/actionTypes";
import { all, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { initIngredients } from "./burgerBuilder";
import { fetchOrdersSaga, purchaseBurgerSaga } from "./order";

export function* watchAuth() {
  // all will enable running multiple tasks simultaneously
  yield all([
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredients);
}

export function* watchOrder() {
  // takeLatest will cancel any ongoing executions of purchaseBurgerSaga/fetchOrdersSaga and execute only the latest one
  yield takeLatest([
    takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga),
    takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga),
  ]);
}
