import "./cardRadioFormItem.scss";

const CardRadioFormItem = ({ name, logo, description }) => {
  return (
    <label htmlFor={name}>
      <input type="radio" name="card" id={name} />
      <div className="card">
        <img src={logo} />
        <div className="info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </label>
  );
};

export default CardRadioFormItem;
