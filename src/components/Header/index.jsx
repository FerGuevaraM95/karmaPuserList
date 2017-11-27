import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './header.css'

class Header extends Component {
	render () {
		return (
			<div className="container">
			<header className="col header-root">
				<h1 className="header-logo"><Link to='/'>KarmaPuser List!</Link></h1>
			</header>
			</div>
			)
	}
}

export default Header