import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Root from './containers/Root/Root'
import Home from './containers/Home/Home'
import About from './containers/About/About'

export default (store) => {
	return (
		<Route path="/" component={Root}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About} />
		</Route>
	);
}