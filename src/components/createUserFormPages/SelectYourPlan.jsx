import FormFooter from "../form/FormFooter";
import CardRadioFormItem from "../form/formItems/CardRadioFormItem";
import "./SelectYourPlan.scss";
import ToggleSwitch from "../UI/ToggleSwitch";
import FormHeader from "../form/FormHeader";
import useFormContext from "../../hooks/form/useFormContext";
import { planOptions, tariff } from "../../utils/data/plans";

const SelectYourPlan = () => {
  const { title, monthly, setMonthly, next } = useFormContext();

  const handleToggleMonthly = () => {
    setMonthly((prev) => !prev);
  };

  return (
    <form onSubmit={next} className="select-plan-container">
      <FormHeader
        title={title[1]}
        description="You have the option of monthly or yearly billing."
      />

      <div className="select-plan-body">
        <div className="select-plan-options">
          {Object.values(planOptions).map(
            ({ name, logo, pricePerMonth, pricePerYear }) => (
              <CardRadioFormItem
                name={name}
                logo={logo}
                description={`£${monthly ? pricePerMonth : pricePerYear}/
            ${monthly ? tariff.monthly : tariff.yearly}`}
              />
            )
          )}
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

      <FormFooter buttonContent="Next Step" />
    </form>
  );
};

export default SelectYourPlan;
