import "./FormHeader.scss";

const FormHeader = ({ title, description }) => {
  return (
    <div className="form-header">
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default FormHeader;
