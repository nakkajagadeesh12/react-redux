import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Counter1 from "./Counter1";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Counter1 />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
