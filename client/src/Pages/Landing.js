import { useEffect, useState } from 'react';

function UserList() {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = usestate('')


    useEffect(() => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error))
    }, [])

    const handleUserClick = user => {
        setSelectedUser(user)
    }

    return (
        <>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => handleUserClick(user)}>
                        <h3>{user.username}</h3>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>

            {selectedUser && (
                <div>
                    <h2>{selectedUser.username}'s Favorite Books</h2>
                    <ul>
                        {selectedUser.favoriteBooks.map((book,index => (
                            <li key={index}>{book}</li>
                        )))}
                    </ul>
            
                </div>
            )}
        </>
    );
}

export default UserList