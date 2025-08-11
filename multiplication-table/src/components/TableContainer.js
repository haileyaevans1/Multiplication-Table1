import React, { useState } from "react";
import MultiplicationTable from "./MultiplicationTable";
import { ThemeProvider, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function TableContainer() {
  const [title, setTitle] = useState("Multiplication Table");
  const [lowerBound, setLowerBound] = useState(1);
  const [upperBound, setUpperBound] = useState(10);

  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <div className={`container ${theme}`}>
      <h1>{title}</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter table title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          value={lowerBound}
          onChange={(e) => setLowerBound(e.target.value)}
          placeholder="Enter lower bound"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          value={upperBound}
          onChange={(e) => setUpperBound(e.target.value)}
          placeholder="Enter upper bound"
        />
      </div>

      <button onClick={toggleTheme} className="btn btn-primary">
        Toggle Theme
      </button>

      <MultiplicationTable lowerBound={lowerBound} upperBound={upperBound} />
    </div>
  );
}

export default TableContainer;
