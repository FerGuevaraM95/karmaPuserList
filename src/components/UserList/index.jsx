import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import './user-list.css';

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
  }

  render () {
    return (
      <div className="container">
        <div className="row row justify-content-center">
          {this.state.users.map(usr => (
          <div className="card text-white" key={usr.email}>
            <img className="card-img user-list-img" src={usr.picture.large} alt="User" />
            <Link to={`/${usr.login.username}`}><div className="card-img-overlay">
            <h6 className="card-title user-list-name">{usr.name.title} {usr.name.first}</h6>
            <p className="card-text user-list-p">{usr.login.username}</p> 
          </div></Link>
        </div>
          )
        )}
        </div>
      </div>
    )
  }
}

export default UserList;

