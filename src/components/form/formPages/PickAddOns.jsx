import FormFooter from "../FormFooter";
import "./PickAddOns.scss";
import CheckMark from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/check-mark.svg";

const PickAddOns = () => {
  return (
    <div className="select-plan-container">
      <div className="select-plan-header">
        <h1>Pick add-ons</h1>
        <h3>Add-ons help enhance your gaming experience.</h3>
      </div>

      <div className="select-addons-body">
        <div className="select-addons-options">
          <input type="checkbox" name="online" id="online" />
          <input type="checkbox" name="storage" id="storage" />
          <input type="checkbox" name="profile" id="profile" />
          <label htmlFor="online">
            <div className="select-addons-card" onClick={() => {}}>
              <div className="addons-checkbox-and-info">
                <label className="checkbox" htmlFor="online">
                  <img src={CheckMark} />
                </label>
                <div className="addons-info">
                  <h3>Online service</h3>
                  <p>Access to multiplayer games</p>
                </div>
              </div>
              <p className="price">+$1/mo</p>
            </div>
          </label>
          <label htmlFor="storage">
            <div className="select-addons-card">
              <div className="addons-checkbox-and-info">
                <label className="checkbox" htmlFor="storage">
                  <img src={CheckMark} />
                </label>
                <div className="addons-info">
                  <h3>Larger storage</h3>
                  <p>Extra 1TB of cloud save</p>
                </div>
              </div>
              <p className="price">+$2/mo</p>
            </div>
          </label>
          <label htmlFor="profile">
            <div className="select-addons-card">
              <div className="addons-checkbox-and-info">
                <label className="checkbox" htmlFor="profile">
                  <img src={CheckMark} />
                </label>
                <div className="addons-info">
                  <h3>Customizable profile</h3>
                  <p>Custom theme on your profile</p>
                </div>
              </div>
              <p className="price">+$2/mo</p>
            </div>
          </label>
        </div>
      </div>

      <FormFooter />
    </div>
  );
};

export default PickAddOns;
