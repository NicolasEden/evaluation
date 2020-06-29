import React from 'react';
import './CSS/loading.scss'
class Loading extends React.Component {
    render() {
        return (
            <div className="loading">
                <img src="https://i.pinimg.com/originals/2c/bb/5e/2cbb5e95b97aa2b496f6eaec84b9240d.gif" alt="loading"/>
            </div>
        );
    }
}

export default Loading;
