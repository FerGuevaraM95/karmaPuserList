import React, { Component } from 'react';
import axios from 'axios';
import './main.css';

class Main extends Component {
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
        <h1>Hola Mundo</h1>
        <ul>
          {this.state.results.map(result =>
            <li key={result.email}>{result.email} {result.login.username}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Main;