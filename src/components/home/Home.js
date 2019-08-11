import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';
import $ from 'jquery';
import SideBar from './sidebar/SideBar';
import Main from './main/Main';

class Home extends Component {
	componentDidMount() {
		$(function ($) {
			$(".sidebar-dropdown > a").click(function() {
				$(".sidebar-submenu").slideUp(200);
				if ($(this).parent().hasClass("active")) {
					$(".sidebar-dropdown").removeClass("active");
					$(this).parent().removeClass("active");
				} else {
					$(".sidebar-dropdown").removeClass("active");
					$(this).next(".sidebar-submenu").slideDown(200);
					$(this).parent().addClass("active");
				}
			});
		
			$("#close-sidebar").click(function() {
				$(".page-wrapper").removeClass("toggled");
			});
		
			$("#show-sidebar").click(function() {
				$(".page-wrapper").addClass("toggled");
			});   
		});
	}	
	render() {
		if(this.props.user.is_authenticated === false) {
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

export default connect(mapStateToProps, null)(Home);