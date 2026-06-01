'use client'
import { useFormStatus } from "react-dom";
function Button(){
    const {pending} = useFormStatus();
    // pending: true/false
    return (
        <>
        <button disabled={pending}>
            {pending ? "Submitting form" : "Submit Form" }
        </button>
        </>
    )
}

export default function Form(){
    async function action(){
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        })
    }
    return (
        <>
        <form action={action}>
        Username: 
        <input type="text" name="username" id="username"
        placeholder="Enter username" />
        <br /><br />
        Password: 
        <input type="password" name="password" id="password" 
        placeholder="Enter password" />
        <br /><br />
        <Button/>
        </form>
        </>
    )
}