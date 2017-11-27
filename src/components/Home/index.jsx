import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserList from '../UserList'
import User from '../User'


const Home = () => (
  <Switch>
    <Route exact path='/' component={UserList}/>
    <Route path='/:key' component={User}/>
  </Switch>
)


export default Home