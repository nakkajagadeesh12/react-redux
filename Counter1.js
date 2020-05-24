import React from "react";
import counter1Action from "./counter1Action.js";
import { connect } from "react-redux";

function Counter1(props) {
  return (
    <div>
      <h1>This is Counter1 value : {props.count1}</h1>
      <button onClick={props.counter1Dispatch}>Counter1</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count1: state.count1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    counter1Dispatch: () => dispatch(counter1Action())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter1);
