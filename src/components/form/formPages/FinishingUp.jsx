import useFormContext from "../../../hooks/form/useFormContext";
import { addons } from "../../../utils/data/addons";
import { plans } from "../../../utils/data/plans";
import FormFooter from "../FormFooter";
import FormHeader from "../FormHeader";
import "./FinishingUp.scss";

const FinishingUp = () => {
  const { title, monthly, setPage } = useFormContext();
  return (
    <div className="finishing-up-container">
      <FormHeader
        title={title[3]}
        description="Double-check everything looks OK before confirming."
      />

      <div className="finishing-up-body">
        <div className="price-breakdown">
          <div className="plan">
            <div className="plan-info">
              <h3>Arcade {monthly ? "(Monthly)" : "(Yearly)"}</h3>
              <p onClick={() => setPage(1)}>Change</p>
            </div>
            <div className="plan-price">
              £{monthly ? plans[0].pricePerMonth : plans[0].pricePerYear}/
              {monthly ? "mo" : "yr"}
            </div>
          </div>
          <span className="division-line" />
          <div className="service-breakdown">
            <div className="service">
              <p className="description">Online service</p>
              <p className="price">
                +£{monthly ? addons[0].pricePerMonth : addons[0].pricePerYear}/
                {monthly ? "mo" : "yr"}
              </p>
            </div>
            <div className="service">
              <p className="description">Larger storage</p>
              <p className="price">
                +£{monthly ? addons[1].pricePerMonth : addons[1].pricePerYear}/
                {monthly ? "mo" : "yr"}
              </p>
            </div>
          </div>
        </div>

        <div className="total-price">
          <p className="total-price-text">Total (per month)</p>
          <p className="total-price-price">£12/mo</p>
        </div>
      </div>

      <FormFooter />
    </div>
  );
};

export default FinishingUp;
