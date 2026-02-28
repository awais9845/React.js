import React from "react";

const ProfileCard = ({ name, age, job, image }) => {
  return (
    <div className="w-50 border m-auto mt-4 p-3 rounded-2xl">
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>job: {job}</p>
      <p>
        {" "}
        <img src={image} alt="" />
      </p>
    </div>
  );
};

export default ProfileCard;
