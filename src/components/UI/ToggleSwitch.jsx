import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider" />
    </label>
  );
};

export default ToggleSwitch;
