import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function FriendList(props) {

  const [list, setList] = useState([]);
  
  useEffect(() => {
    api().get("/api/friends")
      .then(results => {
        console.log("friend results", results.data);
        setList([results.data]);
        console.log(list);
      })
      .catch(err => {
        console.log(err)
      });
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