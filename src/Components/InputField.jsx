import React, { forwardRef } from "react";

const InputField = forwardRef(
  ({ label, type, placeholder, errors, ...rest }, ref) => {
    return (
      <div className="flex items-center">
        <label className="w-3xs">{label}</label>
        <div className="flex flex-col items-center m-1">
          <input
            ref={ref}
            placeholder={errors ? errors.message : placeholder}
            className={`p-2 rounded-t-2xl rounded-b-none w-sm border outline-none bg-[#F2F2F2] ${
              errors ? "border-red-500 placeholder-red-500" : "border-none"
            }`}
            type={type}
            {...rest}
          />
          <span className="text-red-500">{errors?.message || "\u00A0"}</span>
        </div>
      </div>
    );
  }
);

export default InputField;
