import React, { useState } from "react";
import Table from "./Table";
const studets = [
  {
    id: 1,
    name: "Awais ",
    fahter_name: "Sartaj Khan",
    call: "80898098098",
    city: "Peshawar",
    remove: "❌",
  },
  {
    id: 2,
    name: "Hamza khan ",
    fahter_name: "Sartaj Khan",
    call: "80898098098",
    city: "Peshawar",
    remove: "❌",
  },
  {
    id: 3,
    name: "Waqas khan ",
    fahter_name: "Sartaj Khan",
    call: "80898098098",
    city: "Peshawar",
    remove: "❌",
  },
  {
    id: 4,
    name: "Waqar khan",
    fahter_name: "Sartaj Khan",
    call: "80898098098",
    city: "Peshawar",
    remove: "❌",
  },
];
const Students = () => {
  const [studetData, setStudentData] = useState(studets);
  let handleRemove = (id) => {
    setStudentData((prev) => prev.filter((remove) => remove.id !== id));
  };
  return (
    <Table data={setStudentData}>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>fahter_name</td>
          <td>Call</td>
          <td>City</td>
          <td>Remove</td>
        </tr>
      </thead>

      <tbody>
        {studetData.map((data, index) => (
          <tr key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.fahter_name}</td>
            <td>{data.call}</td>
            <td>{data.city}</td>
            <td onClick={() => handleRemove(data.id)}>{data.remove}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Students;
