import FormFooter from "../FormFooter";
import ArcadeLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-arcade.svg";
import AdvancedLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-advanced.svg";
import ProLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-pro.svg";
import "./SelectYourPlan.scss";
import ToggleSwitch from "../../UI/ToggleSwitch";
import FormHeader from "../FormHeader";
import useFormContext from "../../../hooks/form/useFormContext";
import { plans, tariff } from "../../../utils/data/plans";

const SelectYourPlan = () => {
  const { title, monthly, setMonthly } = useFormContext();

  const handleToggleMonthly = () => {
    setMonthly((prev) => !prev);
  };

  return (
    <div className="select-plan-container">
      <FormHeader
        title={title[1]}
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
                <h3>{plans[0].name}</h3>
                <p>
                  ${monthly ? plans[0].pricePerMonth : plans[0].pricePerYear}/
                  {monthly ? tariff.monthly : tariff.yearly}
                </p>
                <p></p>
              </div>
            </div>
          </label>
          <label htmlFor="advanced">
            <div className="select-plan-card">
              <img src={AdvancedLogo} />
              <div className="plan-info">
                <h3>{plans[1].name}</h3>
                <p>
                  ${monthly ? plans[1].pricePerMonth : plans[1].pricePerYear}/
                  {monthly ? tariff.monthly : tariff.yearly}
                </p>
                <p></p>
              </div>
            </div>
          </label>
          <label htmlFor="pro">
            <div className="select-plan-card">
              <img src={ProLogo} />
              <div className="plan-info">
                <h3>{plans[2].name}</h3>
                <p>
                  ${monthly ? plans[2].pricePerMonth : plans[2].pricePerYear}/
                  {monthly ? tariff.monthly : tariff.yearly}
                </p>
                <p></p>
              </div>
            </div>
          </label>
        </div>
        <div className="select-plan-toggle-container">
          <div className="select-plan-toggle">
            <label className={`${monthly ? "color-on" : "color-off"}`}>
              Monthly
            </label>
            <ToggleSwitch value={monthly} onChange={handleToggleMonthly} />
            <label className={`${!monthly ? "color-on" : "color-off"}`}>
              Yearly
            </label>
          </div>
        </div>
      </div>

      <FormFooter />
    </div>
  );
};

export default SelectYourPlan;
