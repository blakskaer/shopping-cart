import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new datar from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    console.log("Counter - Rendered");
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return (
      <>
        <span className={classes}>{this.formatCount(this.props.counter)}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className=" btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className=" btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
