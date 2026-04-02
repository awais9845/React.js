import React from "react";
import { useParams } from "react-router-dom";
const BillsDescription = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>userDetail: {id} </h1>
    </div>
  );
};

export default BillsDescription;
