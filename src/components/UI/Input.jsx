import React from "react";

const Input = ({ placeholder, type, value, onChange, className }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
