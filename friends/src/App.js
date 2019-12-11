import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Auth Friends</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Log In</Link>
      </nav>

      <Route exact path="/login" component={Login} />
    </div>
  )
};

export default withRouter(App);
