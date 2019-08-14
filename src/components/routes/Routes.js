import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../home/Home";
import NotFound from '../common/notfound/NotFound';
import SignIn from '../signin/SignIn';
import Register from '../register/Register';
import Loading from '../common/loading/Loading';

const Routes = () => (
	<div className='style'>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/signin' component={SignIn} />
			<Route exact path='/register' component={Register} />
			<Route exact path='/loading' component={Loading} />

			<Route path='*' component={ NotFound } />
		</Switch>
	</div>
);

export default Routes;
