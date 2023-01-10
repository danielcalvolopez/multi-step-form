import Card from "../UI/Card";
import FormBody from "./FormBody";
import FormSidebar from "./FormSidebar";
import "./Form.scss";

const Form = () => {
  return (
    <Card className="form-container">
      <FormSidebar />
      <FormBody />
    </Card>
  );
};

export default Form;
