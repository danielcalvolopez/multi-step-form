import useFormContext from "../../hooks/form/useFormContext";
import FinishingUp from "../createUserFormPages/FinishingUp";
import PersonalInfo from "../createUserFormPages/PersonalInfo";
import PickAddOns from "../createUserFormPages/PickAddOns";
import SelectYourPlan from "../createUserFormPages/SelectYourPlan";
import ThankYou from "../createUserFormPages/ThankYou";

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
