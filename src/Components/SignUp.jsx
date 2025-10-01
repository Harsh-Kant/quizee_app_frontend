import React, { useState } from "react";
import InputField from "./InputField";

const SignUp = () => {
    const [form, setForm]=useState({name:"", email:"", password:"", confirmPassword:""})
    const handleChange = (e, field) => {
        setForm({...form, [field]:e.target.value})
    }
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
      <div className=" mx-auto flex flex-col max-w-sm items-center gap-x-4 gap-y-2">
        <div>
          <InputField label="Name" type="text" value={errors.name?errors.name:form.name} onChange={(e)=>handleChange(e, "name")} />
          <InputField label="Email" type="email" value={errors.email?errors.email:form.email} onChange={(e)=>handleChange(e, "email")} />
          <InputField label="Password" type={errors.password ? "text" : "password"} value={errors.password?errors.password:form.password} onChange={(e)=>handleChange(e, "password")} />
          <InputField
            label="Confirm Password"
            type={errors.confirmPassword?"text":"password"}
            value={errors.confirmPassword?errors.confirmPassword:form.confirmPassword}
            onChange={(e)=>handleChange(e, "confirmPassword")} 
          />
        </div>
        <button className="bg-[#A9BCFF] p-2 rounded-md w-3xs" onClick={()=>handleSubmit()} >Sign-Up</button>
      </div>
    </div>
  );
};

export default SignUp;
