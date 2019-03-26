import React from "react";
import SearchBarApi from "./components/SearchInApi.js";
import DatePicker from "./components/DatePicker.js";
import NumberPicker from "./components/NumberPicker.js";

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <h1 className="text-center">My SearchBar</h1>
        <div className="row">
          <div className="col-md-2 marge"><SearchBarApi label="Departure"/></div>
          <div className="col-md-2 marge"><SearchBarApi label="Arrival"/></div>
          <div className="col-md-5 marge"><DatePicker /></div>
          <div className="col-md-3 marge"><NumberPicker /></div>
        </div>
      </div>
    );
  }
};

export default App;