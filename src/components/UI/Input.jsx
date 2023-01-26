import "./Input.scss";

const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
