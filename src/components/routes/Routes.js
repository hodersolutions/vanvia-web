import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from '../common/loading/Loading';

const Home = lazy(() => import("../home/Home"));
const NotFound = lazy(() => import('../common/notfound/NotFound'));
const SignIn = lazy(() => import('../signin/SignIn'));
const Register = lazy(() => import('../register/Register'));
const CreateStudent = lazy(() => import('../student/Create'));

const Routes = () => (
	<div className='style'>
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/signin' component={SignIn} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/loading' component={Loading} />
				<Route exact path='/create-student' component={CreateStudent} />

				<Route path='*' component={ NotFound } />
			</Switch>
		</Suspense>		
	</div>
);

export default Routes;
