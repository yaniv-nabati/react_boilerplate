import React, { Component, PropTypes } from 'react'
import './About.scss'

import Header from '../../components/Header/Header'
import Scroll from '../../components/Scroll/Scroll'
import Footer from '../../components/Footer/Footer'

export default class About extends Component {
	static defaultProps = {};

	static propTypes = {};

	state = {};

	render() {

		return (
			<div id="about" className="page">
				<Header />
				<Scroll>
					<h2>About</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi dolorum id vel. Accusantium aut et expedita, explicabo facilis id, inventore perspiciatis praesentium quas tenetur ut vel velit voluptatem, voluptatum.</p>
				</Scroll>
				<Footer />
			</div>
		);
	}
}