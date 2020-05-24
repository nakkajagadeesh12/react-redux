import { DECREMENT_BY } from "./counter2Types.js";

const initialState = {
  count2: 0
};
const counter2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_BY:
      return { ...state, count2: state.count2 - 1 };
    default:
      return state;
  }
};

export default counter2Reducer;
