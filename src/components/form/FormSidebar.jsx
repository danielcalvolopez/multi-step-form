import useFormContext from "../../hooks/form/useFormContext";
import "./FormSidebar.scss";

const FormSidebar = () => {
  const { page } = useFormContext();
  return (
    <div className="sidebar-container">
      <div className="sidebar-step-container">
        <div
          className={`${
            page === 0 ? "step-number step-number-current" : "step-number"
          }`}
        >
          1
        </div>
        <div className="step-info">
          <p>Step 1</p>
          <h3>Your Info</h3>
        </div>
      </div>
      <div className="sidebar-step-container">
        <div
          className={`${
            page === 1 ? "step-number step-number-current" : "step-number"
          }`}
        >
          2
        </div>
        <div className="step-info">
          <p>Step 2</p>
          <h3>Select Plan</h3>
        </div>
      </div>
      <div className="sidebar-step-container">
        <div
          className={`${
            page === 2 ? "step-number step-number-current" : "step-number"
          }`}
        >
          3
        </div>
        <div className="step-info">
          <p>Step 3</p>
          <h3>Add-ons</h3>
        </div>
      </div>
      <div className="sidebar-step-container">
        <div
          className={`${
            page === 3 ? "step-number step-number-current" : "step-number"
          }`}
        >
          4
        </div>
        <div className="step-info">
          <p>Step 4</p>
          <h3>Summary</h3>
        </div>
      </div>
    </div>
  );
};

export default FormSidebar;
