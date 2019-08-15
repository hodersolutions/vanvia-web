import React, { Component } from 'react';
import { connect } from 'react-redux';

class SideBarHeader extends Component {    
    render() {
        let names = this.props.user.current_user["Fullname"].split(' ');
        return (
            <div className="sidebar-header">
                <div className="user-pic">
                <img className="img-responsive img-rounded" src={require("../../../static/images/user.png")}
                    alt="Userpicture"/>
                </div>
                <div className="user-info">
                <span className="user-name">{ names[0] }
                    &nbsp;<strong>{ names[1] }</strong>
                </span>
                <span className="user-role">{ this.props.user.current_user.roles[0].keyword }</span>
                <span className="user-status">
                    <i className="fa fa-circle"></i>
                    <span>Online</span>
                </span>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
	return {
		user: state.user	
	}
};

export default connect(mapStateToProps, null)(SideBarHeader);