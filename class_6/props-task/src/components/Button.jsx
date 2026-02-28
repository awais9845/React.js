import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={className}
      style={{
        border: "1px solid white",
        padding: "2px",
        width: "100px",
        color: "white",
        margin: "center",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
