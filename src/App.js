import React from "react";
import SearchBarApi from "./components/SearchInApi.js";
import DatePicker from "./components/DatePicker.js";
import NumberPicker from "./components/NumberPicker.js";

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>My SearchBar</h1>
        <SearchBarApi label="Departure"/>
        <SearchBarApi label="Arrival"/>
        <DatePicker />
        <NumberPicker />
      </div>
    );
  }
};

export default App;