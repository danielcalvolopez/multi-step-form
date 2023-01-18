import Input from "../../UI/Input";
import FormFooter from "../FormFooter";
import FormHeader from "../FormHeader";
import "./PersonalInfo.scss";

const PersonalInfo = () => {
  return (
    <div className="personal-info-container">
      <FormHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />

      <div className="personal-info-form">
        <div className="personal-info-form-item">
          <div className="item-description">
            <label>Name</label>
            {/* <label className="error">This field is required</label> */}
          </div>
          <Input className="input" placeholder="e.g. Stephen King" />
        </div>
        <div className="personal-info-form-item">
          <div className="item-description">
            <label>Email Address</label>
            {/* <label className="error">This field is required</label> */}
          </div>
          <Input className="input" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="personal-info-form-item">
          <div className="item-description">
            <label>Phone Number</label>
            {/* <label className="error">This field is required</label> */}
          </div>
          <Input className="input" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>

      <FormFooter />
    </div>
  );
};

export default PersonalInfo;
