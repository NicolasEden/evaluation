import React from 'react';
import './CSS/light.scss'
class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="error">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default Error;
