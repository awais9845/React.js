import React, { useState } from "react";

const FormUI = () => {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    password: "",
    gender: "",
    hobbies: [],
    department: "",
    resume: null,
  });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // for gender
  let handleGender = (e) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value);
  };

  // for department
  let handleDepartment = (e) => {
    let { name, value } = e.target;
    console.log("name", name, "value", value);
  };

  let handleHobbies = (e) => {
    let { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, hobbies: [...formData.hobbies, value] });
    } else {
      setFormData({
        ...formData,
        hobbies: formData.hobbies.filter((items) => items !== value),
      });
    }
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 w-100 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-center">Registration Form</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name"
          className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          name="name"
        />

        {/* CNIC */}
        <input
          type="text"
          placeholder="Enter CNIC"
          className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          name="cnic"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          name="password"
        />

        {/* Gender */}
        <div>
          <p className="font-semibold mb-1">Gender:</p>
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value={"male"}
              onChange={handleGender}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value={"female"}
              onChange={handleGender}
            />{" "}
            Female
          </label>
        </div>

        {/* Hobbies */}
        <div>
          <p className="font-semibold mb-1">Hobbies:</p>
          <input
            type="checkbox"
            name="reading"
            value={"reading"}
            onChange={handleHobbies}
          />
          <label className="mr-3"> Reading </label>

          <input
            type="checkbox"
            name="traveling"
            value={"traveling"}
            onChange={handleHobbies}
          />
          <label className="mr-3"> Traveling </label>

          <input
            type="checkbox"
            name="singing"
            value={"singing"}
            onChange={handleHobbies}
          />
          <label className="mr-3"> Singing </label>
        </div>

        {/* Department */}
        <select
          className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleDepartment}
        >
          <option>Select Department</option>
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Software Engineering</option>
        </select>

        {/* File Upload */}
        <input type="file" className="border p-2 rounded-xl" />

        {/* Submit */}
        <button className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormUI;
