import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

function FriendList(props) {

  const [list, setList] = useState([]);
  //TODO set up loading message for when api loads

  useEffect(() => {
    const fetchFriends = () => {
      api().get("/api/friends")
        .then(results => {
          console.log("friend results", results.data);
          setList(results.data);
        })
        .catch(err => {
          console.log(err)
        });
    };
    fetchFriends();
  },[])

  return (
    <>
      <Link to='/newfriend'><button>Add New Friend</button></Link>
      <h3>My Friend List</h3>
      <div>
        {list.map(friend => (
         <div className='frendCard' key={friend.id}>
           <p>Name: {friend.name}</p>
           <p>Age: {friend.age}</p>
           <p>Email: {friend.email}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default FriendList;