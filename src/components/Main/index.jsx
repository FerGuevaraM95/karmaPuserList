import React, { Component } from 'react';
import axios from 'axios';

import UserList from '../UserList'
import './main.css';

class Main extends Component {
  constructor() {
    super();

  }

  render () {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}

export default Main;