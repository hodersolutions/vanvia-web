import React, { Component, Fragment } from 'react';
import InstituteHeader from './InstituteHeader';
import CreateStudent from '../../student/Create';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <main className="page-content">
                    <div className="container-fluid">
                        <InstituteHeader />
                        <h4 className="route-heading">Add New Student</h4>
                        <hr/>
                        <CreateStudent />    
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Main;