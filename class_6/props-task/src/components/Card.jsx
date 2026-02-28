import React from "react";

const Card = ({ children }) => {
  return (
    <div>
      <Card>{children}</Card>
    </div>
  );
};

export default Card;
