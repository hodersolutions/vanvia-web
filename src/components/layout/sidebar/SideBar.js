import React, { Component } from 'react';
import SideBarBrand from './SideBarBrand';
import SideBarHeader from './SideBarHeader';
import SideBarSearch from './SideBarSearch';
import SideBarMenu from './SideBarMenu';
import SideBarFooter from './SideBarFooter';

class SideBar extends Component {
    render() {
        return (
            <nav id="sidebar" className="sidebar-wrapper">
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