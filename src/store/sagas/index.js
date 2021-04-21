import { authUserSaga, checkAuthTimeoutSaga, logoutSaga } from "./auth";
import * as actionTypes from "../actions/actionTypes";
import { takeEvery } from "@redux-saga/core/effects";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
}
