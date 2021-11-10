import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import ProtectedRoute from './auth/protected-route';

import Header from './components/Header';
import Loading from './components/Loading';

import Home from './views/Home';
import Profile from './views/Profile';
import ExternalApi from './views/external-api';
import Movies from './views/movies';

function App() {
	const {isLoading} = useAuth0();

	if(isLoading){
		return <Loading/>;
	}

	return (
		<div className="">
			<Header/>
			<div className="container flex-grow-1">
				<Switch>
					<Route path="/" exact component={Home} />
					<ProtectedRoute path="/profile" component={Profile} />
					<ProtectedRoute path="/movies" component={Movies} />
					<Route path="/external-api" component={ExternalApi} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
