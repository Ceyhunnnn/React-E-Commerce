import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
   className="time-area"
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <span style={{ marginBottom: "5px" }}>{type}</span>
      <p style={{ fontWeight: "bold",  }} className="time">{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
