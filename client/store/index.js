import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import rootReducer from '../reducers'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

export default (history, initialState) => {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(routerMiddleware(browserHistory)),
			applyMiddleware(promise),
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
};