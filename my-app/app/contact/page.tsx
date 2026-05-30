// define the contactPage route
import submitContactForm from "../actions/submitContactForm";
import { getDetails } from "../actions/submitContactForm";
async function ContactForm(){
    // calling server function getDetails()
    const users = await getDetails();

    return (
        <>
        <h1>Contact Form</h1>
        <form action={submitContactForm}>
            <label htmlFor="fullName">FullName</label>
            <input type="text" name="fullName" id="fullName"
            placeholder="Enter your full name" />
            <br /><br />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" 
            placeholder="email" /> <br /><br />

            <textarea name="message" id="message"
            rows={4} cols={40}></textarea>

            <br /><br />
            <button type="submit">Send Message</button>
        </form>
        <hr />
        <h1>User Details</h1>
        {
            users.map((user: any, index: number) => (
                <div key={index}>
                    <h3>{user.fullName}</h3>
                    <p>{user.email}</p>
                    <p>{user.message}</p>
                    <hr />
                </div>
            ))
        }
        </>
    )
}

export default ContactForm;