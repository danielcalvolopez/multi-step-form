import { createContext, useEffect, useState } from "react";

const FormContext = createContext({});

export const FormmProvider = ({ children, formValues }) => {
  const title = {
    0: "Personal Info",
    1: "Select your plan",
    2: "Pick add-ons",
    3: "Finishing up",
    4: "Thank you",
  };

  const [page, setPage] = useState(0);

  const formValues = {
    name: "Juan",
    email: "",
    plan: "arcade",
    billing: "yearly",
  };

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

  const [nameValid, setNameValid] = useState(undefined);

  const back = (event) => {
    event.preventDefault();
    if (page < 1) return;
    setPage((prev) => prev - 1);
  };

  const next = (event) => {
    event.preventDefault();

    if (data.name.length !== 0) {
      setNameValid(true);
    }
    if (data.name.length === 0) return setNameValid(false);

    if (page > 3) return;
    setPage((prev) => prev + 1);
  };

  const handleChange = (event) => {
    const type = event.target.type;

    const name = event.target.name;

    const value =
      type === "checkbox" ? event.target.checked : event.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        nameValid,
        handleChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
