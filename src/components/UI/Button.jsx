import useFormContext from "../../hooks/form/useFormContext";
import "./Button.scss";

const Button = ({ children, className }) => {
  const { page } = useFormContext();
  return (
    <button
      type="submit"
      className={`${page === 3 ? "button-submit" : "button"} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
