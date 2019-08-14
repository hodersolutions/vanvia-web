import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CSS_CLASS from './SideBarClasses';
import $ from 'jquery';

class SideBarDropDown extends Component {
    componentDidMount() {
		let header = this.props.header; 
		$(function ($) {
			$("." + header).click(function() {				
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
		});
	}
	
	renderSubMenu() {
		let submenus = Object.entries(this.props.submenu);
		return (
			submenus.map((menu, index) => {
				return (
					<li key={ index }>
                        <Link to={ `/${menu[0]}` }> { menu[1] }</Link>
                    </li>
				);
			})
		);		
	}
	
  	render() {
    	return (
      		<Fragment>
			  	<li className="sidebar-dropdown">
                    <Link className={ this.props.header } to="#">
                    	<i className={ CSS_CLASS[this.props.header] }></i>
                    	<span>{this.props.header}</span>
                    </Link>
                    <div className="sidebar-submenu">
						<ul>						
							{ this.renderSubMenu() }
						</ul>
                    </div>
                </li>
      		</Fragment>
    	)
  	}
}

export default SideBarDropDown;