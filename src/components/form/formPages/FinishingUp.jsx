import FormFooter from "../FormFooter";
import FormHeader from "../FormHeader";
import "./FinishingUp.scss";

const FinishingUp = () => {
  return (
    <div className="finishing-up-container">
      <FormHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      <div className="finishing-up-body">
        <div className="price-breakdown">
          <div className="plan">
            <div className="plan-info">
              <h3>Arcade (Monthly)</h3>
              <p>Change</p>
            </div>
            <div className="plan-price">$9/mo</div>
          </div>
          <span className="division-line" />
          <div className="service-breakdown">
            <div className="service">
              <p className="description">Online service</p>
              <p className="price">+$1/mo</p>
            </div>
            <div className="service">
              <p className="description">Larger storage</p>
              <p className="price">+$2/mo</p>
            </div>
          </div>
        </div>

        <div className="total-price">
          <p className="total-price-text">Total (per month)</p>
          <p className="total-price-price">$12/mo</p>
        </div>
      </div>

      <FormFooter />
    </div>
  );
};

export default FinishingUp;
