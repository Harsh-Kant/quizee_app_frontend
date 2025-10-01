import React, { useState } from "react";
import InputField from "./InputField";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
    console.log(form);
  };
  const [errors, setErrors] = useState({})
  const handleSubmit = () => {
      let newErrors={}
      for( const [key, value] of Object.entries(form)){
          if(!value){
              newErrors[key] = `Invalid ${key}`
          }
      }
      setErrors(newErrors)
  }
  return (
    <div>
      <div className=" mx-auto flex flex-col max-w-sm items-center gap-x-4 gap-y-12">
        <div className="flex flex-col items-center gap-4">
          <InputField
            label="Email"
            type="email"
            value={errors.email?errors.email:form.email}
            onChange={(e) => handleChange(e, "email")}
          />
          <InputField
            label="Password"
            type={errors.password?"text":"password"}
            value={errors.password?errors.password:form.password}
            onChange={(e) => handleChange(e, "password")}
          />
        </div>
        <button onClick={handleSubmit} className="bg-[#A9BCFF] p-2 w-3xs rounded-md ">Login</button>
      </div>
    </div>
  );
};

export default Login;
