import useFormContext from "../../hooks/form/useFormContext";
import FinishingUp from "./formPages/FinishingUp";
import PersonalInfo from "./formPages/PersonalInfo";
import PickAddOns from "./formPages/PickAddOns";
import SelectYourPlan from "./formPages/SelectYourPlan";
import ThankYou from "./formPages/ThankYou";

const FormBody = () => {
  const { page } = useFormContext();
  return (
    <>
      {page === 0 && <PersonalInfo />}
      {page === 1 && <SelectYourPlan />}
      {page === 2 && <PickAddOns />}
      {page === 3 && <FinishingUp />}
      {page === 4 && <ThankYou />}
    </>
  );
};

export default FormBody;
