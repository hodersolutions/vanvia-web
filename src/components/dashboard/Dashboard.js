import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {	
	render() {
		return (
			<Fragment>
				Dashboard
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
    	user: state.user
	}
}

export default connect(mapStateToProps, null)(Dashboard);