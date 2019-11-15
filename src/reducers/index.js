import { combineReducers } from "redux";

import authReducer from "./authReducer";
import todosReducer from "./todosReducer";
import singleTodoReducer from "./singleTodoReducer";
import photosReducer from "./photosReducer";

export default combineReducers({
  auth: authReducer,
  todos: todosReducer,
  singleTodo: singleTodoReducer,
  photos: photosReducer
});
