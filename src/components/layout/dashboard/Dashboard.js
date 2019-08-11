import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Layout.css';
import '../Layout.js';
import SideBar from '../sidebar/SideBar';
import Main from '../main/Main';

class Dashboard extends Component {	
	render() {
		if(this.props.user.is_authenticated === true) {
			return <Redirect to='/signin'/>;
		}
		else {	
			return (
				<Fragment>
					<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" />
					<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
	
					<div className="page-wrapper chiller-theme toggled">
						<div id="show-sidebar" className="btn btn-sm btn-dark">
							<i className="fas fa-bars"></i>
						</div>
						<SideBar />
						<Main />
					</div>				
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