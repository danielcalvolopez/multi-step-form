import "./cardCheckboxFormItem.scss";

const cardCheckboxFormItem = ({
  name,
  description,
  id,
  content,
  checkmark,
}) => {
  return (
    <>
      <input className="checkbox-input" type="checkbox" name={id} id={id} />
      <label htmlFor={id}>
        <div className="select-card">
          <div className="checkbox-and-info">
            <label className="checkbox" htmlFor={id}>
              <img src={checkmark} />
            </label>
            <div className="info">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
          <p className="content">{content}</p>
        </div>
      </label>
    </>
  );
};

export default cardCheckboxFormItem;
