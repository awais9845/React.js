import React from "react";

const Information = (props) => {
  return (
    <div>
      <div className="border flex gap-10">
        {/* <p>data: {JSON.stringify(props.data)}</p> */}
        <p>data: {props.data.name}</p>
        <p> data: {props.data.fatherName}</p>
        <p>data: {props.data.age}</p>
        <p>data: {props.data.grade}</p>
      </div>
    </div>
  );
};

export default Information;
