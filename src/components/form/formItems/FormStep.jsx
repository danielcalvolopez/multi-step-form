import useFormContext from "../../../hooks/form/useFormContext";
import "./FormStep.scss";

const FormStep = ({ stepNumber, stepNumberTitle, description, pageIndex }) => {
  const { page } = useFormContext();
  return (
    <div className="sidebar-step-container">
      <div
        className={`${
          page === pageIndex ? "step-number step-number-current" : "step-number"
        }`}
      >
        {stepNumber}
      </div>
      <div className="step-info">
        <p>{stepNumberTitle}</p>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default FormStep;
