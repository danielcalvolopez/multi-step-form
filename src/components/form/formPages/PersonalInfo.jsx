import Button from "../../UI/Button";
import Input from "../../UI/Input";
import FormFooter from "../FormFooter";
import "./PersonalInfo.scss";

const PersonalInfo = () => {
  return (
    <div className="personal-info-container">
      <div className="personal-info-header">
        <h1>Personal info</h1>
        <h3>Please provide your name, email address, and phone number.</h3>
      </div>

      <div className="personal-info-form">
        <div className="personal-info-form-item">
          <label>Name</label>
          <Input className="input" placeholder="e.g. Stephen King" />
        </div>
        <div className="personal-info-form-item">
          <label>Email Address</label>
          <Input className="input" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="personal-info-form-item">
          <label>Phone Number</label>
          <Input className="input" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
      <FormFooter />
    </div>
  );
};

export default PersonalInfo;
