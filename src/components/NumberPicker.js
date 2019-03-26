import React from 'react';
import './NumberPicker.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //Change the counter depending of the modifier
    handleClick(modifier) {
        this.setState({counter: this.state.counter + (modifier === "-" ? -1 : 1) });
    }

    render() {
        return (
            <div className="Counter col-md-4">
                <div className="row">
                    <span 
                        onClick={() => this.handleClick("-")}
                        className={"col-2 CounterMinus " + (this.state.counter > 1 ? '' : 'hidden')}>
                        <button>-</button>
                    </span>
                    <span className="col-8">
                        <input type="text" value={`${this.state.counter} passengers`} placeholder="Passengers" className="CounterInput" readOnly="readonly" />
                    </span>
                    <span 
                        onClick={() => this.handleClick("+")} 
                        className={"col-2 CounterPlus " + (this.state.counter < 11 ? '' : 'hidden')}>
                        <button>+</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default SearchBar;