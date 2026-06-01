// define the server action for feedback form
import submitFeedbackForm3 from "../actions/submitFeedback3";
import { getAllFeedbacks } from "../actions/submitFeedback3";
import SubmitButton from "../components/SubmitButton";

async function FeedbackForm(){
    const feedbacks = await getAllFeedbacks();
    console.log("feedbacks ", feedbacks);
    return (
        <>
        <h1>User Feedback Form</h1>
        <form action={submitFeedbackForm3}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" 
            placeholder="Enter your username" />
            <br /><br />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" 
            placeholder="Enter your email" />
            <br /><br />

            <label htmlFor="feedback">Feedback: </label>
            <textarea name="feedback" id="feedback" 
            placeholder="Write your feedback" 
            rows={4} cols={40}>
            </textarea>
            <br /><br />

            <SubmitButton/>

        </form>
        <hr />
        {
            
            feedbacks.map((feedback:any, index:number) => (
                <div key={index}>
                    <h1>{feedback.username}</h1>
                    <h3>{feedback.email}</h3>
                    <p>{feedback.feedback_msg}</p>
                    <hr />
                </div>
            ))
        }
        </>
    )
}
export default FeedbackForm;