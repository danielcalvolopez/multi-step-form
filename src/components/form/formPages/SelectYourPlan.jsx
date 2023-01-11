import FormFooter from "../FormFooter";
import ArcadeLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-arcade.svg";
import AdvancedLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-advanced.svg";
import ProLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-pro.svg";
import "./SelectYourPlan.scss";

const SelectYourPlan = () => {
  return (
    <div className="select-plan-container">
      <div className="select-plan-header">
        <h1>Select your plan</h1>
        <h3>You have the option of monthly or yearly billing.</h3>
      </div>

      <div className="select-plan-body">
        <div className="select-plan-options">
          <div className="select-plan-card" onClick={() => {}}>
            <img src={ArcadeLogo} />
            <div className="plan-info">
              <h3>Arcade</h3>
              <p>$9/mo</p>
              <p></p>
            </div>
          </div>
          <div className="select-plan-card">
            <img src={AdvancedLogo} />
            <div className="plan-info">
              <h3>Advanced</h3>
              <p>$12/mo</p>
              <p></p>
            </div>
          </div>
          <div className="select-plan-card">
            <img src={ProLogo} />
            <div className="plan-info">
              <h3>Pro</h3>
              <p>$15/mo</p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="select-plan-toggle"></div>
      </div>
      <FormFooter />
    </div>
  );
};

export default SelectYourPlan;
