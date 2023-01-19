import useFormContext from "../../hooks/form/useFormContext";
import Button from "../UI/Button";
import "./FormFooter.scss";

const FormFooter = () => {
  const { page, setPage, data, title, back, next } = useFormContext();

  console.log(page);
  return (
    <div className={`${page === 0 ? "footer-only-next" : "footer"}`}>
      {page !== 0 && (
        <div className="go-back" onClick={back}>
          Go Back
        </div>
      )}
      <Button onClick={next}>Next Step</Button>
    </div>
  );
};

export default FormFooter;
