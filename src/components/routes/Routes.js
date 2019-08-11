import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../layout/dashboard/Dashboard";
import NotFound from '../common/notfound/NotFound';
import SignIn from '../signin/SignIn';
import Register from '../register/Register';

const Routes = () => (
	<div className='style'>
		<Switch>
			<Route exact path='/' component={Dashboard} />
			<Route exact path='/signin' component={SignIn} />
			<Route exact path='/register' component={Register} />

			<Route path='*' component={ NotFound } />
		</Switch>
	</div>
);

export default Routes;
