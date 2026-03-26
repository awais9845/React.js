import React, { useState } from "react";

const Form1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("email" + email + "Password" + password);
    setEmail("");

    setPassword("");
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
            value={email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password</label>
          <input
            className="focus:outline-none border rounded-xl p-2"
            type="password"
            onChange={handlePassword}
            value={password}
          />
        </div>
        <button className="focus:outline-none border rounded-xl p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form1;
