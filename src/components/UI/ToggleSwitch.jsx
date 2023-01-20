import useFormContext from "../../hooks/form/useFormContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ value, onChange }) => {
  return (
    <label className="switch">
      <input value={value} onChange={onChange} type="checkbox" />
      <span className="slider" />
    </label>
  );
};

export default ToggleSwitch;
