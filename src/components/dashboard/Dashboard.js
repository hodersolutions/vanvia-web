import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HorizontalSidebar from '../sidebar/SideBar';

class Dashboard extends Component {	
	render() {
		if(this.props.user.is_authenticated === true) {
			return <Redirect to='/signin'/>;
		}
		else {	
			return (
				<Fragment>
					<HorizontalSidebar />
				</Fragment>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
    	user: state.user
	}
}

export default connect(mapStateToProps, null)(Dashboard);