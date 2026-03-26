import React, { useState } from "react";

const SignUpPro = () => {
  let allData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(allData);
  const [formError, setFormError] = useState(allData);

  //   validation function
  const validate = (data) => {
    let errors = {};

    // for email
    if (!data.email) {
      errors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "invalid email format";
    } else {
      errors.email = "";
    }
    // for password

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 5) {
      errors.password = "must be 5 * charaters";
    } else {
      errors.password = "";
    }
    return errors;
  };
  const handleChange = (e) => {
    e.preventDefault();

    let { name, value } = e.target;

    const updatedForm = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedForm);

    const errors = validate(updatedForm);

    setFormError(errors);
  };

  const handleSignUpPro = (e) => {
    e.preventDefault();

    const errors = validate(formData);
    setFormError(errors);
    if (Object.keys(errors).length === 0) {
      console.log("form submitted successfully", formData);
      setFormData(allData);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        action=""
        onSubmit={handleSignUpPro}
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

export default SignUpPro;
