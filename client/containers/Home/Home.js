import React, {Component, PropTypes} from 'react'
import Icon from 'svg-inline-react'
import './Home.scss'

import Header from '../../components/Header/Header'
import Scroll from '../../components/Scroll/Scroll'
import Footer from '../../components/Footer/Footer'

class Home extends Component {
	render() {
		return (
			<div id="home" className="page">
				<Header />
				<Scroll>
					<div className="alert-icon">
						<Icon src={require('../../icons/alert.svg')}/>
					</div>
				</Scroll>
				<Footer />
			</div>
		);
	}
}

export default Home