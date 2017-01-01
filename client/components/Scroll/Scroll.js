import React from 'react'
import './Scroll.scss'

export default props => {
	return (
		<div className="scroll">
			<div className="scroll-container">
				<div className="scroll-wrapper">
					{props.children}
				</div>
			</div>
		</div>
	)
}