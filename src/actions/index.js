import jsonPlaceholder from "../api/jsonPlaceholder";
import { SIGN_IN, SIGN_OUT, FETCH_TODOS } from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchTodos = () => async dispatch => {
  const response = await jsonPlaceholder.get("/todos?userId=8");
  dispatch({ type: FETCH_TODOS, payload: response.data });
};
