import React, { useState } from "react";
import Table from "./Table";

const sellers = [
  {
    id: 1,
    name: "Ali Traders",
    product: "Mobile Phones",
    price: 50000,
    city: "Lahore",
    call: "09239098098",
    remove: "❌",
  },
  {
    id: 2,
    name: "Ahmed Electronics",
    product: "Laptops",
    price: 120000,
    city: "Karachi",
    call: "09239098098",
    remove: "❌",
  },
  {
    id: 3,
    name: "Usman Store",
    product: "Headphones",
    price: 3000,
    city: "Islamabad",
    call: "09239098098",
    remove: "❌",
  },
  {
    id: 4,
    name: "Hassan Mart",
    product: "Smart Watches",
    price: 8000,
    city: "Faisalabad",
    call: "09239098098",
    remove: "❌",
  },
];

const Seller = () => {
  const [sellersData, setSellerData] = useState(sellers);
  // for the delete
  let handleDelete = (id) => {
    setSellerData((prev) => prev.filter((remove) => remove.id !== id));
  };
  return (
    <Table data={setSellerData}>
      <thead>
        <tr className="font-bold">
          <td>ID</td>
          <td>Name</td>
          <td>Product</td>
          <td>Price</td>
          <td>City</td>
          <td>Contact Number</td>
          <td>Data Remove</td>
        </tr>
      </thead>
      <tbody>
        {sellersData.map((data, index) => (
          <tr key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.product}</td>
            <td>{data.price}</td>
            <td>{data.city}</td>
            <td>{data.call}</td>
            <td onClick={() => handleDelete(data.id)}>{data.remove}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Seller;
