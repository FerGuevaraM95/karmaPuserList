import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class User extends Component {
  constructor(props) {
    super();
  }

  render (props) {
    return (
	    <div>
      <h1>{props.name.firts}</h1>
      <p>{props.login.username}</p>
      <p>{props.email}</p>
      <p>{props.location.street}</p>
      <p>props.phone</p>
      <Link to='/roster'>Back</Link>
    </div>
  	)
  }
}

export default User;


 