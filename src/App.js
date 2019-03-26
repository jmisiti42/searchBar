import React from "react";
import Titles from "./components/Titles.js";
import SearchBar from "./components/SearchBar.js";
import DatePicker from "react-datepicker";

class App extends React.Component {
  render () {
    return (
      <div>
        <Titles />
        <SearchBar label="Départ"/>
        <SearchBar label="Arrivée"/>
        <DatePicker />
      </div>
    );
  }
};

export default App;