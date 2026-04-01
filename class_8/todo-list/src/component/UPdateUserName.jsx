import React from "react";

const UPdateUserName = ({ userName, setUserName }) => {
  let handleUserName = (e) => {
    let { value } = e.target;
    setUserName(value);
  };
  return (
    <div>
      <p>Update Username</p>
      <input
        type="text"
        onChange={handleUserName}
        value={userName}
        id=""
        className="border p-2 rounded"
      />
    </div>
  );
};

export default UPdateUserName;
