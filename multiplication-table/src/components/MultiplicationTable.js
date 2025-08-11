import React from "react";

function MultiplicationTable({ lowerBound, upperBound }) {
  const tableRows = [];
  
  for (let i = lowerBound; i <= upperBound; i++) {
    const tableCells = [];
    for (let j = lowerBound; j <= upperBound; j++) {
      tableCells.push(<td key={j}>{i * j}</td>);
    }
    tableRows.push(<tr key={i}>{tableCells}</tr>);
  }

  return (
    <table className="table table-bordered mt-4">
      <thead>
        <tr>
          <th>×</th>
          {Array.from({ length: upperBound - lowerBound + 1 }, (_, i) => (
            <th key={i + lowerBound}>{i + lowerBound}</th>
          ))}
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

export default MultiplicationTable;
