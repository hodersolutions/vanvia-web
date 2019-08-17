import React, { Component } from 'react';
import Random from '../../common/Helper';
import SideBarBrand from './SideBarBrand';
import SideBarHeader from './SideBarHeader';
import SideBarSearch from './SideBarSearch';
import SideBarMenu from './SideBarMenu';
import SideBarFooter from './SideBarFooter';

class SideBar extends Component {
    constructor() {
        super();
        var imgUrl = require('../../../static/images/sidebar/sidebar_'+ Random() +'.jpg');

	    this.state = {
            background: {
                'background': 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + imgUrl + ')'
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