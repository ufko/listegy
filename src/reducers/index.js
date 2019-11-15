import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "./authReducer";
import todosReducer from "./todosReducer";
import singleTodoReducer from "./singleTodoReducer";
import photosReducer from "./photosReducer";

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  todos: todosReducer,
  singleTodo: singleTodoReducer,
  photos: photosReducer
});
