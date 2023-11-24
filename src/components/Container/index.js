import React from "react";
function Container({ children, className }) {
  return (
    <div
      className={className || null}
      style={{
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
