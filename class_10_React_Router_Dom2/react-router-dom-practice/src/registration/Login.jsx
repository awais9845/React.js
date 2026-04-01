import React, { useState } from "react";

const Login = () => {
  const [data, setDAta] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  let handleChange = (e) => {
    let { value, name } = e.target;
    setDAta({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!data.password) {
      setError("Fill out the password");
      return;
    } else if (data.password.length < 5) {
      setError("Must be more than 5 characters");
      return;
    }
    console.log(data);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="border w-[20%] px-2 py-6 rounded"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={data.email}
            className="p-1 rounded-xl border"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password</label>
          <input
            onChange={handleChange}
            name="password"
            value={data.password}
            className="p-1 rounded-xl border"
            type="passwrod"
          />
        </div>
        <p className="text-[10px] text-red-700"> {error}</p>
        <button className="p-1 mt-1 rounded-xl border w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
