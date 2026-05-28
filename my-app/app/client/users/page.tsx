// client side rendering
'use client'
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation';
type User = {
    id: number,
    firstName: string
}
function UsersPageInfo(){
    // const params = useParams();
    // const id = params.id;
    const [users, setUsers] = useState<User[]>([]);
    async function fetchData(){
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Users: </h1>
              {
                users.map((user) => (
                    <div key={user.id}>
                        <Link href={`/client/users/${user.id}`}>
                            {user.firstName}
                        </Link>
                    </div>
                ))
            }
        </>
    )
}
export default UsersPageInfo;