import useFormContext from "../../hooks/form/useFormContext";
import Input from "../UI/Input";
import FormFooter from "../form/FormFooter";
import FormHeader from "../form/FormHeader";
import "./PersonalInfo.scss";
import formInputs from "../../utils/data/formInputs";

const PersonalInfo = () => {
  const { title, data, setData, next, nameValid } = useFormContext();

  // const handleName = (event) => {
  //   setData({ ...data, name: event.target.value });
  // };
  // const handleEmail = (event) => {
  //   setData({ ...data, email: event.target.value });
  // };
  // const handlePhone = (event) => {
  //   setData({ ...data, phone: event.target.value });
  // };

  return (
    <form onSubmit={next} className="personal-info-container">
      <FormHeader
        title={title[0]}
        description="Please provide your name, email address, and phone number."
      />

      <div className="personal-info-form">
        {Object.values(formInputs).map(({ id, name, placeholder, type }) => (
          <div key={id} className="personal-info-form-item">
            <div className="item-description">
              <label>{id}</label>
            </div>
            <Input type={type} placeholder={placeholder} name={name} />
          </div>
        ))}
      </div>

      <FormFooter buttonContent="Next Step" />
    </form>
  );
};

export default PersonalInfo;
