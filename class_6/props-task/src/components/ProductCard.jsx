import React from "react";
import Card from "./Card";
import Button from "./Button";
const ProductCard = ({ title, price, description }) => {
  return (
    <div className="w-50 border p-2">
      <h1>Title: {title}</h1>
      <p>Price: {price}</p>
      <p>description: {description}</p>
    </div>
  );
};

export default ProductCard;
