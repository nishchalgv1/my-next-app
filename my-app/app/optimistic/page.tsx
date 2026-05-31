'use client'
import { startTransition, useOptimistic } from "react";

const comments = [
    "Hi there",
    "How are you?"
];


export default function UserComments(){
    const [optimisticComments, addOptimistic] = useOptimistic(comments, 
        (state:string[], newValue:string) => {
        return [...state, newValue];
    });
    function handleClick(){
        //const comment:string[] = ["I am learning useOptimistic"
        startTransition(()=>{
            addOptimistic("this is a comment");
        });
    }
    
    return (
        <>
        <h1>User Comments: </h1>
        <button onClick={handleClick}>Add Comment</button>
        {
            optimisticComments.map((comment) => (
                <div key={comment}>
                    {comment}
                </div>
            ))
        }
        </>
    )
}