import useFormContext from "../../../hooks/form/useFormContext";
import Input from "../../UI/Input";
import FormFooter from "../FormFooter";
import FormHeader from "../FormHeader";
import "./PersonalInfo.scss";

const PersonalInfo = () => {
  const { title, data, setData, next } = useFormContext();

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
            {/* <label className="error">This field is required</label> */}
          </div>
          <Input
            className="input"
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

      <FormFooter />
    </form>
  );
};

export default PersonalInfo;
