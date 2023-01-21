import useFormContext from "../../hooks/form/useFormContext";
import Button from "../UI/Button";
import "./FormFooter.scss";

const FormFooter = () => {
  const { page, back } = useFormContext();

  return (
    <div className={`${page === 0 ? "footer-only-next" : "footer"}`}>
      {page !== 0 && (
        <div onClick={back} className="go-back">
          Go Back
        </div>
      )}
      <Button>{page === 3 ? "Confirm" : "Next Step"}</Button>
    </div>
  );
};

export default FormFooter;
