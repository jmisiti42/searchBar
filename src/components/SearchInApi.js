import React from 'react';
import Select from 'react-select';
import { transform } from 'lodash';
import './SearchInApi.css';

const API_KEY = "ImBuildingASearchBar";
const API_URL = "https://interview.sobus.fr:8080/autocomplete"

class SearchInApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.encodeObject = this.encodeObject.bind(this);
        this.getAutoCompletion = this.getAutoCompletion.bind(this);
    }

    //Load the options on startup
    componentDidMount() {
        this.getAutoCompletion();
    }

    //Encode request body to be compatible with form-urlencoded
    encodeObject = (obj) =>
        transform(obj, (acc, val, key) => {
            acc.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
        }, []).join("&");

    //Fetching datas from SoBus API
    getAutoCompletion = (value = "") => {
        const body = {
            'key': API_KEY,
            'locale': 'fr',
            'term': value,
        };
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encodeObject(body),
        };
        fetch(API_URL, req)
            .then(res => res.json())
            .then(data => data.map((row) => ({ value: `${row.n}, ${row.c}`, label: `${row.n}, ${row.c}` })))
            .then(data => this.setState({ options: data }))
    }

    render() {
        const { options } = this.state;
        const { label } = this.props;
        return (
            <div className="SearchBar_wrapper col-md-2 col-xs-6">
                <Select
                    name="Departures"
                    placeholder={label}
                    options={options}
                    onInputChange={this.getAutoCompletion}
                />
            </div>
        );
    }
}

export default SearchInApi;