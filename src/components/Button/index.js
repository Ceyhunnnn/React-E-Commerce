import React from "react";

import "./index.css";
function Button({ title, width = "", height = "", onClick }) {
  return (
    <div
      className="custom-button"
      onClick={onClick}
      style={{ width: width, height: height }}
    >
      {title}
    </div>
  );
}

export default Button;
