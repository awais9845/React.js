import React, { useState } from "react";

const SignUp = () => {
  let allData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(allData);
  const [formError, setFormError] = useState(allData);

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData(allData);
  };

  let handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // for email
    if (name === "email") {
      if (!value) {
        setFormError({ ...formError, email: "required" });
      } else if (!value.includes("@")) {
        setFormError({ ...formError, email: "must include @" });
      } else {
        setFormError({ ...formError, email: "" });
      }
    }

    // for password
    if (name === "password") {
      if (value.length < 5) {
        setFormError({
          ...formError,
          password: "less than 5 * characters",
        });
      } else {
        setFormError({ ...formError, password: "" });
      }
    }

    // condition
  };
  //   console.log(formData);
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
          <label htmlFor="">email</label>
          <input
            type="email"
            className="p-2 rounded-lg border"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <p className="text-red-600 text-[12px]">{formError.email}</p>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="">Password</label>
          <input
            className="p-2 rounded-lg border"
            type="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
          <p className="text-red-600 text-[12px]">{formError.password}</p>
        </div>
        <button className="p-2 rounded-lg border w-full">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
