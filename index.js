import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ textAlign: "center" }}>
          <Counter1 />
          <Counter2 />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
