import React, { Component } from 'react'

import './app.css'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

class App extends Component {
	constructor () {
		super()

		}

	render () {
		return (
			<div>
				<Header />
				<Main />
				<Footer />	
			</div>		
			)
	}
}

export default App