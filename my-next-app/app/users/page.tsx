import React from 'react'
import Button from '../components/Button/Button'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next : { revalidate : 10 } }
    );
    const users: User[] = await res.json();

    return (
    <>
        <h1>Users</h1>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        <Button />
    </>
    )
}

export default UsersPage
