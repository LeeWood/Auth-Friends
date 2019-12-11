import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function FriendList(props) {

  const [list, setList] = useState([]);
  
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
      <h3>My Friend List</h3>
      <div>
        {list.map(friend => (
         <div key={friend.id}>{friend.name}</div>
        ))}
      </div>
    </>
  )
}

export default FriendList;