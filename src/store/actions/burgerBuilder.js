import axiosInstance from "../../axios-orders";
import * as actionTypes from "./actionTypes";

export const addIngredient = (ingredientName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const removeIngredient = (ingredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axiosInstance
      .get("/ingredients.json")
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
