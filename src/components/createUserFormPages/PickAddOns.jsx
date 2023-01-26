import useFormContext from "../../hooks/form/useFormContext";
import CardCheckboxFormItem from "../form/formItems/CardCheckboxFormItem";
import { addons } from "../../utils/data/addons";
import { tariff } from "../../utils/data/plans";
import FormFooter from "../form/FormFooter";
import FormHeader from "../form/FormHeader";
import "./PickAddOns.scss";
import CheckMark from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/check-mark.svg";

const PickAddOns = () => {
  const { title, monthly, next } = useFormContext();
  return (
    <form onSubmit={next} className="select-plan-container">
      <FormHeader
        title={title[2]}
        description="Add-ons help enhance your gaming experience."
      />

      <div className="select-addons-body">
        <div className="select-addons-options">
          {Object.values(addons).map(
            ({ id, name, description, pricePerMonth, pricePerYear }) => (
              <CardCheckboxFormItem
                checkmark={CheckMark}
                key={id}
                id={id}
                name={name}
                content={` +£
            ${monthly ? pricePerMonth : pricePerYear}/
            ${monthly ? tariff.monthly : tariff.yearly}`}
                description={description}
              />
            )
          )}
        </div>
      </div>

      <FormFooter buttonContent="Next Step" />
    </form>
  );
};

export default PickAddOns;
