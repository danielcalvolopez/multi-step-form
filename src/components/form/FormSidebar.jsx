import useFormContext from "../../hooks/form/useFormContext";
import "./FormSidebar.scss";

const FormSidebar = () => {
  const { page, setPage } = useFormContext();

  const handleNavigatePage1 = () => {
    setPage(0);
  };
  const handleNavigatePage2 = () => {
    setPage(1);
  };
  const handleNavigatePage3 = () => {
    setPage(2);
  };
  const handleNavigatePage4 = () => {
    setPage(3);
  };

  return (
    <div className="sidebar-container">
      <div onClick={handleNavigatePage1} className="sidebar-step-container">
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
      <div onClick={handleNavigatePage2} className="sidebar-step-container">
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
      <div onClick={handleNavigatePage3} className="sidebar-step-container">
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
      <div onClick={handleNavigatePage4} className="sidebar-step-container">
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
