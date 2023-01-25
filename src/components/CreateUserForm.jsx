import FormBody from "./form/FormBody";
import FormSidebar from "./form/FormSidebar";
import "./CreateUserForm.scss";
import Form from "./form/Form";

const CreateUserForm = () => {
  return (
    <Form>
      <FormSidebar />
      <FormBody />
    </Form>
  );
};

export default CreateUserForm;
