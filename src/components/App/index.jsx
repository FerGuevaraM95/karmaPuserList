import React, { Component } from 'react'

import './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {
	constructor () {
		super()

		}

	render () {
		return (
			<div>
				<Header />
				<Main />	
			</div>		
			)
	}
}

export default App