import React, { Component } from 'react'
import axios from 'axios';

// import User from '../User'
import './user-list.css'

class UserList extends Component {
  constructor() {
    super();

    this.state = {
      results: []
    };

    axios.get("https://randomuser.me/api/?results=50")
    .then(response => {
      this.setState({
        results: response.data.results
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.results.map(result =>
            <li key={result.email}>{result.email} {result.login.username}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default UserList
