import React, { Component } from 'react';
// import Random from '../../common/Helper';
import SideBarBrand from './SideBarBrand';
import SideBarHeader from './SideBarHeader';
import SideBarSearch from './SideBarSearch';
import SideBarMenu from './SideBarMenu';
import SideBarFooter from './SideBarFooter';

class SideBar extends Component {
    constructor() {
        super();
        /* var imgUrl = require('../../../static/images/sidebar/sidebar_'+ Random() +'.jpg'); */

	    this.state = {
            background: {
                'boxShadow': 'rgb(0, 0, 0) 4px 0px 6px 0px',
                'borderRadius': '0px 5px 5px 0px',
                /* 'background': 'linear-gradient(to right, #3A6073, #16222A)'
                'background': 'linear-gradient(to right, #414345, #232526)'
                'background': 'linear-gradient(to right, #29323c, #485563)'
                'background': 'linear-gradient(to right, #243B55, #141E30)'
                'background': 'linear-gradient(to right, #004e92, #000428)' */
                'background': 'linear-gradient(to right, #2C5364, #203A43, #0F2027)'
                /* 'background': 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + imgUrl + ')' */                
            } 
        }
    }
    render() {        
        return (
            <nav id="sidebar" className="sidebar-wrapper" style={ this.state.background }>
                <div className="sidebar-content">
                    <SideBarBrand />
                    <SideBarHeader />	
                    <SideBarSearch />	
                    <SideBarMenu />									
                </div>
                <SideBarFooter />
            </nav>
        )
    }
}

export default SideBar;