'use client'
import { useParams } from "next/navigation"

function UserId(){
    const params = useParams();
    const userId = Number(params.id);
    console.log("id: ", userId);
    console.log(typeof userId);
    return (
        <>
        <h1>User ID is: {userId}</h1>
        </>
    )
}
export default UserId;