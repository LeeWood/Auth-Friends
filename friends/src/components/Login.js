import React, { useState } from 'react';

function Login(props) {

  const [data, setData] = useState({
    username : '',
    password : ''
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();

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