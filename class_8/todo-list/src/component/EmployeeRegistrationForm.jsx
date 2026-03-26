import React, { useState } from "react";

const EmployeeRegistrationForm = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    cnic: null,
    designation: "",
    gender: "",
    hobbies: [],
    department: "",
    resume: null,
  });
  const [hobbies, setHobbies] = useState([]);

  // for the name
  let handleName = (e) => {
    let { name, value } = e.target;

    setFormdata({ ...formdata, [name]: value });
  };

  // fot the cnic
  let handleCnic = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  // for the designation
  let handleDes = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  // for the resume
  let handleResume = (e) => {
    let file = e.target.files[0];
    setFormdata({ ...formdata, resume: file });
  };
  // for the hobbies

  let handleHobbies = (e) => {
    let { checked, value } = e.target;

    const updatedHObbies = checked
      ? [...hobbies, value]
      : hobbies.filter((item) => item !== value);
    setHobbies(updatedHObbies);

    setFormdata({ ...formdata, hobbies: updatedHObbies });
  };
  console.log(hobbies);

  // for the gender
  // for the genders
  let handleGender = (e) => {
    let { value, name } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  // for the department

  const handleDepartment = (e) => {
    let { value, name } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  // console.log(formdata);
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="border py-7 px-4 rounded-2xl gap-2 flex flex-col items-center justify-center gap-"
      >
        <h1 className="font-bold">Employee Registration Form</h1>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            className="border rounded-lg p-1"
            id="name"
            name="name"
            value={formdata.name}
            onChange={handleName}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">CNIC:</label>
          <input
            type="number"
            className="border rounded-lg p-1"
            id="cnic"
            name="cnic"
            value={formdata.cnic}
            onChange={handleCnic}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">Designation:</label>
          <input
            type="text"
            className="border rounded-lg p-1"
            name="Designation"
            id="designation"
            value={formdata.designation}
            onChange={handleDes}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4>Gender</h4>
          <div className=" flex gap-2">
            <input
              type="radio"
              name="gender"
              onChange={handleGender}
              value={"male"}
              id="male"
            />
            Male
            <input
              type="radio"
              name="gender"
              onChange={handleGender}
              value={"female"}
              id="female"
            />
            Female
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <h4>Hobbies</h4>
          <div className="flex gap-2 ">
            <input
              type="checkbox"
              onChange={handleHobbies}
              value={"gaming"}
              name="gaming"
              id=""
            />
            Gaming
            <input
              type="checkbox"
              onChange={handleHobbies}
              value={"football"}
              name="football"
              id=""
            />
            Football
            <input
              type="checkbox"
              onChange={handleHobbies}
              value={"cricket"}
              name="cricket"
              id=""
            />
            Cricket
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">Department:</label>
          <select
            name="department"
            onChange={handleDepartment}
            className="border p-2 rounded-lg"
            id=""
          >
            <option value="">Default</option>
            <option value="arts">ARts</option>
            <option value="computer_science">Computer Science</option>
            <option value="medical">Medical</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Upload Resume:</label>
          <input
            type="file"
            onChange={handleResume}
            id="resume"
            name="resume"
            className="border rounded-lg p-1"
          />
        </div>
        <button type="Submit" className="border rounded-lg p-1 w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default EmployeeRegistrationForm;
