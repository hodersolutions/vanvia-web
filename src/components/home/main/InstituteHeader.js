import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import settings from '../../../settings';

class InstituteHeader extends Component {
    render() {
        const style = {
            "marginRight": "10px"
        }
        return (
            <Fragment>
                <nav className="navbar navbar-dark border-brand">
                    <Link className="navbar-brand institute-name" to="#">
                        <img src={require("../../../static/images/institute.png")} width="30" height="30" style = { style } className="d-inline-block align-top" alt="InstituteLogo" />
                        { settings.instituteName }
                    </Link>
                </nav>
            </Fragment>
        )
    }
}

export default InstituteHeader;
