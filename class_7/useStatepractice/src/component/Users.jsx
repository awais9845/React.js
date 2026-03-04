import React, { useState } from "react";
import { students } from "../products/Prouducts";

const Users = () => {
  const [users, setUsers] = useState(["Awais", "Waqas", "Waqar"]);
  const [object, setOjbect] = useState({ id: 1, name: "Awais", grade: "A" });
  const [data, setData] = useState(students);

  //   for array
  const handleUpdateUsers = () => {
    setUsers([...users, "Musa"]);
  };

  //   for object

  const handleUpdateObject = () => {
    setOjbect({ ...object, name: "waqas", rollNo: 23 });
  };

  const handleAddNewStudent = () => {
    setData([...data, { id: 4, name: "Waqas", age: 17, course: "Mern Stack" }]);
  };
  console.log(data);
  // console.log(object);
  return (
    <div>
      <p>users: {users}</p>
      <button onClick={handleUpdateUsers}>Update Users</button>
      <p>object: {object.name}</p>
      <p>rollNo: {object.rollNo}</p>
      <button onClick={handleUpdateObject}>Update object</button>

      {/* students data  */}
      <p>lenth of the array of object {data.length}</p>
      <button onClick={handleAddNewStudent}>add new student</button>
    </div>
  );
};

export default Users;
