import { useContext } from "react";
import FormContext from "../../context/form/FormContext";

const useFormContext = () => {
  return useContext(FormContext);
};

export default useFormContext;
