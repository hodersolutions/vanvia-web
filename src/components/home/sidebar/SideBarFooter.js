import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBarFooter extends Component {
    render() {
        return (
            <div className="sidebar-footer">
                <Link to="/notifications">
                    <i className="fa fa-bell"></i>
                    <span className="badge badge-pill badge-warning notification">3</span>
                </Link>
                <Link to="/inbox">
                    <i className="fa fa-envelope"></i>
                    <span className="badge badge-pill badge-success notification">7</span>
                </Link>
                <Link to="/settings">
                    <i className="fa fa-cog"></i>
                    <span className="badge-sonar"></span>
                </Link>
                <Link to="/signout">
                    <i className="fa fa-power-off"></i>
                </Link>
            </div>
        )
    }
}

export default SideBarFooter;