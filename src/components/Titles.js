import React from "react";

class Titles extends React.Component {

    render() {
        const { label } = this.props;
        return (
            <div>
                <h1>{label}</h1>
            </div>
        );
    }
}

export default Titles;