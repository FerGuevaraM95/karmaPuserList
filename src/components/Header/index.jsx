import React, { Component } from 'react'
import './header.css'

class Header extends Component {
	render () {
		return (
			<div className="Container">
				<div className="row justify-content-center">
				<header className="col-11 header-root">
					<h1 className="header-logo">KarmaPuser List!</h1>
				</header>
				</div>
			</div>
			)
	}
}

export default Header