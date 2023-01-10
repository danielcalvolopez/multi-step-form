import React from "react";

const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
