import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './header.css'

class Header extends Component {
	render () {
		return (
			<div className="Container">
				<div className="row justify-content-center">
				<header className="col-11 header-root">
					<h1 className="header-logo"><Link to='/'>KarmaPuser List!</Link></h1>
				</header>
				</div>
			</div>
			)
	}
}

export default Header