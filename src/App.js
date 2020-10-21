import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DummyHome, DummyLogin } from './pages';

const App = () => {
	return (
		<Switch>
			<Route exact path={'/login'} component={DummyLogin} />
			<Route exact path={'/'} component={DummyHome}/>
		</Switch>
	)
};

export default App;
