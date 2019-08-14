import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" />
	            <link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet" />
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h3>Oops! Page not found</h3>
                            <h1><span>4</span><span>0</span><span>4</span></h1>
                        </div>
                        <h2>we are sorry, but the page you requested was not found</h2>
                        <Link to="/"><span className="arrow"></span> Return To Homepage</Link>
                    </div>
                </div>
            </Fragment>            
        );
    }
}

export default NotFound;