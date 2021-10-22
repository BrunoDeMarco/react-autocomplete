import React from "react";

import "./AutoComplete.css";

import { searchOptions } from "./AutoCompleteHelper";

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", filteredOptions: [], showOptions: false };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.refreshValue = this.refreshValue.bind(this);
  }

  handleInputChange(e) {
    const inputVal = e.currentTarget.value;
    this.refreshValue(inputVal);
  }

  refreshValue(newInput) {
    this.setState({ input: newInput });
    searchOptions(newInput).then((res) => {
      this.setState((state) => ({ ...state, filteredOptions: res }));
    });
  }

  render() {
    return (
      <div className={"autocomplete-container"}>
        <div>
          <input
            type={"text"}
            value={this.state.input}
            onChange={this.handleInputChange}
            onFocus={() =>
              this.setState((state) => ({ ...state, showOptions: true }))
            }
            onBlur={() =>
              this.setState((state) => ({ ...state, showOptions: false }))
            }
            className={"autocomplete-input"}
          />
        </div>
        {this.state.showOptions && (
          <div className={"autocomplete-option-container"}>
            {this.state.filteredOptions.map((o) => (
              <div
                className={"autocomplete-option"}
                key={o}
                onMouseDown={() => this.refreshValue(o)}
              >
                {o}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AutoComplete;
