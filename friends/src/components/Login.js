import React, { useState } from 'react';
import api from '../utils/api';


function Login(props) {

  const [data, setData] = useState({
    username : '',
    password : ''
  });

//TODO - set up an isLoading spinner or text.

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();

    api()
      .post("/api/login", data)
      .then(results => {
        console.log(results);
        localStorage.setItem("token", results.data.payload)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type='text' name='username' placeholder='username' onChange={handleChange} />
      <input type='password' name='password' placeholder='password' onChange={handleChange} />

      <button type='submit'>Log In!</button>
    </form>
  )
};

export default Login;