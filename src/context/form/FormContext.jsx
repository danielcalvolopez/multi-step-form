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

  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
    plan: "",
    onlineService: false,
    largerStorage: false,
    customProfile: false,
  });

  const back = () => {
    if (page < 1) return;
    setPage((prev) => prev - 1);
  };

  const next = () => {
    if (page > 3) return;
    setPage((prev) => prev + 1);
  };

  const handleChange = (event) => {
    const type = event.target.type;
    const value =
      type === "checkbox" ? event.target.checked : event.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <FormContext.Provider
      value={{ title, page, setPage, data, setData, back, next }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
