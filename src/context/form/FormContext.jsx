import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormmProvider = ({ children }) => {
  const title = {
    0: "Personal Info",
    1: "Select your plan",
    2: "Pick add-ons",
    3: "Finishing up",
    4: "Thank you",
  };

  const [page, setPage] = useState(0);

  const [monthly, setMonthly] = useState(true);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    onlineService: false,
    largerStorage: false,
    customProfile: false,
    totalPrice: 0,
  });

  const back = () => {
    if (page < 1) return;
    setPage((prev) => prev - 1);
  };

  const next = () => {
    if (page > 3) return;
    setPage((prev) => prev + 1);
  };

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        back,
        next,
        monthly,
        setMonthly,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;