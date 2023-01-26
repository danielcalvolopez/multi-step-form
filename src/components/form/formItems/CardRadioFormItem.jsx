import "./cardRadioFormItem.scss";

const CardRadioFormItem = ({ name, logo, description }) => {
  return (
    <>
      <input className="input-radio" type="radio" name="card" id={name} />
      <label htmlFor={name}>
        <div className="card">
          <img src={logo} />
          <div className="info">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </>
  );
};

export default CardRadioFormItem;
