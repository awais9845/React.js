import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateName = () => {
  const name = useSelector((state) => state.changename.name);
  const dispatch = useDispatch();
  console.log(name);
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => UpdateName(dispatch())}>Update name</button>
    </div>
  );
};

export default UpdateName;
