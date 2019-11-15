import jsonPlaceholder from "../api/jsonPlaceholder";
import unsplash from "../api/unsplash";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_TODOS,
  FETCH_SINGLE_TODO,
  FETCH_IMAGES
} from "./types";

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

export const fetchSingleTodo = todoId => async dispatch => {
  const response = await jsonPlaceholder.get(`/todos/${todoId}`);
  dispatch({ type: FETCH_SINGLE_TODO, payload: response.data });
};

export const fetchImages = photoIds => async dispatch => {
  const photos = [];
  for (let i = 0; i < photoIds.length; i++) {
    const response = await unsplash.get(`/photos/${photoIds[i]}`);
    photos.push(response.data);
  }
  dispatch({ type: FETCH_IMAGES, payload: photos });
};
