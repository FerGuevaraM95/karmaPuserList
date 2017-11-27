import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './user.css'

class User extends Component {

	constructor (props) {
		super(props)

	}


	render () {

		return (

				<div className="card text-white">
				  <a href={`/${this.props.name}`}><img className="card-img-top user-img" src={this.props.picture} /></a> 
				  <div className="card-img-overlay">
				    <h6 className="card-text user-name">{this.props.name}</h6>
				    <small className="user-small">{this.props.username}</small>
				    <small className="user-small">{this.props.adress}</small>
				    <small className="user-small">{this.props.email}</small>
				    <small className="user-small">{this.props.phone}</small>
				    <Link to='/:key'>more...</Link>
				  </div>
				</div>
			
		)
	}
}

export default User