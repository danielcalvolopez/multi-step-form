import useFormContext from "../../hooks/form/useFormContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ value, onChange }) => {
  const { monthly } = useFormContext();
  return (
    <label className="switch">
      <input
        value={value}
        onChange={onChange}
        type="checkbox"
        checked={!monthly}
      />
      <span className="slider" />
    </label>
  );
};

export default ToggleSwitch;
