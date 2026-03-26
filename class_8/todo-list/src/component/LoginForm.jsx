import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    setFormData({ ...formData, email, password });
  };
  console.log(formData);
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
            onChange={handleEmail}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="">Password</label>
          <input
            className="p-2 rounded-lg border"
            type="password"
            onChange={handlePassword}
          />
        </div>
        <button className="p-2 rounded-lg border w-full">Sign up</button>
      </form>
    </div>
  );
};

export default LoginForm;
