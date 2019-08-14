import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class SideBarBrand extends Component {
    componentDidMount() {
		$(function ($) {			
			$("#close-sidebar").click(function() {
				$(".page-wrapper").removeClass("toggled");
			});
		
			$("#show-sidebar").click(function() {
				$(".page-wrapper").addClass("toggled");
			});   
		});
    }
    
    render() {
        return (
            <div className="sidebar-brand">
                <img className="img-responsive img-rounded dashboard-logo" src={require("../../../static/images/logo/logo.png")}
                    alt="Logo"/>
                <Link to="/">VanVia</Link>
                <div id="close-sidebar">
                <i className="fas fa-times"></i>
                </div>
            </div>
        )
    }
}

export default SideBarBrand;