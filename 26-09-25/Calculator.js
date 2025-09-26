import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "320px", borderRadius: "20px" }}>
        <h3 className="text-center mb-3">Calculator</h3>

        <input
          type="text"
          className="form-control mb-3 text-end fs-4"
          value={input}
          readOnly
        />

        <div className="d-grid gap-2">
          <div className="btn-group" role="group">
            <button className="btn btn-danger flex-fill" onClick={handleClear}>C</button>
            <button className="btn btn-primary flex-fill" onClick={() => handleClick("/")}>/</button>
            <button className="btn btn-primary flex-fill" onClick={() => handleClick("*")}>*</button>
            <button className="btn btn-primary flex-fill" onClick={() => handleClick("-")}>-</button>
          </div>

          <div className="btn-group" role="group">
            <button className="btn btn-light flex-fill" onClick={() => handleClick("7")}>7</button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick("8")}>8</button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick("9")}>9</button>
            <button className="btn btn-primary flex-fill" onClick={() => handleClick("+")}>+</button>
          </div>

          <div className="btn-group" role="group">
            <button className="btn btn-light flex-fill" onClick={() => handleClick("4")}>4</button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick("5")}>5</button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick("6")}>6</button>
            <button className="btn btn-success flex-fill" onClick={handleEqual}>=</button>
          </div>

          <div className="btn-group" role="group">
            <button className="btn btn-light flex-fill" onClick={() => handleClick("1")}>1</button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick("2")}>2</button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick("3")}>3</button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick("0")}>0</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
