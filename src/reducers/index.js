import { combineReducers } from "redux";

import authReducer from "./authReducer";
import todosReducer from "./todosReducer";
import singleTodoReducer from "./singleTodoReducer";

export default combineReducers({
  auth: authReducer,
  todos: todosReducer,
  singleTodo: singleTodoReducer
});
