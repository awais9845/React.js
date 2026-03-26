import React, { useState } from "react";

const EmployeeRegistrationFormPro = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    cnic: null,
    designation: "",
    gender: "",
    hobbies: [],
    department: "",
    resume: null,
  });

  let handleChange = (e) => {
    let { name, value, files, checked } = e.target;
    // for the checkbox

    if (name === "hobbies") {
      if (checked) {
        setFormdata({ ...formdata, hobbies: [...formdata.hobbies, value] });
      } else {
        setFormdata({
          ...formdata,
          hobbies: [...formdata.hobbies.filter((items) => items !== value)],
        });
      }
    } else if (name === "resume") {
      setFormdata({ ...formdata, resume: files[0] });
    } else {
      setFormdata({ ...formdata, [name]: value });
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
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
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">CNIC:</label>
          <input
            type="number"
            className="border rounded-lg p-1"
            id="cnic"
            name="cnic"
            value={formdata.cnic || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">Designation:</label>
          <input
            type="text"
            className="border rounded-lg p-1"
            name="designation"
            id="designation"
            value={formdata.designation}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4>Gender</h4>
          <div className=" flex gap-2">
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              value={"male"}
              id="male"
            />
            Male
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
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
              onChange={handleChange}
              value={"gaming"}
              name="gaming"
              id=""
            />
            Gaming
            <input
              type="checkbox"
              onChange={handleChange}
              value={"football"}
              name="football"
              id=""
            />
            Football
            <input
              type="checkbox"
              onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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

export default EmployeeRegistrationFormPro;
