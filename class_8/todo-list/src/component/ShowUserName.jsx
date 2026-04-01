import React, { useState } from "react";

const ShowUserName = ({ userName }) => {
  const [show, setShow] = useState(false);
  let handleShow = (e) => {
    setShow(true);
  };

  return (
    <div>
      <p>Showing the username</p>
      <p>UserName is {show ? userName : ""}</p>
      <button onClick={handleShow}>show change</button>
    </div>
  );
};

export default ShowUserName;
