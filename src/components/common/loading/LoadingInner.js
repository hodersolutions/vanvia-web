import React, { Component } from 'react';

class LoadingInner extends Component {
    render() {        
        return (
            <div className="loading-container-inner">
                <img src={require("../../../static/images/loading/loading.gif")} alt="Loading" />                             
            </div>
        );
    }
}

export default LoadingInner;