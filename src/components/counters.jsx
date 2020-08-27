import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;

    let listStyle = {
      listStyleType: "none",
    };

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <ul style={listStyle}>
          {counters.map((counter) => {
            return (
              <li key={counter.id}>
                <Counter
                  key={counter.id}
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  counter={counter}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Counters;
