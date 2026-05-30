// define the server action for feedback form
import submitFeedbackForm from "../actions/submitFeedbackForm";
function FeedbackForm(){
    return (
        <>
        <h1>User Feedback Form</h1>
        <form action={submitFeedbackForm}>
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

            <button type="submit">Submit Feedback</button>

        </form>
        </>
    )
}
export default FeedbackForm;