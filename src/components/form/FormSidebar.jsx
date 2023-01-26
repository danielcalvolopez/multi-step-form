import formSteps from "../../utils/data/formSteps";
import FormStep from "./formItems/FormStep";
import "./FormSidebar.scss";

const FormSidebar = () => {
  return (
    <div className="sidebar-container">
      {Object.values(formSteps).map(
        ({ stepNumber, stepNumberTitle, description, page }) => (
          <FormStep
            key={stepNumber}
            stepNumber={stepNumber}
            stepNumberTitle={stepNumberTitle}
            description={description}
            pageIndex={page}
          />
        )
      )}
    </div>
  );
};

export default FormSidebar;
