import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookCard } from '../components/Bookcard';


function Dashboard(props) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(props)

  // useEffect(() => {
  //   axios.get('/api/favorites')
  //     .then(res => {
  //       setUsers([...res.data.books]);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  const handleUserClick = user => {
    setSelectedUser(user);
  }
  return (
    <div>
      <h2>Welcome, {props.state.user?.username}!</h2>

      
    </div>
  );
}

export default Dashboard;
