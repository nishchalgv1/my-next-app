'use client'
// adding this line will treat it as a
// client component
import Link from 'next/link';

import {useState, useEffect} from 'react';

type User = {
    id: number,
    firstName: string,
    lastName: string,
}

function UsersPage(){
    const [users, setUsers] = useState<User[]>([]);
    async function fetchUsers(){
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <>
        <h1>Users: </h1>
        {
            users.map((user) => (
                <div key={user.id}>
                    {/* <h2>{user.firstName}</h2> */}
                    <Link href={`/client/users/${user.id}`}>
                    {user.firstName}
                    </Link>
                </div>
            ))
        }
        </>
    )
}

export default UsersPage;