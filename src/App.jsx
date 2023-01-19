import Form from "./components/form/Form";
import { FormmProvider } from "./context/form/FormContext";

const App = () => {
  return (
    <FormmProvider>
      <Form />
    </FormmProvider>
  );
};

export default App;
