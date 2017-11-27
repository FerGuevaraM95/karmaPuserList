import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import User from '../User'

// import './user-list.css';

class UserList extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };

    axios.get("https://randomuser.me/api/?results=50")
    .then(response => {
      this.setState({
        users: response.data.results
      })
    })
    .catch(error => {
      console.log(error);
    })

    //   this.state = {
    //   users: [{
    //     id: '1',
    //     picture: 'https://c2.staticflickr.com/4/3331/4603158401_9e6ae18cc1.jpg',
    //     name: 'Fernando Guevara',
    //     username: 'fernandoguevara',
    //     adress: 'Ayutla #25',
    //     email: 'luisfernandoguevara95@gmail.com',
    //     phone: '57574598',
    //   }]
    // }

  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.state.users.map(usr => {
            return (
              <User 
                key={usr.dob}
                picture={usr.picture.large}
                name={usr.name.first}
                username={usr.login.username}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default UserList;