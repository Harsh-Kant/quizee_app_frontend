import React from "react";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="flex items-center gap-2 m-2">
      <label className="w-3xs">{label}</label>
      <input
        className="p-2 rounded-md w-2xs border-0 bg-[#F2F2F2]"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
