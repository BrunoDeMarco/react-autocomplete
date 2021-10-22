import "./App.css";
import AutoComplete from "./AutoComplete/AutoComplete";
import { FunctionalAutoComplete } from "./AutoComplete/FunctionalAutoComplete";

function App() {
  return (
    <div className={"app-container"}>
      <div className={"grid-item"}>
        Class Component:
        <AutoComplete />
      </div>
      <div className={"grid-item"}>
        Functional Component:
        <FunctionalAutoComplete />
      </div>
    </div>
  );
}

export default App;
