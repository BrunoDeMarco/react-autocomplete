import "./App.css";
import AutoComplete from './AutoComplete/AutoComplete';
import { FunctionalAutoComplete } from "./AutoComplete/FunctionalAutoComplete";

function App() {
  return (
    <div className={'app-container'}>
      <div style={{width: '300px'}}>
        <AutoComplete />
      </div>
      <div style={{width: '300px'}}>
        <FunctionalAutoComplete />
      </div>
    </div>
  );
}

export default App;
