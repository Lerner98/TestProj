import React, { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";
import Result from "./components/Result";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
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