import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        +
      </button>
    </div>
  );
};

export default Button;