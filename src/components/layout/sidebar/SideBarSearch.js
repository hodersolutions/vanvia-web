import React, { Component } from 'react';

class SideBarBrand extends Component {
    render() {
        return (
            <div className="sidebar-search">
                <div>
                    <div className="input-group">
                        <input type="text" className="form-control search-menu" placeholder="Search..."/>
                        <div className="input-group-append">
                        <span className="input-group-text">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBarBrand;