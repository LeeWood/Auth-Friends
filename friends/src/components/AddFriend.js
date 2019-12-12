import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../utils/api';

function AddFriend(props) {
  const [friendData, setFriendData] = useState({
    name : '',
    age : '',
    email : '' 
  });

  const handleChange = event => {
    setFriendData({
      ...friendData, [event.target.name] : event.target.value
    })
  };

  const handleSumbit = event => {
    event.preventDefault();

    api()
      .post('/api/friends', friendData)
      .then(result => {
        console.log(result.data)
      })
      .catch(error => {
        console.log(error)
      });
  }


  return(
    <form onSubmit={handleSumbit}>
      <input name='name' type='text' placeholder='name' value={friendData.name} onChange={handleChange}/>
      <input name='age' type='text' placeholder='age' value={friendData.age} onChange={handleChange} />
      <input name='email' type='email' placeholder='email' value={friendData.email} onChange={handleChange} />
      <button type='submit'>Add Friend</button>
    </form>
  )
}

export default AddFriend;