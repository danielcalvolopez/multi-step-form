import useFormContext from "../../hooks/form/useFormContext";
import "./Button.scss";

const Button = ({ children, className, onClick, onSubmit }) => {
  const { page } = useFormContext();
  return (
    <button
      type="submit"
      onSubmit={onSubmit}
      onClick={onClick}
      className={`${page === 3 ? "button-submit" : "button"} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
