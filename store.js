import { createStore } from "redux";
import counter1Reducer from "./counter1Reducer.js";

const store = createStore(counter1Reducer);

export default store;
