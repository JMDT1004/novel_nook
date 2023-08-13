import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
    const [books, setBooks] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');

    useEffect(() => {
        axios.get('/api/books')
            .then(res => {
                setBooks([...res.data.books]);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleUserClick = user => {
        setSelectedUser(user);
    }

    return (
        <>
            <h2>User List</h2>
            <ul>
                {books.map(user => (
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
                    <ul>
                        {selectedUser.favoriteBooks.map((book, index) => (
                            <li key={index}>{book}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default UserList;
