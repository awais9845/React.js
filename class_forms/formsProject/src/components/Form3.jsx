import React, { useState } from "react";

const Form3 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="h-screen flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="border flex flex-col gap-5 p-5 w-[30%] shadow rounded-3xl"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <input
            className="focus:outline-none border rounded-xl p-2"
            type="email"
            onChange={handleChange}
            value={formData.email}
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password</label>
          <input
            className="focus:outline-none border rounded-xl p-2"
            type="password"
            onChange={handleChange}
            value={formData.password}
            name="password"
          />
        </div>
        <button className="focus:outline-none border rounded-xl p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form3;
