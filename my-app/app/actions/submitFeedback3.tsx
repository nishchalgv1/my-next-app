'use server'
import pool from '../lib/db'
import { revalidatePath } from 'next/cache';

async function submitFeedbackForm3(formData:FormData){
    console.log("feedback form: ", formData);

    // extract username, email, feedback
    const username = formData.get("username");
    const email = formData.get("email");
    const feedback_msg = formData.get("feedback");

    // store these details in db
    await pool.query(`
        INSERT INTO feedback(username, email, feedback_msg)
        VALUES ('${username}', '${email}', '${feedback_msg}')
        `);
    console.log("data save");
    // revalidate the path
    revalidatePath('/feedback');

}

export async function getAllFeedbacks(){
    // fetch the data from the database
    const data = await pool.query(`SELECT * FROM feedback`);
    
    console.log("Data: ", data);
    return data.rows;
}

export default submitFeedbackForm3;

// feedbacks
// create table customerReview
// username, email, 