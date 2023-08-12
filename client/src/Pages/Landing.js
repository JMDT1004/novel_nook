import { useEffect, useState } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h3>{user.username}</h3>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserList