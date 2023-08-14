import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookCard } from '../components/Bookcard';


function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('/api/books')
      .then(res => {
        setUsers([...res.data.books]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleUserClick = user => {
    setSelectedUser(user);
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <div key={user.id} onClick={() => handleUserClick(user)}>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <div>
              <p>Added On: {user.createdAt}</p>
            </div>
          </div>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h2>{selectedUser.username}'s Favorite Books</h2>
          <BookCard books={selectedUser.favoriteBooks} />
        </div>
      )}
    </div>
  );
}

export default UserList;
