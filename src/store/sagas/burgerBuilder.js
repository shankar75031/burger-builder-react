import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axiosInstance from "../../axios-orders";

export function* initIngredients() {
  try {
    const res = yield axiosInstance.get("/ingredients.json");
    yield put(actions.setIngredients(res.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
