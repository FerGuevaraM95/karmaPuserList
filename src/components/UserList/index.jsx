import React, { Component } from 'react'
// import axios from 'axios';

import User from '../User'
import './user-list.css'

class UserList extends Component {
  constructor() {
    super();

  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.props.users.map(usr => {
            return (
              <User 
                key={usr.dob}
                picture={usr.picture.large}
                name={usr.name.first}
                username={usr.login.username}
                adress={usr.location.street}
                email={usr.email}
                phone={usr.phone}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default UserList
