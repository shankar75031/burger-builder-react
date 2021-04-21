import {
  authCheckStateSaga,
  authUserSaga,
  checkAuthTimeoutSaga,
  logoutSaga,
} from "./auth";
import * as actionTypes from "../actions/actionTypes";
import { takeEvery } from "@redux-saga/core/effects";
import { initIngredients } from "./burgerBuilder";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredients);
}
