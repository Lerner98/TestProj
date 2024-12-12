import React from "react";

const Result = ({ value }) => {
  return (
    <div style={{ marginTop: "20px", fontSize: "20px" }}>
      = <span>{value}</span>
    </div>
  );
};

export default Result;