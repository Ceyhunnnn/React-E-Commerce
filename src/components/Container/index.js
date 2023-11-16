import React from "react";
function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "0px 10px",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
