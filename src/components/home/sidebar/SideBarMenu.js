import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenu } from '../../../store/actions/userActions';
import Loading from '../../common/loading/Loading';
import SideBarDropDown from './SideBarDropDown';
import {GET_USER_MENU_SUCCESS} from '../../../store/types/userTypes';

class SideBarMenu extends Component {
    componentDidMount() {
        if (this.props.user.menu === null) {
            this.props.getMenu({
                uid: this.props.user.current_user["uid"],
                role_keyword: this.props.user.current_user["roles"][0]["keyword"],
                access_token: this.props.user.access_token
            });
        }        
    }
    
    renderMenu() {
		if(this.props.user.loading) {
			return (<Loading />);
		} 
		else if (this.props.user.status === GET_USER_MENU_SUCCESS){
            let menus = Object.entries(this.props.user.menu);
            return (
				menus.map((menu, index) => {
					return (<SideBarDropDown key={ index } header={ menu[0] } submenu={ menu[1] } />);
				})
			);			
		}
		else {
			const sidebar_style = {
				'margin': '0px 0px 25px 15px' 
			}
			return (<div style={ sidebar_style }>Unable to retrieve sidebar...</div>);
		}
    }
      
    render() {        
        return (
            <div className="sidebar-menu">                
                <ul>
                    <li className="header-menu">
                        <span>General</span>
                    </li>
                    { this.renderMenu() }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		user: state.user	
	}
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMenu: (data) => dispatch(getMenu(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu);