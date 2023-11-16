import React from "react";
import "./index.css";
function GeneralTitle({ title }) {
  return (
    <div className="title-area">
      <div className="red-box"></div>
      <p className="red-title">{title}</p>
    </div>
  );
}

export default GeneralTitle;
