import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Auth Friends</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/friendlist'>Friend List</Link>
        <Link to='/logout'>Logout</Link>
      </nav>

      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/friendlist' component={FriendList} />
      <PrivateRoute exact path='/logout' component={Logout} />
    </div>
  )
};

export default withRouter(App);
