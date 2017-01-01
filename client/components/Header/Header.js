import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import './Header.scss'

@connect(state => ({ app: state.app }))
export default class Header extends Component {
	render() {
		const {app: {name}} = this.props;

		return (
			<header>
				<div>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
					</nav>
				</div>
				<div>{name}</div>
				<div></div>
			</header>
		)
	}
}