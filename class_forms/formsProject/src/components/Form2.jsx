import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let handleEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  let handlePassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
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
            onChange={handleEmail}
            // value={email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password</label>
          <input
            className="focus:outline-none border rounded-xl p-2"
            type="password"
            onChange={handlePassword}
            // value={password}
          />
        </div>
        <button className="focus:outline-none border rounded-xl p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form2;
