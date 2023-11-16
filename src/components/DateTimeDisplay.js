import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <span style={{ marginBottom: "5px" }}>{type}</span>
      <p style={{ fontWeight: "bold", fontSize: "32px" }}>{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
