import { useEffect, useState } from "react";

import { searchOptions } from "./AutoCompleteHelper";

export const FunctionalAutoComplete = () => {
  const [input, setInput] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    searchOptions(input).then((res) => {
      setFilteredOptions(res);
    });
  }, [input]);

  return (
    <div className={"autocomplete-container"}>
      <div>
        <input
          type={"text"}
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          onFocus={() => setShowOptions(true)}
          onBlur={() => setShowOptions(false)}
          className={"autocomplete-input"}
        />
      </div>
      {showOptions && (
        <div className={"autocomplete-option-container"}>
          {filteredOptions.map((o) => (
            <div
              className={"autocomplete-option"}
              key={o}
              onMouseDown={() => setInput(o)}
            >
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
