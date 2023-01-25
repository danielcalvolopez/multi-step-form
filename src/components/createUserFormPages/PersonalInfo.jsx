import useFormContext from "../../hooks/form/useFormContext";
import Input from "../UI/Input";
import FormFooter from "../form/FormFooter";
import FormHeader from "../form/FormHeader";
import "./PersonalInfo.scss";

const PersonalInfo = () => {
  const { title, data, setData, next, nameValid } = useFormContext();

  const handleName = (event) => {
    setData({ ...data, name: event.target.value });
  };
  const handleEmail = (event) => {
    setData({ ...data, email: event.target.value });
  };
  const handlePhone = (event) => {
    setData({ ...data, phone: event.target.value });
  };

  return (
    <form onSubmit={next} className="personal-info-container">
      <FormHeader
        title={title[0]}
        description="Please provide your name, email address, and phone number."
      />

      <div className="personal-info-form">
        <div className="personal-info-form-item">
          <div className="item-description">
            <label>Name</label>
            {!nameValid && (
              <label className="error">This field is required</label>
            )}
          </div>
          <Input
            type="text"
            className={!nameValid ? "input input-error" : "input"}
            value={data[0]}
            onChange={handleName}
            placeholder="e.g. Stephen King"
            name="name"
          />
        </div>
        <div className="personal-info-form-item">
          <div className="item-description">
            <label>Email Address</label>
            {/* <label className="error">This field is required</label> */}
          </div>
          <Input
            className="input"
            type="email"
            onChange={handleEmail}
            placeholder="e.g. stephenking@lorem.com"
            name="email"
          />
        </div>
        <div className="personal-info-form-item">
          <div className="item-description">
            <label>Phone Number</label>
            {/* <label className="error">This field is required</label> */}
          </div>
          <Input
            className="input"
            onChange={handlePhone}
            type="number"
            placeholder="e.g. +44 7128 184 746"
          />
        </div>
      </div>

      <FormFooter buttonContent="Next Step" />
    </form>
  );
};

export default PersonalInfo;
