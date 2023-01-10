const Button = ({ children, className, onClick, onSubmit }) => {
  return (
    <button
      onSubmit={onSubmit}
      onClick={onClick}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
