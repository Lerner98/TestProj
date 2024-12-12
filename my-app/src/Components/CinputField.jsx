import React from "react";

const InputField = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ margin: "0 10px", padding: "5px" }}
      />
    </div>
  );
};

export default InputField;