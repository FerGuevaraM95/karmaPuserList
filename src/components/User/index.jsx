import React, { Component } from 'react'
import './user.css'

class User extends Component {
	constructor (props) {
		super(props)

	}


	render () {

		return (
			<div className="user-root">
				<div className="user-user">
					<figure>
						<img className="user-avatar" src={this.props.picture} />
					</figure>
					<span className="user-displayName">{this.props.name}</span>
					<span className="user-username">{this.props.username}</span>
					<span className="user-username">{this.props.adress}</span>
					<span className="user-username">{this.props.email}</span>
					<span className="user-username">{this.props.phone}</span>
				</div>	
			</div>		
		)
	}
}

export default User