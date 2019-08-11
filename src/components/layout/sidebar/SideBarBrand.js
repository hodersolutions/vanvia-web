import React, { Component } from 'react';

class SideBarBrand extends Component {
    render() {
        return (
            <div className="sidebar-brand">
                <img className="img-responsive img-rounded dashboard-logo" src={require("../../../static/images/logo/logo.png")}
                    alt="Logo"/>
                <a href="/">VanVia</a>
                <div id="close-sidebar">
                <i className="fas fa-times"></i>
                </div>
            </div>
        )
    }
}

export default SideBarBrand;