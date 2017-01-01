import '../../styles/main.scss'

import React, { Component, PropTypes } from 'react'

class Root extends Component {
	render() {
		return (
			<div id="app">
				{this.props.children}
			</div>
		);
	}
}

export default Root