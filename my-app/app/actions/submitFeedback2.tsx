'use server'
import pool from "../lib/db";

import { revalidatePath } from "next/cache";

async function submitFeedbackForm(formData: FormData){
    const username = formData.get("username");
    const email = formData.get("email");
    const feedback_msg = formData.get("feedback");

    await pool.query(
        `INSERT INTO feedback
        (username, email, feedback_msg)
        VALUES('${username}', '${email}', '${feedback_msg}')`
    );

    revalidatePath('/feedback');

}

export async function getAllFeedbacks(){
    // read the data from database
    const result = await pool.query(`
        SELECT *
        FROM feedback
        ORDER BY created_at DESC
    `);
    return result.rows;
}
export default submitFeedbackForm;
