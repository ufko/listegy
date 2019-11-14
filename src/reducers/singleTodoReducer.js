import { FETCH_SINGLE_TODO } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SINGLE_TODO:
      return action.payload;
    default:
      return state;
  }
};
