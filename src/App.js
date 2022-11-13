import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import ProtectedRoute from './auth/protected-route';

import Header from './components/Header';
import Loading from './components/Loading';

import Home from './views/Home';
import Movies from './views/Movies';

function App() {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<Header />
			<div className="main-div">
				<Switch>
					<Route path="/" exact component={Home} />
					<ProtectedRoute path="/movies" component={Movies} />
				</Switch>
			</div>
		</>
	);
}

export default App;
