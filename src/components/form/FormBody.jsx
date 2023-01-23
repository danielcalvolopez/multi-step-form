import useFormContext from "../../hooks/form/useFormContext";
import FinishingUp from "./formPages/FinishingUp";
import PersonalInfo from "./formPages/PersonalInfo";
import PickAddOns from "./formPages/PickAddOns";
import SelectYourPlan from "./formPages/SelectYourPlan";
import ThankYou from "./formPages/ThankYou";

const FormBody = () => {
  const { page } = useFormContext();

  const display = {
    0: <PersonalInfo />,
    1: <SelectYourPlan />,
    2: <PickAddOns />,
    3: <FinishingUp />,
    4: <ThankYou />,
  };
  return <>{display[page]}</>;
};

export default FormBody;
