import React from "react";

import "./AutoComplete.css";

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", filteredOptions: [], showOptions: false };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchOptions = this.searchOptions.bind(this);
  }

  // This is not a production-ready function.
  // Instead of using a mocked variable to search for suitable options, I'd ideally request those values from a REST Api.
  // Also, filtering it in the frontend may not be ideal, if we're searching in a big set of values, the application's performance might be compromised.
  searchOptions(query) {
    const options = ["Option 1", "Option 2", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10", "Option 11", "Option 12", "Option 13", "Option 14", "Option 15" ];

    // I won't check for reject() because there's no way of getting an exception from filter() (It's a pure function, after all).
    return new Promise((resolve) => {

      // When query is empty, I don't wanna show every possible value.
      const filteredOptions = options.filter((o) =>
        query !== '' && o.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredOptions);
    });
  }

  handleInputChange(e) {
    const inputVal = e.currentTarget.value;
    this.setState({ input: inputVal });
    this.searchOptions(inputVal).then((res) => {
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
            onFocus={() => this.setState((state) => ({...state, showOptions: true}))}
            onBlur={() => this.setState((state) => ({...state, showOptions: false}))}
            className={"autocomplete-input"}
          />
        </div>
        {this.state.showOptions && <div className={"autocomplete-option-container"}>
          {this.state.filteredOptions.map((o) => (
            <div className={"autocomplete-option"} key={o} onMouseDown={() => this.setState((state) => ({...state, input: o}))}>{o}</div>
          ))}
        </div>}
      </div>
    );
  }
}

export default AutoComplete;
