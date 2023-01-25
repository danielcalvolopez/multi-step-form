import CreateUserForm from "./components/CreateUserForm";
import { FormmProvider } from "./context/form/FormContext";

const App = () => {
  return (
    <FormmProvider>
      <CreateUserForm />
    </FormmProvider>
  );
};

export default App;
