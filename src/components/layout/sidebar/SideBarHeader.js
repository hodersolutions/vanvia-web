import React, { Component } from 'react';

class SideBarHeader extends Component {
    render() {
        return (
            <div className="sidebar-header">
                <div className="user-pic">
                <img className="img-responsive img-rounded" src={require("../../../static/images/user.png")}
                    alt="Userpicture"/>
                </div>
                <div className="user-info">
                <span className="user-name">First
                    <strong>Last</strong>
                </span>
                <span className="user-role">Role</span>
                <span className="user-status">
                    <i className="fa fa-circle"></i>
                    <span>Online</span>
                </span>
                </div>
            </div>
        )
    }
}

export default SideBarHeader;