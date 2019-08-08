import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import VanViaBar from '../sidebar/SideBar';

class Dashboard extends Component {	
	render() {
		if(this.props.user.is_authenticated === true) {
			return <Redirect to='/signin'/>;
		}
		else {	
			return (
				<Fragment>
					<VanViaBar />
				</Fragment>
			)
		}
	}
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const mapStateToProps = (state) => {
	return {
    	user: state.user
	}
}

export default connect(mapStateToProps, null)(Dashboard);