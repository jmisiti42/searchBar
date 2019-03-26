import React from 'react';
import Select from 'react-select';
import Title from './Titles';
import { transform } from 'lodash';

const API_KEY = "ImBuildingASearchBar";
const API_URL = "https://interview.sobus.fr:8080/autocomplete"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
        };
    }

    componentDidMount() {
        this.getAutoCompletion();
    }

    encodeObject = (obj) =>
        transform(obj, (acc, val, key) => {
            acc.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
        }, []).join("&");

    getAutoCompletion = (value = "") => {
        const body = {
            'key': API_KEY,
            'locale': 'fr',
            'term': value,
        };
        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: this.encodeObject(body),
        };
        fetch(API_URL, req)
            .then(res => res.json())
            .then(data => data.map((row) => ({ value: `${row.n}, ${row.c}`, label: `${row.n}, ${row.c}` })))
            .then(data => this.setState({ options: data }))
    }

    render() {
        const { options } = this.state;
        return (
            <div >
                <Title label={this.props.label} />
                <Select
                    name="Departures"
                    options={options}
                    onInputChange={this.getAutoCompletion}
                />
            </div>
        );
    }
}

export default SearchBar;