import React from "react";

const Display = props => {
  return <div className="display">
    {/* Display any props data here */}
    {props.displayState}
  </div>;
};

export default Display;