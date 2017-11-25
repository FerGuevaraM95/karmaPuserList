import React, { Component } from 'react'
import './user.css'

class User extends Component {
	constructor (props) {
		super(props)

	}


	render () {

		return (

				<div className="card text-white">
				  <img className="card-img-top user-img" src={this.props.picture} />
				  <div className="card-img-overlay">
				    <h6 className="card-text user-name">{this.props.name}</h6>
				    <small className="user-small">{this.props.username}</small>
				  </div>
				</div>
			
		)
	}
}

export default User

