import { createStore } from "redux";
import { counter1Reducer } from "./counter1Reducer.js";

export const store = createStore(counter1Reducer);
