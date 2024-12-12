import React, { useState } from "react";
import InputField from "./Components/CinputField";
import Button from "./Components/Cbutton";
import Result from "./Components/CResult";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <InputField value={num1} onChange={setNum1} />
        <InputField value={num2} onChange={setNum2} />
      </div>
      <Button onClick={handleAddition} />
      <Result value={result} />
    </div>
  );
}

export default App;
