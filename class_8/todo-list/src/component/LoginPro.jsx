import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSignUp = (e) => {
    let { value } = e.target;
    setFormData({ ...formData, email: value });
  };
  console.log(formData);
  //   console.log(formData);
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        action=""
        onSubmit={handleSignUp}
        className="w-[45%] border shadow-2xl py-10 px-7 flex flex-col gap-5 items-center justify-center rounded-2xl"
      >
        <h1>Login Form</h1>
        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="p-2 rounded-lg border"
            onChange={(e) => ({ ...formData, email })}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="">Password</label>
          <input
            className="p-2 rounded-lg border"
            type="password"
            onChange={(e) => ({ ...formData, password })}
          />
        </div>
        <button className="p-2 rounded-lg border w-full">Sign up</button>
      </form>
    </div>
  );
};

export default LoginForm;
