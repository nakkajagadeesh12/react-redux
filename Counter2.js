import React from "react";
import counter2Action from "./counter2Action.js";
import { connect } from "react-redux";

function Counter2(props) {
  return (
    <div>
      <h1>This is Counter2 value : {props.count2}</h1>
      <button onClick={props.counter2Dispatch}>Counter2</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count2: state.counter2.count2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    counter2Dispatch: () => dispatch(counter2Action())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter2);
