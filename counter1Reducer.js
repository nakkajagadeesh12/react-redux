import { INCREMENT_BY } from "./counter1Types.js";

const initialState = {
  count1: 0
};

export const counter1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BY:
      return { ...state, count1: state.count1 + 1 };
    default:
      return state;
  }
};
