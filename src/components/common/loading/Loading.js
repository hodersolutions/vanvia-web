import React, { Component } from 'react';

class Loading extends Component {
    render() {        
        return (
            <div className="loading-container">
                <img src={require("../../../static/images/loading/loading-hourglass.gif")} alt="Loading" />                             
            </div>
        );
    }
}

export default Loading;