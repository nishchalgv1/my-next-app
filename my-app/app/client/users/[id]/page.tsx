// client side rendering
'use client'
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation';
type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}
function UsersPage(){
    const params = useParams();
    const id = Number(params.id);
    const [user, setUser] = useState<User | null>(null);
    async function fetchData(){
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>
                {user?.firstName} {user?.lastName}
            </h1>
            <p>{user?.email}</p>
        </>
    )
}
export default UsersPage;