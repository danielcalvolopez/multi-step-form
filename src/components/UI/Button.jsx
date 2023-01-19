import "./Button.scss";

const Button = ({ children, className, onClick, onSubmit }) => {
  return (
    <button
      type="submit"
      onSubmit={onSubmit}
      onClick={onClick}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
