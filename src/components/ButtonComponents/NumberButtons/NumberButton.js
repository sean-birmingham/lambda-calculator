import React from "react";

const NumberButton = props => {
  return (
    <button onClick={() => { props.displayState(props.button) }} className="numberStyle" >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button}
    </button >
  );
};

export default NumberButton;
