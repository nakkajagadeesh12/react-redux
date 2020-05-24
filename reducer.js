import { combineReducers } from "redux";
import counter1Reducer from "./counter1Reducer.js";
import counter2Reducer from "./counter2Reducer.js";

const reducer = combineReducers({
  counter1: counter1Reducer,
  counter2: counter2Reducer
});

export default reducer;
