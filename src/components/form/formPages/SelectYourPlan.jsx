import FormFooter from "../FormFooter";
import ArcadeLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-arcade.svg";
import AdvancedLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-advanced.svg";
import ProLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-pro.svg";
import "./SelectYourPlan.scss";
import ToggleSwitch from "../../UI/ToggleSwitch";
import FormHeader from "../FormHeader";

const SelectYourPlan = () => {
  return (
    <div className="select-plan-container">
      <FormHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />

      <div className="select-plan-body">
        <div className="select-plan-options">
          <input type="radio" name="card" id="arcade" />
          <input type="radio" name="card" id="advanced" />
          <input type="radio" name="card" id="pro" />
          <label htmlFor="arcade">
            <div className="select-plan-card" onClick={() => {}}>
              <img src={ArcadeLogo} />
              <div className="plan-info">
                <h3>Arcade</h3>
                <p>$9/mo</p>
                <p></p>
              </div>
            </div>
          </label>
          <label htmlFor="advanced">
            <div className="select-plan-card">
              <img src={AdvancedLogo} />
              <div className="plan-info">
                <h3>Advanced</h3>
                <p>$12/mo</p>
                <p></p>
              </div>
            </div>
          </label>
          <label htmlFor="pro">
            <div className="select-plan-card">
              <img src={ProLogo} />
              <div className="plan-info">
                <h3>Pro</h3>
                <p>$15/mo</p>
                <p></p>
              </div>
            </div>
          </label>
        </div>
        <div className="select-plan-toggle-container">
          <div className="select-plan-toggle">
            <label className="color-on">Monthly</label>
            <ToggleSwitch />
            <label className="color-on">Yearly</label>
          </div>
        </div>
      </div>

      <FormFooter />
    </div>
  );
};

export default SelectYourPlan;
