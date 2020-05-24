import React from "react";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

function Hello() {
  const INC_VAL = "INC_VAL";
  function incAction() {
    return { type: INC_VAL, val: 33 };
  }
  const initialState = {
    count: 0
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INC_VAL:
        return { ...state, count: state.count + action.val };
      default:
        return state;
    }
  };
  const logger = createLogger();
  const store = createStore(reducer, applyMiddleware(logger));
  console.log("getstate", store.getState());
  const unsubscribe = store.subscribe(() =>
    console.log("listener", store.getState())
  );

  store.dispatch(incAction());
  store.dispatch(incAction());
  store.dispatch(incAction());
  store.dispatch(incAction());
  store.dispatch(incAction());
  unsubscribe();

  return <div>Redux</div>;
}

export default Hello;
