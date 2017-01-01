import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store'

const store = configureStore(browserHistory, { app: { name: 'React 2017' } });
const history = syncHistoryWithStore(browserHistory, store);

render(<Provider store={store}>
	<Router history={history} routes={routes(store)}/>
</Provider>, document.getElementById('root'));