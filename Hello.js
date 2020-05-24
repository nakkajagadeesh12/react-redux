import React from "react";

function Hello() {
  return <div>Redux</div>;
}

export default Hello;

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
